import { useEffect } from 'react'

interface IProps {
  open: boolean
}

export const useDisableBodyScroll = (open: IProps) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [open])
}
