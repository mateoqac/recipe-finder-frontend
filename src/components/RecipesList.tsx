import React from "react";
import RecipeCard from "./RecipeCard";
import { Recipe } from "../types/api";

interface Props {
  recipes: Recipe[];
}

const RecipesList: React.FC<Props> = ({ recipes }) => {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.title} // Make sure to include a unique key for each card
          title={recipe.title}
          imageUrl={recipe.image}
          author={recipe.author}
          category={recipe.category}
          cookTime={recipe.cook_time}
          prepTime={recipe.prep_time}
          rating={recipe.ratings}
          ingredients={recipe.ingredients}
        />
      ))}
    </div>
  );
};

export default RecipesList;
