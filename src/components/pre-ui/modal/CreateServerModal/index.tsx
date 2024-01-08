import Icon from '@/components/common/Icon'
import BigButton from '@/components/common/button/BigButton'
import ModalButton from '@/components/common/button/ModalButton'
import ModalTextInput from '@/components/common/input/ModalTextInput'
import ModalWindow from '@/components/common/modal/ModalWindow'
import ModalWrapper from '@/components/common/wrapper/ModalWrapper'
import useForm from '@/hooks/useForm'
import useModal from '@/hooks/useModal'
import { createServer } from '@/store/slices/server.slice'
import { useAppDispatch } from '@/store/store'

const data = {
  name: '',
  loginAnyDesk: '',
  passwordAnyDesk: '',
  cpu: '',
  ram: '',
  storage: '',
  ip: '',
}

const CreateServerModal = () => {
  const { isOpen, handlerToggle } = useModal()
  const { form, handlerChange, handlerSubmit } = useForm({ data, onSubmit })
  const dispatch = useAppDispatch()

  function onSubmit(data: any) {
    dispatch(createServer(data))
    handlerToggle()
  }

  return (
    <>
      <BigButton onClick={handlerToggle}>Добавить сервер</BigButton>
      <ModalWindow isOpen={isOpen} onClickOut={handlerToggle} width={480}>
        <ModalWrapper>
          <div className="flex justify-between items-center">
            <div>Добавить сервер</div>
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
            <ModalButton onClick={handlerToggle}>Отмена</ModalButton>
            <ModalButton onClick={handlerSubmit} className="bg-blue-#1 text-white border-none">
              Создать
            </ModalButton>
          </div>
        </ModalWrapper>
      </ModalWindow>
    </>
  )
}

export default CreateServerModal
