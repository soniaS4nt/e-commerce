import { Handlers, PageProps } from "https://deno.land/x/fresh@1.1.3/server.ts";
import { HeadElement } from "@/components/HeadElement.tsx";
import { Data } from "@/utils/types.ts";
import Footer from "@/components/Footer.tsx";
import Header from "@/components/Header.tsx";
import { getProducts } from "@/utils/products.ts";
import { ProductCard } from "@/components/ProductCard.tsx";
import SearchBar from "../islands/SearchBar.tsx";

export const handler: Handlers<Data> = {
  async GET(_req, ctx) {
    const products = await getProducts();
    return ctx.render(products);
  },
};
export default function Home(ctx: PageProps<Data>) {
  const { data, url } = ctx;
  const { products } = data;

  return (
    <div>
      <HeadElement
        description="Shop shoes handcrafted with love in the CHILE"
        image={url.href + "og-image.png"}
        title="Calzados Victorina"
        url={url}
      />
      <Header />
      <SearchBar />
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
