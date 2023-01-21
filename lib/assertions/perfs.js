const {getMilliseconds, convertDateToDuration} = require("../core-utils/core-utils.js");

module.exports = function (chai)
{
    const Assertion = chai.Assertion;

    const compareInputs = function (actualInput)
    {
        const isLonger = this.__flags["chain-longer"];
        const isShorter = this.__flags["chain-shorter"];
        const isSame = this.__flags["chain-same"];
        const isTimeDifference = this.__flags["chain-time"] && this.__flags["chain-difference"];

        const inputExpectation = this._obj;

        // Conversion
        let expectedDuration, actualDuration;

        expectedDuration = getMilliseconds(inputExpectation);
        actualDuration = getMilliseconds(actualInput);

        // Comparison
        let pass;
        if (isTimeDifference)
        {
            new chai.Assertion(inputExpectation, actualInput + 'value').is.a('array');
            const [time1, time2] = inputExpectation;
            const duration1 = convertDateToDuration(time1);
            const duration2 = convertDateToDuration(time2);
            const diff = Math.abs(duration1 - duration2);
            if (isSame)
            {
                pass = (diff === actualDuration);
                this.assert(
                    pass,
                    `expected #{this} to have time differences same as ${actualInput}`,
                    `expected #{this} not to have time differences same as ${actualInput}`
                );
            }
            else if (isLonger)
            {
                pass = (diff > actualDuration);
                this.assert(
                    pass,
                    `expected #{this} to have time differences longer than ${actualInput}`,
                    `expected #{this} not to have time differences longer than ${actualInput}`
                );
            }
            else if (isShorter)
            {
                pass = (diff < actualDuration);
                this.assert(
                    pass,
                    `expected #{this} to have time differences shorter than ${actualInput}`,
                    `expected #{this} not to have time differences shorter than ${actualInput}`
                );
            }
        }
        else if (isSame)
        {
            pass = (expectedDuration === actualDuration);
            this.assert(
                pass,
                `expected #{this} to be same as ${actualInput}`,
                `expected #{this} not to be same as ${actualInput}`
            );
        }
        else if (isLonger)
        {
            pass = (expectedDuration > actualDuration);
            this.assert(
                pass,
                `expected #{this} to be longer than ${actualInput}`,
                `expected #{this} not to be longer than ${actualInput}`
            );
        }
        else if (isShorter)
        {
            pass = (expectedDuration < actualDuration);
            this.assert(
                pass,
                `expected #{this} to be shorter than ${actualInput}`,
                `expected #{this} not to be shorter than ${actualInput}`
            );
        }

        // flag(this, 'fs.isFile', pass);
    }

    Assertion.addMethod('duration', compareInputs);
};