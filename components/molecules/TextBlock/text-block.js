// ===================================================|
// Molecules: TEXT BLOCK

import Heading from '@/components/atoms/Heading';
import Paragraph from '@/components/atoms/Paragraph';

export default {
  components: {
    Heading,
    Paragraph
  },

  props: {
    data: {
      type: Object,
      required: true
    }
  }
};
