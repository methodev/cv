//====================================================|
// CV


//--------------------------| Import

// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { stringify } from 'flatted/esm';

// App
import App from './app';

// Services
import { requestContent, getEntries } from './app/services/content';

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

(async () => {
  try {
    // Store content
    const content = await requestContent();
    localStorage.setItem('cv_content', stringify(content));

    // Render
    ReactDOM.render(
      <App
        identity={getEntries('identity')[0].fields}
        sections={getEntries('cvSection').reverse()}
      />,
      document.getElementById('root')
    );
  }
  catch (error) {
    console.error('No content found', error);
    // TODO: Display "No content found"
  }
})();
