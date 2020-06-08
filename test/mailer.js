'use strict';

// tests for mailer
// Generated by serverless-mocha-plugin

const mochaPlugin = require('serverless-mocha-plugin');
const expect = mochaPlugin.chai.expect;
let wrapped = mochaPlugin.getWrapper('mailer', '//handlers/mail-handlers/mailer.js', 'handler');

describe('mailer', () => {
  let data;

  before(() => {
    data = {

    }
  });

  it('Test Queue', async () => {
    const response = await wrapped.run(data);
      expect(response).to.be.empty;
  });
});

