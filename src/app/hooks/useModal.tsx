import { useEffect, useState } from 'react'

export function useModal() {
  const [isOpen, setOpen] = useState(false)

  const handlerToggle = () => setOpen(!isOpen)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return { isOpen, setOpen, handlerToggle }
}

export default useModal
