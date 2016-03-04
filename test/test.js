var assert = require('assert');
var BemEx = require('../bemex');

describe('Type', function () {
    it('Should return a RegExp', function () {
        assert.equal(BemEx() instanceof RegExp, true);
    });
});

describe('Configuration', function () {
    it('Should match the default regexp string', function () {
        assert.equal(
            '^((u|is|has|js)-([a-z0-9]*[-a-z0-9]*)|([a-z0-9]*[-a-z0-9]*)(__([a-z0-9]*[-a-z0-9]*))?(--([a-z0-9]*[-a-z0-9]*))?)(\\\\@([a-z0-9]*[-a-z0-9]*))?$',
            BemEx().source
        );
    });

    it('Should match the customized regexp string', function () {
        assert.equal(
            '^((u|is|has|js)-([a-z0-9][a-zA-Z0-9]*)|([A-Z0-9][a-zA-Z0-9]*)(__([a-z0-9][a-zA-Z0-9]*))?(--([a-z0-9][a-zA-Z0-9]*))?)(\\\\@([a-z0-9][a-zA-Z0-9]*))?$',
            BemEx({
                blockFormat: 'pascal',
                blockPrefix: '',
                elementFormat: 'camel',
                elementPrefix: '__',
                modifierFormat: 'camel',
                modifierPrefix: '--',
                queryFormat: 'camel',
                queryPrefix: '@',
                stateFormat: 'camel',
                statePrefix: '-',
                states: 'u, is, has, js'
            }).source
        );
    });
});

describe('Samples', function () {
    it('Should match the B classname', function () {
        assert.equal(
            'block-name'.match(BemEx()) !== null,
            true
        );
    });
    it('Should match the B + query classname', function () {
        assert.equal(
            'block-name\\@query'.match(BemEx()) !== null,
            true
        );
    });
    it('Should match the BM classname', function () {
        assert.equal(
            'block-name--modifier'.match(BemEx()) !== null,
            true
        );
    });
    it('Should match the BE classname', function () {
        assert.equal(
            'block-name__element'.match(BemEx()) !== null,
            true
        );
    });
    it('Should match the BEM classname', function () {
        assert.equal(
            'block-name__element--modifier'.match(BemEx()) !== null,
            true
        );
    });
    it('Should match the BEM + query classname', function () {
        assert.equal(
            'block-name__element--modifier\\@query'.match(BemEx()) !== null,
            true
        );
    });
    it('Should match the utility classname', function () {
        assert.equal(
            'is-utility'.match(BemEx()) !== null,
            true
        );
    });
    it('Should match the utility + query classname', function () {
        assert.equal(
            'is-utility\\@query'.match(BemEx()) !== null,
            true
        );
    });
});
