import meta from 'dev-assets/config/nuxt/meta';
import splashscreens from 'dev-assets/config/nuxt/splashscreens';
import buildModules from 'dev-assets/config/nuxt/buildModules';
import modules from 'dev-assets/config/nuxt/modules';
import build from 'dev-assets/config/nuxt/build';
import banner from 'dev-assets/config/nuxt/banner';
import loading from 'cv-assets/config/nuxt/loading';
import dir from 'cv-assets/config/nuxt/dir';
import plugins from 'cv-assets/config/nuxt/plugins';
import i18nConfig from 'cv-assets/config/nuxt/modules/i18n';
import css from 'mm-atomic-pack/config/nuxt/css';
import styleResources from 'mm-atomic-pack/config/nuxt/styleResources';
import { author, description, homepage, title, version } from './package.json';
import { googleAnalyticsCode } from './site.json';

export default {
  mode: 'spa',

  server: {
    port: 9001,
    host: '0.0.0.0' // default: localhost
  },

  dir: {
    ...dir({
      static: 'static',
    }),
    layouts: 'layouts'
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
  loading,
  loadingIndicator: {
    name: 'pulse',
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
  plugins,

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
      homepage,
      twitter: '@methodev'
    })
  ],

  /*
   ** Build configuration
   */
  build: build({ banner: banner({ title, homepage, author, version }) })
};
