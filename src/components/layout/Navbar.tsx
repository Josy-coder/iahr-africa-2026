import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const router = useRouter();

  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      hasDropdown: true,
      subItems: [
        { name: "About IAHR", path: "/about-iahr" },
        { name: "Organisers", path: "/organisers" },
        { name: "Venue", path: "/venue" },
      ],
    },
    {
      name: "Programme",
      hasDropdown: true,
      subItems: [{ name: "Theme and Congress Topics", path: "/themes" }],
    },
    {
      name: "Participate",
      hasDropdown: true,
      subItems: [
        { name: "Registration", path: "/participate" },
        { name: "Abstracts", path: "/abstracts" },
      ],
    },
    { name: "Sponsor", path: "/sponsorship" },
    { name: "Committee", path: "/committees" },
    { name: "Media Kit", path: "/media" },
  ];

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const isActiveRoute = (path: string) => {
    return router.pathname === path;
  };

  const hasActiveSubitem = (subItems: any[]) => {
    return subItems?.some((subItem) => isActiveRoute(subItem.path));
  };

  return (
    <header className="bg-white shadow-sm border-b border-primary relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-3">
            <img
              src="/images/iahr-logo.png"
              alt="IAHR Logo"
              className="h-12 w-12"
            />
            <img src="/images/logo.png" alt="IAHR Logo" className="h-12 w-12" />
            <div>
              <div className="text-primary font-bold text-sm tracking-wide">
                WATER RESILIENCE
              </div>
              <div className="text-primary font-bold text-sm tracking-wide">
                AND INNOVATION
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center">
            {navItems.map((item, index) => (
              <div key={item.name} className="relative group flex items-center">
                {item.hasDropdown ? (
                  <div
                    className={`flex items-center px-4 py-4 transition duration-300 cursor-pointer ${
                      hasActiveSubitem(item.subItems!)
                        ? "text-primary"
                        : "text-text-secondary hover:text-primary"
                    }`}
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <span className="font-medium">{item.name}</span>
                    <ChevronDown size={16} className="ml-1" />

                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 bg-white shadow-lg border border-border-gray z-50 min-w-48"
                        >
                          {item.subItems?.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.path}
                              className={`block px-4 py-3 transition duration-300 ${
                                isActiveRoute(subItem.path)
                                  ? "text-white bg-primary"
                                  : "text-text-secondary hover:text-primary hover:bg-blue-100"
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.path!}
                    className={`block px-4 py-4 transition duration-300 font-medium ${
                      isActiveRoute(item.path!)
                        ? "text-primary"
                        : "text-text-secondary hover:text-primary"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}

                {index < navItems.length - 1 && (
                  <div className="h-6 w-px bg-border-gray"></div>
                )}
              </div>
            ))}
          </nav>

          <button
            className="md:hidden text-text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 right-0 bg-white border-t border-border-gray shadow-lg md:hidden z-40"
            >
              <div className="py-2">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => handleDropdownToggle(item.name)}
                          className={`flex items-center justify-between w-full px-4 py-3 transition duration-300 font-medium ${
                            hasActiveSubitem(item.subItems!)
                              ? "text-primary"
                              : "text-text-secondary hover:text-primary"
                          }`}
                        >
                          {item.name}
                          <ChevronDown
                            size={16}
                            className={`transform transition-transform ${
                              activeDropdown === item.name ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="bg-gray-50"
                            >
                              {item.subItems?.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.path}
                                  className={`block px-8 py-3 transition duration-300 ${
                                    isActiveRoute(subItem.path)
                                      ? "text-primary bg-blue-50"
                                      : "text-text-secondary hover:text-primary"
                                  }`}
                                  onClick={() => setIsOpen(false)}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.path!}
                        className={`block px-4 py-3 transition duration-300 font-medium ${
                          isActiveRoute(item.path!)
                            ? "text-primary"
                            : "text-text-secondary hover:text-primary"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
