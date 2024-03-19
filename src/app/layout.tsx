"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css.ts";
import "../styles/globals.css";
import { Provider } from "react-redux";
import { persistor, store } from "../store";
import { AuthContextProvider } from "@/context/AuthContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "メンタルヘルスケアサービス",
//   description: "メンタルヘルスケアサービス",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <Provider store={store}>
          <body className={inter.className}><AuthContextProvider>{children}<ToastContainer /></AuthContextProvider></body>
        </Provider>
    </html>
  );
}
