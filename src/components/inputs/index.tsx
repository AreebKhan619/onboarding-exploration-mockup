import { InputContainer } from "./styled";

interface InputProps {
  label: string;
  placeholder: string;
  secondaryLabel?: string;
  w?: "half" | "full";
  mode?: "normal" | "split";
  prefix?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  w = "full",
  prefix = "Enter value",
  mode = "normal",
  secondaryLabel,
  placeholder,
}) => {
  const getInput = () => {
    switch (mode) {
      case "split":
        return (
          <div className="split-container">
            <span className="left">{prefix}</span>
            <input placeholder={placeholder} />
          </div>
        );
      case "normal":
        return <input placeholder={placeholder} />;
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
};
