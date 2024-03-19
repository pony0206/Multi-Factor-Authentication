import Image from "next/image";
import Button from "@/components/button/button.tsx";

export default function Menu() {
  return (
    <div className="w-full pt-5 pb-3">
      <div className="flex gap-3 justify-center">
        <div className="flex flex-col gap-5 mt-4 items-center">
          <h1 className="text-teal text-7xl tracking-widest">MENU</h1>
          <p className="text-gray-dark text-lg pt-3 flex flex-col">
            <span>以下のメニューから</span>
            <span>お選びください。</span>
          </p>
        </div>
        {/* <Image
            src="/assets/images/bear.png"
            alt="Bear Logo"
            width={100}
            height={80}
            priority
        /> */}
        <img src="/assets/images/bear.png" className="w-20 h-32" />
      </div>
      <div>
        <p className="mt-14 border-l-8 border-gray-dark pl-3 text-3xl">
          チャットサービスメニュー
        </p>
        <p className="mt-6 border-gray-dark pl-5 text-lg">
          AIとのチャットサービスは24時間ご利用可能。
        </p>
        <p className=" border-gray-dark pl-5 text-lg">
          サイト右のチャット相談からお入りください。
        </p>
        <div className="flex gap-6 mt-10 text-center">
          <Button
            link="https://commonchatfw.cghosting.cloud/c/new"
            title="AIお悩み相談 Menu"
          />
          <Button
            link="https://commonchatfw.cghosting.cloud/c/new"
            title="AIハラスメント診断"
          />
        </div>
      </div>
      <div>
        <p className="mt-20 border-l-8 border-gray-dark pl-3 text-3xl">
            セルフサービスメニュー
        </p>
        <p className="mt-6 border-gray-dark pl-5 text-lg">
            ご自身のメンタルヘルスをチェックしたり、解消するお手伝いをいたします。
        </p>
        <p className=" border-gray-dark pl-5 text-lg">
            以下のサービスよりお選びください。
        </p>
        <div className="flex gap-6 mt-10 text-center">
          <Button
            link="https://commonchatfw.cghosting.cloud/c/new"
            title="セルフケア セルフケア MENU"
          />
          <Button
            link="https://commonchatfw.cghosting.cloud/c/new"
            title="心理テスト"
          />
        </div>
        <div className="flex gap-6 mt-10 text-center">
          <Button
            link="https://commonchatfw.cghosting.cloud/c/new"
            title="ハラスメント Web報告"
          />
          <Button
            link="https://commonchatfw.cghosting.cloud/c/new"
            title="有人ハラスメント 相談窓口"
          />
        </div>
      </div>
    </div>
  );
}
