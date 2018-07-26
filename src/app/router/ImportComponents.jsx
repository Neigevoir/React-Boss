import asyncComponent from './AsyncComponent'

export const AsyncPositionContainer = asyncComponent(() =>
  import('src/app/components/position')
)
