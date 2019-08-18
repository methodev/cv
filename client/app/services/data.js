//====================================================|
// // SERVICES: DATA


//--------------------------| Import

// Libraries
import { parse } from 'flatted/esm';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';


//--------------------------| Duration format

momentDurationFormatSetup(moment);


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


//--------------------------| Filter items till now

export const filterItemsTillNow = items => items.filter(
  item => moment().diff(item.fields.startDate) >= 0
);


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


//--------------------------| Format duration

export const formatDuration = (startDate, finalDate) => {
  const diff = moment(finalDate).diff(moment(startDate), 'months');

  if (diff < 1) {
    return null;
  }

  return moment.duration(diff, 'months').humanize();
};


//--------------------------| Check period

export const checkPeriod = (startDate, endDate) => {
  const startDiff = moment().diff(startDate, 'days');
  const endDiff = moment().diff(endDate);
  const isUpcoming = startDiff < 0;
  const isAboutToEnd = endDiff <= 0;

  if (isUpcoming) {
    return 'starting';
  }

  if (!endDate || isAboutToEnd) {
    return 'ongoing';
  }

  return 'finished';
};


//--------------------------| Format period

export const formatPeriod = (startDate, endDate) => {
  const periodStatus = checkPeriod(startDate, endDate);
  let label;

  switch (periodStatus) {
    case 'starting':
      label = `${getLabel('starting')}: ${formatDate(startDate)}`;
      break;
    case 'ongoing':
      label = `${getLabel('ongoing')}: ${formatDate(startDate)}`;
      break;
    default:
      label = `${formatDate(startDate)} — ${formatDate(endDate)}`;
  }

  return label;
};
