import { Product } from "@/types";

export const baseURL = process.env.NEXT_PUBLIC_URL;

export async function fetchProducts(): Promise<Product[]> {
    const response = await fetch(`${baseURL}/products`)
    if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.status}`)
    }
    const products = await response.json();
    return products.data;
}


export async function fetchSingleProduct(id: string): Promise<Product> {
  const response = await fetch(`${baseURL}/products/${id}`, {
    cache: "no-store",
  });
  const singleProduct = await response.json();
  return singleProduct.data;
}