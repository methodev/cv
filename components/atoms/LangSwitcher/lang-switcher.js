// ===================================================|
// Atoms: LANGUAGE SWITCHER

export default {
  props: {
    languages: {
      type: Array,
      required: true
    }
  },

  methods: {
    tooltipLabel(targetLang) {
      return this.$i18n.locales.find((lang) => lang.code === targetLang).name;
    }
  }
};
