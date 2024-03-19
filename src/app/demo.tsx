"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Demo() {
  const router = useRouter();
  useEffect(() => {
    router.push("/home");
  }, []);

  return <div>Login page</div>;
}
