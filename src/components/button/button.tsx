import * as styles from "./button.css.ts";

type Props = {
  link: string;
  title: string;
};

export default function Button({ link, title }: Props) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="px-4 w-56 h-20 flex justify-center items-center border rounded-2xl bg-teal-dark">
        <h1 className="flex justify-center items-center text-white text-lg">{title}</h1>
    </a>
  );
}
