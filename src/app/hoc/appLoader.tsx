/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { loadUser } from '../store/user.slicer'
import { useAppDispatch } from '../store/hooks'

interface IAppLoaderProps {
  children: React.ReactNode
}
const AppLoader = (props: IAppLoaderProps) => {
  const { children } = props
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(loadUser())
  }, [])

  return <>{children}</>
}

export default AppLoader
