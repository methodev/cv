import { getLocales, getContent } from '@/services/ContentfulService';
import { contentfulLayout } from '~/site.json';

export const state = () => ({
  locales: {},
  data: {},
  storage: {}
});

export const mutations = {
  SET_LOCALES(state, payload) {
    state.locales = payload;
  },

  SET_DATA(state, payload) {
    state.data = payload;
  },

  SET_STORAGE(state, { locale, data }) {
    state.storage[locale] = data;
  }
};

export const actions = {
  async fetchLocales({ commit }) {
    try {
      const response = await getLocales();

      return commit('SET_LOCALES', response.items);
    } catch (e) {
      $nuxt.error({
        statusCode: e.response.status,
        message: e.response.data.message
      });
    }
  },

  async fetchContent({ state, commit }, { locale }) {
    if (state.storage && state.storage[locale]) {
      return commit('SET_DATA', state.storage[locale]);
    }

    try {
      const response = await getContent({ locale });
      const data = response.items
        .filter((item) => item.sys.contentType.sys.id === 'cv')
        .filter((cv) => cv.fields.id === contentfulLayout)[0].fields;

      commit('SET_STORAGE', {
        locale,
        data
      });

      return commit('SET_DATA', data);
    } catch (e) {
      $nuxt.error({
        statusCode: e.response.status,
        message: e.response.data.message
      });
    }
  }
};
