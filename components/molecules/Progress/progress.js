// ===================================================|
// Molecules: PROGRESS

import Heading from '@/node_modules/mm-atomic-pack/components/atoms/Heading';
import ProgressBar from '@/components/atoms/ProgressBar';

export default {
  components: {
    Heading,
    ProgressBar
  },

  props: {
    data: {
      type: Object,
      required: true
    }
  }
};
