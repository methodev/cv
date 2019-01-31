//====================================================|
// CV


//--------------------------| Import

// Libraries
import React from 'react';

// Config
import { ga as gaNumber, contentfulAccessToken, contentfulSpace } from './configs/account.json';

// App
import init from './client';


//--------------------------| Initialize

init({
  bilingual: true,
  contentfulAccessToken,
  contentfulSpace,
  gaNumber
});
