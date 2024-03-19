"use client";

import { SignIn } from "@/components/signin";
import { login } from "@/firebase/authentication";
import { useRecaptcha } from "@/hooks/useRecaptcha";
import { notify } from "@/utils/notify";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MultiFactorResolver } from "firebase/auth";

import { verifyUserMFA } from "@/firebase/authentication";
import CodeSignIn from "@/components/codeSignin";

const Login = () => {
  const router = useRouter();
  const recaptcha = useRecaptcha("sign-in");
  const [verificationId, setVerificationId] = useState<string>();
  const [resolver, setResolver] = useState<MultiFactorResolver>();

  async function loginWithEmailAndPassword(email: string, password: string) {
    const response = await login(email, password);
    
    if (response === true) {
      router.push("/user");
    } else {
      await handleMFA(response)
    }
  }
  
  const handleMFA = async (response: any) => {
    if (response.code === "auth/multi-factor-auth-required" && recaptcha) {
      const data = await verifyUserMFA(response, recaptcha, 0);
      console.log(response, recaptcha)
      
      if (!data) {
        notify("Something went wrong");
      } else {
        const { verificationId, resolver } = data;
        setVerificationId(verificationId);
        setResolver(resolver);
      }
    } else {
      notify("Something went wrong");
      console.log("~~~~~~~~", verificationId, resolver) 
    }
  };


  return (
    <div>
      {!verificationId && !resolver && (
        <SignIn
          loginWithEmailAndPassword={loginWithEmailAndPassword}
        />
      )}
      {
        verificationId &&
        resolver &&
        <CodeSignIn verificationId={verificationId} resolver={resolver}/>
      }
      <div id="sign-in"></div>
    </div>
  );
};

export default Login;
