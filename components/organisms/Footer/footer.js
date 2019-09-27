// ===================================================|
// Organisms: FOOTER

import { mapState } from 'vuex';

// Components
import Copyright from '@/components/atoms/Copyright';
import DocBtn from '@/components/atoms/DocBtn';

export default {
  components: { Copyright, DocBtn },

  computed: {
    ...mapState({
      pdf: ({ contentful }) => contentful.data.pdfVersion.fields.file.url
    })
  }
};
