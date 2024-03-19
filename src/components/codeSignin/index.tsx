import { verifyUserEnrolled } from "@/firebase/authentication";
import { notify } from "@/utils/notify";
import { MultiFactorResolver } from "firebase/auth";
import { useRouter } from "next/navigation";
import { Code } from "@/components/code/Code";

type Props = {
  verificationId: string;
  resolver: MultiFactorResolver;
};

const CodeSignIn = ({ verificationId, resolver }: Props) => {
  const router = useRouter();

  const getCode = async (code: string) => {
    const response = await verifyUserEnrolled(
      { verificationId, resolver },
      code,
    );

    if (response) {
      router.push("/user");
    } else {
      notify("Something went wrong.");
    }
  };

  return <Code getCode={getCode} />;
};

export default CodeSignIn;
