
import React from "react";
import { Header } from "./Header";
import { useIsMobile } from "@/hooks/use-mobile";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen bg-[#FFFAFD]">
      <Header />
      <main className="p-3 md:p-5 transition-all duration-300">
        {children}
      </main>
    </div>
  );
};
