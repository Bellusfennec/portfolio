import Icon from '@/components/common/Icon'
import ModalButton from '@/components/common/button/ModalButton'
import ModalMiniButton from '@/components/common/button/ModalMiniButton'
import NavLinkButton from '@/components/common/button/NavLinkButton'
import CheckboxInput from '@/components/common/Input/CheckboxInput'
import ModalWindow from '@/components/common/modal/ModalWindow'
import ModalWrapper from '@/components/common/wrapper/ModalWrapper'
import useForm from '@/hooks/useForm'
import useModal from '@/hooks/useModal'
import { getRandomNumberId } from '@/utils/randomId'
import SmartModeForm from '../../form/TimesSmartModeForm'

const data = {
  smartMode: false,
  times: [
    { id: '1', time: '9:00', percent: '30' },
    { id: '2', time: '10:00', percent: '40' },
  ],
}

const SmartModeModal = () => {
  const { isOpen, handlerToggle } = useModal()
  const { form, setForm, handlerChange, handlerSubmit } = useForm({ data })

  const handlerCreateTime = () => {
    const newTime = { id: getRandomNumberId(), time: '', percent: '' }
    setForm(state => ({ ...state, times: [...state.times, newTime] }))
  }
  return (
    <>
      <NavLinkButton onClick={handlerToggle} label="Умный режим" icon="code-san-box" />
      <ModalWindow isOpen={isOpen} onClickOut={handlerToggle} width={480}>
        <ModalWrapper>
          <div className="flex justify-between items-center">
            <h3 className="font-bold">Умный режим</h3>
            <button onClick={handlerToggle}>
              <Icon name="close-light" className="w-[32px] h-[32px]" />
            </button>
          </div>
          <CheckboxInput
            value={form.smartMode}
            name="smartMode"
            onChange={handlerChange}
            label="Умный режим"
          />
          <div className="flex flex-col gap-[6px]">
            <div className="grid grid-cols-2 gap-[9px]">
              <p className="font-medium text-[14px] w-full">Время</p>
              <p className="font-medium text-[14px] w-full">Процент рабочих потоков</p>
            </div>
            <SmartModeForm data={form.times} onChange={handlerChange} name="times" />
            <div>
              <ModalMiniButton onClick={handlerCreateTime}>Добавить</ModalMiniButton>
            </div>
          </div>
          <div className="flex justify-end gap-[10px]">
            <ModalButton onClick={handlerToggle}>Отмена</ModalButton>
            <ModalButton className="bg-blue-#1 text-white border-none">Сохранить</ModalButton>
          </div>
        </ModalWrapper>
      </ModalWindow>
    </>
  )
}

export default SmartModeModal
