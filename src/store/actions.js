export default {
  /**
   * Изменение ширины экрана
   */
  changeWindowWidth(context, value) {
    context.commit('setWindowWidth', value);
  },
  /**
   * Изменение высоты экрана
   */
  changeWindowHeight(context, value) {
    context.commit('setWindowHeight', value);
  },
  /**
   * Изменение координат мыши {x: 0, y: 0}
   */
  changeMouseCoordinates(context, value) {
    context.commit('setMouseCoordinates', value);
  },
  /**
   * Изменение языка ( 'en' / 'ru' )
   */
  changeLanguage(context, value) {
    context.commit('setLanguage', value);
  },
  /**
   * Изменение основного цвета на сайте
   */
  changeStyleWebsiteColor(context, value) {
    context.commit('setChangeStyleWebsiteColor', value);
  },
  /**
   * Изменение localStorage
   */
  changeLocalStorageApp(context, value) {
    localStorage.setItem('appObj', JSON.stringify(value));
    context.commit('setLocalStorageApp', value);
  },
};
