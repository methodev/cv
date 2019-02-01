//====================================================|
// // SERVICES: DATA


//--------------------------| Import

// Libraries
import { parse } from 'flatted/esm';
import moment from 'moment';
import _ from 'lodash';


//--------------------------| Get label

export const getLabel = name => parse(localStorage.getItem('cv_labels'))[name];


//--------------------------| Get total experience

export const getTotalExperience = (items) => {
  const dates = items.map(item => item.fields.startDate);
  const startDate = dates.sort()[0];
  const endDate = moment();

  return `${moment(endDate).to(moment(startDate), true)} ${getLabel('totalExperience')}`;
};


//--------------------------| Format date

export const formatDate = (date, format = 'MMM YYYY') => moment(date).format(format);
