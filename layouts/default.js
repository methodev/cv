// ===================================================|
// Layouts: DEFAULT

import { mapState } from 'vuex';
import { filterLocales } from '@/services/FilterService';

// Components
import LangSwitcher from '@/components/atoms/LangSwitcher';
import DocBtn from '@/components/atoms/DocBtn';
import Header from '@/components/organisms/Header';
import Footer from '@/node_modules/mm-atomic-pack/components/organisms/Footer';

export default {
  components: { LangSwitcher, DocBtn, Header, Footer },

  computed: {
    ...mapState({
      locales: ({ contentful }) => contentful.locales,
      pdf: ({ contentful }) => contentful.data.pdfVersion.fields.file.url
    }),
    languages() {
      return filterLocales(this.locales, this.$i18n.locale);
    }
  }
};
