// ===================================================|
// Atoms: META

// Components
import Icon from '@/components/atoms/Icon';

export default {
  components: {
    Icon
  },

  props: {
    type: {
      type: String,
      required: true
    },
    icon: {
      type: Object,
      required: true
    },
    tooltip: {
      type: String
    },
    addon: {
      type: String
    }
  }
};
