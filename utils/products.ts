export async function getProducts() {
    const res = await fetch(
        `https://0f369382-86d7-4ee6-adb5-ec24b4c90a3c.mock.pstmn.io/products`,
      );
      const products = await res.json();
      console.log(products);
      
      return products;
}

export async function getProduct({ id }: { id: string}) {
    const res = await fetch(
        `https://0f369382-86d7-4ee6-adb5-ec24b4c90a3c.mock.pstmn.io/products?id=${id}`,
      );
      const product = await res.json();
      return product;
}