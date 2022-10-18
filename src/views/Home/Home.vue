<template>

  <div v-if="WINDOW_WIDTH > 950" id="home" class="home">
    <div class="left">
      <div class="name">{{t('FIO')}}</div>

      <div class="title">{{t('frontendDeveloper')}}</div>

      <div class="title">{{t('workExperience')}}</div>

      <div class="info">
        <li class="description">Verv: Август 2017 — август 2018</li>
        <li class="description">BSLab: Сентябрь 2018 — январь 2022</li>
      </div>

      <div class="title">{{t('languageSkills')}}</div>

      <div class="info">
        <li class="description">{{t('languageSkillsRu')}}</li>
        <li class="description">{{t('languageSkillsEn')}}</li>
      </div>

      <div class="title">{{t('AboutMe')}}</div>

      <div class="info">
        <div class="title">{{t('AboutMeInfo')}}</div>
        <li class="description">{{t('AboutMeInfoOne')}}</li>
        <li class="description">{{t('AboutMeInfoTwo')}}</li>
        <li class="description">{{t('AboutMeInfoThree')}}</li>

        <div class="title">{{t('AboutMeInfoLast')}}</div>
      </div>
    </div>

    <div class="right">
      <img src="@/assets/person.png" alt="">

      <div class="title">{{t('contacts')}}</div>

      <div class="info">
        <li class="description">{{t('contactsPhone')}}:</li>
        <div class="description">+375 (29) 275-27-34</div>
        <li class="description">{{t('contactsEmail')}}:</li>
        <div class="description">valeriy.meshkov1995@gmail.com</div>
        <li class="description">{{t('contactsTG')}}: VMDreamTeam</li>
      </div>

      <div class="title">{{t('keySkills')}}</div>

      <div class="info">
        <li class="description">Vue.js, Vue 3, Vuex</li>
        <li class="description">CSS3, Sass, Less</li>
        <li class="description">JavaScript</li>
        <li class="description">HTML5</li>
        <li class="description">TypeScript</li>
        <li class="description">Adobe Photoshop</li>
        <li class="description">Figma, Sketch</li>
        <li class="description">Webpack</li>
        <li class="description">Git</li>
      </div>
    </div>
  </div>

  <div v-else class="homeMobile" id="home">

      <img src="@/assets/person.png" alt="img">

      <div class="name">{{t('FIO')}}</div>

      <div class="title">{{t('frontendDeveloper')}}</div>

      <div class="title">{{t('workExperience')}}</div>

      <div class="info">
        <li class="description">Verv: Август 2017 — август 2018</li>
        <li class="description">BSLab: Сентябрь 2018 — январь 2022</li>
      </div>

      <div class="title">{{t('languageSkills')}}</div>

      <div class="info">
        <li class="description">{{t('languageSkillsRu')}}</li>
        <li class="description">{{t('languageSkillsEn')}}</li>
      </div>

      <div class="title">{{t('contacts')}}</div>

      <div class="info">
        <li class="description">{{t('contactsPhone')}}: +375 (29) 275-27-34</li>
        <li class="description">{{t('contactsEmail')}}: valeriy.meshkov1995@gmail.com</li>
        <li class="description">{{t('contactsTG')}}: VMDreamTeam</li>
      </div>

      <div class="title">{{t('keySkills')}}</div>

      <div class="info">
        <li class="description">Vue.js, Vue 3, Vuex</li>
        <li class="description">CSS3, Sass, Less</li>
        <li class="description">JavaScript</li>
        <li class="description">HTML5</li>
        <li class="description">TypeScript</li>
        <li class="description">Adobe Photoshop</li>
        <li class="description">Figma, Sketch</li>
        <li class="description">Webpack</li>
        <li class="description">Git</li>
      </div>

      <div class="title">{{t('AboutMe')}}</div>

      <div class="info">
        <div class="title">{{t('AboutMeInfo')}}</div>
        <li class="description">{{t('AboutMeInfoOne')}}</li>
        <li class="description">{{t('AboutMeInfoTwo')}}</li>
        <li class="description">{{t('AboutMeInfoThree')}}</li>

        <div class="title">{{t('AboutMeInfoLast')}}</div>
      </div>

  </div>
</template>

<script>
// @ is an alias to /src
import locales from '@/locales/home';
import { mapState } from 'vuex';

export default {
  name: 'Home',
  components: {
  },
  computed: {
    ...mapState({
      localStorageApp: (state) => state.localStorageApp,
      WINDOW_WIDTH: (state) => state.WINDOW_WIDTH,
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

.home{
  display: flex;
  justify-content: space-between;
  padding: 0 50px;

  .left, .right{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .name{
      font-size: 50px;
      margin: 40px 0;
      font-weight: bold;
    }
    .title{
      font-size: 25px;
      font-weight: bold;
      margin-top: 20px;
    }
    .info{
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
  .right {
    position: relative;
    width: 40%;
    margin-left: 40px;
    padding-left: 40px;
    min-width: 350px;
    border-left: 1px solid $styleColor;
    img {
      margin-left: auto;
      margin-bottom: 40px;
      width: 60%;
      height: auto;
      object-fit: cover;
      border-radius: 50%;
    }
    .title{
      width: 100%;
      text-align: right;
    }
    .info{
      width: 100%;
      .description{
        width: 100%;
        text-align: right !important;
        margin: 10px 20px 0 0;
      }
    }
  }
}
.homeMobile{
  display: flex;
  flex-direction: column;
  position: relative;

  .name{
    font-size: calc(100vw / 20);
    margin: 20px 0;
    font-weight: bold;
    text-align: left;
    position: relative;
  }
  .title{
    font-size: calc(100vw / 35);
    text-align: left;
    font-weight: bold;
    margin-top: 20px;
  }
  .info{
    .title{
      font-size: calc(100vw / 40);
      font-weight: bold;
      margin-top: 10px;
      text-align: left;
    }
    .description{
      margin: 10px 20px 0;
      font-size: calc(100vw / 40);
      text-align: left;
    }
  }
  img {
    position: fixed;
    top: 110px;
    right: 30px;
    margin-left: auto;
    margin-bottom: 40px;
    width: calc(100vw / 4);
    height: auto;
    object-fit: cover;
    border-radius: 50%;
  }
}
</style>
