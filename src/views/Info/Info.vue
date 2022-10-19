<template>
  <div id="information">

    <div class="title">{{t('whatIDidOnPastProjects')}} ?:</div>
    <div class="info">
      <li class="description">
        {{t('workedOnProjectsFor')}}: Vue ( +Typescript, +Nuxt), React, jQuery
      </li>
      <li class="description">{{t('usedLibraries')}}: Lodash, Vuetify, Vue Material,
        Element Ui, Bootstrap-Vue, Quasar, Buefy</li>
      <li class="description">{{t('projectWithOnlineBroadcast')}}</li>
      <li class="description">{{t('neuronForFood')}}</li>
      <li class="description">{{t('differentWorks')}}</li>
      <li class="description">{{t('interfaceSupport')}}</li>
      <li class="description">{{t('architectureOfProjects')}}</li>
    </div>

    <div class="title">{{t('toolsForCreating')}}</div>
    <div class="info">
      <div class="title">Vue CLI</div>
      <li class="description">vue create my-project</li>
      <div class="title">{{t('featuresAdded')}}:</div>
      <li class="description">Router, Vuex, CSS Pre-processor, Eslint, Bootstrap</li>
      <div class="title">{{t('addedCustomMudules')}}:</div>
      <li class="description">Helpers, Locales</li>
      <div class="title">{{t('theProjectProvidedWorkWith')}}:</div>
      <li class="description">Vuex, Vue Router, Localstorage, Canvas</li>
    </div>

    <div class="title">{{t('idea')}}:</div>
    <div class="info">
      <li class="description">Vuex ( {{t('dividedIntoModules')}} )</li>
      <li class="description">Helpers ( {{t('removalOfReusedFunctions')}} )</li>
      <li class="description">Locales ( {{t('separateLocalization')}} )</li>
      <li class="description">Styles ( {{t('individualStylesForASpecificModule')}} )</li>
      <li class="description">Styles SCSS( {{t('createdReusedVariablesAndMixins')}} )</li>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import locales from '@/locales/info';
import { mapState } from 'vuex';

export default {
  name: 'Info',
  components: {
  },
  data() {
    return {
      text: {
        en: 'text',
        ru: 'текст',
      },
    };
  },
  computed: {
    ...mapState({
      localStorageApp: (state) => state.localStorageApp,
    }),
  },
  methods: {
    t(value) {
      return locales[value][this.localStorageApp.lang];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/app.scss";

#information{
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .title{
    text-align: left;
    font-size: min(calc(100vw / 35), 25px);
    font-weight: bold;
    margin-top: 20px;
  }
  .info{
    margin-left: 30px;
    .title{
      font-size: min(calc(100vw / 40), 20px);
      font-weight: bold;
      margin-top: 10px;
      text-align: left;
    }
    .description{
      margin: 10px 10px 0;
      font-size: min(calc(100vw / 40), 20px);
      text-align: left;
    }
  }
}
</style>
