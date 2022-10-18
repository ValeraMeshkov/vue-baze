<template>
    <canvas id="canvas1"></canvas>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions } from 'vuex';

export default {
  name: 'AnimateFirst',
  components: {
  },
  data() {
    return {
      canvas: null,
      ctx: null,
      mouse: null,
      colorLines: {
        hue: 186,
        saturation: 56,
        luminosity: 45,
        alpha: 1,
      },
      heightHeader: 80,
    };
  },
  mounted() {
    this.startCanvas();
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
    closeCanvas() {
      this.canvas = null;
      this.ctx = null;
      this.clearAllCircles();
      this.clearAllLines();
    },
    updateCanvas() {
      this.closeCanvas();
      this.$router.go(0);
    },
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
    loadCanvas() {
      this.canvas = document.querySelector('#canvas1');
      this.canvas.width = this.WINDOW_WIDTH;
      this.canvas.height = this.WINDOW_HEIGHT - this.heightHeader;
    },

    createCircles() {
      for (let i = 0; i < this.circlesCount; i++) {
        this.addCircle({ w: this.canvas.width, h: this.canvas.height });
      }
    },
    createLines(i, j) { this.addLine({ i, j }); },

    createMouse() {
      this.mouse = {
        r: 0.5, x: this.MOUSE_COORDINATES.x, y: this.MOUSE_COORDINATES.y + 100, color: 'white',
      };
    },
    init() {
      this.ctx = this.canvas.getContext('2d');
      this.drawAllComponents();
    },
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
    drawCircle(item) {
      this.ctx.beginPath();
      this.ctx.arc(item.x, item.y, item.radius, 0, 2 * Math.PI, false);
      this.ctx.fillStyle = this.localStorageApp.styleWebsiteColor
        ? item.color : '#2c3e50';
      this.ctx.fill();
      this.circleUpdate(item);
    },
    drawLine(item) {
      this.ctx.beginPath();
      let getD;

      function disance(p1, p2) {
        return Math.sqrt(((p2.x - p1.x) ** 2) + ((p2.y - p1.y) ** 2));
      }

      if (item.circleI === this.circles.length) {
        this.ctx.moveTo(this.MOUSE_COORDINATES.x, this.MOUSE_COORDINATES.y - this.heightHeader);
        this.ctx.lineTo(this.circles[item.circleJ].x, this.circles[item.circleJ].y);
        getD = disance(this.MOUSE_COORDINATES, this.circles[item.circleJ]);
      } else {
        this.ctx.moveTo(this.circles[item.circleI].x, this.circles[item.circleI].y);
        this.ctx.lineTo(this.circles[item.circleJ].x, this.circles[item.circleJ].y);
        getD = disance(this.circles[item.circleI], this.circles[item.circleJ]);
      }

      this.ctx.strokeStyle = `hsla(${this.colorLines.hue}, 100%, 50%,${1 - getD / 200})`;
      this.ctx.lineWidth = 2;
      this.ctx.fill();
      this.ctx.stroke();
    },
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
#canvas1 {
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 10px;
}

</style>
