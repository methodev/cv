// ===================================================|
// Sections: STRENGTHS

// Components
import TagGroup from '@/components/molecules/TagGroup';

// Mixins
import sectionMixin from '@/components/sections/section-mixin';

export default {
  mixins: [sectionMixin],

  data() {
    return {
      component: TagGroup
    };
  },

  computed: {
    items() {
      return [
        {
          items: this.content.items
        }
      ];
    }
  }
};
