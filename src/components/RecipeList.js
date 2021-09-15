import React from "react";
import RecipeCard from "./RecipeCard";
import "./RecipeList.css";

export default function RecipeList({
  section,
  recipes,
  setDisplayRecipe,
  setCurrentRecipe
}) {
  return (
    <div className="Recipes">
      <h2>{section}</h2>
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.uuid}
          recipe={recipe}
          setDisplayRecipe={setDisplayRecipe}
          setCurrentRecipe={setCurrentRecipe}
        />
      ))}
    </div>
  );
}
