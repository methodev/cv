//====================================================|
// // SERVICES: CONTENT


//--------------------------| Import

// Libraries
import { createClient } from 'contentful';
import { parse } from 'flatted/esm';
import moment from 'moment';
import _ from 'lodash';


//--------------------------| Define Contentful client

const client = createClient({
  space: '6f93imtg39gj',
  accessToken: '020aeb7d903b2cd4b36eacfe969665a35fa736cd61071c14cfed0588c8dd8f6d',
  resolveLinks: true
});


//--------------------------| Request content

export const requestContent = async () => {
  const storageContent = localStorage.getItem('cv_content');

  try {
    const remoteContent = await client.sync({
      initial: true,
      resolveLinks: true
    });
    const updatedContent = {
      entries: remoteContent.entries,
      assets: remoteContent.assets
    };

    return Promise.resolve(updatedContent);
  }
  catch (error) {
    if (storageContent) {
      return Promise.resolve(parse(storageContent));
    }

    return Promise.reject(new Error('No content found.'));
  }
};


//--------------------------| Get entries

export const getEntries = type => parse(localStorage.getItem('cv_content')).entries.filter(item => item.sys.contentType.sys.id === type);


//--------------------------| Get entry

export const getEntry = (type, id) => {
  const entries = parse(localStorage.getItem('cv_content')).entries.filter(item => item.sys.contentType.sys.id === type);

  return entries.filter(entry => entry.fields.id.en === id);
};


//--------------------------| Get asset

export const getAsset = id => _.find(parse(localStorage.getItem('cv_content')).assets, asset => asset.sys.id === id);


//--------------------------| Get total experience

export const getTotalExperience = (items) => {
  const dates = items.map(item => item.fields.startDate.en);
  const startDate = dates.sort()[0];
  const endDate = moment();

  return `${moment(endDate).to(moment(startDate), true)} of total experience`;
};


//--------------------------| Format date

export const formatDate = (date, format = 'MMM YYYY') => moment(date).format(format);
