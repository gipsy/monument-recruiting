import chai from 'chai';
import { prepareActions } from '../../../src/js/util/reduxify';

const expect = chai.expect;


const mockActions = {
  test: () => "test"
};
const mockOptionalMethods = {
  second: () => "second",
  third: "third",
};
const mockDispatch = (whatever) => whatever.toUpperCase();

describe("reduxify.js", function () {
  describe('prepareActions()', function () {
    it('prepares actions for binding', function () {
      const testable = prepareActions(mockActions, mockOptionalMethods, mockDispatch);
      expect(testable.action.test()).to.equal("TEST");
      expect(testable.second()).to.equal("second");
      expect(testable.third).to.equal("third");
      expect(testable.dispatch("foo")).to.equal("FOO");
    });
  });
});
