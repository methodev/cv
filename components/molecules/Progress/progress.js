// ===================================================|
// Molecules: PROGRESS

import Heading from '@/components/atoms/Heading';
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
