---
id: "ivalidationerror"
title: "IValidationError"
sidebar_label: "IValidationError"
---

[mobx-state-tree - v5.4.1](../index.md) › [IValidationError](ivalidationerror.md)

Type validation error

## Hierarchy

- **IValidationError**

## Index

### Properties

- [context](ivalidationerror.md#context)
- [message](ivalidationerror.md#optional-message)
- [value](ivalidationerror.md#value)

## Properties

### context

• **context**: _[IValidationContext](../index.md#ivalidationcontext)_

_Defined in [src/core/type/type-checker.ts:28](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/core/type/type-checker.ts#L28)_

Validation context

---

### `Optional` message

• **message**? : _undefined | string_

_Defined in [src/core/type/type-checker.ts:32](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/core/type/type-checker.ts#L32)_

Error message

---

### value

• **value**: _any_

_Defined in [src/core/type/type-checker.ts:30](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/core/type/type-checker.ts#L30)_

Value that was being validated, either a snapshot or an instance
