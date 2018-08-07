import asyncComponent from './AsyncComponent'

export const AsyncPosition = asyncComponent(() =>
  import('src/app/containers/position')
)
export const AsyncCompany = asyncComponent(() =>
  import('src/app/containers/company')
)
export const AsyncNotice = asyncComponent(() =>
  import('src/app/containers/notice')
)
export const AsyncLogin = asyncComponent(() =>
  import('src/app/containers/login')
)
export const AsyncPassword = asyncComponent(() =>
  import('src/app/containers/login/password.js')
)
export const AsyncUser = asyncComponent(() =>
  import('src/app/containers/user/index.js')
)
export const AsyncCompanyDetail = asyncComponent(() =>
  import('src/app/containers/company/detail.js')
)
