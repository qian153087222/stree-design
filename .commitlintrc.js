const chalk = require('chalk')
const message = process.env['HUSKY_GIT_PARAMS']
const fs = require('fs')

const scopes = ['BAAS-*'] // 可以是好多种 scopes // test

function parseMessage(message) {
  const PATTERN = /^(\w+)(?:\(([^)]+)\))?\: (.+)$/
  const match = PATTERN.exec(message)
  if (!match) {
    return null
  }
  return {
    type: match[1] || null,
    scope: match[2] || null,
  }
}

function getScopesRule() {
  const messages = fs.readFileSync(message, { encoding: 'utf-8' })
  const parsed = parseMessage(messages.split('\n')[0])

  console.log(`${chalk.red.bgBlueBright(' COMMIT MESSAGE HEAD ')}`, parsed)

  if (!parsed) {
    return [2, 'always', scopes]
  }
  const { scope, type } = parsed
  if (scope && !scopes.includes(scope) && type !== 'release' && !/BAAS-.\d+/.test(scope)) {
    return [2, 'always', scopes]
  } else {
    return [2, 'always', []]
  }
}

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'chore', // 管理各种依赖包，库，例如：安装，卸载，重装，升级
        'docs', // 文档更新
        'feat', // 新功能
        'bug', // bug 处理
        'refactor', // 重构，包括结构，逻辑，样式
        'style', // 样式处理
        'test', // 本地测试
      ],
    ],
    'type-case': [2, 'always', 'lower-case'],
    'scope-empty': [2, 'never'],
    'scope-enum': getScopesRule,
    'scope-case': [2, 'always', 'upper-case'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'subject-case': [0, 'never'],
    'header-max-length': [2, 'always', 144],
  },
}
