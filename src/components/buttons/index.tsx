import { CustomButton } from "./styled";
import { InputProps } from "./types";

export const Button: React.FC<InputProps> = ({
  text,
  variant = "primary",
  wSpan = "block",
  ...buttonProps
}) => {
  return (
    <CustomButton variant={variant} wSpan={wSpan} {...buttonProps}>
      {text}
    </CustomButton>
  );
};
