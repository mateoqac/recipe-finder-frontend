import { type APIRecipeResponse } from "../types/api";
import { RECIPES_URL, FIND_URL } from "../config";

export async function searchRecipes(search?: string, page?: number): Promise<APIRecipeResponse> {
  try {
    const url = page ? `${FIND_URL}?page=${page}` : FIND_URL;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ingredient: search}), // body data type must match "Content-Type" header
    });
    return (await res.json()) as APIRecipeResponse;
  }
  catch (e)
  {
    throw new Error('Error while searching for the recipes')
  }
};

export async function indexRecipes(page?: number): Promise<APIRecipeResponse>{
  try {
    const url = page ? `${RECIPES_URL}?page=${page}` : RECIPES_URL;
    const res = await fetch(url);
    return (await res.json()) as APIRecipeResponse;
  }
  catch (e)
  {
    throw new Error('Error while fetching the recipes')
  }
}

