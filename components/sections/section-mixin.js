// Components
import Section from '@/components/organisms/Section';
import CircleButton from '@/components/atoms/CircleButton';

export default {
  components: {
    Section,
    CircleButton
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
