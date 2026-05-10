import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[55vh] flex-col items-center justify-center bg-[#f7f7f2] px-5 text-center text-[#17140f]">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8f6b27]">
        404
      </p>
      <h1 className="mt-3 text-4xl font-bold">Page not found</h1>
      <p className="mt-3 max-w-md text-[#6f6658]">
        The watch or page you are looking for is no longer available.
      </p>
      <Link
        className="mt-6 rounded-md bg-[#17140f] px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#2a251d]"
        href="/"
      >
        Go Home
      </Link>
    </div>
  );
}
