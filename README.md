# utils
Library of shared utility functions

## Utility Functions

#### isArray (value: any): boolean
Specifies whether provided value is an array.

### isBoolean (value: any): boolean
Specifies whether provided value is a boolean.

### isDefined (value: any): boolean
Specifies whether provided value is defined. Returns false if provided value is undefined, otherwise returns true.

### isNotNull (value: any): boolean
Specifies whether provided value is not null. Returns false if provided value is null, otherwise returns true.

### isNull (value: any): boolean
Specifies whether provided value is null.

### isNumber (value: any, isDefaultTrue?: boolean): boolean
Specifies whether provided value is a number. The function returns false for Number.NaN, unless isDefaultTrue flag is set.

### isObject (value: any): boolean
Specifies whether provided value is an object. Object in this context means that its properties can be accessed without causing a runtime error.

### isPrimitive (value: any): boolean
Specifies whether provided value is a primitive. Primitive in this context means that accessing its properties would cause a runtime error.

### isString (value: any, isDefaultTrue?: boolean): boolean
Specifies whether provided value is a string. The function returns false for empty strings, unless isDefaultTrue flag is set.

### isUndefined (Value: any): boolean
Specifies whether provided value is undefined.
