const lenny = require('./app.js');

process.on('unhandledRejection', error => {
  console.log('unhandledRejection', error.message);
  expect(false).toBe(true);
});

describe('/v1/lenny', () => {
  let request;
  beforeEach(() => {
    jest.clearAllMocks();
    request = require('request-promise-native');
    request.mockReturnValueOnce(Promise.resolve([
      {
        face: '( ͡° ͜ʖ ͡°)'
      }
    ]));
  });
  test('calling lenny api by default gets lenny', async () => {
    await expect(lenny.lenny()).resolves.toEqual([
      {
        face: '( ͡° ͜ʖ ͡°)'
      }
    ]);
    expect(request.mock.calls.length).toBe(1);
    expect(request.mock.calls[0][0]).toEqual({
      uri: 'http://lenny.today/api/v1/lenny',
        qs: {
        },
        json: true
    });
  });

  test('calling lenny api requesting multiple sets flag correctly', async () => {
    await lenny.lenny(null, 2);
    expect(request.mock.calls[0][0]).toEqual({
      uri: 'http://lenny.today/api/v1/lenny',
        qs: {
          limit: 2
        },
        json: true
    });
  });

  test('calling lenny api requesting specific body parts sets flag correctly', async () => {
    await lenny.lenny({
      leftear: '✿',
      rightear: 'ⴲ'
    });
    expect(request.mock.calls[0][0]).toEqual({
      uri: 'http://lenny.today/api/v1/lenny',
        qs: {
          leftear: '✿',
          rightear: 'ⴲ'
        },
        json: true
    });
  });
});

describe('/v1/random', () => {
  let request;
  beforeEach(() => {
    jest.clearAllMocks();
    request = require('request-promise-native');
    request.mockReturnValueOnce(Promise.resolve([
      {
        seed: 123456789,
        face: '[■_■ᑷ'
      }
    ]));
  });
  test('calling random api by default gets random lenny', async () => {
    await expect(lenny.random()).resolves.toEqual([
      {
        seed: 123456789,
        face: '[■_■ᑷ'
      }
    ]);
    expect(request.mock.calls.length).toBe(1);
    expect(request.mock.calls[0][0]).toEqual({
      uri: 'http://lenny.today/api/v1/random',
        qs: {
        },
        json: true
    });
  });

  test('calling lenny api requesting multiple sets flag correctly', async () => {
    await lenny.random(null, 2);
    expect(request.mock.calls[0][0]).toEqual({
      uri: 'http://lenny.today/api/v1/random',
        qs: {
          limit: 2
        },
        json: true
    });
  });

  test('calling lenny api requesting specific body parts sets flag correctly', async () => {
    await lenny.random({
      leftear: '✿',
      rightear: 'ⴲ'
    });
    expect(request.mock.calls[0][0]).toEqual({
      uri: 'http://lenny.today/api/v1/random',
        qs: {
          leftear: '✿',
          rightear: 'ⴲ'
        },
        json: true
    });
  });
});

