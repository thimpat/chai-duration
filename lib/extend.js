module.exports = function (chai, utils) {

    const Assertion = chai.Assertion;
    const flag = utils.flag;

    Assertion.addProperty('same', function () {
        flag(this, 'chain-same', true);
    });

    Assertion.addProperty('longer', function () {
        flag(this, 'chain-longer', true);
    });

    Assertion.addProperty('shorter', function () {
        flag(this, 'chain-shorter', true);
    });

    Assertion.addProperty('time', function () {
        flag(this, 'chain-time', true);
    });

    Assertion.addProperty('difference', function () {
        flag(this, 'chain-difference', true);
    });

    Assertion.addProperty('differences', function () {
        flag(this, 'chain-difference', true);
    });

    Assertion.addProperty('than', function () {
        flag(this, 'chain-than', true);
    });

    Assertion.addProperty('as', function () {
        flag(this, 'chain-as', true);
    });
};