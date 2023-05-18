import Image from "next/image";
import { ChangeEvent, FormEvent } from "react";

interface formInputProps {
  svg: any;
  setFormStateFn: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  id: string;
  type: string;
  svgAlt: string;
  pattern?: string;
  setInvalidState?: (e: FormEvent<HTMLInputElement>) => void;
}

const FormInput = ({
  svg,
  setFormStateFn,
  placeholder,
  id,
  type,
  svgAlt,
  pattern,
  setInvalidState,
}: formInputProps) => (
  <div className="flex rounded-md border-2 align-middle">
    <Image src={svg} alt={svgAlt} className="ml-2 mr-4 py-3" />
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className="bg-transparent py-3 font-light placeholder-white"
      required
      onChange={setFormStateFn}
      pattern={pattern}
      onInvalid={setInvalidState}
    />
  </div>
);

export default FormInput;
