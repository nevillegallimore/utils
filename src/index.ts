export const isArray = (value: any): boolean => {
    return Array.isArray(value);
};

export const isBoolean = (value: any): value is boolean => {
    return value === true || value === false;
};

export const isDefined = (value: any) => !isUndefined(value);

export const isNotNull = (value: any) => !isNull(value);

export const isNull = (value: any): value is null => {
    return value === null;
};

export const isNumber = (value: any, isDefaultTrue: boolean = false): value is boolean => {
    return isDefaultTrue
        ? typeof value === 'number'
        : typeof value === 'number' && !Number.isNaN(value);
};

export const isObject = (value: any): boolean => {
    return Object(value) === value;
};

export const isPrimitive = (value: any) => !isObject(value);

export const isString = (value: any, isDefaultTrue: boolean = false): value is string => {
    return isDefaultTrue
        ? typeof value === 'string'
        : typeof value === 'string' && value !== '';
};

export const isUndefined = (value: any): value is undefined => {
    return typeof value === 'undefined';
};

const utils = Object.freeze({
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
});

////////////////////////////////////////////////////////////////////////////////////////////////////

export default utils;
