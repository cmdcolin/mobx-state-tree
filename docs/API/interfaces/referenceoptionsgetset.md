---
id: "referenceoptionsgetset"
title: "ReferenceOptionsGetSet"
sidebar_label: "ReferenceOptionsGetSet"
---

[mobx-state-tree - v5.4.1](../index.md) › [ReferenceOptionsGetSet](referenceoptionsgetset.md)

## Type parameters

▪ **IT**: _[IAnyComplexType](ianycomplextype.md)_

## Hierarchy

- **ReferenceOptionsGetSet**

## Index

### Methods

- [get](referenceoptionsgetset.md#get)
- [set](referenceoptionsgetset.md#set)

## Methods

### get

▸ **get**(`identifier`: [ReferenceIdentifier](../index.md#referenceidentifier), `parent`: IAnyStateTreeNode | null): _ReferenceT‹IT›_

_Defined in [src/types/utility-types/reference.ts:442](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/types/utility-types/reference.ts#L442)_

**Parameters:**

| Name         | Type                                                   |
| ------------ | ------------------------------------------------------ |
| `identifier` | [ReferenceIdentifier](../index.md#referenceidentifier) |
| `parent`     | IAnyStateTreeNode &#124; null                          |

**Returns:** _ReferenceT‹IT›_

---

### set

▸ **set**(`value`: ReferenceT‹IT›, `parent`: IAnyStateTreeNode | null): _[ReferenceIdentifier](../index.md#referenceidentifier)_

_Defined in [src/types/utility-types/reference.ts:443](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/types/utility-types/reference.ts#L443)_

**Parameters:**

| Name     | Type                          |
| -------- | ----------------------------- |
| `value`  | ReferenceT‹IT›                |
| `parent` | IAnyStateTreeNode &#124; null |

**Returns:** _[ReferenceIdentifier](../index.md#referenceidentifier)_
