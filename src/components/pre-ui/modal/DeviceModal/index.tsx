import Icon from "@/components/common/Icon";
import ModalButton from "@/components/common/button/ModalButton";
import NavLinkButton from "@/components/common/button/NavLinkButton";
import ModalTextInput from "@/components/common/input/ModalTextInput";
import ModalWindow from "@/components/common/modal/ModalWindow";
import ModalWrapper from "@/components/common/wrapper/ModalWrapper";
import useForm from "@/hooks/useForm";
import useModal from "@/hooks/useModal";

const data = {
  telephone: "70",
  pc: "25",
  table: "5"
};

const DeviceModal = () => {
  const { isOpen, handlerToggle } = useModal();
  const { form, setForm, handlerChange, handlerSubmit } = useForm({ data });

  return (
    <>
      <NavLinkButton onClick={handlerToggle} label="Устройства" icon="smartphone" />
      <ModalWindow isOpen={isOpen} onClickOut={handlerToggle} width={480}>
        <ModalWrapper>
          <div className="flex justify-between items-center">
            <h3 className="font-bold">Устройства</h3>
            <button onClick={handlerToggle}>
              <Icon name="close-light" className="w-[32px] h-[32px]" />
            </button>
          </div>
          <div className="flex flex-col gap-[6px]">
            <ModalTextInput label="Телефон" onChange={handlerChange} value={form.telephone} name="telephone" />
            <ModalTextInput label="ПК" onChange={handlerChange} value={form.pc} name="pc" />
            <ModalTextInput label="Планшет" onChange={handlerChange} value={form.table} name="table" />
          </div>
          <div className="flex justify-end gap-[10px]">
            <ModalButton onClick={handlerToggle}>Отмена</ModalButton>
            <ModalButton className="bg-blue-#1 text-white border-none">Сохранить</ModalButton>
          </div>
        </ModalWrapper>
      </ModalWindow>
    </>
  );
};

export default DeviceModal;
