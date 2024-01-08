import Icon from '../../../common/Icon'
import StatusTag from '../../tag/StatusTag'

interface IDisplayServerStatusProps {
  value: string
}

const DisplayServerStatus = (props: IDisplayServerStatusProps) => {
  const { value } = props
  const displayStatus = (value: string) => {
    if (value === 'active')
      return (
        <StatusTag
          className="bg-green-#3"
          label="Активно"
          labelClassName="text-green-#2"
          icon="check"
          iconClassName="text-green-#1"
        />
      )
    if (value === 'inactive')
      return (
        <StatusTag
          className="bg-red-#3"
          label="Не активно"
          labelClassName="text-red-#2"
          icon="close"
          iconClassName="text-red-#2"
        />
      )
    return value
  }
  return displayStatus(value)
}

export default DisplayServerStatus
