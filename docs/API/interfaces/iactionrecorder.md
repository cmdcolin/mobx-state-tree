---
id: "iactionrecorder"
title: "IActionRecorder"
sidebar_label: "IActionRecorder"
---

[mobx-state-tree - v5.4.1](../index.md) › [IActionRecorder](iactionrecorder.md)

## Hierarchy

- **IActionRecorder**

## Index

### Properties

- [actions](iactionrecorder.md#actions)
- [recording](iactionrecorder.md#recording)

### Methods

- [replay](iactionrecorder.md#replay)
- [resume](iactionrecorder.md#resume)
- [stop](iactionrecorder.md#stop)

## Properties

### actions

• **actions**: _ReadonlyArray‹[ISerializedActionCall](iserializedactioncall.md)›_

_Defined in [src/middlewares/on-action.ts:37](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/middlewares/on-action.ts#L37)_

---

### recording

• **recording**: _boolean_

_Defined in [src/middlewares/on-action.ts:38](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/middlewares/on-action.ts#L38)_

## Methods

### replay

▸ **replay**(`target`: IAnyStateTreeNode): _void_

_Defined in [src/middlewares/on-action.ts:41](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/middlewares/on-action.ts#L41)_

**Parameters:**

| Name     | Type              |
| -------- | ----------------- |
| `target` | IAnyStateTreeNode |

**Returns:** _void_

---

### resume

▸ **resume**(): _void_

_Defined in [src/middlewares/on-action.ts:40](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/middlewares/on-action.ts#L40)_

**Returns:** _void_

---

### stop

▸ **stop**(): _void_

_Defined in [src/middlewares/on-action.ts:39](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/middlewares/on-action.ts#L39)_

**Returns:** _void_
