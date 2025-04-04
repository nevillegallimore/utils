import { assert, describe, it } from 'vitest';
import { isArray, isBigInt, isBoolean, isDefined, isEmptyString, isFunction, isNaN, isNil, isNull, isNumber, isObject, isPrimitive, isString, isSymbol, isUndefined } from './validation/index';

describe(`isArray(value: unknown): boolean`, () => {
    it(`should return true given array`, () => {
        assert.isTrue(isArray([]));
        assert.isTrue(isArray([1, 2, 3]));
        assert.isTrue(isArray(['one', 'two', 'three']));
    });

    it(`should return false given non-array`, () => {
        assert.isFalse(isArray(undefined));
        assert.isFalse(isArray(null));
        assert.isFalse(isArray(1));
        assert.isFalse(isArray('one'));
        assert.isFalse(isArray({ one: 1, two: 2 }));
    });
});

describe(`isBigInt(value: unknown): boolean`, () => {
    it(`should return true given bigint`, () => {
        assert.isTrue(isBigInt(1n));
    });

    it(`should return false given non-bigint`, () => {
        assert.isFalse(isBigInt(undefined));
        assert.isFalse(isBigInt(null));
        assert.isFalse(isBigInt(1));
        assert.isFalse(isBigInt('one'));
        assert.isFalse(isBigInt({ one: 1 }));
        assert.isFalse(isBigInt([1, 2, 3]));
    });
});

describe(`isBoolean(value: unknown): boolean`, () => {
    it(`should return true given boolean`, () => {
        assert.isTrue(isBoolean(true));
        assert.isTrue(isBoolean(false));
    });

    it(`should return false given non-boolean`, () => {
        assert.isFalse(isBoolean(undefined));
        assert.isFalse(isBoolean(null));
        assert.isFalse(isBoolean('false'));
        assert.isFalse(isBoolean('true'));
        assert.isFalse(isBoolean(0));
        assert.isFalse(isBoolean(1));
        assert.isFalse(isBoolean({ one: true, two: false }));
        assert.isFalse(isBoolean([true, false]));
    });
});

describe(`isDefined(value: unknown): boolean`, () => {
    it(`should return true given defined value`, () => {
        assert.isTrue(isDefined(null));
        assert.isTrue(isDefined(true));
        assert.isTrue(isDefined(false));
        assert.isTrue(isDefined('foo'));
        assert.isTrue(isDefined(1));
        assert.isTrue(isDefined({ foo: 'bar' }));
        assert.isTrue(isDefined(['foo', 'bar']));
    });

    it(`should return false given undefined value`, () => {
        assert.isFalse(isDefined(undefined));
    });
});

describe(`isEmptyString(value: unknown): boolean`, () => {
    it(`should return true given empty string`, () => {
        assert.isTrue(isEmptyString(''));
    });

    it(`should return false given non-empty string`, () => {
        assert.isFalse(isEmptyString('foo'));
    });

    it(`should return false given non-string`, () => {
        assert.isFalse(isEmptyString(undefined));
        assert.isFalse(isEmptyString(null));
        assert.isFalse(isEmptyString(1));
        assert.isFalse(isEmptyString({ foo: 'bar' }));
        assert.isFalse(isEmptyString([1, 2, 3]));
    });
});

describe(`isFunction(value: unknown): boolean`, () => {
    it(`should return true given function`, () => {
        assert.isTrue(isFunction(function () {}));
        assert.isTrue(isFunction(() => {}));
    });

    it(`should return false given non-function value`, () => {
        assert.isFalse(isFunction(undefined));
        assert.isFalse(isFunction(null));
        assert.isFalse(isFunction('foo'));
        assert.isFalse(isFunction(1));
        assert.isFalse(isFunction({ foo: 'bar' }));
        assert.isFalse(isFunction([1, 2, 3]));
    });
});

describe(`isNaN(value: unknown): boolean`, () => {
    it(`should return true given Number.NaN`, () => {
        assert.isTrue(isNaN(Number.NaN));
    });

    it(`should return false given non-NaN value`, () => {
        assert.isFalse(isNaN(undefined));
        assert.isFalse(isNaN(null));
        assert.isFalse(isNaN(true));
        assert.isFalse(isNaN('foo'));
        assert.isFalse(isNaN(1));
        assert.isFalse(isNaN({ foo: 'bar' }));
        assert.isFalse(isNaN([1, 2, 3]));
    });
});

describe(`isNil(value: unknown): boolean`, () => {
    it(`should return true given null or undefined`, () => {
        assert.isTrue(isNil(undefined));
        assert.isTrue(isNil(null));
    });

    it(`should return false given non-nil value`, () => {
        assert.isFalse(isNil(true));
        assert.isFalse(isNil('foo'));
        assert.isFalse(isNil(1));
        assert.isFalse(isNil({ foo: 'bar' }));
        assert.isFalse(isNil([1, 2, 3]));
    });
});

describe(`isNull(value: unknown): boolean`, () => {
    it(`should return true given null`, () => {
        assert.isTrue(isNull(null));
    });

    it(`should return false given non-null value`, () => {
        assert.isFalse(isNull(undefined));
        assert.isFalse(isNull(true));
        assert.isFalse(isNull('foo'));
        assert.isFalse(isNull(1));
        assert.isFalse(isNull({ foo: 'bar' }));
        assert.isFalse(isNull([1, 2, 3]));
    });
});

describe(`isNumber(value: unknown): boolean`, () => {
    it(`should return true given number`, () => {
        assert.isTrue(isNumber(1));
    });

    it(`should return true given Number.NaN when isDefaultTrue is set to true`, () => {
        assert.isTrue(isNumber(Number.NaN, true));
    });

    it(`should return false given non-null value`, () => {
        assert.isFalse(isNumber(undefined));
        assert.isFalse(isNumber(true));
        assert.isFalse(isNumber('foo'));
        assert.isFalse(isNumber(Number.NaN));
        assert.isFalse(isNumber({ foo: 'bar' }));
        assert.isFalse(isNumber([1, 2, 3]));
    });
});

describe(`isObject(value: unknown): boolean`, () => {
    it(`should return true given non-primitive value`, () => {
        assert.isTrue(isObject({ foo: 'bar' }));
        assert.isTrue(isObject([1, 2, 3]));
        assert.isTrue(isObject(() => {}));
    });

    it(`should return false given primitive value`, () => {
        assert.isFalse(isObject(undefined));
        assert.isFalse(isObject(null));
        assert.isFalse(isObject(true));
        assert.isFalse(isObject('foo'));
        assert.isFalse(isObject(1));
        assert.isFalse(isObject(1n));
        assert.isFalse(isObject(Symbol('foo')));
    });
});

describe(`isPrimitive(value: unknown): boolean`, () => {
    it(`should return true given primitive value`, () => {
        assert.isTrue(isPrimitive(undefined));
        assert.isTrue(isPrimitive(null));
        assert.isTrue(isPrimitive(true));
        assert.isTrue(isPrimitive('foo'));
        assert.isTrue(isPrimitive(1));
        assert.isTrue(isPrimitive(1n));
        assert.isTrue(isPrimitive(Symbol('foo')));
    });

    it(`should return false given non-primitive value`, () => {
        assert.isFalse(isPrimitive({ foo: 'bar' }));
        assert.isFalse(isPrimitive([1, 2, 3]));
        assert.isFalse(isPrimitive(() => {}));
    });
});

describe(`isString(value: unknown): boolean`, () => {
    it(`should return true given non-empty string`, () => {
        assert.isTrue(isString('foo'));
    });

    it(`should return true given empty string when isDefaultTrue is set to true`, () => {
        assert.isTrue(isString('', true));
    });

    it(`should return true given non-string value`, () => {
        assert.isFalse(isString(undefined));
        assert.isFalse(isString(null));
        assert.isFalse(isString(true));
        assert.isFalse(isString(''));
        assert.isFalse(isString(1));
        assert.isFalse(isString(1n));
        assert.isFalse(isString(Symbol('foo')));
        assert.isFalse(isString({ foo: 'bar' }));
        assert.isFalse(isString([1, 2, 3]));
    });
});

describe(`isSymbol(value: unknown): boolean`, () => {
    it(`should return true given symbol`, () => {
        assert.isTrue(isSymbol(Symbol('foo')));
    });

    it(`should return false given non-symbol`, () => {
        assert.isFalse(isSymbol(undefined));
        assert.isFalse(isSymbol(null));
        assert.isFalse(isSymbol(true));
        assert.isFalse(isSymbol('foo'));
        assert.isFalse(isSymbol(1));
        assert.isFalse(isSymbol(1n));
        assert.isFalse(isSymbol({ foo: 'bar' }));
        assert.isFalse(isSymbol([1, 2, 3]));
    });
});

describe(`isUndefined(value: unknown): boolean`, () => {
    it(`should return true given undefined value`, () => {
        assert.isTrue(isUndefined(undefined));
    });

    it(`should return fale given defined value`, () => {
        assert.isFalse(isUndefined(null));
        assert.isFalse(isUndefined(true));
        assert.isFalse(isUndefined(false));
        assert.isFalse(isUndefined('foo'));
        assert.isFalse(isUndefined(1));
        assert.isFalse(isUndefined({ foo: 'bar' }));
        assert.isFalse(isUndefined(['foo', 'bar']));
    });
});
