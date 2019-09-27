// ===================================================|
// Atoms: TAG

// Components
import ProgressBar from '@/components/atoms/ProgressBar';

export default {
  components: {
    ProgressBar
  },

  props: {
    data: {
      type: Object,
      required: true
    }
  },

  computed: {
    wrapper() {
      return this.data.website ? 'a' : 'span';
    }
  }
};
