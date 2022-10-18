<template>
  <div id="header">

    <router-link to="/">{{t('summary')}}</router-link>
    <router-link to="/info">{{t('info')}}</router-link>
    <router-link to="/canvas1">{{t('canvas')}}</router-link>

    <b-form-checkbox size="lg" v-model="switchChecked" switch>
    </b-form-checkbox>

    <select class="customSelect" v-model="selectedLanguage">
      <option v-for="(language,index) in languages" :key="index" :value="language.value">
        {{ language.text }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import locales from '@/locales/header';

export default {
  name: 'Header',
  data() {
    return {
      languages: [
        { text: 'English', value: 'en' },
        { text: 'Русский', value: 'ru' },
      ],
    };
  },
  computed: {
    ...mapState({
      localStorageApp: (state) => state.localStorageApp,
    }),
    selectedLanguage: {
      get() {
        return this.localStorageApp.lang;
      },
      set(val) {
        this.localStorageApp.lang = val;
        this.changeLocalStorageApp(this.localStorageApp);
      },
    },
    switchChecked: {
      get() {
        if (this.localStorageApp.styleWebsiteColor) {
          document.querySelector('#app').classList.add('appStyleWebsiteColorDark');
          document.querySelector('#app').classList.remove('appStyleWebsiteColorLight');
        } else {
          document.querySelector('#app').classList.add('appStyleWebsiteColorLight');
          document.querySelector('#app').classList.remove('appStyleWebsiteColorDark');
        }
        return this.localStorageApp.styleWebsiteColor;
      },
      set(val) {
        this.localStorageApp.styleWebsiteColor = val;
        this.changeLocalStorageApp(this.localStorageApp);
      },
    },
  },
  methods: {
    ...mapActions({
      changeLocalStorageApp: 'changeLocalStorageApp',
    }),
    t(value) {
      return locales[value][this.localStorageApp.lang];
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/app.scss";

#header {
  background: $styleColor;
  position: fixed;
  padding: 0 80px;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: $header-height;
  z-index: 100;

  a {
    font-weight: bold;
    margin: 10px;
    color: $dark;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  .customSelect {
    @include select;
    margin-top: 12px;
  }

  .form-check{
    padding-left: 35px;
  }

  .form-check-input, .form-check-input:checked{
    margin-top: 8px;
    cursor: pointer !important;
    border: none !important;
    box-shadow: none !important;
    padding: 0;
    transform: translate(20px);
  }

  .form-check-input:checked {
    background-color: $dark !important;
  }
}

</style>
