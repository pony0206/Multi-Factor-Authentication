import React from "react";
import ScaleButton from "@/components/button/scaleButton.tsx";
interface Props {
  onScale: () => void;
  label: string;
  scale: string;
  gap1: string;
  gap: string;
}

// export default Service=({  onLogin }: Props) =>{
const Service: React.FC<Props> = ({ onScale, label, scale, gap1, gap }) => {
  // export default Service: React.FC = () => {
  const [openTab, setOpenTab] = React.useState(1);
  const [message, setMessage] = React.useState("");
  const [consultation, setConsultation] = React.useState(
    <>
      相談内容を選択すると、メッセージが表示されるので、
      <br />
      ご相談内容をメッセージでお送りください。
      <br />
      AIの返信は一度の応答に1分程度掛かりますので、
      <br />
      ご送信後、少々おまちください。
    </>,
  );

  return (
    <div className="border rounded-2xl bg-teal-light w-full flex flex-col items-center justify-center pt-14">
      <div className="w-full flex justify-center items-baseline  relative">
        <h1 className="text-brown text-5xl">AIチャットサービス</h1>
        <div className="absolute right-20" onClick={onScale}>
          <ScaleButton label={label} />
        </div>
      </div>
      <div className="w-full h-14"></div>
      <div className=" w-[90%]">
        <div>
          <ul className="flex " role="tablist">
            <li
              className={
                "flex-auto text-center  text-black border-[5px] bg-yellow-light" +
                (openTab === 1
                  ? " border-b-0 border-green rounded-t-2xl border-b-white"
                  : " border-yellow-dark border-b-green rounded-t-2xl border-r-0")
              }
            >
              <a
                className="text-2xl uppercase px-5 py-4 block leading-normal text-black"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                  console.log("tab", openTab);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                AIお悩み相談
              </a>
            </li>
            <li
              className={
                "flex-auto text-center  text-black border-[5px] bg-yellow-light" +
                (openTab === 2
                  ? " border-b-0 border-green  rounded-t-2xl border-b-white"
                  : " border-yellow-dark border-b-green rounded-t-2xl border-l-0")
              }
            >
              <a
                className="text-2xl uppercase px-5 py-4 block leading-normal text-black"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                  console.log("tab", openTab);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                AIハラスメント相談
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-yellow-light w-full border-[5px]  border-t-0 border-green">
            <div className="px-16 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div>
                    <button
                      type="button"
                      className="px-28 py-4 my-3 bg-green rounded-xl text-xl"
                    >
                      AIがさまざまな問題をサポートいたします。
                    </button>
                    <div className="bg-white rounded-lg px-10">
                      <div className="h-40"></div>
                      <div className={"flex items-start " + gap}>
                        <img
                          src="/assets/images/bear12.svg"
                          className={scale}
                        />
                        <div className={"flex flex-col " + gap1}>
                          <div className={"flex " + gap1}>
                            <img
                              src="/assets/images/chat1.svg"
                              className={
                                scale +
                                " drop-shadow-3xl cursor-pointer hover:drop-shadow-4xl"
                              }
                              onClick={() =>
                                setConsultation(
                                  <>
                                    相談内容 1 :
                                    <br />
                                    こんにちは、
                                    <br />
                                    ようこそお越しくださいました
                                    <br />
                                    ご相談内容をメッセージでお送りください。
                                  </>,
                                )
                              }
                            />
                            <img
                              src="/assets/images/chat2.svg"
                              className={
                                scale +
                                " drop-shadow-3xl cursor-pointer hover:drop-shadow-4xl"
                              }
                              onClick={() =>
                                setConsultation(
                                  <>
                                    相談内容 2 :
                                    <br />
                                    こんにちは、
                                    <br />
                                    ようこそお越しくださいました
                                    <br />
                                    ご相談内容をメッセージでお送りください。
                                  </>,
                                )
                              }
                            />
                            <img
                              src="/assets/images/chat3.svg"
                              className={
                                scale +
                                " drop-shadow-3xl cursor-pointer hover:drop-shadow-4xl"
                              }
                              onClick={() =>
                                setConsultation(
                                  <>
                                    相談内容 3 :
                                    <br />
                                    ご相談内容をメッセージでお送りください。
                                    <br />
                                    AIの返信は一度の応答に1分程度掛かりますので、
                                    <br />
                                    ご送信後、少々おまちください。
                                  </>,
                                )
                              }
                            />
                            <img
                              src="/assets/images/chat4.svg"
                              className={
                                scale +
                                " drop-shadow-3xl cursor-pointer hover:drop-shadow-4xl"
                              }
                              onClick={() =>
                                setConsultation(
                                  <>
                                    相談内容 4 :
                                    <br />
                                    ご相談内容をメッセージでお送りください。
                                    <br />
                                    AIの返信は一度の応答に1分程度掛かりますので、
                                    <br />
                                    ご送信後、少々おまちください。
                                  </>,
                                )
                              }
                            />
                            <img
                              src="/assets/images/chat5.svg"
                              className={
                                scale +
                                " drop-shadow-3xl cursor-pointer hover:drop-shadow-4xl"
                              }
                              onClick={() =>
                                setConsultation(
                                  <>
                                    相談内容 5 :
                                    <br />
                                    こんにちは、
                                    <br />
                                    ようこそお越しくださいました
                                    <br />
                                    ご相談内容をメッセージでお送りください。
                                  </>,
                                )
                              }
                            />
                          </div>
                          <div className={"flex " + gap1}>
                            <img
                              src="/assets/images/chat6.svg"
                              className={
                                scale +
                                " drop-shadow-3xl cursor-pointer hover:drop-shadow-4xl"
                              }
                              onClick={() =>
                                setConsultation(
                                  <>
                                    相談内容 6 :
                                    <br />
                                    こんにちは、
                                    <br />
                                    ようこそお越しくださいました
                                    <br />
                                    ご相談内容をメッセージでお送りください。
                                  </>,
                                )
                              }
                            />
                            <img
                              src="/assets/images/chat7.svg"
                              className={
                                scale +
                                " drop-shadow-3xl cursor-pointer hover:drop-shadow-4xl"
                              }
                              onClick={() =>
                                setConsultation(
                                  <>
                                    相談内容 7 :
                                    <br />
                                    ご相談内容をメッセージでお送りください。
                                    <br />
                                    AIの返信は一度の応答に1分程度掛かりますので、
                                    <br />
                                    ご送信後、少々おまちください。
                                  </>,
                                )
                              }
                            />
                            <img
                              src="/assets/images/chat8.svg"
                              className={
                                scale +
                                " drop-shadow-3xl cursor-pointer hover:drop-shadow-4xl"
                              }
                              onClick={() =>
                                setConsultation(
                                  <>
                                    相談内容 8 :
                                    <br />
                                    ご相談内容をメッセージでお送りください。
                                    <br />
                                    AIの返信は一度の応答に1分程度掛かりますので、
                                    <br />
                                    ご送信後、少々おまちください。
                                  </>,
                                )
                              }
                            />
                            <img
                              src="/assets/images/chat9.svg"
                              className={
                                scale +
                                " drop-shadow-3xl cursor-pointer hover:drop-shadow-4xl"
                              }
                              onClick={() =>
                                setConsultation(
                                  <>
                                    相談内容 9 :
                                    <br />
                                    こんにちは、
                                    <br />
                                    ようこそお越しくださいました
                                    <br />
                                    ご相談内容をメッセージでお送りください。
                                  </>,
                                )
                              }
                            />
                            <img
                              src="/assets/images/chat10.svg"
                              className={
                                scale +
                                " drop-shadow-3xl cursor-pointer hover:drop-shadow-4xl"
                              }
                              onClick={() =>
                                setConsultation(
                                  <>
                                    相談内容 10 :
                                    <br />
                                    こんにちは、
                                    <br />
                                    ようこそお越しくださいました
                                    <br />
                                    ご相談内容をメッセージでお送りください。
                                  </>,
                                )
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <div className={"flex items-center py-16 " + gap}>
                        <img
                          src="/assets/images/bear12.svg"
                          className={scale}
                        />
                        <div className={"flex flex-col " + gap1}>
                          <div className={"flex " + gap1}>
                            <div className="talk-bubble tri-right round border3 left-top">
                              <div className="talktext">
                                <p>{consultation}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-t-gray-400 border-t w-full"></div>
                      <p className="text-gray-400 py-3">
                        メッセージを入力してください。
                      </p>
                      <div className="flex items-baseline gap-2">
                        <input
                          type="text"
                          placeholder="メッセージを入力してください"
                          onChange={(e) => setMessage(e.target.value)}
                          value={message}
                          required
                          className="w-full rounded-lg border bg-transparent py-4 pl-6 pr-10 outline-none border-form-strokedark bg-form-input focus:border-primary mb-5"
                        />
                        <img
                          src="/assets/images/msg_send.svg"
                          className=" rounded-md hover:scale-125 cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div>
                    <button
                      type="button"
                      className="px-28 py-4 my-3 bg-green rounded-xl text-xl"
                    >
                      AIがさまざまな問題をサポートいたします。
                    </button>
                    <div className="bg-white rounded-lg px-10">
                      <div className="h-40"></div>
                      <div className="border-t-gray-400 border-t w-full"></div>
                      <p className="text-gray-400 py-3">
                        メッセージを入力してください。
                      </p>
                      <div className="flex items-baseline gap-2">
                        <input
                          type="text"
                          placeholder="メッセージを入力してください"
                          onChange={(e) => setMessage(e.target.value)}
                          value={message}
                          required
                          className="w-full rounded-lg border bg-transparent py-4 pl-6 pr-10 outline-none border-form-strokedark bg-form-input focus:border-primary mb-5"
                        />
                        <img src="/assets/images/msg_send.svg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-24 px-24 py-6 flex justify-between">
        <button className="bg-green px-5 py-1 rounded-full">
          ハラスメントWEB報告
        </button>
        <button className="bg-green px-5 py-1 rounded-full">
          メインメニューへ戻る
        </button>
      </div>
    </div>
  );
};
export default Service;
