/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/expect-expect */
// api.test.js
const request = require('request');
const assert = require('assert');
const done = require('mocha');
const sinon = require('sinon');
const app = require('./api');

describe('app', () => {
  let consoleSpy;

  it('return correct status code for "/"', () => {
    request('http://localhost:7865/', (error, response, _) => {
      if (error) {
        done(error);
      } else {
        assert.strictEqual(response.statusCode, 200);
        done();
      }
    });
  });

  it('return correct result', () => {
    request('http://localhost:7865/', (error, _, body) => {
      if (error) {
        done(error);
      } else {
        assert.strictEqual(body, 'Welcome to the payment system');
        done();
      }
    });
  });

  it('return correct status code for unknown route', () => {
    request('http://localhost:7865/unknown', (error, response, _) => {
      if (error) {
        done(error);
      } else {
        console.log(response.statusCode)
        assert.strictEqual(response.statusCode, 404);
        done();
      }
    });
  });
});
