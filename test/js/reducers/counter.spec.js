import chai from 'chai';
import {counter} from '../../../src/js/reducers/counter';
import {increment} from '../../../src/js/actions/counter';
const expect = chai.expect;

describe('src/js/reducers/counter', function() {
  describe('counter()', function() {
    it('correctly defaults', function() {
      expect(counter()).to.equal(0);
    });
    it('increments appropriately', function() {
      for(let i = 0; i < 100; i++){
        expect(counter(i, increment())).to.equal(i+1);
      }
    });
  });
});
