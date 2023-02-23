import Cart from "@/islands/Cart.tsx";

export default function Header() {
  return (
    <header class=" h-[200px] sm:h-[144px] w-full bg-blue-300 justify-between flex items-center">
      <div class="m-3">
        <h1 class="text-3xl">Calzados Victorina</h1>
        <p class="text-2xl">
          Hechos a 🖐️
        </p>
      </div>
      <div class="m-3">
        <Cart />
      </div>
    </header>
  );
}
