import Button, { ButtonProps } from "./Button";
import React from "react";

export interface ButtonPrimaryProps extends ButtonProps {}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  className = "",
  isError = false,
  ...args
}) => {
  return (
    <Button
      className={`bg-green hover:bg-green border-[2px] ${
        isError ? "border-[#dab71b]" : "border-[#7A7A7A]"
      } hover:border-[#ffffff] text-textwhite ${className}`}
      {...args}
    />
  );
};

export default ButtonPrimary;
