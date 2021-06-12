import moment from 'moment-timezone';


export const getDateByTimeZoneMin = (date, timeZone) => {
  if (!timeZone) timeZone = 'Asia/Ho_Chi_Minh';
  var hours = parseInt(moment().tz(timeZone).format('Z'));
  date = moment(date, 'YYYY-MM-DD HH:mm:ss')
    .add(hours, 'hours')
    .format('YYYY-MM-DD')
    .toString();
  return date;
};


export const getDateByTimeZoneHour = (date, timeZone) => {
  if (!timeZone) timeZone = 'Asia/Ho_Chi_Minh';
  var hours = parseInt(moment().tz(timeZone).format('Z'));
  date = moment(date, 'YYYY-MM-DD HH:mm:ss')
    .add(hours, 'hours')
    .format('YYYY-MM-DD HH:mm:ss')
    .toString();
  return date;
};