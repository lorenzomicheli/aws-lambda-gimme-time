'use strict';

module.exports.time = async (event, context) => {
    var currentTime = new time.Date(); 
    currentTime.setTimezone("Europe/Rome");
    return {
        statusCode: '200',
        body: 'The time in Romes is: ' + currentTime.toString(),
    };
  };
};
