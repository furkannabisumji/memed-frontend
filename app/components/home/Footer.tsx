import { Link } from 'react-router';
import { MessageCircle, Twitter } from 'lucide-react';
import logo from "@/assets/images/logo.png";

export function Footer() {
  const navigation = [
    { label: 'About', href: '/about' },
    { label: 'Explore', href: '/explore' },
    { label: 'Contact', href: '/contact' },
    { label: 'Launch App', href: '/app' },
  ];

  return (
    <footer className=" border-green-500/20 bg-black/80 bg backdrop-blur-sm mt-10">
      <div className=" mx-auto px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img
                src={logo}
                alt={"Memed.fun"}
                className="w-[35px] h-35px] object-cover"
            />
              <span className="text-white font-bold text-lg">Memed</span>
            </Link>
          </div>

          <nav className="flex flex-wrap justify-center md:justify-start gap-6">
            {navigation.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-gray-400 hover:text-green-500 transition-colors text-sm"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex justify-center md:justify-end items-center space-x-4">
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
      <div className=" mx-auto px-20 py-3  border-t border-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © 2024 Memed.fun. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}