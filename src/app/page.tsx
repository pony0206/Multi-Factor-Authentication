// "use client";
import Demo from './demo';
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "メンタルヘルスケアサービス",
  description: "メンタルヘルスケアサービス",
};

export default function Home() {
//   const router = useRouter();
//   useEffect(() => {
//     router.push("/home");
//   }, []);

  return <div><Demo /></div>;
}

