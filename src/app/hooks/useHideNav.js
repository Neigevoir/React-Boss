import useHideFooter from './useHideFooter'
import useHideHeader from './useHideHeader'

export default function useHideNav() {
  useHideHeader()
  useHideFooter()
}
