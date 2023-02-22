import { Handlers, PageProps } from "https://deno.land/x/fresh@1.1.3/server.ts";
import { HeadElement } from "@/components/HeadElement.tsx";
import { Data, Product } from "@/utils/types.ts";
import Footer from "@/components/Footer.tsx";
import Header from "@/components/header.tsx";

export const handler: Handlers<Data> = {
  async GET(_req, ctx) {
    const res = await fetch(
      "https://0f369382-86d7-4ee6-adb5-ec24b4c90a3c.mock.pstmn.io/products",
    );
    const data = await res.json();
    return ctx.render(data);
  },
};
export default function Home(ctx: PageProps<Data>) {
  const { data, url } = ctx;
  const products = data.products;
  return (
    <div>
      <HeadElement
        description="Shop shoes handcrafted with love in the CHILE"
        image={url.href + "og-image.png"}
        title="Calzados Victorina"
        url={url}
      />
      <Header />
      <div
        class="w-11/12 max-w-5xl mx-auto mt-28 mb-40"
        aria-labelledby="information-heading"
      >
        <div class="grid grid-cols-1 gap-8 sm:!gap-x-10 sm:!grid-cols-2 lg:!grid-cols-3 lg:!gap-x-12 lg:!gap-y-10">
          {products.map((product) => <ProductCard product={product} />)}
        </div>
      </div>
      <Footer />
    </div>
  );
}

function ProductCard(props: { product: Product }) {
  const { product } = props;
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
