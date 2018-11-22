/* eslint-env node, mocha */
import './_hooks';

import assert from 'assert';
import mock from 'node-mocks-http';
import corsMiddleware from '../src/middlewares/cors';

describe('CORS Middleware', () => {
  it('should append CORS headers to the request', (done) => {
    const request = mock.createRequest({ method: 'GET', url: '/' });
    const response = mock.createResponse();

    corsMiddleware(request, response, () => {
      assert.strictEqual(response.getHeader('Access-Control-Allow-Origin'), '*');
      assert.strictEqual(response.getHeader('Access-Control-Allow-Headers'), 'Origin, X-Requested-With, Content-Type, Accept');
      done();
    });
  });
});