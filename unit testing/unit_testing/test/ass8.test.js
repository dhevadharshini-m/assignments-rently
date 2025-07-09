const { expect } = require('chai');
const sinon = require('sinon');

const { printjson, printAllvalues } = require('../../assignments/assignment8/q5-6');

describe('printjson', () => {
    let logStub;

    beforeEach(() => {
        logStub = sinon.stub(console, 'log');
    });

    afterEach(() => {
        sinon.restore();
    });

    it('should print JSON stringified object', () => {
        const student = {
            name: "Dd",
            age: 21,
            isGraduate: false,
            skills: ["JavaScript", "React"],
        };

        printjson(student);

        expect(logStub.calledOnce).to.be.true;
        const output = logStub.firstCall.args[0];
        const parsed = JSON.parse(output);
        expect(parsed).to.deep.equal(student);
    });

    it('should handle null input', () => {
        printjson(null);

        expect(logStub.calledWith("Object is null, cant perform operation")).to.be.true;
    });
});

describe('printAllvalues', () => {
    let logStub;

    beforeEach(() => {
        logStub = sinon.stub(console, 'log');
    });

    afterEach(() => {
        sinon.restore();
    });

    it('should print all keys and values of nested object', () => {
        const student = {
            name: "Dd",
            age: 21,
            isGraduate: false,
            skills: ["JavaScript", "React"],
            address: {
                city: "Coimbatore",
                state: "Tamil Nadu"
            }
        };

        printAllvalues(student);

        const logs = logStub.getCalls().map(call => call.args[0]);
        expect(logs).to.include("name : Dd");
        expect(logs).to.include("age : 21");
        expect(logs).to.include("isGraduate : false");
        expect(logs).to.include("skills: ");
        expect(logs).to.include("0 : JavaScript");
        expect(logs).to.include("1 : React");
        expect(logs).to.include("address: ");
        expect(logs).to.include("city : Coimbatore");
        expect(logs).to.include("state : Tamil Nadu");
    });
});
