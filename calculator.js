let homepage = require('../pages/homepage');

describe('Demo Calculator Test', function () {

    it('addition Test', function () {

        homepage.get("https://juliemr.github.io/protractor-demo/");
        homepage.enterFirstNumber('5');
        homepage.enterSecondNumber('10');
        homepage.clickGo();
        homepage.verifyResult('15');
        browser.sleep('3000');
    });

    it('Subtraction Test', function () {

        homepage.get("https://juliemr.github.io/protractor-demo/");
        homepage.enterFirstNumber('5');
        homepage.enterSecondNumber('10');
        homepage.clickGo1();
        homepage.verifyResult('15');
        browser.sleep('3000');
    });

});