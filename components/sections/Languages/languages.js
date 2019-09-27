// ===================================================|
// Sections: LANGUAGES

// Components
import Progress from '@/components/molecules/Progress';

// Mixins
import sectionMixin from '@/components/sections/section-mixin';

export default {
  mixins: [sectionMixin],

  data() {
    return {
      component: Progress
    };
  },

  computed: {
    items() {
      return this.content.items.map(({ fields }) => {
        const { name, level } = fields;
        let label;

        switch (true) {
          case level <= 25:
            label = this.$t('langPoor');
            break;
          case level > 25 && level <= 80:
            label = this.$t('langFair');
            break;
          case level > 80 && level <= 99:
            label = this.$t('langFluent');
            break;
          default:
            label = this.$t('langNative');
        }

        return {
          name,
          level,
          label
        };
      });
    }
  }
};
