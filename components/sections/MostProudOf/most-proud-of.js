// ===================================================|
// Sections: MOST PROUD OF

// Components
import TextBlock from '@/components/molecules/TextBlock';

// Mixins
import sectionMixin from '@/components/sections/section-mixin';

export default {
  mixins: [sectionMixin],

  data() {
    return {
      component: TextBlock
    };
  },

  computed: {
    items() {
      return this.content.items.map(({ fields }) => {
        const { title, description } = fields;

        return {
          title,
          description
        };
      });
    }
  }
};
