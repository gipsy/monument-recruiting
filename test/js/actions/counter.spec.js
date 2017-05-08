'use-strict';
import chai from 'chai';
import {counter} from '../../../src/js/actions/counter';
import {increment} from '../../../src/js/actions/counter';

const expect = chai.expect;

describe('src/js/actions/counter', function() {
  describe('increment()', function() {
    it('creates an action to increment the count', function() {
      expect(increment()).to.eql({type: "INCREMENT_COUNTER"});
    });
  });
});
