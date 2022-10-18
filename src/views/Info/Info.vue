<template>
  <div id="info">

    <div class="title">
      {{t('toolsForCreating')}}
    </div>
    <div class="info">
      <div class="title">Vue CLI</div>
      <li class="description">vue create my-project</li>
      <div class="title">{{t('featuresAdded')}}:</div>
      <li class="description">Babel, Router, Vuex, CSS Pre-processor, Eslint, vue 3</li>
      <div class="title">{{t('installedAdditionalModules')}}:</div>
      <li class="description">Bootstrap</li>
      <div class="title">{{t('addedCustomMudules')}}:</div>
      <li class="description">Helpers, Locales</li>
      <div class="title">{{t('theProjectProvidedWorkWith')}}:</div>
      <li class="description">Vuex, Vue Router, Localstorage</li>
    </div>

    <div class="title">
      {{t('idea')}}:
      <div class="info">
        <li class="description">Vuex ( {{t('dividedIntoModules')}} )</li>
        <li class="description">Helpers ( {{t('removalOfReusedFunctions')}} )</li>
        <li class="description">Locales (
          {{t('eachIndividualModuleHasASeparateLocalization')}} )
        </li>
        <li class="description">
          Styles ( {{t('theAbilityToTakeOutIndividualStylesForASpecificModule')}} )
        </li>
        <li class="description">Styles SCSS( {{t('createdReusedVariablesAndMixins')}} )</li>
      </div>
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

#info{
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .title{
    text-align: left;
    font-size: 25px;
    font-weight: bold;
    margin-top: 20px;
  }
  .info{
    margin-left: 30px;
    .title{
      font-size: 20px;
      font-weight: bold;
      margin-top: 10px;
      text-align: left;
    }
    .description{
      margin: 10px 20px 0;
      font-size: 20px;
      text-align: left;
    }
  }
}
</style>
