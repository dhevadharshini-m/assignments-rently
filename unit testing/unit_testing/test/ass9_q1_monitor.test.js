const chai = require('chai');
const sinon = require('sinon');
const fs = require('fs');
const emitter = require('../../assignments/assignment9/question1/monitor');

const { expect } = chai;

describe('Logs Event Listener', () => {
    let appendStub, consoleSpy;

    beforeEach(() => {
        appendStub = sinon.stub(fs, 'appendFile').callsFake((path, data, cb) => cb(null));
        consoleSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        sinon.restore();
    });

    it('should handle logsEvent and write to file', (done) => {
        emitter.emit('logsEvent', 'ERROR: Something went wrong');

        setTimeout(() => {
            // Check fs.appendFile was called
            expect(appendStub.called).to.be.true;

            // Check console.log printed alert
            const calledWithAlert = consoleSpy.calledWithMatch(/Critical Alert Detected: ERROR/);
            expect(calledWithAlert).to.be.true;

            done();
        }, 10); 
    });
});
