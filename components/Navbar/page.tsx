"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  const links = [
    { name: "Home", link: "/" },
    { name: "Watches", link: "/watches" },
    { name: "About", link: "/about-us" },
    { name: "Contact", link: "/contact-us" },
    { name: "Login", link: "/login" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-[#ddd6c8] bg-[#fbfaf6]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="text-base font-bold uppercase tracking-[0.18em] text-[#17140f] sm:text-lg"
        >
          Chrono
        </Link>

        {/* Desktop Links */}

        <div className="hidden items-center gap-2 md:flex">
          {links.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="rounded-md px-3 py-2 text-sm font-medium text-[#4f473c] transition hover:bg-[#efe9dd] hover:text-[#17140f]"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-md p-2 text-[#17140f] md:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}

        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-[#ddd6c8] bg-[#fbfaf6] md:hidden">
          <div className="flex flex-col px-5 py-4">
            {links.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-[#4f473c] transition hover:bg-[#efe9dd] hover:text-[#17140f]"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>


)}
    </nav>
  );
};



export default Navbar;

