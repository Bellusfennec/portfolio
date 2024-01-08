import Icon from '@/components/common/Icon'
import ModalButton from '@/components/common/button/ModalButton'
import ModalTextInput from '@/components/common/input/ModalTextInput'
import SelectInput from '@/components/common/input/SelectInput'
import ModalWindow from '@/components/common/modal/ModalWindow'
import ModalWrapper from '@/components/common/wrapper/ModalWrapper'
import useForm from '@/hooks/useForm'
import { deleteProxy, updateProxy } from '@/store/slices/proxy.slice'
import { useAppDispatch } from '@/store/store'
import { useEffect } from 'react'

interface IUpdateProxyModalProps {
  isOpen: boolean
  handlerToggle: () => void
  data: IData
}

interface IData {
  [key: string]: any
}

const initialForm = {
  name: '',
  status: '',
}

const UpdateProxyModal = (props: IUpdateProxyModalProps) => {
  const { data, isOpen, handlerToggle } = props
  const { form, setForm, handlerChange, handlerSubmit } = useForm({ data: initialForm, onSubmit })
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (Object.keys(data).length > 0) setForm({ ...initialForm, ...data })
  }, [data])

  function onSubmit(data: any) {
    dispatch(updateProxy(data))
    handlerToggle()
  }

  const handlerDelete = () => {
    if (data?.id) dispatch(deleteProxy(data?.id))
    handlerToggle()
  }

  return (
    <>
      <ModalWindow isOpen={isOpen} onClickOut={handlerToggle} width={480}>
        <ModalWrapper>
          <div className="flex justify-between items-center">
            <div></div>
            <button onClick={handlerToggle}>
              <Icon name="close-light" className="w-[32px] h-[32px]" />
            </button>
          </div>
          <ModalTextInput label="Прокси" onChange={handlerChange} value={form.name} name="name" />
          <SelectInput
            label="Прокси"
            onChange={handlerChange}
            value={form.status}
            name="status"
            options={[
              { name: 'Активно', value: 'active' },
              { name: 'Не активно', value: 'inactive' },
            ]}
          />
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

export default UpdateProxyModal
