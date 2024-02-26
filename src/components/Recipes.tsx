import { FC } from "react";
import RecipesList from "./RecipesList";
import { type Recipe } from "../types/api";

interface RecipeProps {
  recipes: Recipe[];
}

export const Recipes: FC<RecipeProps> = ({ recipes }) => {
  const hasRecipes = recipes?.length > 0;

  return hasRecipes ? <RecipesList recipes={recipes} /> : <NoRecipesResults />;
};

function NoRecipesResults() {
  return (
    <p className="text-xl text-balance text-blue-700 dark:text-white">
      Please introduce your ingredients(separated by comma) and look for a yummy
      recipe! 😎
    </p>
  );
}
