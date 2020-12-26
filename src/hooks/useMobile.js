import { useState, useEffect } from 'react'
// Returns if viewport there are match with tablet vw
export const useMobile = () => {
  // Set State of mobile match
  const [mobile, setMobile] = useState(false)
  useEffect(() => {
    const tablet = window.matchMedia('screen and (max-width: 768px)')
    tablet.matches && setMobile(true)
  }, [mobile])
  return { mobile }
}
