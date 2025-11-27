---
id: "iactioncontext"
title: "IActionContext"
sidebar_label: "IActionContext"
---

[mobx-state-tree - v5.4.1](../index.md) › [IActionContext](iactioncontext.md)

## Hierarchy

- **IActionContext**

  ↳ [IMiddlewareEvent](imiddlewareevent.md)

## Index

### Properties

- [args](iactioncontext.md#args)
- [context](iactioncontext.md#context)
- [id](iactioncontext.md#id)
- [name](iactioncontext.md#name)
- [parentActionEvent](iactioncontext.md#parentactionevent)
- [tree](iactioncontext.md#tree)

## Properties

### args

• **args**: _any[]_

_Defined in [src/core/actionContext.ts:20](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/core/actionContext.ts#L20)_

Event arguments in an array (action arguments for actions)

---

### context

• **context**: _IAnyStateTreeNode_

_Defined in [src/core/actionContext.ts:15](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/core/actionContext.ts#L15)_

Event context (node where the action was invoked)

---

### id

• **id**: _number_

_Defined in [src/core/actionContext.ts:9](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/core/actionContext.ts#L9)_

Event unique id

---

### name

• **name**: _string_

_Defined in [src/core/actionContext.ts:6](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/core/actionContext.ts#L6)_

Event name (action name for actions)

---

### parentActionEvent

• **parentActionEvent**: _[IMiddlewareEvent](imiddlewareevent.md) | undefined_

_Defined in [src/core/actionContext.ts:12](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/core/actionContext.ts#L12)_

Parent action event object

---

### tree

• **tree**: _IAnyStateTreeNode_

_Defined in [src/core/actionContext.ts:17](https://github.com/mobxjs/mobx-state-tree/blob/922ac098/src/core/actionContext.ts#L17)_

Event tree (root node of the node where the action was invoked)
