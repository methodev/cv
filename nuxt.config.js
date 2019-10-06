import meta from 'dev-assets/configs/nuxt/meta';
import splashscreens from 'dev-assets/configs/nuxt/splashscreens';
import buildModules from 'dev-assets/configs/nuxt/buildModules';
import modules from 'dev-assets/configs/nuxt/modules';
import build from 'dev-assets/configs/nuxt/build';
import banner from 'dev-assets/configs/nuxt/banner';
import plugins from 'cv-assets/configs/nuxt/plugins';
import i18nConfig from 'cv-assets/configs/nuxt/modules/i18n';
import css from 'mm-atomic-pack/configs/nuxt/css';
import styleResources from 'mm-atomic-pack/configs/nuxt/styleResources';
import { author, description, homepage, title, version } from './package.json';
import { googleAnalyticsCode } from './site.json';

export default {
  mode: 'spa',

  server: {
    port: 9001
  },

  /*
   ** Headers of the page
   */
  head: {
    title,
    meta: [...meta({ title, description, homepage })],
    link: [...splashscreens],
    bodyAttrs: {
      ontouchstart: ''
    }
  },

  /*
   ** Customize the progress-bar
   */
  loading: false,
  loadingIndicator: {
    name: 'fading-circle',
    color: '#0d3ea0',
    background: 'white'
  },

  /*
   ** Style resources
   */
  styleResources,

  /*
   ** Global CSS
   */
  css: [...css, '@node_modules/cv-assets/assets/styles/global/tooltip.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [...plugins],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [...buildModules()],

  /*
   ** Nuxt.js modules
   */
  modules: [
    ['nuxt-svg-loader'],
    ['@nuxtjs/dotenv'],
    ['nuxt-i18n', i18nConfig],
    ...modules({
      googleAnalyticsCode,
      title,
      author,
      description,
      twitter: '@martinmetodiev'
    })
  ],

  /*
   ** Build configuration
   */
  build: build({ banner: banner({ title, homepage, author, version }) })
};
