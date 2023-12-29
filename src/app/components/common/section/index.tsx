import { useEffect, useRef } from 'react'
import './style.scss'

interface ISectionProps {
  children?: React.ReactNode
  className?: string
  id?: string
  onIntersected?: (arg0: boolean) => void
}

const Section = (props: ISectionProps) => {
  const { children, className, id, onIntersected } = props

  const observerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        onIntersected?.(entry.isIntersecting)
      },
      { rootMargin: '-300px' }
    )
    if (observerRef.current !== null) {
      observer.observe(observerRef.current)
    }
    return () => observer.disconnect()
  }, [onIntersected])

  return (
    <section
      ref={observerRef}
      id={id || ''}
      className={'section' + (className ? ` ${className}` : '')}
    >
      {children}
    </section>
  )
}

export default Section
