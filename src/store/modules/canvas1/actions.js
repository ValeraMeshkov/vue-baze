import { getRandomInt } from '@/helpers';

export default {
  /**
   * Добавление точки с координатами и направлением движения
   */
  addCircle(context, obj) {
    const radius = getRandomInt(1, 5);
    const speed = 3;
    context.commit('setAddCricle', {
      radius,
      x: Math.random() * (obj.w - radius * 2) + radius,
      y: Math.random() * (obj.h - radius * 2) + radius,
      dx: (Math.random() - 0.5) * speed,
      dy: (Math.random() - 0.5) * speed,
      color: 'white',
    });
  },
  /**
   * Добавление линии по двум точкам
   */
  addLine(context, obj) {
    context.commit('setAddLine', {
      circleI: obj.i,
      circleJ: obj.j,
    });
  },
  /**
   * Очистка всех точек
   */
  clearAllCircles(context) {
    context.commit('setClearAllCircles');
  },
  /**
   * Очистка всех линий
   */
  clearAllLines(context) {
    context.commit('setClearAllLines');
  },
};
