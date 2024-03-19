import firebase_app from "../config";
import { getFirestore, doc, setDoc, FirestoreError, WithFieldValue, DocumentData } from "firebase/firestore";

const db = getFirestore(firebase_app);

// Assuming 'data' parameter can be any valid Firestore data.
// Adjust types as necessary for your specific use case.
export default async function addData(
  collection: string,
  id: string,
  data: WithFieldValue<DocumentData>
): Promise<{ result: void | null; error: FirestoreError | null }> {
  let result: void | null = null;
  let error: FirestoreError | null = null;

  try {
    // Since setDoc does not return a meaningful result upon success, it's typed as 'void'.
    // This operation either succeeds or throws an error.
    result = await setDoc(doc(db, collection, id), data, {
      merge: true,
    });
  } catch (e) {
    if (e instanceof FirestoreError) {
      error = e;
    } else {
      // Re-throw or handle the case where the error is not an instance of FirestoreError
      console.error("An unexpected error occurred:", e);
      error = null; // Or set to a custom error
    }
  }

  return { result, error };
}

// import firebase_app from "../config";
// import { getFirestore, doc, setDoc } from "firebase/firestore";

// const db = getFirestore(firebase_app);
// export default async function addData(colllection, id, data) {
//   let result = null;
//   let error = null;

//   try {
//     result = await setDoc(doc(db, colllection, id), data, {
//       merge: true,
//     });
//   } catch (e) {
//     error = e;
//   }

//   return { result, error };
// }
