import React, { FC, Fragment, ReactNode, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import ButtonImage from "../Button/ButtonImage";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { useWallet } from "@solana/wallet-adapter-react";
import { logOut } from "../../store/user";

export interface NcModalProps {
  renderContent: () => ReactNode;
  renderTrigger?: (openModal: Function) => ReactNode;
  contentExtraClass?: string;
  contentPaddingClass?: string;
  triggerText?: ReactNode;
  modalTitle?: ReactNode;
  isOpenProp?: boolean;
  hasLogout?: boolean;
  onCloseModal?: () => void;
}

const NcModal: FC<NcModalProps> = ({
  renderContent,
  contentExtraClass = "max-w-screen-xl",
  contentPaddingClass = "py-4 px-0 md:py-5",
  modalTitle = "Modal title",
  isOpenProp,
  hasLogout = true,
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
          <div className="min-h-screen px-1 text-center md:px-4 overflow-auto">
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
                className={`inline-block w-full my-5 overflow-hidden text-left align-middle transition-all transfor shadow-xl md:rounded-[20px] rounded-[10px] border-[2px] border-borderwhite ${contentExtraClass}`}
                style={{
                  background: "#212121",
                }}
              >
                <div className="py-2 text-center relative border-b-[3px] border-[#5e5959]">
                  {/* close button */}
                  <div className="absolute lg:top-[15px] sm:top-[15px] top-[10px] right-[30px] lg:w-[28px] md:w-[24px] w-[20px] lg:h-[28px] md:h-[24px] h-[20px]">
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
                  {/* logout */}
                  <div
                    className="absolute xl:top-[15px] lg:top-[13px] sm:top-[12px] top-[8px] md:left-[30px] left-[20px] xl:w-[39px] lg:w-[37px] md:w-[36px] sm:w-[32px] w-[28px] xl:h-[39px] lg:h-[37px] md:h-[36px] sm:h-[32px] h-[28px] cursor-pointer hover:scale-[1.05] transititext-primary text-primary transition duration-150 ease-in-out hover:text-primary-600"
                    onClick={onLogout}
                  >
                    <div
                      className={`group flex relative ${
                        !hasLogout && "hidden"
                      }`}
                    >
                      <Image
                        alt="camera"
                        src="/static/images/icons/out3.png"
                        className="w-full h-full"
                        width={76}
                        height={76}
                      />
                      <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-white rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">
                        Logout
                      </span>
                    </div>
                  </div>
                  {modalTitle && (
                    <Dialog.Title
                      as="h3"
                      className="2xl:text-[26px] xl:text-[24px] md:text-[22px] sm:text-[18px] text-[14px] font-[600] text-textwhite tracking-[0.06em]"
                    >
                      {modalTitle}
                    </Dialog.Title>
                  )}
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

export default NcModal;
