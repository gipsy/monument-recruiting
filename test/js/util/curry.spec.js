import chai from 'chai';
import {curry} from '../../../src/js/util/curry';
const expect = chai.expect;

Function.prototype.curry = curry;

describe("Function.prototype.curry()", function(){
  it('should curry functions properly', function(){
    const converter = (ratio, symbol, input) =>
      `${(input*ratio).toFixed(1)} ${symbol}`;
    const kilosToPounds = converter.curry(2.2, "lbs");
    const litersToUKPints = converter.curry(1.75, "imperial pints");
    const milesToKilometers = converter.curry(1.62, 'km');

    expect(kilosToPounds(4)).to.equal("8.8 lbs");
    expect(litersToUKPints(2.4)).to.equal("4.2 imperial pints");
    expect(milesToKilometers(34)).to.equal("55.1 km");
  });
});
