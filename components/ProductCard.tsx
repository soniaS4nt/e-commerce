import { Product } from "../utils/types.ts";

export function ProductCard({ product }: { product: Product }) {
  return (
    <a key={product.id} href={`/products/${product.id}`} class="group">
      <div class="group relative">
        <h1>{product.name}</h1>
        <img src={product.image} alt={product.name} />
        <p>{product.description}</p>
        <p class="font-light">{product.category}</p>
        <strong>{product.price}</strong>
      </div>
    </a>
  );
}
