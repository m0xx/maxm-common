const chai = require('chai');
const expect = chai.expect;
import * as Utils from './../lib/utils'

describe("Utils", function() {
   describe(".wrapIds", function() {
       it("should wrap ids as string", function(){
            const ids = [2, 4]

           expect('\'2\',\'4\'').to.equal(Utils.wrapIds(ids));
       });
   });
});