import React from "react";
import { baseUrl } from "../utils/urlConfig";
import "./RecipeCard.css";

export default function RecipeCard({
  recipe,
  setDisplayRecipe,
  setCurrentRecipe
}) {
  return (
    <div className="RecipeCard">
      <div
        key={recipe.uuid}
        className="RecipeCard-container"
        onClick={() => {
          setDisplayRecipe(true);
          setCurrentRecipe(recipe);
        }}
      >
        <div className="RecipeCard-img-container">
          <img src={`${baseUrl}${recipe.images.small}`} alt={recipe.title} />
        </div>
        <div className="RecipeCard-text-container">
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      </div>
      <div></div>
    </div>
  );
}
