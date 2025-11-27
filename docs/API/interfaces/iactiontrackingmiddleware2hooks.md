---
id: "iactiontrackingmiddleware2hooks"
title: "IActionTrackingMiddleware2Hooks"
sidebar_label: "IActionTrackingMiddleware2Hooks"
---

[mobx-state-tree - v5.4.1](../index.md) › [IActionTrackingMiddleware2Hooks](iactiontrackingmiddleware2hooks.md)

## Type parameters

▪ **TEnv**

## Hierarchy

- **IActionTrackingMiddleware2Hooks**

## Index

### Properties

- [filter](iactiontrackingmiddleware2hooks.md#optional-filter)
- [onFinish](iactiontrackingmiddleware2hooks.md#onfinish)
- [onStart](iactiontrackingmiddleware2hooks.md#onstart)

## Properties

### `Optional` filter

• **filter**? : _undefined | function_

_Defined in [src/middlewares/createActionTrackingMiddleware2.ts:11](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/middlewares/createActionTrackingMiddleware2.ts#L11)_

---

### onFinish

• **onFinish**: _function_

_Defined in [src/middlewares/createActionTrackingMiddleware2.ts:13](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/middlewares/createActionTrackingMiddleware2.ts#L13)_

#### Type declaration:

▸ (`call`: [IActionTrackingMiddleware2Call](iactiontrackingmiddleware2call.md)‹TEnv›, `error?`: any): _void_

**Parameters:**

| Name     | Type                                                                      |
| -------- | ------------------------------------------------------------------------- |
| `call`   | [IActionTrackingMiddleware2Call](iactiontrackingmiddleware2call.md)‹TEnv› |
| `error?` | any                                                                       |

---

### onStart

• **onStart**: _function_

_Defined in [src/middlewares/createActionTrackingMiddleware2.ts:12](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/middlewares/createActionTrackingMiddleware2.ts#L12)_

#### Type declaration:

▸ (`call`: [IActionTrackingMiddleware2Call](iactiontrackingmiddleware2call.md)‹TEnv›): _void_

**Parameters:**

| Name   | Type                                                                      |
| ------ | ------------------------------------------------------------------------- |
| `call` | [IActionTrackingMiddleware2Call](iactiontrackingmiddleware2call.md)‹TEnv› |
