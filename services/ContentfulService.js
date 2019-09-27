import apiClient from '~/node_modules/mm-atomic-pack/configs/api/contentful';

// -------------------------| Get content
export const getContent = (params) =>
  apiClient.getEntries({
    ...params
  });

// -------------------------| Get locales
export const getLocales = () => apiClient.getLocales();
