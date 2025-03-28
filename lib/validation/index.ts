export const isArray = (value: unknown): value is any[] => {
    return Array.isArray(value);
};

export const isBigInt = (value: unknown): value is bigint => {
    return typeof value === 'bigint';
};

export const isBoolean = (value: unknown): value is boolean => {
    return value === true || value === false;
};

export const isDefined = (value: unknown) => !isUndefined(value);

export const isEmptyString = (value: any): boolean => {
    return value === '';
};

export const isFunction = (value: unknown): value is Function => {
    return typeof value === 'function';
};

export const isNaN = (value: unknown): boolean => {
    return Number.isNaN(value);
};

export const isNil = (value: unknown): value is null | undefined => {
    return isUndefined(value) || isNull(value);
};

export const isNull = (value: unknown): value is null => {
    return value === null;
};

export const isNumber = (value: unknown, isDefaultTrue: boolean = false): value is number => {
    return isDefaultTrue
        ? typeof value === 'number'
        : typeof value === 'number' && !isNaN(value);
};

export const isObject = (value: unknown) => !isPrimitive(value);

export const isPrimitive = (value: unknown): value is bigint | boolean | null | number | string | symbol | undefined => {
    return isNil(value) || ['bigint', 'boolean', 'number', 'string', 'symbol'].includes(typeof value);
};

export const isString = (value: unknown, isDefaultTrue: boolean = false): value is string => {
    return isDefaultTrue
        ? typeof value === 'string'
        : typeof value === 'string' && !isEmptyString(value);
};

export const isSymbol = (value: unknown): value is symbol => {
    return typeof value === 'symbol';
};

export const isUndefined = (value: unknown): value is undefined => {
    return value === undefined;
};
