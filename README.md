# @jbrowse/mobx-state-tree

Fork of mobx-state-tree v5.4.2 for use in jbrowse

## Current list of changes

- updated typescript
- updated to import actual filepaths instead of node module resolution
- reduced rollup config
- tried tsdown but builds were very slow for some reason
- removed process.env.NODE_ENV from code, instead exporting a setDevMode function
- converted tests to vitest
- remove unused dependencies
- updated tslint to eslint and typescript-eslint
