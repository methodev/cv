//====================================================|
// // SERVICES: DATA


//--------------------------| Import

// Libraries
import { parse } from 'flatted/esm';
import moment from 'moment';
import _ from 'lodash';


//--------------------------| Get label

export const getLabel = name => parse(localStorage.getItem('cv_labels'))[name];


//--------------------------| Get entries

export const getEntries = type => parse(localStorage.getItem('cv_data')).items.filter(item => item.sys.contentType.sys.id === type);


//--------------------------| Get entry

export const getEntry = (type, id) => {
  const entries = parse(localStorage.getItem('cv_data')).items.filter(item => item.sys.contentType.sys.id === type);

  return entries.filter(entry => entry.fields.id === id);
};


//--------------------------| Get asset

export const getAsset = title => _.find(parse(localStorage.getItem('cv_data')).includes.Asset, asset => asset.fields.title === title);


//--------------------------| Get total experience

export const getTotalExperience = (items) => {
  const dates = items.map(item => item.fields.startDate);
  const startDate = dates.sort()[0];
  const endDate = moment();

  return `${moment(endDate).to(moment(startDate), true)} ${getLabel('totalExperience')}`;
};


//--------------------------| Format date

export const formatDate = (date, format = 'MMM YYYY') => moment(date).format(format);
