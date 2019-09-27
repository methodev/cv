// ===================================================|
// Atoms: DOCUMENT BUTTON

// Components
import Icon from '@/components/atoms/Icon';

// Graphics
import FileSVG from '@/assets/graphics/pdf.svg';

export default {
  components: {
    Icon
  },

  data() {
    return {
      icon: FileSVG
    };
  },

  props: {
    type: {
      type: String,
      default: 'pdf'
    },
    link: {
      type: String,
      required: true
    },
    tooltip: {
      type: String,
      required: true
    }
  }
};
