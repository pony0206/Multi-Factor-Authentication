import * as styles from "./header.css.ts";

type Props = {
    link: string;
    title: string;
    description: string;
}

export default function Header() {
  return (
    <div className="bg-teal w-full flex flex-col items-center justify-center pt-5 pb-3">
      <h1 className="text-white text-6xl">メンタルヘルスケアサービス</h1>
      <p className="text-black text-xl pt-3">
        <span className="text-3xl">Al</span>が
        <span className="text-3xl">24</span>
        時間あなたのご相談にのります。　人に言いにくいことでも、まずは話してみてください。
      </p>
      <div className="transform skew-x-40 h-2 w-180 bg-yellow"></div>
    </div>
  );
}
