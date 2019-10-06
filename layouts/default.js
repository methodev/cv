// ===================================================|
// Layouts: DEFAULT

import { mapState } from 'vuex';
import { filterLocales } from '@/node_modules/cv-assets/services/FilterService';

// Components
import LangSwitcher from '@/components/atoms/LangSwitcher';
import CircleButton from '@/components/atoms/CircleButton';
import Header from '@/components/organisms/Header';
import Footer from '@/node_modules/mm-atomic-pack/components/organisms/Footer';

// Graphics
import FileSVG from '@/node_modules/cv-assets/assets/graphics/pdf.svg';

export default {
  components: { LangSwitcher, CircleButton, Header, Footer, FileSVG },

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
