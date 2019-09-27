// ===================================================|
// Molecules: ITEM

import Heading from '@/components/atoms/Heading';
import Paragraph from '@/components/atoms/Paragraph';
import DocBtn from '@/components/atoms/DocBtn';
import MetaGroup from '@/components/molecules/MetaGroup';

export default {
  components: {
    Heading,
    Paragraph,
    DocBtn,
    MetaGroup
  },

  methods: {
    headingWrapper(url) {
      return url ? 'a' : 'span';
    }
  },

  props: {
    data: {
      type: Object,
      required: true
    }
  }
};
