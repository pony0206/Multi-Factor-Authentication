"use client";
import React, { useState } from "react";
import Header from "@/components/header/header.tsx";
import Menu from "@/components/menu/menu.tsx";
import Service from "@/components/service/service.tsx";

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


export default function Home() {
  const [reduction, setReduction] = useState<boolean | undefined>();
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
      router.push("/signin");
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
    <main className="w-full">
      <Header />
      <div>
        {reduction ? (
          <>
            <div className="m-16 grid grid-cols-3 gap-8">
              <div className="col-span-1">
                <Menu />
              </div>
              <div className="col-span-2">
                <Service
                  onScale={() => setReduction(false)}
                  label="大画面"
                  scale="scale-100 hover:scale-110"
                  gap="gap-12"
                  gap1="gap-2"
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="m-16">
              <Service
                onScale={() => setReduction(true)}
                label="画面を小さくする"
                scale="scale-150 hover:scale-160"
                gap="gap-20"
                gap1="gap-12"
              />
            </div>
          </>
        )}
      </div>
    </main>
  );
}
