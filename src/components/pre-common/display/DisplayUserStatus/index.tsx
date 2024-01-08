import Icon from '../../../common/Icon'
import StatusTag from '../../tag/StatusTag'

interface IDisplayUserStatusProps {
  value: string
}

const DisplayUserStatus = (props: IDisplayUserStatusProps) => {
  const { value } = props
  const displayStatus = (value: string) => {
    if (value === 'active')
      return (
        <StatusTag
          className="bg-green-#3"
          label="Активний"
          labelClassName="text-green-#2"
          icon="check"
          iconClassName="text-green-#1"
        />
      )
    if (value === 'deleted')
      return (
        <StatusTag
          className="bg-red-#3"
          label="Удалений"
          labelClassName="text-red-#2"
          icon="close"
          iconClassName="text-red-#2"
        />
      )
    return value
  }
  return displayStatus(value)
}

export default DisplayUserStatus
