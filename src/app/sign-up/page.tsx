"use client"

import { SignUp } from "@/components/signup";
import { Loading } from "@/components/Loading";
import { useCurrentUser } from "@/hooks/useCurrentUser";

import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const currentUser = useCurrentUser();
  const router = useRouter();

  if (currentUser === "loading") {
    return <Loading />;
  }

  if (currentUser) {
    void router.push("/user");
  }

  return <SignUp />;
}
