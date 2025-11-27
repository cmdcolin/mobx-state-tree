---
id: "imiddlewareevent"
title: "IMiddlewareEvent"
sidebar_label: "IMiddlewareEvent"
---

[mobx-state-tree - v5.4.1](../index.md) › [IMiddlewareEvent](imiddlewareevent.md)

## Hierarchy

- [IActionContext](iactioncontext.md)

  ↳ **IMiddlewareEvent**

## Index

### Properties

- [allParentIds](imiddlewareevent.md#allparentids)
- [args](imiddlewareevent.md#args)
- [context](imiddlewareevent.md#context)
- [id](imiddlewareevent.md#id)
- [name](imiddlewareevent.md#name)
- [parentActionEvent](imiddlewareevent.md#parentactionevent)
- [parentEvent](imiddlewareevent.md#parentevent)
- [parentId](imiddlewareevent.md#parentid)
- [rootId](imiddlewareevent.md#rootid)
- [tree](imiddlewareevent.md#tree)
- [type](imiddlewareevent.md#type)

## Properties

### allParentIds

• **allParentIds**: _number[]_

_Defined in [src/core/action.ts:37](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/core/action.ts#L37)_

Id of all events, from root until current (excluding current)

---

### args

• **args**: _any[]_

_Inherited from [IActionContext](iactioncontext.md).[args](iactioncontext.md#args)_

_Defined in [src/core/actionContext.ts:20](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/core/actionContext.ts#L20)_

Event arguments in an array (action arguments for actions)

---

### context

• **context**: _IAnyStateTreeNode_

_Inherited from [IActionContext](iactioncontext.md).[context](iactioncontext.md#context)_

_Defined in [src/core/actionContext.ts:15](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/core/actionContext.ts#L15)_

Event context (node where the action was invoked)

---

### id

• **id**: _number_

_Inherited from [IActionContext](iactioncontext.md).[id](iactioncontext.md#id)_

_Defined in [src/core/actionContext.ts:9](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/core/actionContext.ts#L9)_

Event unique id

---

### name

• **name**: _string_

_Inherited from [IActionContext](iactioncontext.md).[name](iactioncontext.md#name)_

_Defined in [src/core/actionContext.ts:6](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/core/actionContext.ts#L6)_

Event name (action name for actions)

---

### parentActionEvent

• **parentActionEvent**: _[IMiddlewareEvent](imiddlewareevent.md) | undefined_

_Inherited from [IActionContext](iactioncontext.md).[parentActionEvent](iactioncontext.md#parentactionevent)_

_Defined in [src/core/actionContext.ts:12](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/core/actionContext.ts#L12)_

Parent action event object

---

### parentEvent

• **parentEvent**: _[IMiddlewareEvent](imiddlewareevent.md) | undefined_

_Defined in [src/core/action.ts:32](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/core/action.ts#L32)_

Parent event object

---

### parentId

• **parentId**: _number_

_Defined in [src/core/action.ts:30](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/core/action.ts#L30)_

Parent event unique id

---

### rootId

• **rootId**: _number_

_Defined in [src/core/action.ts:35](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/core/action.ts#L35)_

Root event unique id

---

### tree

• **tree**: _IAnyStateTreeNode_

_Inherited from [IActionContext](iactioncontext.md).[tree](iactioncontext.md#tree)_

_Defined in [src/core/actionContext.ts:17](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/core/actionContext.ts#L17)_

Event tree (root node of the node where the action was invoked)

---

### type

• **type**: _[IMiddlewareEventType](../index.md#imiddlewareeventtype)_

_Defined in [src/core/action.ts:27](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/core/action.ts#L27)_

Event type
