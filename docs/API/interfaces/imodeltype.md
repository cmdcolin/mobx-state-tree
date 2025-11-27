---
id: "imodeltype"
title: "IModelType"
sidebar_label: "IModelType"
---

[mobx-state-tree - v5.4.1](../index.md) › [IModelType](imodeltype.md)

## Type parameters

▪ **PROPS**: _ModelProperties_

▪ **OTHERS**

▪ **CustomC**

▪ **CustomS**

## Hierarchy

- [IType](itype.md)‹ModelCreationType2‹PROPS, CustomC›, ModelSnapshotType2‹PROPS, CustomS›, ModelInstanceType‹PROPS, OTHERS››

  ↳ **IModelType**

  ↳ [IAnyModelType](ianymodeltype.md)

## Index

### Properties

- [identifierAttribute](imodeltype.md#optional-identifierattribute)
- [name](imodeltype.md#name)
- [properties](imodeltype.md#properties)

### Methods

- [actions](imodeltype.md#actions)
- [create](imodeltype.md#create)
- [describe](imodeltype.md#describe)
- [extend](imodeltype.md#extend)
- [is](imodeltype.md#is)
- [named](imodeltype.md#named)
- [postProcessSnapshot](imodeltype.md#postprocesssnapshot)
- [preProcessSnapshot](imodeltype.md#preprocesssnapshot)
- [props](imodeltype.md#props)
- [validate](imodeltype.md#validate)
- [views](imodeltype.md#views)
- [volatile](imodeltype.md#volatile)

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

---

### properties

• **properties**: _PROPS_

_Defined in [src/types/complex-types/model.ts:187](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/types/complex-types/model.ts#L187)_

## Methods

### actions

▸ **actions**<**A**>(`fn`: function): _[IModelType](imodeltype.md)‹PROPS, OTHERS & A, CustomC, CustomS›_

_Defined in [src/types/complex-types/model.ts:201](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/types/complex-types/model.ts#L201)_

**Type parameters:**

▪ **A**: _ModelActions_

**Parameters:**

▪ **fn**: _function_

▸ (`self`: [Instance](../index.md#instance)‹this›): _A_

**Parameters:**

| Name   | Type                                   |
| ------ | -------------------------------------- |
| `self` | [Instance](../index.md#instance)‹this› |

**Returns:** _[IModelType](imodeltype.md)‹PROPS, OTHERS & A, CustomC, CustomS›_

---

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

### extend

▸ **extend**<**A**, **V**, **VS**>(`fn`: function): _[IModelType](imodeltype.md)‹PROPS, OTHERS & A & V & VS, CustomC, CustomS›_

_Defined in [src/types/complex-types/model.ts:209](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/types/complex-types/model.ts#L209)_

**Type parameters:**

▪ **A**: _ModelActions_

▪ **V**: _Object_

▪ **VS**: _Object_

**Parameters:**

▪ **fn**: _function_

▸ (`self`: [Instance](../index.md#instance)‹this›): _object_

**Parameters:**

| Name   | Type                                   |
| ------ | -------------------------------------- |
| `self` | [Instance](../index.md#instance)‹this› |

**Returns:** _[IModelType](imodeltype.md)‹PROPS, OTHERS & A & V & VS, CustomC, CustomS›_

---

### is

▸ **is**(`thing`: any): _thing is ModelCreationType2<PROPS, CustomC> | this["Type"]_

_Inherited from [IType](itype.md).[is](itype.md#is)_

_Defined in [src/core/type/type.ts:104](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/core/type/type.ts#L104)_

Checks if a given snapshot / instance is of the given type.

**Parameters:**

| Name    | Type | Description                         |
| ------- | ---- | ----------------------------------- |
| `thing` | any  | Snapshot or instance to be checked. |

**Returns:** _thing is ModelCreationType2<PROPS, CustomC> | this["Type"]_

true if the value is of the current type, false otherwise.

---

### named

▸ **named**(`newName`: string): _[IModelType](imodeltype.md)‹PROPS, OTHERS, CustomC, CustomS›_

_Defined in [src/types/complex-types/model.ts:189](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/types/complex-types/model.ts#L189)_

**Parameters:**

| Name      | Type   |
| --------- | ------ |
| `newName` | string |

**Returns:** _[IModelType](imodeltype.md)‹PROPS, OTHERS, CustomC, CustomS›_

---

### postProcessSnapshot

▸ **postProcessSnapshot**<**NewS**>(`fn`: function): _[IModelType](imodeltype.md)‹PROPS, OTHERS, CustomC, NewS›_

_Defined in [src/types/complex-types/model.ts:217](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/types/complex-types/model.ts#L217)_

**Type parameters:**

▪ **NewS**

**Parameters:**

▪ **fn**: _function_

▸ (`snapshot`: ModelSnapshotType2‹PROPS, CustomS›): _NewS_

**Parameters:**

| Name       | Type                               |
| ---------- | ---------------------------------- |
| `snapshot` | ModelSnapshotType2‹PROPS, CustomS› |

**Returns:** _[IModelType](imodeltype.md)‹PROPS, OTHERS, CustomC, NewS›_

---

### preProcessSnapshot

▸ **preProcessSnapshot**<**NewC**>(`fn`: function): _[IModelType](imodeltype.md)‹PROPS, OTHERS, NewC, CustomS›_

_Defined in [src/types/complex-types/model.ts:213](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/types/complex-types/model.ts#L213)_

**Type parameters:**

▪ **NewC**

**Parameters:**

▪ **fn**: _function_

▸ (`snapshot`: NewC): _ModelCreationType2‹PROPS, CustomC›_

**Parameters:**

| Name       | Type |
| ---------- | ---- |
| `snapshot` | NewC |

**Returns:** _[IModelType](imodeltype.md)‹PROPS, OTHERS, NewC, CustomS›_

---

### props

▸ **props**<**PROPS2**>(`props`: PROPS2): _[IModelType](imodeltype.md)‹PROPS & ModelPropertiesDeclarationToProperties‹PROPS2›, OTHERS, CustomC, CustomS›_

_Defined in [src/types/complex-types/model.ts:193](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/types/complex-types/model.ts#L193)_

**Type parameters:**

▪ **PROPS2**: _ModelPropertiesDeclaration_

**Parameters:**

| Name    | Type   |
| ------- | ------ |
| `props` | PROPS2 |

**Returns:** _[IModelType](imodeltype.md)‹PROPS & ModelPropertiesDeclarationToProperties‹PROPS2›, OTHERS, CustomC, CustomS›_

---

### validate

▸ **validate**(`thing`: ModelCreationType2‹PROPS, CustomC›, `context`: [IValidationContext](../index.md#ivalidationcontext)): _[IValidationResult](../index.md#ivalidationresult)_

_Inherited from [IType](itype.md).[validate](itype.md#validate)_

_Defined in [src/core/type/type.ts:113](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/core/type/type.ts#L113)_

Run's the type's typechecker on the given value with the given validation context.

**Parameters:**

| Name      | Type                                                 | Description                                                                     |
| --------- | ---------------------------------------------------- | ------------------------------------------------------------------------------- |
| `thing`   | ModelCreationType2‹PROPS, CustomC›                   | Value to be checked, either a snapshot or an instance.                          |
| `context` | [IValidationContext](../index.md#ivalidationcontext) | Validation context, an array of { subpaths, subtypes } that should be validated |

**Returns:** _[IValidationResult](../index.md#ivalidationresult)_

The validation result, an array with the list of validation errors.

---

### views

▸ **views**<**V**>(`fn`: function): _[IModelType](imodeltype.md)‹PROPS, OTHERS & V, CustomC, CustomS›_

_Defined in [src/types/complex-types/model.ts:197](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/types/complex-types/model.ts#L197)_

**Type parameters:**

▪ **V**: _Object_

**Parameters:**

▪ **fn**: _function_

▸ (`self`: [Instance](../index.md#instance)‹this›): _V_

**Parameters:**

| Name   | Type                                   |
| ------ | -------------------------------------- |
| `self` | [Instance](../index.md#instance)‹this› |

**Returns:** _[IModelType](imodeltype.md)‹PROPS, OTHERS & V, CustomC, CustomS›_

---

### volatile

▸ **volatile**<**TP**>(`fn`: function): _[IModelType](imodeltype.md)‹PROPS, OTHERS & TP, CustomC, CustomS›_

_Defined in [src/types/complex-types/model.ts:205](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/types/complex-types/model.ts#L205)_

**Type parameters:**

▪ **TP**: _object_

**Parameters:**

▪ **fn**: _function_

▸ (`self`: [Instance](../index.md#instance)‹this›): _TP_

**Parameters:**

| Name   | Type                                   |
| ------ | -------------------------------------- |
| `self` | [Instance](../index.md#instance)‹this› |

**Returns:** _[IModelType](imodeltype.md)‹PROPS, OTHERS & TP, CustomC, CustomS›_
