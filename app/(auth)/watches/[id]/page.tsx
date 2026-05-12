import { baseURL, fetchSingleProduct } from "@/lib/api";
import { getWatchColor } from "@/lib/colors";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = await fetchSingleProduct(id);

  if (!product) {
    return {
      title: "Watch Not Found | Chrono Atelier",
    };
  }

  return {
    title: `${product.name} | Chrono Atelier`,
    description: product.description,
  };
}

export default async function ProductDetails({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ color?: string }>;
}) {
  const { id } = await params;
  const product = await fetchSingleProduct(id);

  if (!product) {
    return notFound();
  }

  const { color } = await searchParams;
  const selectedColor = color ?? product.colors[0];

  return (
    <div className="bg-[#f7f7f2] px-5 py-12 text-[#17140f] sm:px-8">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/watches"
          className="text-sm font-semibold uppercase tracking-[0.14em] text-[#8f6b27] underline decoration-[#c9a45d] underline-offset-8"
        >
          Back to watches
        </Link>

        <section className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,1fr)] lg:items-center">
          <div className="relative aspect-square overflow-hidden rounded-lg border border-[#ddd6c8] bg-white">
            <Image
              src={`${baseURL}${product.image}`}
              fill
              alt={product.name}
              className="object-contain p-8 sm:p-12"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8f6b27]">
              Selected Timepiece
            </p>
            <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
              {product.name}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5f564a]">
              {product.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 border-y border-[#ddd6c8] py-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#6f6658]">
                  Price
                </p>
                <p className="mt-1 text-3xl font-bold text-[#8f6b27]">
                  ${product.price}
                </p>
              </div>
              <div className="h-12 w-px bg-[#ddd6c8]" />
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#6f6658]">
                  Finish
                </p>
                <p className="mt-1 text-lg font-semibold capitalize">
                  {selectedColor}
                </p>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#4f473c]">
                Select Color
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {product.colors.map((item) => {
                  const isSelected = item === selectedColor;

                  return (
                    <Link
                      href={`/watches/${product.id}?color=${encodeURIComponent(
                        item
                      )}`}
                      className={`flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-semibold capitalize transition ${
                        isSelected
                          ? "border-[#17140f] bg-[#17140f] text-white"
                          : "border-[#ddd6c8] bg-white text-[#4f473c] hover:border-[#c9a45d]"
                      }`}
                      key={item}
                    >
                      <span
                        className="h-4 w-4 rounded-full border border-[#cfc7b8]"
                        style={{ background: getWatchColor(item) }}
                      />
                      {item}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact-us"
                className="rounded-md bg-[#c9a45d] px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-[#17140f] transition hover:bg-[#d8b973]"
              >
                Reserve Timepiece
              </Link>
              <Link
                href="/watches"
                className="rounded-md border border-[#17140f] px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-[#17140f] transition hover:bg-[#17140f] hover:text-white"
              >
                Explore More
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
