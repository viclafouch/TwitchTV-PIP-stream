import globals from 'globals'
import importsConfig from '@viclafouch/eslint-config-viclafouch/imports.mjs'
import baseConfig from '@viclafouch/eslint-config-viclafouch/index.mjs'
import prettierConfig from '@viclafouch/eslint-config-viclafouch/prettier.mjs'

/**
 * @type {import("eslint").Linter.Config}
 */
export default [
  ...baseConfig,
  ...importsConfig,
  ...prettierConfig,
  {
    languageOptions: {
      globals: {
        ...globals.webextensions
      }
    }
  }
]
