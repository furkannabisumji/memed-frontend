import { useState } from "react";
import { Outlet } from "react-router";
import { AppHeader } from "@/components/app/AppHeader";
import { Sidebar } from "@/components/app/Sidebar";

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="h-screen bg-black flex flex-col">
      <div className="flex h-full relative">
        <Sidebar
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />
        <main className="h-full bg-[#131414] w-full px-4 md:px-10 py-3">
          <div className="h-[5%]">
            <AppHeader
              onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
          <div className="h-[95%] overflow-y-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
