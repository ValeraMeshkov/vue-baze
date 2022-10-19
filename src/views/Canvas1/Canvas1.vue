<template>
    <canvas id="canvas1" @click="showFullPicker = !showFullPicker"></canvas>

    <transition name="fade">
      <color-picker
        v-if="showFullPicker"
        class="colorPicker"
        v-bind="colorLines"
        @input="colorPickInput"
        initially-collapsed="false">
      </color-picker>
    </transition>

</template>

<script>
// @ is an alias to /src
import { mapState, mapActions } from 'vuex';
import ColorPicker from '@radial-color-picker/vue-color-picker';

export default {
  name: 'AnimateFirst',
  components: {
    ColorPicker,
  },
  data() {
    return {
      canvas: null,
      ctx: null,
      mouse: null,
      colorLines: {
        hue: 0,
        saturation: 56,
        luminosity: 45,
        alpha: 1,
      },
      heightHeader: 80,
      showFullPicker: true,
      colorPickerTimer: null,
    };
  },
  mounted() {
    this.startCanvas();
    this.colorPickInputTimer();
  },
  unmounted() {
    this.closeCanvas();
  },
  computed: {
    ...mapState({
      WINDOW_WIDTH: (state) => state.WINDOW_WIDTH,
      WINDOW_HEIGHT: (state) => state.WINDOW_HEIGHT,
      MOUSE_COORDINATES: (state) => state.MOUSE_COORDINATES,
      styleWebsiteColor: (state) => state.styleWebsiteColor,
      circlesCount: (state) => state.canvas1.circlesCount,
      circles: (state) => state.canvas1.circles,
      lines: (state) => state.canvas1.lines,
      localStorageApp: (state) => state.localStorageApp,
    }),
  },

  methods: {
    ...mapActions('canvas1', ['addCircle', 'addLine', 'clearAllCircles', 'clearAllLines']),
    /**
     * таймер который меняет цвет линий в канвасе
     */
    colorPickInputTimer() {
      this.colorPickerTimer = setInterval(() => {
        this.colorLines.hue >= 360 ? this.colorLines.hue = 0 : this.colorLines.hue += 0.1;
      }, 10);
    },
    /**
     * изменение цвета линий, также прерывает действие таймера
     */
    colorPickInput(hue) {
      clearInterval(this.colorPickerTimer);
      this.colorLines.hue = hue;
    },
    /**
     * обнуление канваса
     */
    closeCanvas() {
      this.canvas = null;
      this.ctx = null;
      this.clearAllCircles();
      this.clearAllLines();
    },
    /**
     * Обновление канваса
     */
    updateCanvas() {
      this.closeCanvas();
      this.$router.go(0);
    },
    /**
     * запуск канваса
     */
    startCanvas() {
      this.loadCanvas();

      this.createCircles();

      for (let i = 0; i < this.circles.length - 1; i++) {
        for (let j = i + 1; j < this.circles.length; j++) {
          this.createLines(i, j);
        }
      }
      this.createMouse();
      for (let i = 0; i < this.circles.length; i++) {
        this.createLines(this.circles.length, i);
      }
      this.init();
    },
    /**
     * загрузка канваса
     */
    loadCanvas() {
      this.canvas = document.querySelector('#canvas1');
      this.canvas.width = this.WINDOW_WIDTH;
      this.canvas.height = this.WINDOW_HEIGHT - this.heightHeader;
    },
    /**
     * создание точек
     */
    createCircles() {
      for (let i = 0; i < this.circlesCount; i++) {
        this.addCircle({ w: this.canvas.width, h: this.canvas.height });
      }
    },
    /**
     * создание линий
     */
    createLines(i, j) { this.addLine({ i, j }); },

    /**
     * создание точки для мыши
     */
    createMouse() {
      this.mouse = {
        r: 1.5, x: this.MOUSE_COORDINATES.x, y: this.MOUSE_COORDINATES.y + 100, color: 'white',
      };
    },
    /**
     * инициализация приложения
     */
    init() {
      this.ctx = this.canvas.getContext('2d');
      this.drawAllComponents();
    },
    /**
     * отрисовка всех компонентов
     */
    drawAllComponents() {
      if (this.ctx === null) {
        window.cancelAnimationFrame(this.drawAllComponents.bind(this));
        return;
      }

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      this.circles.forEach((item) => {
        this.drawCircle(item);
      });

      this.lines.forEach((item) => {
        this.drawLine(item);
      });

      this.drawMouse();
      window.requestAnimationFrame(this.drawAllComponents.bind(this));
    },
    /**
     * отрисовка точки
     */
    drawCircle(item) {
      this.ctx.beginPath();
      this.ctx.arc(item.x, item.y, item.radius, 0, 2 * Math.PI, false);
      this.ctx.fillStyle = this.localStorageApp.styleWebsiteColor
        ? item.color : '#2c3e50';
      this.ctx.fill();
      this.circleUpdate(item);
    },
    /**
     * отрисовка линии
     */
    drawLine(item) {
      this.ctx.beginPath();
      let getD;

      function disance(p1, p2) {
        return Math.sqrt(((p2.x - p1.x) ** 2) + ((p2.y - p1.y) ** 2));
      }

      if (item.circleI === this.circles.length) {
        getD = disance(this.MOUSE_COORDINATES, this.circles[item.circleJ]);
        if (getD > 250) return;
        this.ctx.moveTo(this.MOUSE_COORDINATES.x, this.MOUSE_COORDINATES.y - this.heightHeader);
        this.ctx.lineTo(this.circles[item.circleJ].x, this.circles[item.circleJ].y);
      } else {
        getD = disance(this.circles[item.circleI], this.circles[item.circleJ]);
        if (getD > 250) return;
        this.ctx.moveTo(this.circles[item.circleI].x, this.circles[item.circleI].y);
        this.ctx.lineTo(this.circles[item.circleJ].x, this.circles[item.circleJ].y);
      }

      this.ctx.strokeStyle = `hsla(${this.colorLines.hue}, 100%, 50%,${1 - getD / 200})`;
      this.ctx.lineWidth = 2;
      this.ctx.fill();
      this.ctx.stroke();
    },
    /**
     * отрисовка точки мыши
     */
    drawMouse() {
      this.ctx.beginPath();
      this.ctx.arc(
        this.mouse.x,
        this.mouse.y - this.heightHeader,
        this.mouse.r, 0, 2 * Math.PI,
        false,
      );
      this.ctx.fillStyle = this.color;
      this.ctx.fill();
    },
    /**
     * обновление направления движения точки
     */
    circleUpdate(item) {
      if (item.x + item.radius >= this.canvas.width || item.x - item.radius <= 0) {
        item.dx = -item.dx;
      }
      if (item.y + item.radius >= this.canvas.height || item.y - item.radius <= 0) {
        item.dy = -item.dy;
      }
      item.x += item.dx;
      item.y += item.dy;
    },
  },
  watch: {
    WINDOW_WIDTH(e) {
      this.canvas.width = e;
      this.updateCanvas();
    },
    WINDOW_HEIGHT(e) {
      this.canvas.height = e;
    },
    MOUSE_COORDINATES(e) {
      this.mouse.x = e.x;
      this.mouse.y = e.y;
    },
  },
};
</script>

<style lang="scss">
@import '~@radial-color-picker/vue-color-picker/dist/vue-color-picker.min.css';

#canvas1 {
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 10px;
}
.colorPicker{
  position: fixed;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
