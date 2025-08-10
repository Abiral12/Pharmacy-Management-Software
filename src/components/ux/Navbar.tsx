import Link from "next/link";
import { useState } from "react";
import { FiLogIn } from "react-icons/fi";

interface PharmacyNavbarProps {
  onSignInClick?: () => void;
}

const PharmacyNavbar = ({ onSignInClick }: PharmacyNavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Simple scroll handler
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 10);
    });
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/50 backdrop-blur-lg shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center group">
              <div
                className={`flex items-center justify-center rounded-lg ${
                  scrolled ? "bg-teal-600" : "bg-white"
                } p-2 shadow-md transition-all duration-300 group-hover:scale-110`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-8 w-8 ${
                    scrolled ? "text-white" : "text-teal-600"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
              </div>
              <span
                className={`ml-3 text-xl font-bold ${
                  scrolled ? "text-teal-600" : "text-white"
                }`}
              >
                myPharma
                <span
                  className={`${scrolled ? "text-black" : "text-teal-300"}`}
                >
                  City
                </span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link
                href="/#features"
                className={`px-3 py-2 rounded-md text-sm font-bold transition-all duration-300 ${
                  scrolled
                    ? "text-gray-700 hover:bg-teal-50"
                    : "text-white hover:bg-teal-600/20"
                }`}
              >
                Features
              </Link>

              <Link
                href="/demo"
                className={`px-3 py-2 rounded-md text-sm font-bold transition-all duration-300 ${
                  scrolled
                    ? "text-gray-700 hover:bg-teal-50"
                    : "text-white hover:bg-teal-600/20"
                }`}
              >
                Live Demo
              </Link>

              <Link
                href="/#support"
                className={`px-3 py-2 rounded-md text-sm font-bold transition-all duration-300 ${
                  scrolled
                    ? "text-gray-700 hover:bg-teal-50"
                    : "text-white hover:bg-teal-600/20"
                }`}
              >
                Support
              </Link>

              <Link
                href="/blog"
                className={`px-3 py-2 rounded-md text-sm font-bold transition-all duration-300 ${
                  scrolled
                    ? "text-gray-700 hover:bg-teal-50"
                    : "text-white hover:bg-teal-600/20"
                }`}
              >
                Blog
              </Link>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center">
            <Link
              href="/#pricing"
              className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 transition-all duration-300 hover:shadow-lg"
            >
              Buy Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 -mr-1 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
            <button
              type="button"
              onClick={onSignInClick}
              className="ml-4 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-teal-600 rounded-md shadow-sm text-sm font-medium text-teal-600 bg-white hover:bg-teal-50 transition-all duration-300"
            >
              <FiLogIn className="mr-2 h-4 w-4" />
              Sign In
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-6 w-6 ${
                  scrolled ? "text-gray-700" : "text-black"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    mobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"}`}>
        <div
          className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${
            scrolled
              ? "bg-white/50 backdrop-blur-lg shadow-lg"
              : "bg-white/90 backdrop-blur-lg"
          }`}
        >
          <Link
            href="/#features"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition-all duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            href="/#pricing"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition-all duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link
            href="/demo"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition-all duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Live Demo
          </Link>
          <Link
            href="/#support"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition-all duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Support
          </Link>
          <Link
            href="/blog"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition-all duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/#pricing"
            className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-white bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 mt-2 transition-all duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Buy Now
          </Link>
          <button
            type="button"
            onClick={() => {
              onSignInClick?.();
              setMobileMenuOpen(false);
            }}
            className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-teal-600 bg-white border border-teal-600 hover:bg-teal-50 mt-2 flex items-center justify-center transition-all duration-300"
          >
            <FiLogIn className="mr-2 h-5 w-5" />
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default PharmacyNavbar;