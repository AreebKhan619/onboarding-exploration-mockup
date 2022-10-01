import { CustomButton } from "./styled";

interface InputProps {
  text: string;
  variant: "primary" | "secondary" | "tertiary" | "ghost";
  span?: "block";
}

export const Button: React.FC<InputProps> = ({
  text,
  variant = "primary",
  span = "block",
}) => {
  return (
    <CustomButton variant={variant} span={span}>
      {text}
    </CustomButton>
  );
};
