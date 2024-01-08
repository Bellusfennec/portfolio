import Icon from '@/components/common/Icon'
import ModalButton from '@/components/common/button/ModalButton'
import ModalTextInput from '@/components/common/input/ModalTextInput'
import ModalWindow from '@/components/common/modal/ModalWindow'
import ModalWrapper from '@/components/common/wrapper/ModalWrapper'
import useForm from '@/hooks/useForm'
import { deleteUser, updateUser } from '@/store/slices/user.slicer'
import { useAppDispatch } from '@/store/store'
import { useEffect } from 'react'

interface IUpdateUserModalProps {
  isOpen: boolean
  handlerToggle: () => void
  data: IData
}

interface IData {
  [key: string]: any
}

const initialForm = {
  login: '',
  password: '',
  firstName: '',
  lastName: '',
}

const UpdateUserModal = (props: IUpdateUserModalProps) => {
  const { data, isOpen, handlerToggle } = props
  const { form, setForm, handlerChange, handlerSubmit } = useForm({ data: initialForm, onSubmit })
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (Object.keys(data).length > 0) setForm({ ...initialForm, ...data })
  }, [data])

  function onSubmit(data: any) {
    dispatch(updateUser(data))
    handlerToggle()
  }

  const handlerDelete = () => {
    if (data?.id) dispatch(deleteUser(data?.id))
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

export default UpdateUserModal
