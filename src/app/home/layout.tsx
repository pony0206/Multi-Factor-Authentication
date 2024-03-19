"use client";
import { Inter } from "next/font/google";
// import "@/styles/globals.css";
import "../../styles/globals.css";
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
      <AuthContextProvider>
          <body className={inter.className}>{children}</body>
          <ToastContainer />
      </AuthContextProvider>
    </html>
  );
}
