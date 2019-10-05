// ===================================================|
// Molecules: ITEM

// Components
import Heading from '@/node_modules/mm-atomic-pack/components/atoms/Heading';
import Paragraph from '@/components/atoms/Paragraph';
import CircleButton from '@/components/atoms/CircleButton';
import MetaGroup from '@/components/molecules/MetaGroup';

// Graphics
import FileSVG from '@/assets/graphics/pdf.svg';

export default {
  components: {
    Heading,
    Paragraph,
    CircleButton,
    MetaGroup,
    FileSVG
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
