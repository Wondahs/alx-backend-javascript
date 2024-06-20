/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/valid-expect */
/* eslint-disable import/no-extraneous-dependencies */
// 3-payment.test.js
import { spy } from 'sinon';
import expect from 'chai';
import Utils from './utils';
import sendPaymentRequestToApi from './3-payment';

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber', () => {
    const main = spy(Utils);

    sendPaymentRequestToApi(100, 20);
    expect(main.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(main.calculateNumber.called).to.be.true;
    main.calculateNumber.restore();
  });
});
