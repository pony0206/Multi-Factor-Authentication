import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "@firebase/auth";

import { app } from "@/firebase/init";
import {
  ApplicationVerifier,
  MultiFactorError,
  MultiFactorResolver,
  PhoneAuthProvider,
  PhoneMultiFactorGenerator,
  User,
  getMultiFactorResolver,
  multiFactor,
  sendEmailVerification,
} from "firebase/auth";

export const auth: Auth = getAuth(app);

export async function signInWithGoole(): Promise<any> {
  try {
    await signInWithPopup(auth, new GoogleAuthProvider());
    return true;
  } catch (e) {
    return 0;
  }
}

export async function signUp(
  email: string,
  password: string,
): Promise<boolean> {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    return true;
  } catch (e) {
    return false;
  }
}

export async function logout(): Promise<boolean> {
  try {
    await auth.signOut();
    return true;
  } catch (e) {
    return false;
  }
}

export async function login(email: string, password: string): Promise<boolean> {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return true;
  } catch (error: any) {
    return error;
  }
}

export function verifyIfUserIsEnrolled(user: User) {
  const enrolledFactors = multiFactor(user).enrolledFactors;
  return enrolledFactors.length > 0;
}

export async function verifyPhoneNumber(
  user: User,
  phoneNumber: string,
  recaptchaVerifier: ApplicationVerifier,
): Promise<false | string> {
  const session = await multiFactor(user).getSession();
  const phoneInfoOption = {
    phoneNumber,
    session,
  };

  const phoneAuthProvider = new PhoneAuthProvider(auth);
  try {
    return await phoneAuthProvider.verifyPhoneNumber(
      phoneInfoOption,
      recaptchaVerifier,
    );
  } catch (e) {
    return false;
  }
}

export async function enrollUser(
  user: User,
  verificationCodeId: string,
  verificationCode: string,
) {
  const phoneAuthCredential = PhoneAuthProvider.credential(
    verificationCodeId,
    verificationCode,
  );
  const multiFactorAssertion =
    PhoneMultiFactorGenerator.assertion(phoneAuthCredential);

  try {
    await multiFactor(user).enroll(
      multiFactorAssertion,
      "Persoanl Phone Number",
    );
    return true;
  } catch (e) {
    return false;
  }
}

export async function verifyUserMFA(
  error: MultiFactorError,
  recaptchaVerifier: ApplicationVerifier,
  selectedIndex: number,
): Promise<
  false | { verificationId: string; resolver: MultiFactorResolver } | void
> {
  const resolver = getMultiFactorResolver(auth, error);

  if (
    resolver.hints[selectedIndex].factorId ===
    PhoneMultiFactorGenerator.FACTOR_ID
  ) {
    const phoneInfoOptions = {
      multiFactorHint: resolver.hints[selectedIndex],
      session: resolver.session,
    };

    const phoneAuthProvider = new PhoneAuthProvider(auth);
    try {
      const verificationId = await phoneAuthProvider.verifyPhoneNumber(
        phoneInfoOptions,
        recaptchaVerifier,
      );
      return { verificationId, resolver };
    } catch (e) {
      return false;
    }
  }
}

export async function verifyUserEnrolled(
  verificationMFA: { verificationId: string; resolver: MultiFactorResolver },
  verificationCode: string,
) {
  const { verificationId, resolver } = verificationMFA;
  const credential = PhoneAuthProvider.credential(
    verificationId,
    verificationCode,
  );
  const multiFactorAssertion = PhoneMultiFactorGenerator.assertion(credential);

  try {
    await resolver.resolveSignIn(multiFactorAssertion);
    return true;
  } catch (e) {
    return false;
  }
}

export async function verifyUserEmail(user: User): Promise<boolean> {
  try {
    await sendEmailVerification(user);
    return true;
  } catch (e) {
    return false;
  }
}
