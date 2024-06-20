// 3-payment.test.js
const sinon = require('sinon');
const describe = require('mocha');
const expect = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber', () => {
    const main = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);
    expect(main.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(main.calculateNumber.callCount).to.be.equal(1);
    main.calculateNumber.restore();
  });
});