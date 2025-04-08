import React from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#FFFAFD]">
      <Header />
      <Sidebar />
      <main className="ml-[298px] p-5">{children}</main>
    </div>
  );
};
