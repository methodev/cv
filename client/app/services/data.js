//====================================================|
// // SERVICES: DATA


//--------------------------| Import

// Libraries
import { parse } from 'flatted/esm';
import moment from 'moment';


//--------------------------| Get label

export const getLabel = name => parse(localStorage.getItem('cv_labels'))[name];


//--------------------------| Get total experience

export const getTotalExperience = (items) => {
  const totalPeriod = moment.duration();

  items.forEach((item) => {
    const startDate = moment(item.fields.startDate);
    const endDate = item.fields.endDate ? moment(item.fields.endDate) : moment();
    const duration = moment.duration(endDate.diff(startDate));

    totalPeriod.add(duration);
  });

  return `${totalPeriod.humanize()} ${getLabel('totalExperience')}`;
};


//--------------------------| Get period

export const getPeriod = (items) => {
  const lastDate = items[0].fields.endDate ? moment(items[0].fields.endDate) : moment();
  const firstDate = moment(items[items.length - 1].fields.startDate);

  return `${firstDate.format('YYYY')} — ${lastDate.format('YYYY')}`;
};


//--------------------------| Split positions by actuality

export const splitPositionsByActuality = (positions, amount = 3) => {
  const actual = positions.slice(0, amount);
  const old = positions.slice(amount);

  return {
    actual,
    old
  };
};


//--------------------------| Format date

export const formatDate = (date, format = 'MMM YYYY') => moment(date).format(format);
