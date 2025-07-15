import { Link } from "react-router";
import { X, MessageCircle, Twitter } from "lucide-react";
import { ClientConnectButton } from "../shared/ClientConnectButton";
import logo from "@/assets/images/logo.png";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const navItems = [
    { label: "About", href: "/about" },
    { label: "Explore", href: "/explore" },
    { label: "Contact", href: "/contact" },
    { label: "Launch App", href: "/app" },
  ];

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed top-0 left-0 h-full w-72 bg-black border-r border-green-500/20 z-50 transform transition-transform duration-300 ease-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-green-500/20">
            <div className="flex items-center space-x-2">
              <img
                src={logo}
                alt={"Memed.fun"}
                className="w-[35px] object-cover"
              />
              <span className="text-white font-bold text-lg">Memed</span>
            </div>
            {/*<button*/}
            {/*  onClick={onClose}*/}
            {/*  className="p-2 text-gray-400 hover:text-white transition-colors"*/}
            {/*  aria-label="Close menu"*/}
            {/*>*/}
            {/*  <X size={24} />*/}
            {/*</button>*/}
          </div>

          <nav className="flex-1 px-4 py-6">
            <div className="space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={onClose}
                  className="block py-2 text-gray-300 hover:text-green-500 hover:border-b border-green-500 transition-colors font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-8">
              <ClientConnectButton />
            </div>
          </nav>

          <div className="p-4 border-t border-green-500/20">
            <div className="flex items-center justify-center space-x-4">
              <a
                href="https://t.me/memed"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-green-500 transition-colors"
                aria-label="Telegram"
              >
                <MessageCircle size={24} />
              </a>
              <a
                href="https://twitter.com/memed"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-green-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
