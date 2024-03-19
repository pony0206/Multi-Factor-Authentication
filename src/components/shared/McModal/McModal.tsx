import { Dialog, Transition } from "@headlessui/react";
import { useWallet } from "@solana/wallet-adapter-react";
import Image from "next/image";
import { FC, Fragment, ReactNode, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/user";
import { IUser } from "../../types";
import { imgSrc } from "../../utils";
import ButtonImage from "../Button/ButtonImage";

export interface McModalProps {
  renderContent: () => ReactNode;
  renderTrigger?: (openModal: Function) => ReactNode;
  contentExtraClass?: string;
  contentPaddingClass?: string;
  triggerText?: ReactNode;
  user?: IUser;
  isOpenProp?: boolean;
  onCloseModal?: () => void;
}

const McModal: FC<McModalProps> = ({
  renderContent,
  contentExtraClass = "max-w-screen-xl",
  contentPaddingClass = "py-4 px-0 md:py-5",
  user,
  isOpenProp,
  onCloseModal,
}) => {
  let [isOpen, setIsOpen] = useState(!!isOpenProp);
  const { connected, disconnect } = useWallet();

  function closeModal() {
    if (typeof isOpenProp !== "boolean") {
      setIsOpen(false);
    }
    onCloseModal && onCloseModal();
  }

  function openModal() {
    if (typeof isOpenProp !== "boolean") {
      setIsOpen(true);
    }
  }

  useEffect(() => {
    setIsOpen(!!isOpenProp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpenProp]);

  function onLogout() {
    if (connected) {
      disconnect();
    }
  }
  return (
    <div className="nc-NcModal">
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={closeModal}
        >
          <div className=" px-1 text-center md:px-4 overflow-auto">
            <Transition.Child
              as={Fragment}
              enter="transition-opacity duration-900"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-3000"
              leaveFrom="opacity-10"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay
                className="fixed inset-0"
                style={{
                  background: "rgba(10, 10, 10, 0.7)",
                  backdropFilter: "blur(2px)",
                }}
              />
            </Transition.Child>
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-900"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-900"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div
                className={`inline-block w-full my-5 overflow-hidden text-left align-middle transition-all transfor shadow-xl md:rounded-[20px] rounded-[10px]  ${contentExtraClass}`}
              >
                <div
                  className="absolute w-full h-full left-0 top-0 rounded-[20px] z-0 p-[3px]"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgb(104 56 141) 56.25%, rgb(46 13 73) 100%)",
                    // opacity: "0.6",
                  }}
                >
                  <div className="w-full h-full bg-[#131313] rounded-[20px] z-10"></div>
                </div>
                <div className="py-4 text-center relative items-center ">
                  {/* close button */}
                  <div className="absolute lg:top-[15px] sm:top-[15px] top-[10px] lg:right-[30px] sm:right-6 right-4 lg:w-[28px] md:w-[24px] w-[20px] lg:h-[28px] md:h-[24px] h-[20px]">
                    <ButtonImage
                      onClick={closeModal}
                      sizeClass="w-full h-full"
                      rounded="rounded-[4px]"
                    >
                      <Image
                        alt="camera"
                        src="/static/images/icons/close.png"
                        className="w-full h-full"
                        width={66}
                        height={66}
                      />
                    </ButtonImage>
                  </div>
                  <Dialog.Title>
                    <div className=" flex items-center xl:ml-6 ml-5">
                      <Image
                        src={imgSrc(user?.avatar)}
                        width={65}
                        height={65}
                        alt=""
                        className="object-cover rounded-full 2xl:w-[50px]  xl:w-[40px] md:w-[35px] w-[30px] 2xl:h-[50px] xl:h-[40px] md:h-[35px] h-[30px]"
                        onError={(e: any) => {
                          e.target.src = "/static/images/user/default.png";
                        }}
                      />
                      <p className="text-white xl:text-[19px] sm:text-[16px] text-[13px] font-semibold font-Inter tracking-[1px] ml-2">
                        {""}
                      </p>
                      <p className="text-[#A1A1A1] xl:text-[19px] sm:text-[16px] text-[13px] font-semibold font-Inter tracking-[1px] ml-2">
                        @{""}
                      </p>
                    </div>
                  </Dialog.Title>
                </div>
                <div className={contentPaddingClass}>{renderContent()}</div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default McModal;
