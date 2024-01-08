'use client'
import { IHandlerChange } from '@/hooks/useForm'
import style from './style.module.scss'

interface SwitchInputProps {
  value: boolean
  name: string
  onChange: ({ name, value }: IHandlerChange) => void
}

const SwitchInput = (props: SwitchInputProps) => {
  const { value, name, onChange } = props
  console.log('SwitchInput', value)

  const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked } = event.target
    const value = type === 'checkbox' ? checked : event.target.value
    onChange?.({ name, value })
  }

  return (
    <div className={style.container}>
      <label htmlFor="theme">
        <input
          className={style.input}
          type="checkbox"
          id="theme"
          name={name}
          checked={value}
          onChange={handlerChange}
        />
        <div className={style.toggle} />
      </label>
    </div>
  )
}

export default SwitchInput
