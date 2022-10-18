<template>
  <Header/>
  <div class="wrapper">
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'App',
  components: {
    Header,
  },
  computed: {
    ...mapState({
      localStorageApp: (state) => state.localStorageApp,
      WINDOW_WIDTH: (state) => state.WINDOW_WIDTH,
      WINDOW_HEIGHT: (state) => state.WINDOW_HEIGHT,
      MOUSE_COORDINATES: (state) => state.MOUSE_COORDINATES,
    }),
  },
  methods: {
    ...mapActions({
      changeWindowWidth: 'changeWindowWidth',
      changeWindowHeight: 'changeWindowHeight',
      changeMouseCoordinates: 'changeMouseCoordinates',
      changeLocalStorageApp: 'changeLocalStorageApp',
    }),
    listenerWindowResize() {
      this.changeWindowWidth(window.innerWidth);
      this.changeWindowHeight(window.innerHeight);
      window.addEventListener(
        'resize',
        (e) => {
          this.changeWindowWidth(e.target.innerWidth);
          this.changeWindowHeight(e.target.innerHeight);
        },
        false,
      );
    },
    listenerWindowMouseCoordinates() {
      window.addEventListener(
        'mousemove',
        (e) => this.changeMouseCoordinates({ x: e.x, y: e.y }),
        false,
      );
    },
    getDataLocalStorage() {
      const local = JSON.parse(localStorage.getItem('appObj'));
      if (local === null) {
        this.changeLocalStorageApp({
          lang: 'en',
          styleWebsiteColor: false,
        });
      } else {
        this.changeLocalStorageApp(local);
      }
    },
    createChangesRoutesForGHPagesGithub() {
      const path = window.location.pathname.slice(1).split('/')[1];

      if (path !== '') {
        new Promise((resolve) => {
          localStorage.setItem('path', path);
          const data = localStorage.getItem('path');
          return data ? resolve() : '';
        })
          .then(() => {
            window.location.href = '/vue-baze/';
          });
      }

      new Promise((resolve) => {
        const pathInStorage = localStorage.getItem('path');
        return pathInStorage ? resolve(pathInStorage) : '';
      })
        .then((data) => this.$router.push(data))
        .then(() => localStorage.removeItem('path'));
    },
  },
  mounted() {
    this.createChangesRoutesForGHPagesGithub();
  },
  created() {
    this.listenerWindowResize();
    this.listenerWindowMouseCoordinates();
    this.getDataLocalStorage();
  },
};
</script>

<style lang="scss">
@import "@/styles/app.scss";

body{
  margin: 0;
  color: $dark;
}

#app {
  font-family: 'comic sans ms', Helvetica, Arial, sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.appStyleWebsiteColorLight {
  background-color: $light !important;
  color: $dark !important;
}
.appStyleWebsiteColorDark {
  background-color: $dark !important;
  color: $light !important;
}

.wrapper{
  margin-top: $header-height;
  padding: 30px;
  min-height: calc(100vh - $header-height)
}

a {
  @include a;
}
a.router-link-active{
  @include header-link-active
}

</style>
