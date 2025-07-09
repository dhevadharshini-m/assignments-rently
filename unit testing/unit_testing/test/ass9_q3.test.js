const chai = require('chai');
const sinon = require('sinon');
const proxyquire = require('proxyquire');

const expect = chai.expect;

describe.only('runScript', () => {
    let execFileStub;
    let runScript;

    beforeEach(() => {
        execFileStub = sinon.stub();
        runScript = proxyquire('../../assignments/assignment9/question3/question3', {
            'child_process': { execFile: execFileStub }
        });
    });

    afterEach(() => {
        sinon.restore();
    });

    it('should return mocked output', (done) => {
        const fakeOutput = 'fake ifconfig output';
        execFileStub.yields(null, fakeOutput, '');

        runScript((err, result) => {
            expect(err).to.be.null;
            expect(result).to.equal(`Output:\n${fakeOutput}`);
            done();
        });
    });

    it('should handle error case', (done) => {
        const error = new Error('command failed');
        execFileStub.yields(error, '', '');

        runScript((err, result) => {
            expect(err).to.equal(`Error: ${error.message}`);
            done();
        });
    });

    it('should handle stderr case', (done) => {
        execFileStub.yields(null, '', 'some stderr');

        runScript((err, result) => {
            expect(err).to.equal(`stderr: some stderr`);
            done();
        });
    });
});
