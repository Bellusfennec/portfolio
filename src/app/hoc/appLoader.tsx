/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types'
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
AppLoader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}

export default AppLoader
