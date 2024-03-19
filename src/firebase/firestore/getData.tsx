import firebase_app from "../config";
// Importing types needed to work with documents in Firestore
import { getFirestore, doc, getDoc, DocumentReference, DocumentSnapshot, FirestoreError } from "firebase/firestore";

const db = getFirestore(firebase_app);

export default async function getDocument(
  collection: string,
  id: string
): Promise<{ result: DocumentSnapshot | null; error: FirestoreError | null }> {
  // Referencing a specific document by collection and ID
  let docRef: DocumentReference = doc(db, collection, id);

  let result: DocumentSnapshot | null = null;
  let error: FirestoreError | null = null;

  try {
    // Attempting to fetch the document
    result = await getDoc(docRef);
  } catch (e) {
    // Handling errors more generically, since FirestoreError cannot be instantiated directly
    if (e instanceof Error) {
      console.error(e.message);
      error = e as FirestoreError; // Casting for TypeScript, considering all errors from Firestore operations as FirestoreError
    }
  }

  return { result, error };
}

// import firebase_app from "../config";
// import { getFirestore, doc, getDoc } from "firebase/firestore";

// const db = getFirestore(firebase_app)
// export default async function getDoument(collection, id) {
//     let docRef = doc(db, collection, id);

//     let result = null;
//     let error = null;

//     try {
//         result = await getDoc(docRef);
//     } catch (e) {
//         error = e;
//     }

//     return { result, error };
// }