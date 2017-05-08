import chai from 'chai';
import {shank} from '../../../src/js/util/shank';
const expect = chai.expect;

Array.prototype.shank = shank;

describe('Array.prototype.shank', function(){
  it('works like Array.splice, but without mutation', function(){
    let groovyArray = [1, 2, 3, 4, 5, 6];
    expect(groovyArray.shank(1, 3)).to.eql[1, 5, 6];
    expect(groovyArray).to.eql([1, 2, 3, 4, 5, 6]);
    expect(groovyArray.shank(1, 3, 'A', 'B')).to.eql([1, 'A', 'B', 5, 6]);
  });
});
