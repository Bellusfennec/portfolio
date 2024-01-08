import Icon from '@/components/common/Icon'
import BigButton from '@/components/common/button/BigButton'
import ModalButton from '@/components/common/button/ModalButton'
import ModalTextInput from '@/components/common/input/ModalTextInput'
import ModalWindow from '@/components/common/modal/ModalWindow'
import ModalWrapper from '@/components/common/wrapper/ModalWrapper'
import useForm from '@/hooks/useForm'
import useModal from '@/hooks/useModal'
import { createProxy } from '@/store/slices/proxy.slice'
import { useAppDispatch } from '@/store/store'

const data = {
  name: '',
}

const CreateProxyModal = () => {
  const { isOpen, handlerToggle } = useModal()
  const { form, handlerChange, handlerSubmit } = useForm({ data, onSubmit })
  const dispatch = useAppDispatch()

  function onSubmit(data: any) {
    dispatch(createProxy(data))
    handlerToggle()
  }

  return (
    <>
      <BigButton onClick={handlerToggle}>Добавить прокси</BigButton>
      <ModalWindow isOpen={isOpen} onClickOut={handlerToggle} width={480}>
        <ModalWrapper>
          <div className="flex justify-between items-center">
            <div></div>
            <button onClick={handlerToggle}>
              <Icon name="close-light" className="w-[32px] h-[32px]" />
            </button>
          </div>
          <ModalTextInput label="Прокси" onChange={handlerChange} value={form.name} name="name" />
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

export default CreateProxyModal
