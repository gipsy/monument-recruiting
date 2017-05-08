import chai from 'chai';
const expect = chai.expect;
import {get, pick, omit, range} from '../../../src/js/util/altLodash';
const testObject = {
  never: {
    gonna: {
      give: {
        you: "up"
      },
      let: {
        you: "down"
      },
      run: {
        around: ['desert you']
      }
    }
  }
};
describe('./util/altLodash', function(){
  describe('is a very lightweight replacement for lodash.get', function(){
    describe('range()', function(){
      it('generates ranges of numbers', function(){
        expect(range(10)).to.eql([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]); 
      });
      it('starts at one if needed', function(){
        expect(range(10, 1)).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
      });
      it('can skip', function(){
        expect(range(10, 0, 2)).to.eql([0, 2, 4, 6, 8]);
      });
    });
    describe('get()', function(){
      it('gets a deep property', function(){
        expect(get(testObject, 'never.gonna.give.you', false)).to.equal('up'); 
      });
      it('works with arrays', function(){
        expect(get(testObject, ['never', 'gonna', 'let', 'you'], false)).to.equal('down');
      });
      it('works with mixed arrays and strings', function(){
        expect(get(testObject, ['never.gonna', 'run.around'], false)).to.eql(['desert you']);
      });
      it('doesn\'t throw up when asked to get a non-existant property', function(){
        expect(get(testObject, 'never.gonna.let.you.cry', "default")).to.equal("default");
        expect(get(testObject, ['never', 'gonna', 'say', 'goodbye!'], "default")).to.equal("default");
      });
    });
    describe('pick()', function(){
      it('gets only the properties you want', function(){
        expect(pick(testObject.never.gonna, 'give', 'let')).to.eql({
          give: {
            you: "up"
          }, 
          let: {
            you: "down"
          }
        });
      });
      it('also works with arrays', function(){
        expect(pick(testObject.never.gonna, ['give', 'let'])).to.eql({
          give: {
            you: "up"
          }, 
          let: {
            you: "down"
          }
        });
      });
    });
    describe('omit()', function(){
      it('gets none of the properties you don\'t want', function(){
        expect(omit(testObject.never.gonna, 'give', 'let')).to.eql({
          run: {
            around: ['desert you']
          }
        });
      });
      it('also works with arrays', function(){
        expect(omit(testObject.never.gonna, ['give', 'let'])).to.eql({
          run: {
            around: ['desert you']
          }
        });
      });
    });
  });
});
