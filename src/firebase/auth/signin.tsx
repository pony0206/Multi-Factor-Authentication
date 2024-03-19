import firebase_app from "../config";
import { signInWithEmailAndPassword, getAuth, UserCredential } from "firebase/auth";

const auth = getAuth(firebase_app);

interface SignInResponse {
  result: UserCredential | null;
  error: Error | null;
}

export default async function signIn(email: string, password: string): Promise<SignInResponse> {
    let result: UserCredential | null = null;
    let error: Error | null = null;
    
    try {
        result = await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
        if (e instanceof Error) {
            error = e;
        } else {
            // The error might not be an instance of Error in some edge cases (rare)
            // Adjust based on your error handling policies
            error = new Error('An unexpected error occurred');
        }
    }

    return { result, error };
}

// import firebase_app from "../config";
// import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

// const auth = getAuth(firebase_app);

// export default async function signIn(email, password) {
//     let result = null,
//         error = null;
//     try {
//         result = await signInWithEmailAndPassword(auth, email, password);
//     } catch (e) {
//         error = e;
//     }

//     return { result, error };
// }