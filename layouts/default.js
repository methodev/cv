// ===================================================|
// Layouts: DEFAULT

import { mapState } from 'vuex';
import { filterLocales } from '@/services/FilterService';

// Components
import LangSwitcher from '@/components/atoms/LangSwitcher';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';

export default {
  components: { LangSwitcher, Header, Footer },

  computed: {
    ...mapState({
      locales: ({ contentful }) => contentful.locales
    }),
    languages() {
      return filterLocales(this.locales, this.$i18n.locale);
    }
  }
};
