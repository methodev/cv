// Components
import Section from '@/components/organisms/Section';

export default {
  components: {
    Section
  },

  data() {
    return {
      component: null,
      visibleOld: null,
      titleTooltip: null
    };
  },

  props: {
    content: {
      type: Object,
      required: true
    }
  },

  computed: {
    items() {
      return this.content.items;
    },

    moreTooltip() {
      return false;
    }
  }
};
