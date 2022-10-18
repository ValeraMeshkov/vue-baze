export default {
  setAddCricle(state, value) {
    state.circles.push(value);
  },
  setAddLine(state, value) {
    state.lines.push(value);
  },
  setClearAllCircles(state) {
    state.circles = [];
  },
  setClearAllLines(state) {
    state.lines = [];
  },
};
