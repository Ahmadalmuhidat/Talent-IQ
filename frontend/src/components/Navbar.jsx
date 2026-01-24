import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  BrainCircuit,
  Menu,
  X,
  ArrowRightIcon
} from "lucide-react";
import { UserButton, useUser, SignInButton } from "@clerk/clerk-react";

function Navbar() {
  const location = useLocation();
  const { isSignedIn } = useUser();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { name: "Problems", path: "/problems", authRequired: true },
    { name: "Dashboard", path: "/dashboard", authRequired: true },
  ];

  const filteredLinks = navLinks.filter(link => !link.authRequired || isSignedIn);

  return (
    <nav className="bg-lc-layer-1 border-b border-lc-border sticky top-0 z-50 h-14 flex items-center">
      <div className="max-w-7xl mx-auto w-full px-4 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <div className="size-8 rounded bg-lc-layer-2 flex items-center justify-center border border-lc-border group-hover:border-brand-orange/50 transition-colors">
            <BrainCircuit className="size-5 text-brand-orange" />
          </div>
          <span className="font-bold text-lg text-lc-text-primary tracking-tight">
            TalentIQ
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-1">
          {filteredLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-1.5 rounded-md transition-all text-sm font-medium
                ${isActive(link.path)
                  ? "text-lc-text-primary bg-lc-layer-2"
                  : "text-lc-text-secondary hover:text-lc-text-primary hover:bg-lc-layer-2/50"
                }
              `}
            >
              {link.name}
            </Link>
          ))}

          <div className="ml-2 pl-2 border-l border-lc-border flex items-center h-6">
            {isSignedIn ? (
              <div className="scale-90 h-8 w-8 flex items-center justify-center">
                <UserButton afterSignOutUrl="/" />
              </div>
            ) : (
              <SignInButton mode="modal">
                <button className="px-4 py-1.5 bg-brand-orange hover:bg-brand-orange/90 rounded text-white font-bold text-xs shadow-lg shadow-brand-orange/10 transition-all active:scale-95 flex items-center gap-2 uppercase tracking-wider">
                  <span>Sign In</span>
                  <ArrowRightIcon className="size-3.5" />
                </button>
              </SignInButton>
            )}
          </div>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div className="flex md:hidden items-center gap-3">
          {isSignedIn && (
            <div className="scale-90">
              <UserButton afterSignOutUrl="/" />
            </div>
          )}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1.5 rounded-md text-lc-text-secondary hover:text-lc-text-primary hover:bg-lc-layer-2 transition-colors"
          >
            {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE NAV OVERLAY */}
      {isMobileMenuOpen && (
        <div className="absolute top-14 left-0 w-full bg-lc-layer-1 border-b border-lc-border md:hidden shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col p-4 gap-2">
            {filteredLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg transition-colors text-sm font-semibold
                  ${isActive(link.path)
                    ? "text-brand-orange bg-brand-orange/10"
                    : "text-lc-text-secondary hover:text-lc-text-primary hover:bg-lc-layer-2"
                  }
                `}
              >
                {link.name}
              </Link>
            ))}

            {!isSignedIn && (
              <SignInButton mode="modal">
                <button className="mt-2 w-full px-4 py-3 bg-brand-orange hover:bg-brand-orange/90 rounded-lg text-white font-bold text-sm shadow-lg flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
                  Sign In to Get Started
                  <ArrowRightIcon className="size-4" />
                </button>
              </SignInButton>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;