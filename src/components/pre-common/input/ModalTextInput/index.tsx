import TextInput, { ITextInputProps } from "../TextInput";

const ModalTextInput = (props: ITextInputProps) => {
  const { ...rest } = props;

  return <TextInput {...rest} classNameInput="!px-[14px] !py-[10px]" />;
};

export default ModalTextInput;
