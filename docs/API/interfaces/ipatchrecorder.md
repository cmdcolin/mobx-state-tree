---
id: "ipatchrecorder"
title: "IPatchRecorder"
sidebar_label: "IPatchRecorder"
---

[mobx-state-tree - v5.4.1](../index.md) › [IPatchRecorder](ipatchrecorder.md)

## Hierarchy

- **IPatchRecorder**

## Index

### Properties

- [inversePatches](ipatchrecorder.md#inversepatches)
- [patches](ipatchrecorder.md#patches)
- [recording](ipatchrecorder.md#recording)
- [reversedInversePatches](ipatchrecorder.md#reversedinversepatches)

### Methods

- [replay](ipatchrecorder.md#replay)
- [resume](ipatchrecorder.md#resume)
- [stop](ipatchrecorder.md#stop)
- [undo](ipatchrecorder.md#undo)

## Properties

### inversePatches

• **inversePatches**: _ReadonlyArray‹[IJsonPatch](ijsonpatch.md)›_

_Defined in [src/core/mst-operations.ts:138](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/core/mst-operations.ts#L138)_

---

### patches

• **patches**: _ReadonlyArray‹[IJsonPatch](ijsonpatch.md)›_

_Defined in [src/core/mst-operations.ts:137](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/core/mst-operations.ts#L137)_

---

### recording

• **recording**: _boolean_

_Defined in [src/core/mst-operations.ts:140](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/core/mst-operations.ts#L140)_

---

### reversedInversePatches

• **reversedInversePatches**: _ReadonlyArray‹[IJsonPatch](ijsonpatch.md)›_

_Defined in [src/core/mst-operations.ts:139](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/core/mst-operations.ts#L139)_

## Methods

### replay

▸ **replay**(`target?`: IAnyStateTreeNode): _void_

_Defined in [src/core/mst-operations.ts:143](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/core/mst-operations.ts#L143)_

**Parameters:**

| Name      | Type              |
| --------- | ----------------- |
| `target?` | IAnyStateTreeNode |

**Returns:** _void_

---

### resume

▸ **resume**(): _void_

_Defined in [src/core/mst-operations.ts:142](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/core/mst-operations.ts#L142)_

**Returns:** _void_

---

### stop

▸ **stop**(): _void_

_Defined in [src/core/mst-operations.ts:141](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/core/mst-operations.ts#L141)_

**Returns:** _void_

---

### undo

▸ **undo**(`target?`: IAnyStateTreeNode): _void_

_Defined in [src/core/mst-operations.ts:144](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/core/mst-operations.ts#L144)_

**Parameters:**

| Name      | Type              |
| --------- | ----------------- |
| `target?` | IAnyStateTreeNode |

**Returns:** _void_
