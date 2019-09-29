// ===================================================|
// Molecules: TAG GROUP

import Heading from '@/node_modules/mm-atomic-pack/components/atoms/Heading';
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
