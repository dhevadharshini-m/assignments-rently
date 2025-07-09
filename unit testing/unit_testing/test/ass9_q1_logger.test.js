const chai = require('chai');
const sinon = require('sinon');
const emitterModule = require('../../assignments/assignment9/question1/logger'); // adjust
const emitter = require('../../assignments/assignment9/question1/monitor');

const { expect } = chai;

describe('Emitter', () => {
    let emitSpy, clock;

    beforeEach(() => {
        emitSpy = sinon.spy(emitter, 'emit');
        clock = sinon.useFakeTimers();
    });

    afterEach(() => {
        sinon.restore();
    });

    it('should emit logsEvent with one of the predefined logs', () => {
        const interval = emitterModule.startLogging(1000); // faster interval for test

        // fast-forward time
        clock.tick(1000);

        expect(emitSpy.called).to.be.true;
        const [eventName, logMessage] = emitSpy.firstCall.args;

        expect(eventName).to.equal('logsEvent');
        expect(emitterModule.logs).to.include(logMessage);

        clearInterval(interval);
    });
});
