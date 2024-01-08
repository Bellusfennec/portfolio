import { IHandlerChange } from '@/hooks/useForm'
import Icon from '../../../common/Icon'

export interface ITextInputProps {
  placeholder?: string
  label?: string
  value: string
  name: string
  onChange: ({ name, value }: IHandlerChange) => void
  type?: string
  isSearch?: boolean
  classNameInput?: string
}

const TextInput = (props: ITextInputProps) => {
  const {
    placeholder,
    label,
    value,
    name,
    onChange,
    type = 'text',
    isSearch,
    classNameInput,
  } = props

  const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    onChange?.({ name, value })
  }

  return (
    <div className="flex flex-col gap-[6px]">
      {label && <p className="font-medium text-[14px] text-grey-#3">{label}</p>}
      <div
        className={
          'flex items-center gap-[8px] border border-grey-#4 px-[16px] py-[12px] rounded-[8px] bg-white' +
          (classNameInput ? ' ' + classNameInput : '')
        }
      >
        {isSearch && <Icon name="search" className="text-grey-#3 !w-[20px] !h-[20px]" />}
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={handlerChange}
          className="placeholder:text-grey-#3 outline-none w-full"
        />
      </div>
    </div>
  )
}

export default TextInput
