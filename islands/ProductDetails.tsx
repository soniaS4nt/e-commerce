import { css } from "twind/css";
import { Product } from "@/utils/types.ts";
import { Button } from "@/components/Button.tsx";

const descriptionStyles = css({
  "a": {
    color: "#056CF0",
  },
  "a:hover": {
    textDecoration: "underline",
  },
});

export default function ProductDetails({ product }: { product: Product }) {
  return (
    <div class="w-11/12 max-w-5xl mx-auto mt-8 lg:grid lg:grid-cols-2 lg:gap-x-16">
      {/* Product details */}
      <div>
        <div class="flex flex-col gap-4">
          <div class="w-full flex items-center justify-between gap-4">
            <hgroup>
              <img src={product.image} alt={product.name} />
              <h2 class="text-xl lg:!text-2xl font-semibold text-gray-800">
                {product.name}
              </h2>
              <h3 class="text-gray-500 text-base leading-tight">
                {product.description}
              </h3>
              <p class="px-6 py-2 text-lg text-gray-900 font-bold">
                $ {product.price}
              </p>
              <Button>
                comprar
              </Button>
            </hgroup>
          </div>
        </div>
      </div>
    </div>
  );
}
