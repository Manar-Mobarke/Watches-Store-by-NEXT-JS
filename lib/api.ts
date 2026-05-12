import { Product } from "@/types";

export const baseURL =
  process.env.NEXT_PUBLIC_URL ?? "https://simple-api-hazel.vercel.app";

export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch(`${baseURL}/products`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.status}`);
  }

  const products = await response.json();
  return products.data;
}


export async function fetchSingleProduct(id: string): Promise<Product | null> {
  const response = await fetch(`${baseURL}/products/${id}`, {
    cache: "no-store",
  });

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error(`Failed to fetch product: ${response.status}`);
  }

  const singleProduct = await response.json();
  return singleProduct.data ?? null;
}
