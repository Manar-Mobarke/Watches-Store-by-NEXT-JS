import Link from "next/link";

function Footer() {
  return (
    <footer className="border-t border-[#ddd6c8] bg-[#17140f] text-[#f7f7f2]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em]">
            Chrono Atelier
          </p>
          <p className="mt-2 max-w-md text-sm text-[#cfc7b8]">
            Precision watches curated for work, travel, and evening occasions.
          </p>
        </div>

        <div className="flex gap-4 text-sm text-[#cfc7b8]">
          <Link className="transition hover:text-white" href="/books">
            Collection
          </Link>
          <Link className="transition hover:text-white" href="/contact-us">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
