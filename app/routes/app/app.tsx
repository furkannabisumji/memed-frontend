import { useState } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router";
import { AppHeader } from "@/components/app/AppHeader";
import { Sidebar } from "@/components/app/Sidebar";

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  if (location.pathname === "/app") {
    return <Navigate to="/app/explore" replace />;
  }

  return (
    <div className="h-screen bg-black flex flex-col w-full">
      <div className="flex h-full relative w-full">
        <Sidebar
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />
        <main className="h-full bg-[#131414]  px-4 w-full  lg:w-[82%] flex-col py-3">
          <div className="h-[5%] w-full">
            <AppHeader
              onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
          <div className="h-[95%] overflow-y-auto  w-full  ">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
