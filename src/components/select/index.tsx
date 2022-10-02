import React from "react";
import { OptionContainer, SelectContainer } from "./styled";

interface SelectProps {
  value: string | null;
  onChange: (...args: any) => void;
  children: React.ReactNode;
}

interface OptionProps {
  icon?: any;
  value: string;
  title: string;
  subtitle: string;
  isSelected?: boolean;
  onClick?: (...args: any) => void;
}

const Select: React.FC<SelectProps> = ({ value, onChange, children }) => {
  const childrenWithCustomProps = React.Children.map(children, (child) => {
    return React.isValidElement(child)
      ? React.cloneElement(child as React.ReactHTMLElement<HTMLDivElement>, {
          onClick: () => onChange(child.props.value),
          isSelected: value === child.props.value,
        })
      : null;
  });

  return <SelectContainer>{childrenWithCustomProps}</SelectContainer>;
};

export const Option: React.FC<OptionProps> = ({
  icon,
  title,
  subtitle,
  onClick,
  isSelected = false,
}) => {
  return (
    <OptionContainer onClick={onClick} isSelected={isSelected}>
      {icon && <img src={icon} className="icon" />}
      <div className="title">{title}</div>
      <div className="subtitle">{subtitle}</div>
    </OptionContainer>
  );
};

export default Select;
