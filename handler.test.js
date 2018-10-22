const handler = require('./handler');

const EXPECTED_DATE = '2018-10-01 00:00:00';

jest.mock('moment-timezone', () => {
  return function () {
    return { tz: () => { return { format: () => { return '2018-10-01 00:00:00'; } }; } };
  };
});

describe('When call the handler', () => {
  it('Returns the expected date', async () => {
    const response = await handler.gimmetime();

    expect(response.statusCode).toMatch(/200/);
    expect(response.body).toMatch(`The time in Rome is: ${EXPECTED_DATE}`);
  });
});
