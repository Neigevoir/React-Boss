import { useRef, useEffect } from 'react'

export default function useLogin(value) {
  const ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}
