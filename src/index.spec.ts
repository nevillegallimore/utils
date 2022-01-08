// import external dependencies
import { assert } from 'chai';

// import internal dependencies
import {
    isArray,
    isBoolean,
    isDefined,
    isNotNull,
    isNull,
    isNumber,
    isObject,
    isPrimitive,
    isString,
    isUndefined,
} from './index';

////////////////////////////////////////////////////////////////////////////////////////////////////

describe(`@nevillegallimore/utils`, () => {
    describe(`isArray (value: any): boolean`, () => {
        it(`should return true given array value`, () => {
            assert.isTrue(isArray([]));
            assert.isTrue(isArray([1, 2, 3]));
        });

        it(`should return false given non-array value`, () => {
            assert.isFalse(isArray(true));
            assert.isFalse(isArray(1337));
            assert.isFalse(isArray('Lorem Ipsum'));
            assert.isFalse(isArray({ foo: 'bar' }));
            assert.isFalse(isArray(undefined));
            assert.isFalse(isArray(null));
        });
    });

    describe(`isBoolean (value: any): boolean`, () => {
        it(`should return true given boolean value`, () => {
            assert.isTrue(isBoolean(true));
            assert.isTrue(isBoolean(false));
        });

        it(`should return false given non-boolean value`, () => {
            assert.isFalse(isBoolean(1337));
            assert.isFalse(isBoolean('Lorem Ipsum'));
            assert.isFalse(isBoolean({ foo: 'bar' }));
            assert.isFalse(isBoolean([1, 2, 3]));
            assert.isFalse(isBoolean(undefined));
            assert.isFalse(isBoolean(null));
        });
    });

    describe(`isDefined (value: any): boolean`, () => {
        it(`should return true given defined value`, () => {
            assert.isTrue(isDefined(true));
            assert.isTrue(isDefined(1337));
            assert.isTrue(isDefined('Lorem Ipsum'));
            assert.isTrue(isDefined({ foo: 'bar' }));
            assert.isTrue(isDefined([1, 2, 3]));
            assert.isTrue(isDefined(null));
        });

        it(`should return false given undefined`, () => {
            assert.isFalse(isDefined(undefined));
        });
    });

    describe(`isNotNull (value: any): boolean`, () => {
        it(`should return true given non-null value`, () => {
            assert.isTrue(isNotNull(true));
            assert.isTrue(isNotNull(1337));
            assert.isTrue(isNotNull('Lorem Ipsum'));
            assert.isTrue(isNotNull({ foo: 'bar' }));
            assert.isTrue(isNotNull([1, 2, 3]));
            assert.isTrue(isNotNull(undefined));
        });

        it(`should return false given null value`, () => {
            assert.isFalse(isNotNull(null));
        });
    });

    describe(`isNull (value: any): boolean`, () => {
        it(`should return true given null value`, () => {
            assert.isTrue(isNull(null));
        });

        it(`should return false given non-null value`, () => {
            assert.isFalse(isNull(true));
            assert.isFalse(isNull(1337));
            assert.isFalse(isNull('Lorem Ipsum'));
            assert.isFalse(isNull({ foo: 'bar' }));
            assert.isFalse(isNull([1, 2, 3]));
            assert.isFalse(isNull(undefined));
        });
    });

    describe(`isNumber (value: any, isDefaultTrue: boolean = false): boolean`, () => {
        it(`should return true given number value`, () => {
            assert.isTrue(isNumber(1337));
        });

        it(`should return false given non-number value`, () => {
            assert.isFalse(isNumber(true));
            assert.isFalse(isNumber('Lorem Ipsum'));
            assert.isFalse(isNumber({ foo: 'bar' }));
            assert.isFalse(isNumber([1, 2, 3]));
            assert.isFalse(isNumber(undefined));
            assert.isFalse(isNumber(null));
        });

        it(`should return false given Number.NaN`, () => {
            assert.isFalse(isNumber(Number.NaN));
        });

        it(`should return true given Number.NaN when isDefaultTrue flag is set`, () => {
            assert.isTrue(isNumber(Number.NaN, true));
        });
    });

    describe(`isObject (value: any): boolean`, () => {
        it(`should return true given non-primitive value`, () => {
            assert.isTrue(isObject({ foo: 'bar' }));
            assert.isTrue(isObject([1, 2, 3]));
        });

        it(`should return false given primitive value`, () => {
            assert.isFalse(isObject(true));
            assert.isFalse(isObject(1337));
            assert.isFalse(isObject('lorem ipsum'));
            assert.isFalse(isObject(undefined));
            assert.isFalse(isObject(null));
        });
    });

    describe(`isPrimitive (value: any): boolean`, () => {
        it(`should return true given primitive value`, () => {
            assert.isTrue(isPrimitive(true));
            assert.isTrue(isPrimitive(1337));
            assert.isTrue(isPrimitive('lorem ipsum'));
            assert.isTrue(isPrimitive(undefined));
            assert.isTrue(isPrimitive(null));
        });

        it(`should return false given non-primitive value`, () => {
            assert.isFalse(isPrimitive({ foo: 'bar' }));
            assert.isFalse(isPrimitive([1, 2, 3]));
        });
    });

    describe(`isString (value: any, isDefaultTrue: boolean = false): boolean`, () => {
        it(`should return true given string value`, () => {
            assert.isTrue(isString('Lorem Ipsum'));
        });

        it(`should return false given non-string value`, () => {
            assert.isFalse(isString(true));
            assert.isFalse(isString(1337));
            assert.isFalse(isString({ foo: 'bar' }));
            assert.isFalse(isString([1, 2, 3]));
            assert.isFalse(isString(undefined));
            assert.isFalse(isString(null));
        });

        it(`should return false given empty string`, () => {
            assert.isFalse(isString(''));
        });

        it(`should return true given empty string when isDefaultTrue flag is set`, () => {
            assert.isTrue(isString('', true));
        });
    });

    describe(`isUndefined (value: any): boolean`, () => {
        it(`should return true given undefined`, () => {
            assert.isTrue(isUndefined(undefined));
        });

        it(`should return true given defined value`, () => {
            assert.isFalse(isUndefined(true));
            assert.isFalse(isUndefined(1337));
            assert.isFalse(isUndefined('Lorem Ipsum'));
            assert.isFalse(isUndefined({ foo: 'bar' }));
            assert.isFalse(isUndefined([1, 2, 3]));
            assert.isFalse(isUndefined(null));
        });
    });
});

////////////////////////////////////////////////////////////////////////////////////////////////////



