//====================================================|
// CV


//--------------------------| Import

// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import { stringify } from 'flatted/esm';

// App
import App from './app';

// Services
import requestContent from './app/services/contentful';

// Styles
import './styles/scaffoldings/base.scss';
import './styles/scaffoldings/spinner.scss';
import './styles/scaffoldings/font-faces.scss';
import './styles/scaffoldings/print.scss';

// Images
import './assets/images/logo.png';
import './assets/images/splashscreens/ipad_splash.png';
import './assets/images/splashscreens/ipadpro1_splash.png';
import './assets/images/splashscreens/ipadpro2_splash.png';
import './assets/images/splashscreens/ipadpro3_splash.png';
import './assets/images/splashscreens/iphone5_splash.png';
import './assets/images/splashscreens/iphone6_splash.png';
import './assets/images/splashscreens/iphoneplus_splash.png';
import './assets/images/splashscreens/iphonex_splash.png';
import './assets/images/splashscreens/iphonexr_splash.png';
import './assets/images/splashscreens/iphonexsmax_splash.png';


//--------------------------| Initialize

const init = async ({
  bilingual,
  contentfulAccessToken,
  contentfulSpace,
  gaNumber
}) => {
  try {
    // Store content
    const content = await requestContent(contentfulAccessToken, contentfulSpace);
    localStorage.setItem('cv_content', stringify(content));

    // Set initial language
    const filteredLang = Object.keys(content).filter(
      l => l === window.location.hash.substring(1)
    );
    const lang = filteredLang.length === 1 ? filteredLang[0] : 'en';

    // Google Analytics (only for production)
    if (process.env.NODE_ENV === 'production') {
      ReactGA.initialize(gaNumber);
      ReactGA.pageview(window.location.pathname + window.location.search);
    }

    // Render
    ReactDOM.render(
      <App lang={lang} bilingual={bilingual} content={content} />,
      document.getElementById('root')
    );
  }
  catch (error) {
    console.error('No content found', error);
    // TODO: Display "No content found"
  }
};


//--------------------------| Export

export default init;
