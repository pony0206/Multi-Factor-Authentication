import { useRouter } from "next/navigation";
import Input from "./Input";

type Props = {
  getCode: (code: string) => void;
};

export function Code({ getCode }: Props) {
  const router = useRouter();
  let code = new Array<string>(6).fill("");

  const handleClick = () => {
    const finalCode = code.reduce((previousValue, currentValue) => {
      return previousValue.concat(currentValue);
    });
    getCode(finalCode);
  };

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="bg-slate-500 flex flex-col p-5 border-2 rounded-xl w-[450px]">
        <div className="flex justify-between">
          <div>
            <h1 className="font-medium text-[22px] leading-[130%] md:mr-8">
              Verify your phone
            </h1>
            <p className="text-black mt-2 text-base">
              We sent you an SMS code to your phone number
            </p>
          </div>
        </div>
        <div className="flex justify-center space-x-4 mt-6 md:mt-8 pb-4">
          {code.map((value, index) => {
            return (
              <Input
                key={index}
                index={index}
                getValue={(value, index) => {
                  code[index] = value;
                }}
              />
            );
          })}
        </div>
        <div className="flex mt-4 space-x-4">
          <button
            onClick={() => void router.push("/user")}
            className="bg-white rounded-xl flex space-x-4 mb-8 text-black text-lg h-11 w-1/2 items-center justify-center px-6"
          >
            Cancel
          </button>
          <button
            onClick={handleClick}
            className="bg-black rounded-xl flex h-11 w-1/2 items-center justify-center px-6 text-white mb-8"
          >
            <span className="font-light text-white text-lg">Submit</span>
          </button>
        </div>
      </div>
    </div>
  );
}
