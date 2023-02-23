Deno.test("products", async () => {
    const res = await fetch(
        "https://0f369382-86d7-4ee6-adb5-ec24b4c90a3c.mock.pstmn.io/products",
      );
      const data = await res.json();
        const products = data.products;
        const product = products[0];
        console.log(product);
});

