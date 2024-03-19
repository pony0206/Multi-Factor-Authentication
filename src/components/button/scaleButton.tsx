import * as styles from "./button.css.ts";
interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}
type Props = {
  label: string;
  onClick: () => void;
};

export default function ScaleButton({ onClick, label, ...props }: ButtonProps) {
  return (
    <div>
      <button
        type="button"
        className="border rounded-lg bg-brown py-2 px-4 text-white text-lg"
        {...props}
      >
        {label}
      </button>
      {/* <div className="flex justify-center items-center border rounded-lg bg-brown py-2 px-4">
        <p className="flex justify-center items-center text-white text-lg">
          {label}
        </p>
      </div> */}
    </div>
  );
}
