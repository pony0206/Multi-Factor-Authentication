"use client"

import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "@firebase/auth";
import { auth } from "@/firebase/authentication";

export function useCurrentUser() {
  const [currentUser, setCurrentUser] = useState<User | null | "loading">("loading");

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  return currentUser;
}