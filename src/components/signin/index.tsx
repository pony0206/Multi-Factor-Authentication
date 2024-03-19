"use client";

import Link from "next/link";
import { FormEvent, useRef } from "react";

type Props = {
  loginWithEmailAndPassword: (email: string, password: string) => void
};

export function SignIn({ 
  loginWithEmailAndPassword
 }: Props) {
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.current && password.current) {
      loginWithEmailAndPassword(
        email.current.value,
        password.current.value,
      );
    }
  }

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex flex-col justify-center items-center h-1/2 w-1/3 rounded-3xl space-y-4 bg-gray-800">
        <div className="text-4xl text-green pb-8">Sign In</div>
        <form
          className="space-y-4"
          onSubmit={handleSubmit}
        >
          <input
            ref={email}
            type="email"
            name="email"
            placeholder="Insert your email"
            className="focus:outline-none block w-64 rounded-full placeholder-gray-500 bg-gray-300 px-4 py-1"
          />
          <input
            ref={password}
            type="password"
            name="password"
            placeholder="Hint your own password"
            className="focus:outline-none block w-64 rounded-full placeholder-gray-500 bg-gray-300 px-4 py-1"
          />
          <button
            className="flex justify-center items-center space-x-4 w-64 rounded-full bg-blue-300 p-2"
            type="submit"
          >
            Sign In
          </button>
        </form>
        <div className="space-x-2">
            <span className="text-gray-400">Don&apos;t you have an account?</span>
            <Link id="toLogin" href="/sign-up" className="text-white">
                Sign Up
            </Link>
            .
        </div>
      </div>
    </div>
  );
}
