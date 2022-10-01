import { CustomInput, InputContainer } from "./styled";

interface InputProps {
  label: string;
  w?: "half" | "full";
  placeholder: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  w = "full",
  placeholder,
}) => {
  return (
    <InputContainer w={w}>
      <label>{label}</label>
      <input placeholder={placeholder} />
    </InputContainer>
  );
};
