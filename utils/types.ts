export interface Product {
    id: string;
    handle: string;
    name: string;
    price: number;
    image: string;
    description: string;
    category: string;
  }
  
  export interface Data {
    products: Product[];
  }