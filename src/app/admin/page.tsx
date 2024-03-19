// 'use client'
// import React from "react";
// import { useAuthContext } from "@/context/AuthContext";
// import { useRouter } from "next/navigation";
// function Page() {
//     const { user } = useAuthContext()
//     const router = useRouter()

//     React.useEffect(() => {
//         if (user == null) router.push("/")
//     }, [user])

//     return (<h1>Only logged in users can view this page</h1>);
// }

// export default Page;

// Assuming '@/context/AuthContext' is correctly set up with TypeScript.
"use client";
import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, getAuth, signOut } from "firebase/auth";
import firebase_app from "@/firebase/config";
const auth = getAuth(firebase_app);

interface User {
  // Define the structure of your User object here. For example:
  id: number;
  name: string;
  // Add other user properties as needed
}

function Page(): JSX.Element {
  // `JSX.Element` is the type for the return of a component
  // Adjust the expected structure based on your context definition
  const { user } = useAuthContext() as { user: User | null };
  const router = useRouter();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        router.push("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  React.useEffect(() => {
    if (user == null) {
      router.push("/");
    }
  }, [user]);

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
        console.log("uid", uid);
      } else {
        // User is signed out
        // ...
        console.log("user is logged out");
      }
    });
  }, []);

  return (
    <>
      <h1>Only logged in users can view this page</h1>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}

export default Page;
