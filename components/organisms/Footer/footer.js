// ===================================================|
// Organisms: FOOTER

import { mapState } from 'vuex';
import { homepage } from '@/package';

// Components
import Copyright from '@/node_modules/mm-atomic-pack/components/atoms/Copyright';
import DocBtn from '@/components/atoms/DocBtn';

export default {
  components: { Copyright, DocBtn },

  computed: {
    ...mapState({
      pdf: ({ contentful }) => contentful.data.pdfVersion.fields.file.url
    }),
    domain() {
      return homepage.replace('http://', '');
    }
  }
};
