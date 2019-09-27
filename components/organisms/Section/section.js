// ===================================================|
// Organisms: SECTION

// Components
import Heading from '@/components/atoms/Heading';

export default {
  components: {
    Heading
  },

  props: {
    heading: {
      type: String,
      required: true
    },
    tooltip: {
      type: String
    }
  }
};
