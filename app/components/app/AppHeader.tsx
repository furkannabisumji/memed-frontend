import { Search, Bell, User, House, Menu } from "lucide-react";
import { Link } from "react-router";

interface AppHeaderProps {
  onMenuToggle: () => void;
}

export function AppHeader({ onMenuToggle }: AppHeaderProps) {
  return (
    <header className="h-full ">
      <div className="flex items-center justify-between h-full">
        {/* Left side - Menu button and Breadcrumb */}
        <div className="flex items-center gap-2">
          <button
            onClick={onMenuToggle}
            className="lg:hidden p-2 text-green-500 hover:text-white transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
          <Link
            to="/app"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <House />
          </Link>
          <svg
            className="w-4 h-4 text-gray-600 hidden sm:block"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M6 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-gray-400 text-lg ">Explore</span>
        </div>

        {/* Right side - Search, Notifications, User */}
        <div className="flex items-center gap-2 md:gap-4">
          <div className="relative hidden md:block">
            <input
              type="search"
              placeholder="Search"
              className="bg-[#1a1a1a] border border-neutral-700 rounded-lg h-11 px-4 py-2 pl-10 text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 w-80 shadow-[inset_0_0_15px_rgba(0,0,0,0.3)]"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          </div>

          <button className="md:hidden text-gray-400 hover:text-white transition-colors p-2 border border-neutral-700 rounded-lg">
            <Search className="w-5 h-5" />
          </button>

          <button className="text-gray-400 hover:text-white transition-colors border border-neutral-700 p-2  cursor-pointer rounded-lg">
            <Bell className="w-5 h-5" />
          </button>

          <div className="hidden md:flex items-center gap-3  h-11 bg-[#1a1a1a] border border-neutral-700 rounded-lg px-3 py-2  transition-colors cursor-pointer shadow-[inset_0_0_15px_rgba(0,0,0,0.3)]">
            <div className="w-8 h-8 bg-stone-600 rounded-lg flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-white text-sm font-medium">John Doe</div>
              <div className="text-gray-400 text-xs">@johndoe</div>
            </div>
            <svg
              className="w-4 h-4 text-gray-400"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M4 6l4 4 4-4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <button className="md:hidden p-2 text-gray-400 hover:text-white border border-neutral-700 rounded-lg transition-colors">
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
