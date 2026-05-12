import Link from "next/link";

const Navbar = () => {
  const links = [
    { name: "Home", link: "/" },
    { name: "Watches", link: "/watches" },
    { name: "About", link: "/about-us" },
    { name: "Contact", link: "/contact-us" },
    { name: "Login", link: "/login" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-[#ddd6c8] bg-[#fbfaf6]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="text-base font-bold uppercase tracking-[0.18em] text-[#17140f] sm:text-lg"
        >
          Chrono
        </Link>

        <div className="flex flex-wrap items-center justify-end gap-1 sm:gap-2">
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
      </div>
    </nav>
  );
};

export default Navbar;
