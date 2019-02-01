//====================================================|
// // SERVICES: CONTENTFUL


//--------------------------| Import

// Libraries
import { createClient } from 'contentful';
import { parse } from 'flatted/esm';


//--------------------------| Define async forEach

/* eslint-disable no-await-in-loop */
async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index += 1) {
    await callback(array[index], index, array);
  }
}
/* eslint-enable no-await-in-loop */


//--------------------------| Request content

const requestContent = async (contentfulAccessToken, contentfulSpace) => {
  const client = createClient({
    environment: process.env.NODE_ENV === 'development' ? 'master' : 'production',
    accessToken: contentfulAccessToken,
    space: contentfulSpace,
    resolveLinks: true
  });

  const storageContent = localStorage.getItem('cv_content');

  try {
    const locales = await client.getLocales();
    const content = {};

    await asyncForEach(locales.items, async (lang) => {
      content[lang.code] = await client.getEntries({ locale: lang.code });
    });

    return Promise.resolve(content);
  }
  catch (error) {
    if (storageContent) {
      return Promise.resolve(parse(storageContent));
    }

    return Promise.reject(new Error('No content found.'));
  }
};


//--------------------------| Export

export default requestContent;
