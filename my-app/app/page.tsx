import Image from "next/image";
import Link from "next/link";
import { baseURL, fetchProducts } from "@/lib/api";

export default async function Home() {
  const products = await fetchProducts();
  const featured = products[0];
  const highlights = products.slice(1, 4);

  return (
    <div className="bg-[#f7f7f2] text-[#17140f]">
      <section className="relative min-h-[500px] overflow-hidden bg-[#17140f] text-white md:min-h-[560px]">
        <Image
          src={`${baseURL}${featured.image}`}
          alt={featured.name}
          fill
          className="object-contain object-right-bottom p-10 opacity-75 sm:p-14 md:opacity-90"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#17140f_0%,rgba(23,20,15,0.92)_42%,rgba(23,20,15,0.2)_100%)]" />

        <div className="relative mx-auto flex min-h-[500px] max-w-7xl flex-col justify-center px-5 py-16 sm:px-8 md:min-h-[560px]">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#c9a45d]">
            Watch Store
          </p>
          <h1 className="mt-4 max-w-2xl text-5xl font-bold leading-tight sm:text-6xl">
            Chrono Atelier
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-[#ded7c9] sm:text-lg">
            Crafted timepieces with clean dials, premium finishes, and a fit
            for every hour of the day.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/books"
              className="rounded-md bg-[#c9a45d] px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-[#17140f] transition hover:bg-[#d8b973]"
            >
              Shop Watches
            </Link>
            <Link
              href={`/books/${featured.id}`}
              className="rounded-md border border-[#c9a45d] px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-[#f7f7f2] transition hover:bg-[#c9a45d] hover:text-[#17140f]"
            >
              View Featured
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8f6b27]">
              New Arrivals
            </p>
            <h2 className="mt-2 text-3xl font-bold">Signature watches</h2>
          </div>
          <Link
            href="/books"
            className="text-sm font-semibold uppercase tracking-[0.14em] text-[#17140f] underline decoration-[#c9a45d] underline-offset-8"
          >
            Browse Collection
          </Link>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {highlights.map((product) => (
            <Link
              href={`/books/${product.id}`}
              key={product.id}
              className="group rounded-lg border border-[#ddd6c8] bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-[#c9a45d]"
            >
              <div className="relative aspect-square overflow-hidden rounded-md bg-[#f0eee7]">
                <Image
                  src={`${baseURL}${product.image}`}
                  alt={product.name}
                  fill
                  className="object-contain p-6 transition duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="mt-1 text-sm text-[#6f6658]">
                    {product.description}
                  </p>
                </div>
                <p className="shrink-0 font-bold text-[#8f6b27]">
                  ${product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
