import firebase_app from "../config";
import { createUserWithEmailAndPassword, getAuth, UserCredential } from "firebase/auth";

const auth = getAuth(firebase_app);

interface SignUpResponse {
  result: UserCredential | null;
  error: Error | null;
}

export default async function signUp(email: string, password: string): Promise<SignUpResponse> {
    let result: UserCredential | null = null;
    let error: Error | null = null;

    try {
        result = await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
        if (e instanceof Error) {
            error = e;
        } else {
            // Considering the error might not always be an instance of Error
            // This ensures any kind of exception is caught and properly typed
            error = new Error('An unexpected error occurred during sign up.');
        }
    }

    return { result, error };
}

// import firebase_app from "../config";
// import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

// const auth = getAuth(firebase_app);


// export default async function signUp(email, password) {
//     let result = null,
//         error = null;
//     try {
//         result = await createUserWithEmailAndPassword(auth, email, password);
//     } catch (e) {
//         error = e;
//     }

//     return { result, error };
// }
