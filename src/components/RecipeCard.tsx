import React from "react";
import CategoryIcon from "../icons/CategoryIcon";
import PrepClockIcon from "../icons/PrepClockIcon";
import CookClockIcon from "../icons/CookClockIcon";
import RatingIcon from "../icons/RatingIcon";

interface Props {
  title: string;
  cookTime: number;
  prepTime: number;
  rating: number;
  category: string;
  author: string;
  imageUrl: string;
  ingredients: string[];
}

const RecipeCard: React.FC<Props> = ({
  title,
  cookTime,
  prepTime,
  rating,
  category,
  author,
  imageUrl,
  ingredients,
}) => {
  return (
    <article className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-lg">
      <picture className="flex justify-center">
        <img
          width="300"
          height="300"
          src={imageUrl}
          alt={title + category + author}
          className="rounded-lg object-cover w-full h-64"
        />
      </picture>
      <div className="border-b grid gap-2 px-4 py-3">
        <div className="text-xl text-balance font-bold leading-none">
          {title}
        </div>
      </div>
      <div className="p-4">
        <ul className="list-disc list-inside">
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className="border-t grid items-center gap-2 px-4 py-3 text-sm">
        <div className="flex items-center gap-2">
          <PrepClockIcon />
          <span>Prep Time: {prepTime} min</span>
        </div>
        <div className="flex items-center gap-2">
          <CookClockIcon />
          <span>Cook Time: {cookTime} min</span>
        </div>
        <div className="flex items-center gap-2">
          <RatingIcon />
          <span>Rating: {rating}</span>
        </div>
      </div>
      <div className="border-t grid items-center gap-2 px-4 py-3 text-sm">
        <div className="flex items-center gap-2">
          <CategoryIcon />
          <span>Category: {category}</span>
        </div>
      </div>
    </article>
  );
};

export default RecipeCard;
