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


export const getDate = () => {
  const time = new Date();
  const mininus = `0${time.getMinutes()}`.slice(-2);
  const hour = `0${time.getHours()}`.slice(-2);
  const seconds = `0${time.getSeconds()}`.slice(-2);
  const timeStartRun = hour + ':' + mininus + ':' + seconds;
  const year = time.getFullYear();
  const day = `0${time.getDate()}`.slice(-2);
  const month = `0${time.getMonth() >= 12 ? 1 : time.getMonth() + 1}`.slice(
    -2,
  );
  const calanderRun = year + '-' + month + '-' + day;
  const startTimeRun = calanderRun + ' ' + timeStartRun;
  return startTimeRun
}