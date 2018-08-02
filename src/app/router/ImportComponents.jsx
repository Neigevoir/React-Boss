import asyncComponent from './AsyncComponent'

export const AsyncPosition = asyncComponent(() =>
  import('src/app/components/position')
)
// export const AsyncCompany = asyncComponent(() =>
//   import('src/app/components/company')
// )
