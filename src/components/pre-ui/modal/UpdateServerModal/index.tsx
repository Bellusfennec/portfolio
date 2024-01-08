import Icon from '@/components/common/Icon'
import ModalButton from '@/components/common/button/ModalButton'
import ModalTextInput from '@/components/common/input/ModalTextInput'
import SelectInput from '@/components/common/input/SelectInput'
import ModalWindow from '@/components/common/modal/ModalWindow'
import ModalWrapper from '@/components/common/wrapper/ModalWrapper'
import useForm from '@/hooks/useForm'
import { deleteServer, updateServer } from '@/store/slices/server.slice'
import { useAppDispatch } from '@/store/store'
import { useEffect } from 'react'

interface IUpdateServerModalProps {
  isOpen: boolean
  handlerToggle: () => void
  data: IData
}

interface IData {
  [key: string]: any
}

const initialForm = {
  status: '',
  name: '',
  loginAnyDesk: '',
  passwordAnyDesk: '',
  cpu: '',
  ram: '',
  storage: '',
  ip: '',
}

const UpdateServerModal = (props: IUpdateServerModalProps) => {
  const { data, isOpen, handlerToggle } = props
  const { form, setForm, handlerChange, handlerSubmit } = useForm({ data: initialForm, onSubmit })
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (Object.keys(data).length > 0) setForm({ ...initialForm, ...data })
  }, [data])

  function onSubmit(data: any) {
    dispatch(updateServer(data))
    handlerToggle()
  }

  const handlerDelete = () => {
    if (data?.id) dispatch(deleteServer(data?.id))
    handlerToggle()
  }

  return (
    <>
      <ModalWindow isOpen={isOpen} onClickOut={handlerToggle} width={480}>
        <ModalWrapper>
          <div className="flex justify-between items-center">
            <div>Редактирование пользователя</div>
            <button onClick={handlerToggle}>
              <Icon name="close-light" className="w-[32px] h-[32px]" />
            </button>
          </div>
          <div className="flex flex-col gap-[8px]">
            <h3 className="font-semibold text-[18px]">Media-talk 3 сервер</h3>
            <p className="text-[#667085] text-[14px]">
              16 ГБ память / 16 соrе Процессор / 480 ГБ Хранилище
            </p>
          </div>
          <div className="flex flex-col gap-[6px]">
            <SelectInput
              label="Статус"
              onChange={handlerChange}
              value={form.status}
              name="status"
              options={[
                { name: 'Активно', value: 'active' },
                { name: 'Не активно', value: 'inactive' },
              ]}
            />
            <ModalTextInput
              label="Название сервера"
              onChange={handlerChange}
              value={form.name}
              name="name"
            />
            <ModalTextInput
              label="Логин anydesk"
              onChange={handlerChange}
              value={form.loginAnyDesk}
              name="loginAnyDesk"
            />
            <ModalTextInput
              label="Пароль anydesk"
              onChange={handlerChange}
              value={form.passwordAnyDesk}
              name="passwordAnyDesk"
            />
            <ModalTextInput
              label="Процессор"
              onChange={handlerChange}
              value={form.cpu}
              name="cpu"
            />
            <ModalTextInput label="ОЗУ" onChange={handlerChange} value={form.ram} name="ram" />
            <ModalTextInput
              label="Хранилище"
              onChange={handlerChange}
              value={form.storage}
              name="storage"
            />
            <ModalTextInput label="IP-адрес" onChange={handlerChange} value={form.ip} name="ip" />
          </div>
          <div className="flex justify-end gap-[10px]">
            <ModalButton onClick={handlerDelete}>Удалить</ModalButton>
            <ModalButton onClick={handlerSubmit} className="bg-blue-#1 text-white border-none">
              Сохранить
            </ModalButton>
          </div>
        </ModalWrapper>
      </ModalWindow>
    </>
  )
}

export default UpdateServerModal
