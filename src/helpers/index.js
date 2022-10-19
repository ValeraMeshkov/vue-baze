/**
 * Возвращает рандомное число. Максимум не включается, минимум включается
 */
export function getRandomInt(from, to) {
  const min = Math.ceil(from);
  const max = Math.floor(to);
  return Math.floor(Math.random() * (max - min)) + min;
}
/**
 * частый вызов функции прерывается и срабатавыет через delay
 */
export function debounce(fn, delay) {
  let timeoutID = null;
  return () => {
    clearTimeout(timeoutID);
    const args = arguments;
    const that = this;
    timeoutID = setTimeout(() => {
      fn.apply(that, args);
    }, delay);
  };
}
