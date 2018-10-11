'use strict';

const time = require('./time');

module.exports.gimmetime = async () => {
    const currentTime = time.getTime();
    currentTime.setTimezone("Europe/Rome");
    return {
        statusCode: '200',
        body: 'The time in Rome is: ' + currentTime.toString(),
    };
};
