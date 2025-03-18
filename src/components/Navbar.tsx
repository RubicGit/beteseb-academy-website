import Logo from "@/assets/Logo";
import {
  ChevronDown,
  Menu,
  LayoutGrid,
  FileText,
  Sun,
  Moon,
  X,
  BookOpen,
  Calendar,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

// Add a style element for custom animations
const chevronAnimationStyle = `
@keyframes rotateDown {
  from { transform: rotate(0deg); }
  to { transform: rotate(180deg); }
}

@keyframes rotateUp {
  from { transform: rotate(180deg); }
  to { transform: rotate(0deg); }
}

.chevron-rotate-down {
  animation: rotateDown 200ms ease-in-out forwards;
}

.chevron-rotate-up {
  animation: rotateUp 200ms ease-in-out forwards;
}
`;

interface NavbarProps {
  breakpoint?: "sm" | "md" | "lg" | "xl" | "2xl";
}

const Navbar = ({ breakpoint = "md" }: NavbarProps) => {
  const [variant, setVariant] = useState<"light" | "dark">("light");
  const [heroInView, setHeroInView] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAppsDropdownOpen, setIsAppsDropdownOpen] = useState(false);
  const [isMobileAppsDropdownOpen, setIsMobileAppsDropdownOpen] =
    useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial check for dark mode
    setVariant(
      document.documentElement.classList.contains("dark") ? "dark" : "light"
    );

    // Set up observer to watch for changes to the html class
    const classObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          setVariant(
            document.documentElement.classList.contains("dark")
              ? "dark"
              : "light"
          );
        }
      });
    });

    classObserver.observe(document.documentElement, { attributes: true });

    // Set up Intersection Observer for Hero section
    const heroElement = document.getElementById("hero-section");
    if (heroElement) {
      const intersectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setHeroInView(true);
            } else {
              setHeroInView(false);
            }
          });
        },
        { threshold: 0.1 } // Trigger when at least 10% of the hero is visible
      );

      intersectionObserver.observe(heroElement);
      return () => {
        classObserver.disconnect();
        intersectionObserver.disconnect();
      };
    }

    // Close dropdown when clicking outside
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsAppsDropdownOpen(false);
      }

      if (
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(event.target as Node) &&
        isSidebarOpen // Only check if sidebar is open
      ) {
        setIsMobileAppsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      classObserver.disconnect();
    };
  }, [isSidebarOpen]);

  // If hero is in view, force dark variant
  const effectiveVariant = heroInView ? "dark" : variant;

  // Close mobile dropdown when sidebar closes
  useEffect(() => {
    if (!isSidebarOpen) {
      setIsMobileAppsDropdownOpen(false);
    }
  }, [isSidebarOpen]);

  // Sidebar component
  const Sidebar = () => {
    const bgColor =
      effectiveVariant === "light"
        ? "bg-bg dark:bg-text-dark"
        : "bg-text dark:bg-bg-dark";

    const textColor =
      effectiveVariant === "light"
        ? "text-text dark:text-bg-dark"
        : "text-bg dark:text-text-dark";

    const linkBgColor =
      effectiveVariant === "light"
        ? "bg-text dark:bg-text text-bg dark:text-text-dark"
        : "bg-bg dark:bg-text-dark text-text dark:text-bg-dark";

    return (
      <div
        className={`fixed inset-0 z-50 ${isSidebarOpen ? "block" : "hidden"}`}
      >
        <div
          className="fixed inset-0 bg-black/50"
          onClick={() => setIsSidebarOpen(false)}
        />
        <div
          className={`fixed right-0 top-0 h-full w-64 ${bgColor} p-6 shadow-lg transform transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center mb-8">
            <Logo variant={effectiveVariant} />
            <button
              onClick={() => setIsSidebarOpen(false)}
              className={`p-2 rounded-full ${textColor}`}
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col min-h-[calc(100vh-10rem)] justify-between">
            <div className="flex flex-col gap-4">
              <div className="relative" ref={mobileDropdownRef}>
                <button
                  onClick={() =>
                    setIsMobileAppsDropdownOpen(!isMobileAppsDropdownOpen)
                  }
                  className={`w-full flex items-center gap-4 px-5 py-3 justify-between rounded-full ${linkBgColor} font-semibold`}
                >
                  <div className="flex items-center gap-4">
                    <LayoutGrid strokeWidth={1.5} />
                    Apps
                  </div>
                  <div>
                    <ChevronDown
                      strokeWidth={1.5}
                      className={
                        isMobileAppsDropdownOpen
                          ? "chevron-rotate-down"
                          : "chevron-rotate-up"
                      }
                    />
                  </div>
                </button>

                <div
                  className={`mt-2 flex flex-col gap-2 overflow-hidden transition-all duration-300 ${
                    isMobileAppsDropdownOpen
                      ? "max-h-48 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <Link
                    href="/library"
                    className={`flex items-center gap-4 px-5 py-3 rounded-full ${linkBgColor} font-semibold ml-4`}
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <BookOpen strokeWidth={1.5} size={20} />
                    Library
                  </Link>
                  <Link
                    href="/calendar"
                    className={`flex items-center gap-4 px-5 py-3 rounded-full ${linkBgColor} font-semibold ml-4`}
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <Calendar strokeWidth={1.5} size={20} />
                    Calendar
                  </Link>
                  <Link
                    href="/homeworks"
                    className={`flex items-center gap-4 px-5 py-3 rounded-full ${linkBgColor} font-semibold ml-4`}
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <GraduationCap strokeWidth={1.5} size={20} />
                    Homeworks
                  </Link>
                </div>
              </div>

              <Link
                href="/"
                className={`flex items-center gap-4 px-5 py-3 justify-start rounded-full ${linkBgColor} font-semibold`}
              >
                <FileText strokeWidth={1.5} />
                Manual
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className={`px-4 py-2 rounded-full ${textColor} font-semibold text-lg`}
              >
                Login
              </Link>
              <Link
                href="/"
                className={`px-4 py-2 rounded-full ${textColor} font-semibold text-lg`}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Mobile navbar
  const mobileNavClass = {
    sm: "flex sm:hidden",
    md: "flex md:hidden",
    lg: "flex lg:hidden",
    xl: "flex xl:hidden",
    "2xl": "flex 2xl:hidden",
  }[breakpoint];

  // Desktop navbar
  const desktopNavClass = {
    sm: "hidden sm:flex",
    md: "hidden md:flex",
    lg: "hidden lg:flex",
    xl: "hidden xl:flex",
    "2xl": "hidden 2xl:flex",
  }[breakpoint];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: chevronAnimationStyle }} />
      {/* Mobile Navbar */}
      <nav
        className={`${mobileNavClass} justify-between items-center w-[calc(100vw-2rem)] mx-4 my-3 rounded-xl p-4
          ${
            effectiveVariant === "light"
              ? "bg-bg dark:bg-text-dark"
              : "bg-text dark:bg-bg-dark"
          }
          ${
            effectiveVariant === "light"
              ? "text-text dark:text-bg-dark"
              : "text-bg dark:text-text-dark"
          }`}
      >
        <Logo variant={effectiveVariant} />

        <div className="flex items-center gap-3">
          <button
            className="p-2 rounded-full focus:outline-none"
            onClick={() => {
              document.documentElement.classList.toggle("dark");
            }}
          >
            {variant === "dark" ? (
              <Sun
                size={22}
                className={
                  effectiveVariant === "dark"
                    ? "text-bg dark:text-text-dark"
                    : ""
                }
              />
            ) : (
              <Moon
                size={22}
                className={
                  effectiveVariant === "dark"
                    ? "text-bg dark:text-text-dark"
                    : ""
                }
              />
            )}
          </button>

          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-1 focus:outline-none"
          >
            <Menu
              strokeWidth={2}
              size={30}
              className={
                effectiveVariant === "dark" ? "text-bg dark:text-text-dark" : ""
              }
            />
          </button>
        </div>

        <Sidebar />
      </nav>

      {/* Desktop Navbar */}
      <nav
        className={`${desktopNavClass} justify-between items-center w-[calc(100vw-3rem)] m-6 rounded-2xl p-6
          ${
            effectiveVariant === "light"
              ? "bg-bg dark:bg-text-dark"
              : "bg-text dark:bg-bg-dark"
          }`}
      >
        <div
          className={`flex gap-8
            ${
              effectiveVariant === "light"
                ? "text-text dark:text-bg-dark"
                : "text-bg dark:text-text-dark"
            }`}
        >
          <Logo variant={effectiveVariant} />
          <div className="flex gap-4 items-center">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsAppsDropdownOpen(!isAppsDropdownOpen)}
                className={`flex items-center gap-4 px-5 py-3 justify-between rounded-full font-semibold
                  ${
                    effectiveVariant === "light"
                      ? "bg-text dark:bg-text text-bg dark:text-text-dark"
                      : "bg-bg dark:bg-text-dark text-text dark:text-bg-dark"
                  }`}
              >
                <div className="flex items-center gap-4">
                  <LayoutGrid strokeWidth={1.5} />
                  Apps
                </div>
                <div>
                  <ChevronDown
                    strokeWidth={1.5}
                    className={
                      isAppsDropdownOpen
                        ? "chevron-rotate-down"
                        : "chevron-rotate-up"
                    }
                  />
                </div>
              </button>

              <div
                className={`absolute top-full left-0 mt-2 w-full flex flex-col gap-2 overflow-hidden transition-all duration-300 z-50 ${
                  isAppsDropdownOpen
                    ? "max-h-48 opacity-100"
                    : "max-h-0 opacity-0 pointer-events-none"
                }`}
              >
                <Link
                  href="/library"
                  className={`flex items-center gap-4 px-5 py-3 rounded-full font-semibold
                    ${
                      effectiveVariant === "light"
                        ? "bg-text dark:bg-text text-bg dark:text-text-dark"
                        : "bg-bg dark:bg-text-dark text-text dark:text-bg-dark"
                    }`}
                >
                  <BookOpen strokeWidth={1.5} size={20} />
                  Library
                </Link>
                <Link
                  href="/calendar"
                  className={`flex items-center gap-4 px-5 py-3 rounded-full font-semibold
                    ${
                      effectiveVariant === "light"
                        ? "bg-text dark:bg-text text-bg dark:text-text-dark"
                        : "bg-bg dark:bg-text-dark text-text dark:text-bg-dark"
                    }`}
                >
                  <Calendar strokeWidth={1.5} size={20} />
                  Calendar
                </Link>
                <Link
                  href="/homeworks"
                  className={`flex items-center gap-4 px-5 py-3 rounded-full font-semibold
                    ${
                      effectiveVariant === "light"
                        ? "bg-text dark:bg-text text-bg dark:text-text-dark"
                        : "bg-bg dark:bg-text-dark text-text dark:text-bg-dark"
                    }`}
                >
                  <GraduationCap strokeWidth={1.5} size={20} />
                  Homeworks
                </Link>
              </div>
            </div>

            <Link
              href="/"
              className={`flex items-center gap-4 px-5 py-3 justify-between rounded-full font-semibold
                ${
                  effectiveVariant === "light"
                    ? "bg-text dark:bg-text text-bg dark:text-text-dark"
                    : "bg-bg dark:bg-text-dark text-text dark:text-bg-dark"
                }`}
            >
              <FileText strokeWidth={1.5} />
              Manual
            </Link>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <div className="flex gap-2">
            <Link
              href="/"
              className={`px-4 py-2 rounded-full font-semibold text-lg
                ${
                  effectiveVariant === "light"
                    ? "text-text dark:text-bg-dark"
                    : "text-bg dark:text-text-dark"
                }`}
            >
              Login
            </Link>
            <Link
              href="/"
              className={`px-4 py-2 rounded-full font-semibold text-lg
                ${
                  effectiveVariant === "light"
                    ? "text-text dark:text-bg-dark"
                    : "text-bg dark:text-text-dark"
                }`}
            >
              Sign&nbsp;Up
            </Link>
          </div>
          <button
            className={`p-4 rounded-full hover:bg-opacity-90 focus:outline-none cursor-pointer
              ${effectiveVariant === "light" ? "text-text" : "text-bg"}`}
            onClick={() => {
              document.documentElement.classList.toggle("dark");
            }}
          >
            {variant === "dark" ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
