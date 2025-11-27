import { configure } from "mobx"
import { beforeEach } from "vitest"
import { setDevMode } from "../src/internal.ts"

if (process.env.NODE_ENV !== "production") {
  setDevMode(true)
}

beforeEach(() => {
  configure({ enforceActions: "never" })
})
