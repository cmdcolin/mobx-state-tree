---
id: "isnapshotprocessors"
title: "ISnapshotProcessors"
sidebar_label: "ISnapshotProcessors"
---

[mobx-state-tree - v5.4.1](../index.md) › [ISnapshotProcessors](isnapshotprocessors.md)

Snapshot processors.

## Type parameters

▪ **IT**: _[IAnyType](ianytype.md)_

▪ **CustomC**

▪ **CustomS**

## Hierarchy

- **ISnapshotProcessors**

## Index

### Methods

- [postProcessor](isnapshotprocessors.md#optional-postprocessor)
- [preProcessor](isnapshotprocessors.md#optional-preprocessor)

## Methods

### `Optional` postProcessor

▸ **postProcessor**(`snapshot`: IT["SnapshotType"], `node`: [Instance](../index.md#instance)‹IT›): _CustomS_

_Defined in [src/types/utility-types/snapshotProcessor.ts:211](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/types/utility-types/snapshotProcessor.ts#L211)_

Function that transforms an output snapshot.

**Parameters:**

| Name       | Type                                 | Description |
| ---------- | ------------------------------------ | ----------- |
| `snapshot` | IT["SnapshotType"]                   |             |
| `node`     | [Instance](../index.md#instance)‹IT› | -           |

**Returns:** _CustomS_

---

### `Optional` preProcessor

▸ **preProcessor**(`snapshot`: CustomC): _IT["CreationType"]_

_Defined in [src/types/utility-types/snapshotProcessor.ts:206](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/types/utility-types/snapshotProcessor.ts#L206)_

Function that transforms an input snapshot.

**Parameters:**

| Name       | Type    |
| ---------- | ------- |
| `snapshot` | CustomC |

**Returns:** _IT["CreationType"]_
