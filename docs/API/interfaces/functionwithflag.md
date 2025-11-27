---
id: "functionwithflag"
title: "FunctionWithFlag"
sidebar_label: "FunctionWithFlag"
---

[mobx-state-tree - v5.4.1](../index.md) › [FunctionWithFlag](functionwithflag.md)

## Hierarchy

- Function

  ↳ **FunctionWithFlag**

## Index

### Properties

- [Function](functionwithflag.md#function)
- [\_isFlowAction](functionwithflag.md#optional-_isflowaction)
- [\_isMSTAction](functionwithflag.md#optional-_ismstaction)
- [arguments](functionwithflag.md#arguments)
- [caller](functionwithflag.md#caller)
- [length](functionwithflag.md#length)
- [name](functionwithflag.md#name)
- [prototype](functionwithflag.md#prototype)

### Methods

- [[Symbol.hasInstance]](functionwithflag.md#[symbol.hasinstance])
- [apply](functionwithflag.md#apply)
- [bind](functionwithflag.md#bind)
- [call](functionwithflag.md#call)
- [toString](functionwithflag.md#tostring)

## Properties

### Function

• **Function**: _FunctionConstructor_

Defined in node_modules/typescript/lib/lib.es5.d.ts:316

---

### `Optional` \_isFlowAction

• **\_isFlowAction**? : _undefined | false | true_

_Defined in [src/core/action.ts:42](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/core/action.ts#L42)_

---

### `Optional` \_isMSTAction

• **\_isMSTAction**? : _undefined | false | true_

_Defined in [src/core/action.ts:41](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/core/action.ts#L41)_

---

### arguments

• **arguments**: _any_

_Inherited from void_

Defined in node_modules/typescript/lib/lib.es5.d.ts:302

---

### caller

• **caller**: _Function_

_Inherited from void_

Defined in node_modules/typescript/lib/lib.es5.d.ts:303

---

### length

• **length**: _number_

_Inherited from void_

Defined in node_modules/typescript/lib/lib.es5.d.ts:299

---

### name

• **name**: _string_

_Inherited from void_

Defined in node_modules/typescript/lib/lib.es2015.core.d.ts:97

Returns the name of the function. Function names are read-only and can not be changed.

---

### prototype

• **prototype**: _any_

_Inherited from void_

Defined in node_modules/typescript/lib/lib.es5.d.ts:298

## Methods

### [Symbol.hasInstance]

▸ **[Symbol.hasInstance]**(`value`: any): _boolean_

_Inherited from void_

Defined in node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:157

Determines whether the given value inherits from this function if this function was used
as a constructor function.

A constructor function can control which objects are recognized as its instances by
'instanceof' by overriding this method.

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `value` | any  |

**Returns:** _boolean_

---

### apply

▸ **apply**(`this`: Function, `thisArg`: any, `argArray?`: any): _any_

_Inherited from void_

Defined in node_modules/typescript/lib/lib.es5.d.ts:278

Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.

**Parameters:**

| Name        | Type     | Description                                      |
| ----------- | -------- | ------------------------------------------------ |
| `this`      | Function | -                                                |
| `thisArg`   | any      | The object to be used as the this object.        |
| `argArray?` | any      | A set of arguments to be passed to the function. |

**Returns:** _any_

---

### bind

▸ **bind**(`this`: Function, `thisArg`: any, ...`argArray`: any[]): _any_

_Inherited from void_

Defined in node_modules/typescript/lib/lib.es5.d.ts:293

For a given function, creates a bound function that has the same body as the original function.
The this object of the bound function is associated with the specified object, and has the specified initial parameters.

**Parameters:**

| Name          | Type     | Description                                                            |
| ------------- | -------- | ---------------------------------------------------------------------- |
| `this`        | Function | -                                                                      |
| `thisArg`     | any      | An object to which the this keyword can refer inside the new function. |
| `...argArray` | any[]    | A list of arguments to be passed to the new function.                  |

**Returns:** _any_

---

### call

▸ **call**(`this`: Function, `thisArg`: any, ...`argArray`: any[]): _any_

_Inherited from void_

Defined in node_modules/typescript/lib/lib.es5.d.ts:285

Calls a method of an object, substituting another object for the current object.

**Parameters:**

| Name          | Type     | Description                                     |
| ------------- | -------- | ----------------------------------------------- |
| `this`        | Function | -                                               |
| `thisArg`     | any      | The object to be used as the current object.    |
| `...argArray` | any[]    | A list of arguments to be passed to the method. |

**Returns:** _any_

---

### toString

▸ **toString**(): _string_

_Inherited from void_

Defined in node_modules/typescript/lib/lib.es5.d.ts:296

Returns a string representation of a function.

**Returns:** _string_
