import { useLayoutEffect } from 'react'

export default function useLockBodyScroll() {
  useLayoutEffect(() => {
    // 获取原始body的overflow值
    const originalStyle = window.getComputedStyle(document.body).overflow
    //防止在mount的过程中滚动
    document.body.style.overflow = 'hidden'
    // 当组件unmount的时候解锁滚动
    return () => (document.body.style.overflow = originalStyle)
  }, [])
}
