const moment = require('moment-timezone');

module.exports.gimmetime = async () => {
  return {
    statusCode: '200',
    body: `The time in Rome is: ${moment().tz('Europe/Rome').format()}`
  };
};
