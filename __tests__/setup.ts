import { configure } from "mobx"
import { beforeEach } from "vitest"

beforeEach(() => {
  configure({ enforceActions: "never" })
})
