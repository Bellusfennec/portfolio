import Icon from '@/components/common/Icon'
import ModalButton from '@/components/common/button/ModalButton'
import NavLinkButton from '@/components/common/button/NavLinkButton'
import CheckboxInput from '@/components/common/Input/CheckboxInput'
import ModalTextInput from '@/components/common/input/ModalTextInput'
import ModalWindow from '@/components/common/modal/ModalWindow'
import ModalWrapper from '@/components/common/wrapper/ModalWrapper'
import useForm from '@/hooks/useForm'
import useModal from '@/hooks/useModal'

const data = {
  main: '30-60',
  longMode: true,
  extra: '15-30',
  transitions: '2-4',
}

const TimeInSiteModal = () => {
  const { isOpen, handlerToggle } = useModal()
  const { form, setForm, handlerChange, handlerSubmit } = useForm({ data })

  return (
    <>
      <NavLinkButton onClick={handlerToggle} label="Время на сайте" icon="clock" />
      <ModalWindow isOpen={isOpen} onClickOut={handlerToggle} width={480}>
        <ModalWrapper>
          <div className="flex justify-between items-center">
            <h3 className="font-bold">Время на сайте</h3>
            <button onClick={handlerToggle}>
              <Icon name="close-light" className="w-[32px] h-[32px]" />
            </button>
          </div>
          <div className="flex flex-col gap-[6px]">
            <ModalTextInput
              label="На главной"
              onChange={handlerChange}
              value={form.main}
              name="main"
            />
            <CheckboxInput
              label="Долгий режим"
              onChange={handlerChange}
              value={form.longMode}
              name="longMode"
            />
            <ModalTextInput
              label="На доп страницах"
              onChange={handlerChange}
              value={form.extra}
              name="extra"
            />
            <ModalTextInput
              label="Кол. переходов"
              onChange={handlerChange}
              value={form.transitions}
              name="transitions"
            />
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

export default TimeInSiteModal
