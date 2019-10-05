// ===================================================|
// Atoms: CIRCLE BUTTON

export default {
  props: {
    link: String,
    tooltip: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: 'blue',
      validator(value) {
        return ['blue', 'red'].includes(value);
      }
    }
  }
};
