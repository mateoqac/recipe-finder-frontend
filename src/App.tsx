import Searchbar from "./components/SearchBar";
import Pagination from "./components/Pagination";
import "./styles/tailwind.css";
import { useState } from "react";

import { useRecipes } from "./hooks/useRecipes";
import { Recipes } from "./components/Recipes";

function App() {
  const [search, updateSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  const { recipes, pageCount, loading, getRecipes } = useRecipes({
    search,
    pageNumber,
  });

  const handleSearch = (ingredients: string) => {
    const trimmed = ingredients.replace(" ", ", ").trim();
    updateSearch(trimmed);
    getRecipes({ search: trimmed });
  };

  const handlePageChange = (page: number) => {
    setPageNumber(page);
    getRecipes({ search: search, pageNumber: page });
  };

  return (
    <main className="max-w-5xl px-4 m-auto">
      <section className="text-center p-8">
        <h1 className="text-5xl text-gray-700 dark:text-white">
          Welcome to Recipe Finder
        </h1>
      </section>
      <Searchbar onSearch={handleSearch} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Recipes recipes={recipes} />
          <Pagination onPageChange={handlePageChange} pageCount={pageCount} />
        </>
      )}
    </main>
  );
}

export default App;
