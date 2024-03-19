import ButtonPrimary, { ButtonPrimaryProps } from "./ButtonPrimary";
import React from "react";

export interface ButtonFileProps {
  className?: string;
  sizeClass?: string;
  fontSize?: string;
  onClick?: () => void;
  onChange?: (e: any) => void;
  children?: React.ReactNode;
}

export interface ButtonFileProps extends ButtonPrimaryProps {}

const ButtonFile: React.FC<ButtonFileProps> = ({
  className = "rounded-[13px] bg-formback hover:bg-formbackhover border-[2px] border-[#949494] hover:border-[#747474]",
  sizeClass = "2xl:w-[100px] xl:w-[80px] w-[70px] 2xl:h-[40px] xl:h-[35px] h-[30px]",
  fontSize = "font-Inter font-[600] text-textwhite 2xl:text-[18px] xl:text-[16px] text-[12px]",
  children,
  onClick = () => {},
  onChange,
}) => {
  const CLASSES = `relative flex justify-center items-center cursor-pointer bg-formback hover:bg-formbackhover border-[2px] border-[#949494] hover:border-[#b7b7b7] text-textwhite ${fontSize} ${sizeClass} ${className} `;

  const hiddenFileInput = React.useRef(null);

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
  };

  return (
    <label>
      <div className={`${CLASSES}`}>
        <div
          className={`w-full h-full flex justify-center items-center ${fontSize}`}
        >
          {children || `This is Button`}
        </div>
        <input
          type="file"
          className="hidden"
          accept="image/png, video/*"
          onChange={onChange}
        />
      </div>
    </label>
  );
};

export default ButtonFile;
