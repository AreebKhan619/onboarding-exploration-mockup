import { forwardRef } from "react";
import { InputContainer } from "./styled";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
  placeholder: string;
  secondaryLabel?: string;
  w?: "half" | "full";
  mode?: "normal" | "split";
  prefix?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  w = "full",
  prefix = "Enter value",
  mode = "normal",
  secondaryLabel,
  ...inputElementProps
}, ref) => {
  const getInput = () => {
    switch (mode) {
      case "split":
        return (
          <div className="split-container">
            <span className="left">{prefix}</span>
            <input {...inputElementProps} ref={ref} />
          </div>
        );
      case "normal":
        return <input {...inputElementProps} ref={ref}/>;
      default:
        break;
    }
  };

  return (
    <InputContainer w={w}>
      <label>
        {label}{" "}
        {secondaryLabel && (
          <span className="secondary-label">{secondaryLabel}</span>
        )}
      </label>
      {getInput()}
    </InputContainer>
  );
});
