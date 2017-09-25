var moment = require('moment');
export function timeAgo(value) {
  const result = moment(value).fromNow();
  return result === 'a day ago' ? 'yesterday' : result;
}