import { IHandlerChange } from '@/hooks/useForm'
import Icon from '../../../common/Icon'

interface TextInputAuthProps {
  placeholder?: string
  value: string
  name: string
  onChange: ({ name, value }: IHandlerChange) => void
  type?: string
  isSearch?: boolean
}

const TextInputAuth = (props: TextInputAuthProps) => {
  const { placeholder, value, name, onChange, type = 'text', isSearch } = props

  const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    onChange?.({ name, value })
  }

  return (
    <div>
      <div className="flex items-center gap-[8px] border border-grey-#4 px-[16px] py-[12px] rounded-[8px] bg-white">
        {isSearch && <Icon name="search" className="text-grey-#3 !w-[20px] !h-[20px]" />}
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={handlerChange}
          className="placeholder:text-grey-#3  outline-none"
        />
      </div>
    </div>
  )
}

export default TextInputAuth
