const time = require('time');

function getTime() {
  return new time.Date();
}

module.exports.getTime = getTime;