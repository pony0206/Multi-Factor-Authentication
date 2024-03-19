// "use client"

import { auth } from "@/firebase/authentication";
import { ApplicationVerifier, RecaptchaVerifier } from "firebase/auth";
import { useState, useEffect } from "react";

export const useRecaptcha = (componentId: string) => {
  const [rechaptcha, setRechaptcha] = useState<ApplicationVerifier>();

  useEffect(() => {
    const recaptchaVerifier = new RecaptchaVerifier(
      auth,
      componentId,
      {
        size: "invisible",
        callback: () => {}
      }
    );

    setRechaptcha(recaptchaVerifier);

    return () => {
      recaptchaVerifier.clear();
    };
  }, [componentId]);

  return rechaptcha;
};
