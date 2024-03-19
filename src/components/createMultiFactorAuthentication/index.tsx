"use client";

import { useRecaptcha } from "@/hooks/useRecaptcha";
import { User } from "firebase/auth";
import PhoneRegistration from "../phoneRegistration";
import { useState } from "react";
import { notify } from "@/utils/notify";
import { verifyPhoneNumber } from "@/firebase/authentication";
import CodeSignup from "../codeSignup";

type Props = {
  currentUser: User | null;
};

const CreateMultiFactorAuthentication = ({ currentUser }: Props) => {
  const recaptcha = useRecaptcha("sign-up");
  const [verificationCodeId, setVerificationCodeId] = useState<string | null>(
    null,
  );

  const getPhoneNumber = async (phoneNumber: string) => {
    if (!currentUser || !recaptcha) {
      return;
    }
    const verificationId = await verifyPhoneNumber(
      currentUser,
      phoneNumber,
      recaptcha,
      );
    if (!verificationId) {
      notify("Something went wrong.");
    } else {
      setVerificationCodeId(verificationId);
    }
  };

  return (
    <div>
      {!verificationCodeId && (
        <PhoneRegistration getPhoneNumber={getPhoneNumber} />
      )}
      {verificationCodeId && (
        <CodeSignup
          currentUser={currentUser}
          verificationCodeId={verificationCodeId}
        />
      )}
      <div id="sign-up"></div>
    </div>
  );
};

export default CreateMultiFactorAuthentication;
