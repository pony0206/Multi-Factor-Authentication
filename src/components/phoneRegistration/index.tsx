import { useRouter } from "next/navigation";
import { useRef } from "react";
import { FaPhone } from "react-icons/fa";

type Props = {
  getPhoneNumber: (phoneNumber: string) => void;
};

const PhoneRegistration = ({ getPhoneNumber }: Props) => {
  const router = useRouter();
  const phoneNumber = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (phoneNumber.current) {
      getPhoneNumber(phoneNumber.current.value);
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex flex-col justify-evenly items-center space-y-4 w-96 h-1/3 bg-slate-600 rounded-xl">
        <div className="flex flex-col space-y-4">
          <h1 className="text-2xl font-bold text-white">Provide your phone</h1>
          <p className="text-sm text-white">
            Fill in your phone number to receive the code
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-12 w-full"
        >
          <div className="relative px-8">
            <input
              ref={phoneNumber}
              type="text"
              placeholder="Insert your phone number"
              className="w-full h-10 pl-7 pr-4 border-2 border-slate-300 rounded-md focus:outline-none"
            />
            <FaPhone className="absolute top-3 left-10 text-black" />
          </div>
          <div className="flex space-x-4 px-8">
            <button
              onClick={() => void router.push("/user")}
              type="button"
              className="w-full h-10 bg-slate-300 text-lg text-black rounded-xl"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full h-10 bg-black text-lg text-white rounded-xl"
            >
              Send SMS
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PhoneRegistration;
