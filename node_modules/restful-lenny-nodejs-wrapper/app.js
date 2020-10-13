'use strict';

const request = require('request-promise-native');

function buildRequest(bodyParts, limit, uri) {
  return {
    uri: uri,
    qs: {
      ...(bodyParts ? bodyParts : {}),
      ...(limit ? {limit: limit} : {})
    },
    json: true
  };
}

exports = {
  lenny: function(bodyParts, limit) {
    const options = buildRequest(
      bodyParts,
      limit,
      'http://lenny.today/api/v1/lenny');
    return request(options);
  },
  random: function(bodyParts, limit) {
    const options = buildRequest(
      bodyParts,
      limit,
      'http://lenny.today/api/v1/random');
    return request(options);
  }
}

module.exports = exports;
