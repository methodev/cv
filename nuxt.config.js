import meta from 'mm-atomic-pack/configs/nuxt/meta';
import css from 'mm-atomic-pack/configs/nuxt/css';
import styleResources from 'mm-atomic-pack/configs/nuxt/styleResources';
import splashscreens from 'mm-atomic-pack/configs/nuxt/splashscreens';
import buildModules from 'mm-atomic-pack/configs/nuxt/buildModules';
import modules from 'mm-atomic-pack/configs/nuxt/modules';
import build from 'mm-atomic-pack/configs/nuxt/build';
import banner from 'mm-atomic-pack/configs/nuxt/banner';
import i18nConfig from './config/nuxt/modules/i18n';
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
  css: [...css, '@assets/styles/global/tooltip.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~plugins/locales', '~plugins/moment', '~plugins/tooltip'],

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
    ...modules({ googleAnalyticsCode, title, author, description })
  ],

  /*
   ** Build configuration
   */
  build: build({ banner: banner({ title, homepage, author, version }) })
};
