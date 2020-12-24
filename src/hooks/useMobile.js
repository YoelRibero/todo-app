import { useState, useEffect } from 'react'

export const useMobile = () => {
  const [mobile, setMobile] = useState(false)
  useEffect(() => {
    const tablet = window.matchMedia('screen and (max-width: 768px)')
    tablet.matches && setMobile(true)
  }, [mobile])
  return { mobile }
}
