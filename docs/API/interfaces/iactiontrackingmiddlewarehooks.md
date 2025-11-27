---
id: "iactiontrackingmiddlewarehooks"
title: "IActionTrackingMiddlewareHooks"
sidebar_label: "IActionTrackingMiddlewareHooks"
---

[mobx-state-tree - v5.4.1](../index.md) › [IActionTrackingMiddlewareHooks](iactiontrackingmiddlewarehooks.md)

## Type parameters

▪ **T**

## Hierarchy

- **IActionTrackingMiddlewareHooks**

## Index

### Properties

- [filter](iactiontrackingmiddlewarehooks.md#optional-filter)
- [onFail](iactiontrackingmiddlewarehooks.md#onfail)
- [onResume](iactiontrackingmiddlewarehooks.md#onresume)
- [onStart](iactiontrackingmiddlewarehooks.md#onstart)
- [onSuccess](iactiontrackingmiddlewarehooks.md#onsuccess)
- [onSuspend](iactiontrackingmiddlewarehooks.md#onsuspend)

## Properties

### `Optional` filter

• **filter**? : _undefined | function_

_Defined in [src/middlewares/create-action-tracking-middleware.ts:6](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/middlewares/create-action-tracking-middleware.ts#L6)_

---

### onFail

• **onFail**: _function_

_Defined in [src/middlewares/create-action-tracking-middleware.ts:11](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/middlewares/create-action-tracking-middleware.ts#L11)_

#### Type declaration:

▸ (`call`: [IMiddlewareEvent](imiddlewareevent.md), `context`: T, `error`: any): _void_

**Parameters:**

| Name      | Type                                    |
| --------- | --------------------------------------- |
| `call`    | [IMiddlewareEvent](imiddlewareevent.md) |
| `context` | T                                       |
| `error`   | any                                     |

---

### onResume

• **onResume**: _function_

_Defined in [src/middlewares/create-action-tracking-middleware.ts:8](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/middlewares/create-action-tracking-middleware.ts#L8)_

#### Type declaration:

▸ (`call`: [IMiddlewareEvent](imiddlewareevent.md), `context`: T): _void_

**Parameters:**

| Name      | Type                                    |
| --------- | --------------------------------------- |
| `call`    | [IMiddlewareEvent](imiddlewareevent.md) |
| `context` | T                                       |

---

### onStart

• **onStart**: _function_

_Defined in [src/middlewares/create-action-tracking-middleware.ts:7](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/middlewares/create-action-tracking-middleware.ts#L7)_

#### Type declaration:

▸ (`call`: [IMiddlewareEvent](imiddlewareevent.md)): _T_

**Parameters:**

| Name   | Type                                    |
| ------ | --------------------------------------- |
| `call` | [IMiddlewareEvent](imiddlewareevent.md) |

---

### onSuccess

• **onSuccess**: _function_

_Defined in [src/middlewares/create-action-tracking-middleware.ts:10](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/middlewares/create-action-tracking-middleware.ts#L10)_

#### Type declaration:

▸ (`call`: [IMiddlewareEvent](imiddlewareevent.md), `context`: T, `result`: any): _void_

**Parameters:**

| Name      | Type                                    |
| --------- | --------------------------------------- |
| `call`    | [IMiddlewareEvent](imiddlewareevent.md) |
| `context` | T                                       |
| `result`  | any                                     |

---

### onSuspend

• **onSuspend**: _function_

_Defined in [src/middlewares/create-action-tracking-middleware.ts:9](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/middlewares/create-action-tracking-middleware.ts#L9)_

#### Type declaration:

▸ (`call`: [IMiddlewareEvent](imiddlewareevent.md), `context`: T): _void_

**Parameters:**

| Name      | Type                                    |
| --------- | --------------------------------------- |
| `call`    | [IMiddlewareEvent](imiddlewareevent.md) |
| `context` | T                                       |
