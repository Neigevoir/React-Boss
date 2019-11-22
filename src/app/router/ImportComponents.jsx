import { lazy } from 'react'

export const AsyncPosition = lazy(() => import('src/app/containers/position'))
export const AsyncCompany = lazy(() => import('src/app/containers/company'))
export const AsyncNotice = lazy(() => import('src/app/containers/notice'))
export const AsyncLogin = lazy(() => import('src/app/containers/login'))
export const AsyncPassword = lazy(() =>
  import('src/app/containers/login/password.js')
)
export const AsyncUser = lazy(() => import('src/app/containers/user'))
export const AsyncCompanyDetail = lazy(() =>
  import('src/app/containers/company_detail')
)
