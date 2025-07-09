const { expect } = require('chai');
const sinon = require('sinon');

const {
    sum,
    product,
    add,              
    multiply,
    addvalues,        
    productOfvalues,
    main,             
    sumPromise        
} = require('../../assignments/assignment7/que3');

describe('Add & Multiply functions', () => {
    describe('callback: sum + product', () => {
        it('should compute sum and pass to callback', () => {
            const callback = sinon.spy();
            sum(4, 5, callback);
            expect(callback.calledOnce).to.be.true;
            expect(callback.firstCall.args[0]).to.equal(9);
            expect(callback.firstCall.args[1]).to.equal(10);
        });

        it('should compute product correctly', () => {
            const result = product(9, 10);
            expect(result).to.equal(90);
        });
    });

    describe('promise: add + multiply', () => {
        it('should resolve sum and compute product', async () => {
            const sumRes = await add(4, 5);
            expect(sumRes).to.equal(9);
            const prod = multiply(sumRes, 10);
            expect(prod).to.equal(90);
        });
    });

    describe('async/await: addvalues + productOfvalues', () => {
        it('should work with async/await and return product', async () => {
            const sumRes = await addvalues(4, 5);
            expect(sumRes).to.equal(9);
            const prod = productOfvalues(sumRes, 10);
            expect(prod).to.equal(90);
        });

        it('main should compute final product', async () => {
            const finalProduct = await main();
            expect(finalProduct).to.equal(90);
        });
    });

    describe('promisify: sumPromise + product', () => {
        it('should use promisify to compute sum then product', async () => {
            const sumRes = await sumPromise(4, 5);
            expect(sumRes).to.equal(9);
            const prod = product(sumRes, 10);
            expect(prod).to.equal(90);
        });
    });
});
