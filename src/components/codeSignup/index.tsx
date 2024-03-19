import { User } from "firebase/auth";
import { Code } from "../code/Code";
import { enrollUser } from "@/firebase/authentication";
import { useRouter } from "next/navigation";
import { notify } from "@/utils/notify";

type Props = {
  currentUser: User | null;
  verificationCodeId: string;
};

const CodeSignup = ({ currentUser, verificationCodeId }: Props) => {
  const router = useRouter();

  const getCode = async (code: string) => {
    if (currentUser) {
      const response = await enrollUser(currentUser, verificationCodeId, code);
      if (response) {
        router.push("/user");
      } else {
        notify("Something went wrong.");
      }
    }
  };

  return <Code getCode={getCode} />;
};

export default CodeSignup;
