import { InputContainer } from "./styled";

interface InputProps {
  label: string;
  placeholder: string;
  secondaryLabel?: string;
  w?: "half" | "full";
}

export const Input: React.FC<InputProps> = ({
  label,
  w = "full",
  secondaryLabel,
  placeholder,
}) => {
  return (
    <InputContainer w={w}>
      <label>{label} {secondaryLabel && <span className="secondary-label">{secondaryLabel}</span>}</label>
      <input placeholder={placeholder} />
    </InputContainer>
  );
};
