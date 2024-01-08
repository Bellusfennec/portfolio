import Icon from '@/components/common/Icon'
import BigButton from '@/components/common/button/BigButton'
import ModalButton from '@/components/common/button/ModalButton'
import ModalTextInput from '@/components/common/input/ModalTextInput'
import ModalWindow from '@/components/common/modal/ModalWindow'
import ModalWrapper from '@/components/common/wrapper/ModalWrapper'
import useForm from '@/hooks/useForm'
import useModal from '@/hooks/useModal'
import { createUser } from '@/store/slices/user.slicer'
import { useAppDispatch } from '@/store/store'

const data = {
  login: '',
  password: '',
  firstName: '',
  lastName: '',
}

const CreateUserModal = () => {
  const { isOpen, handlerToggle } = useModal()
  const { form, handlerChange, handlerSubmit } = useForm({ data, onSubmit })
  const dispatch = useAppDispatch()

  function onSubmit(data: any) {
    dispatch(createUser(data))
    handlerToggle()
  }

  return (
    <>
      <BigButton onClick={handlerToggle}>Добавить пользователя</BigButton>
      <ModalWindow isOpen={isOpen} onClickOut={handlerToggle} width={480}>
        <ModalWrapper>
          <div className="flex justify-between items-center">
            <div>Добавить пользователя</div>
            <button onClick={handlerToggle}>
              <Icon name="close-light" className="w-[32px] h-[32px]" />
            </button>
          </div>
          <div className="flex flex-col gap-[6px]">
            <ModalTextInput
              label="Логин пользователя"
              onChange={handlerChange}
              value={form.login}
              name="login"
            />
            <ModalTextInput
              label="Пароль пользователя"
              onChange={handlerChange}
              value={form.password}
              name="password"
            />
            <ModalTextInput
              label="Имя"
              onChange={handlerChange}
              value={form.firstName}
              name="firstName"
            />
            <ModalTextInput
              label="Фамилия"
              onChange={handlerChange}
              value={form.lastName}
              name="lastName"
            />
          </div>
          <div className="flex justify-end gap-[10px]">
            <ModalButton onClick={handlerToggle}>Отмена</ModalButton>
            <ModalButton onClick={handlerSubmit} className="bg-blue-#1 text-white border-none">
              Добавить
            </ModalButton>
          </div>
        </ModalWrapper>
      </ModalWindow>
    </>
  )
}

export default CreateUserModal
