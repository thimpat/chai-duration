const {resolvePath, sleep} = require("@thimpat/libutils");

const chai = require("chai");
const {expect} = chai;

// Testing files
const chaiDuration = require("../lib/index.js");
chai.use(chaiDuration);

describe('The assertion library', function ()
{
    this.timeout(10000);

    before(function ()
    {
        const folder = resolvePath(__dirname);
        process.chdir(folder)
    })

    it('should assume that 100 is the same a 100', function ()
    {
        expect(100).to.have.same.duration(100);
    });

    it('should assume that 60s seconds is the same as 1min', function ()
    {
        expect("60s").to.have.same.duration("1min");
    });

    it('should assume that 3600000 is the same a 1 hour', function ()
    {
        expect(60 * 60 * 1000).to.have.same.duration("1 hour");
    });

    it('should assume that 1h50mn is the same a 6600000', function ()
    {
        expect("1h50mn").to.have.same.duration(60 * 60 * 1000 + 50 * 60 * 1000);
    });

    it('should assume that 100 is shorter than 500', function ()
    {
        expect(100).to.be.shorter.than.duration(500);
    });

    it('should assume that 100 seconds is shorter than 500 seconds', function ()
    {
        expect("100s").to.be.shorter.than.duration("500s");
    });

    it('should assume that 10 seconds is shorter than 1 minute', function ()
    {
        expect("10s").to.be.shorter.than.duration("1mn");
    });

    it('should assume that 100 seconds is longer than 1 minute', function ()
    {
        expect("100s").to.be.longer.than.duration("1mn");
    });

    it('should assume that 1000 is longer than 500', function ()
    {
        expect(1000).to.be.longer.than.duration(500);
    });

    it('should assume that 2 minutes is longer than 500 seconds', function ()
    {
        expect("10mins").to.be.longer.than.duration("500s");
    });

    it('should assume that 10 seconds is longer than 1 minute', function ()
    {
        expect("10h").to.be.longer.than.duration("1mn");
    });

    // Should fail
    it.skip('should assume a non working time difference', async function ()
    {
        const startDate = new Date();
        await sleep(1000);
        expect(startDate).to.have.time.difference.longer.than.duration("1mn");
    });

    it('should assume two time differences longer than 1 second', async function ()
    {
        const startDate = new Date();
        await sleep(3000);
        const endDate = new Date();
        expect([startDate, endDate]).to.have.time.differences.longer.duration("1sec");
    });

   it('should assume time differences longer than 1 second', async function ()
    {
        const startDate = new Date();
        await sleep(2000);
        const endDate = new Date();
        expect([endDate, startDate]).to.have.time.difference.longer.than.duration(10);
    });

    it('should assume time difference longer than 2 seconds', async function ()
    {
        const startDate = new Date();
        await sleep(1000);
        const endDate = new Date();
        expect([startDate, endDate]).to.have.time.difference.shorter.than.duration("2sec");
    });

    it('should assume time difference longer than 2 seconds', async function ()
    {
        const startDate = new Date();
        await sleep(1000);
        const endDate = new Date();
        expect([startDate, endDate]).to.have.time.difference.shorter.duration("2min");
    });

    it('should assume time difference are equal', async function ()
    {
        expect(["1s", "5s"]).to.have.time.difference.same.as.duration("4s");
    });

});