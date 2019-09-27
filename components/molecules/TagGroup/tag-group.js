// ===================================================|
// Molecules: TAG GROUP

import Heading from '@/components/atoms/Heading';
import Tag from '@/components/atoms/Tag';

export default {
  components: {
    Heading,
    Tag
  },

  props: {
    data: {
      type: Object,
      required: true
    }
  }
};
