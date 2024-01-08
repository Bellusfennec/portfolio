"use client";
import { useEffect, useState } from "react";

interface IUseFormProps {
  data: IData;
  validConfig?: object;
  onSubmit?: (object: IData) => void;
}
interface IData {
  [key: string]: any;
}

export interface IHandlerChange {
  name: string;
  value: any;
}

const useForm = (props: IUseFormProps) => {
  const { data = {}, validConfig = {}, onSubmit } = props;
  const [isLoading, setLoading] = useState(true);
  const [form, setForm] = useState(data);

  const handlerChange = ({ name, value }: IHandlerChange) => {
    setForm(state => ({ ...state, [name]: value }));
  };

  const handlerSubmit = (event: any) => {
    // event.preventDefault();
    onSubmit?.(form);
    setForm(data);
  };

  useEffect(() => {
    if (Object.keys(data).length > 0) {
      setLoading(false);
      // setForm(data)
    }
  }, [data]);

  return { form, setForm, handlerChange, handlerSubmit, isLoading };
};

export default useForm;
