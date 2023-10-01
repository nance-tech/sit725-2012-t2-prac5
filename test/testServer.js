const { assert, expect } = require("chai")
const { describe, it } = require("mocha")
const request = require("request");


var cat = {
    title: "Test Cat",
    subTitle: "Just a Testing Cat",
    path: "images/sleepy.jpg",
    description: "Test Cat Description"

}

describe("API TESTING",function(){
    describe("Test GET cats",function(){
        it('returns statuscode of 200', function (done) {
            request('http://localhost:3000/api/cats', function (error, response, bodyString) {
                let bodyObj = JSON.parse(bodyString);
                expect(bodyObj.message).to.equal('success');
                done();
            });
        });
    })

    describe('Test POST cat', function () {
        it('post cat to DB', function (done) {
            request.post('http://localhost:3000/api/cat',{form: cat }, function (error, b, c) {
                let bodyObj = JSON.parse(c);
                expect(bodyObj.message).to.equal('success');
                done();
            });
        });
    });

})
