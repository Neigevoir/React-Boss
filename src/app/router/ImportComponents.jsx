import asyncComponent from './AsyncComponent'

export const AsyncPosition = asyncComponent(() =>
  import('src/app/containers/position')
)
export const AsyncCompany = asyncComponent(() =>
  import('src/app/containers/company')
)
