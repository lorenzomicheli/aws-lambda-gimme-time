const rewire = require("rewire"),
   handler = rewire("../handler.js"),
   assert = require('assert');

const EXPECTED_DATE = '2018-10-01 00:00:00';

describe('Gimme Time Test', function () {

   it('should call getTime... ', async () => {
      handler.__set__("time", {
        getTime: function () {
          return {
            setTimezone: (timezone) => {},
            toString: () => EXPECTED_DATE
          }
      }});

      const response = await handler.gimmetime();

      assert.equal(response.statusCode, 200);
      assert.equal(response.body, `The time in Rome is: ${EXPECTED_DATE}`);
   });
});
