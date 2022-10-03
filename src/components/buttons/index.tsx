import { CustomButton } from "./styled";

interface InputProps extends React.HTMLProps<HTMLButtonElement> {
  text: string;
  variant: "primary" | "secondary" | "tertiary" | "ghost";
  wSpan?: "block";
}

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
