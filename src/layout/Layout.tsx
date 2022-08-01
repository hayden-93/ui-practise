import type { ReactNode } from "react";

import { Footer } from "./Footer";
import { Header } from "./Header";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="max-w-screen-max mx-auto w-full flex-1">{children}</main>
      <Footer />
    </>
  );
};
