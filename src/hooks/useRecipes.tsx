import { useRef, useState, useCallback } from "react";
import { searchRecipes } from "../services/recipes";
import { type Recipe } from "../types/api";
interface UseRecipesProps {
  search: string;
  pageNumber: number;
}

interface UseRecipesResult {
  recipes: Recipe[];
  pageCount: number;
  currentPageNumber: number;
  getRecipes: (props: { search: string; pageNumber?: number }) => Promise<void>;
  loading: boolean;
}

export function useRecipes({
  search,
  pageNumber,
}: UseRecipesProps): UseRecipesResult {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPageNumber, setcurrentPageNumber] = useState(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [, setError] = useState<null | string>(null);
  const previousSearch = useRef<string>(search);

  const getRecipes = useCallback(
    async ({ search, pageNumber }: { search: string; pageNumber?: number }) => {
      try {
        setLoading(true);
        setError(null);
        previousSearch.current = search;
        const newRecipes = await searchRecipes(search, pageNumber);
        setRecipes(newRecipes.data);
        setPageCount(newRecipes.meta.total_pages);
        setcurrentPageNumber(newRecipes.meta.current_page);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return { recipes, pageCount, currentPageNumber, getRecipes, loading };
}
