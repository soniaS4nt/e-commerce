import { useState } from "preact/hooks";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  const handleSearch = (e: any) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <div class="flex flex-col items-center justify-center mt-3">
      <div class="flex flex-row items-center justify-center">
        <input
          type="text"
          placeholder="Buscar..."
          value={search}
          class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
        />
        <button
          type="button"
          class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 ml-2"
          onClick={handleSearch}
        >
          Buscar
        </button>
      </div>
    </div>
  );
}
