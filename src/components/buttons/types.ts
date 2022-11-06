export interface InputProps
  extends CustomButtonProps,
    React.HTMLAttributes<HTMLButtonElement> {
  text: string;
}

export interface CustomButtonProps {
  variant: "primary" | "secondary" | "tertiary" | "ghost";
  wSpan?: "block";
}
