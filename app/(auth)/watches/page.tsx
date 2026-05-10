import { getWatchColor } from "@/lib/colors";
import { baseURL, fetchProducts } from "@/lib/api";
import Link from "next/link";
import Image from "next/image";

export default async function Watches() {
  const products = await fetchProducts();

  return (
    <div className="bg-[#f7f7f2] px-5 py-12 text-[#17140f] sm:px-8">
      <section className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8f6b27]">
          Collection
        </p>
        <div className="mt-2 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-4xl font-bold sm:text-5xl">Watches</h1>
            <p className="mt-3 max-w-2xl text-[#6f6658]">
              Choose from polished dress watches, streamlined everyday designs,
              and durable pieces made for travel.
            </p>
          </div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#4f473c]">
            {products.length} Timepieces
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              href={`/watches/${product.id}`}
              className="group rounded-lg border border-[#ddd6c8] bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-[#c9a45d]"
              key={product.id}
            >
              <div className="relative aspect-square overflow-hidden rounded-md bg-[#f0eee7]">
                <Image
                  src={`${baseURL}${product.image}`}
                  fill
                  alt={product.name}
                  className="object-contain p-7 transition duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="mt-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-lg font-bold">{product.name}</h2>
                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#6f6658]">
                      {product.description}
                    </p>
                  </div>
                  <p className="shrink-0 text-lg font-bold text-[#8f6b27]">
                    ${product.price}
                  </p>
                </div>

                <div className="mt-5 flex items-center gap-2">
                  {product.colors.map((color) => (
                    <span
                      aria-label={color}
                      className="h-5 w-5 rounded-full border border-[#cfc7b8]"
                      key={color}
                      style={{ background: getWatchColor(color) }}
                    />
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
