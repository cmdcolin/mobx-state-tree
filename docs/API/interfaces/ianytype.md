---
id: "ianytype"
title: "IAnyType"
sidebar_label: "IAnyType"
---

[mobx-state-tree - v5.4.1](../index.md) › [IAnyType](ianytype.md)

Any kind of type.

## Hierarchy

- [IType](itype.md)‹any, any, any›

  ↳ **IAnyType**

## Index

### Properties

- [identifierAttribute](ianytype.md#optional-identifierattribute)
- [name](ianytype.md#name)

### Methods

- [create](ianytype.md#create)
- [describe](ianytype.md#describe)
- [is](ianytype.md#is)
- [validate](ianytype.md#validate)

## Properties

### `Optional` identifierAttribute

• **identifierAttribute**? : _undefined | string_

_Inherited from [IType](itype.md).[identifierAttribute](itype.md#optional-identifierattribute)_

_Defined in [src/core/type/type.ts:89](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/core/type/type.ts#L89)_

Name of the identifier attribute or null if none.

---

### name

• **name**: _string_

_Inherited from [IType](itype.md).[name](itype.md#name)_

_Defined in [src/core/type/type.ts:84](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/core/type/type.ts#L84)_

Friendly type name.

## Methods

### create

▸ **create**(`snapshot?`: [C](undefined), `env?`: any): _this["Type"]_

_Inherited from [IType](itype.md).[create](itype.md#create)_

_Defined in [src/core/type/type.ts:96](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/core/type/type.ts#L96)_

Creates an instance for the type given an snapshot input.

**Parameters:**

| Name        | Type           |
| ----------- | -------------- |
| `snapshot?` | [C](undefined) |
| `env?`      | any            |

**Returns:** _this["Type"]_

An instance of that type.

---

### describe

▸ **describe**(): _string_

_Inherited from [IType](itype.md).[describe](itype.md#describe)_

_Defined in [src/core/type/type.ts:118](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/core/type/type.ts#L118)_

Gets the textual representation of the type as a string.

**Returns:** _string_

---

### is

▸ **is**(`thing`: any): _thing is any | this["Type"]_

_Inherited from [IType](itype.md).[is](itype.md#is)_

_Defined in [src/core/type/type.ts:104](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/core/type/type.ts#L104)_

Checks if a given snapshot / instance is of the given type.

**Parameters:**

| Name    | Type | Description                         |
| ------- | ---- | ----------------------------------- |
| `thing` | any  | Snapshot or instance to be checked. |

**Returns:** _thing is any | this["Type"]_

true if the value is of the current type, false otherwise.

---

### validate

▸ **validate**(`thing`: any, `context`: [IValidationContext](../index.md#ivalidationcontext)): _[IValidationResult](../index.md#ivalidationresult)_

_Inherited from [IType](itype.md).[validate](itype.md#validate)_

_Defined in [src/core/type/type.ts:113](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/core/type/type.ts#L113)_

Run's the type's typechecker on the given value with the given validation context.

**Parameters:**

| Name      | Type                                                 | Description                                                                     |
| --------- | ---------------------------------------------------- | ------------------------------------------------------------------------------- |
| `thing`   | any                                                  | Value to be checked, either a snapshot or an instance.                          |
| `context` | [IValidationContext](../index.md#ivalidationcontext) | Validation context, an array of { subpaths, subtypes } that should be validated |

**Returns:** _[IValidationResult](../index.md#ivalidationresult)_

The validation result, an array with the list of validation errors.
