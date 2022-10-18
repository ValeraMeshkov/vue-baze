/**
 * Возвращает рандомное число. Максимум не включается, минимум включается
 */
export function getRandomInt(from, to) {
  const min = Math.ceil(from);
  const max = Math.floor(to);
  return Math.floor(Math.random() * (max - min)) + min;
}
/**
 * debounce
 */
export function debounce(fn, delay) {
  let timeoutID = null;
  return function () {
    clearTimeout(timeoutID);
    const args = arguments;
    const that = this;
    timeoutID = setTimeout(() => {
      fn.apply(that, args);
    }, delay);
  };
}
