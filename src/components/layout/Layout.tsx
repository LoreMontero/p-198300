
import React from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { useIsMobile } from "@/hooks/use-mobile";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen bg-[#FFFAFD]">
      <Header />
      {!isMobile && <Sidebar />}
      <main className={`${isMobile ? 'ml-0 p-3' : 'ml-[298px] p-5'} transition-all duration-300`}>
        {children}
      </main>
    </div>
  );
};
