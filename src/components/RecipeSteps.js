import React from "react";
import { baseUrl } from "../utils/urlConfig";
import "./RecipeSteps.css";

export default function RecipeSteps({
  section,
  currentRecipe,
  specials,
  setDisplayRecipe
}) {
  function checkSpecials(ingredient) {
    return specials.filter((special) => {
      if (special?.ingredientId === ingredient?.uuid) return special;
    });
  }

  return (
    <div className="RecipeSteps">
      <div className="RecipeSteps-container">
        <h2>{currentRecipe?.title}</h2>
        <h3>
          featured in <span>{section}</span>
        </h3>
        <div className="RecipeSteps-time-container">
          <span className="RecipeSteps-times">
            <strong>Total Time: </strong>
            {currentRecipe?.prepTime + currentRecipe?.cookTime} minutes
          </span>
          <span className="RecipeSteps-times">
            <strong>Prep Time: </strong>
            {currentRecipe?.prepTime} minutes
          </span>
          <span className="RecipeSteps-times">
            <strong>Cook Time: </strong>
            {currentRecipe?.cookTime} minutes
          </span>
        </div>
        <div className="RecipeSteps-content">
          <div className="RecipeSteps-ingredients">
            <h4>Ingredients</h4>
            <ul>
              {currentRecipe?.ingredients.map((ingredient) => (
                <li key={ingredient.uuid}>
                  <span>
                    {`${ingredient?.amount} ${ingredient?.measurement} ${ingredient?.name}`}
                  </span>
                  <span className="RecipeSteps-specials">
                    {checkSpecials(ingredient).map((el, index) => (
                      <div key={index}>
                        <span>{el?.title}</span>
                        <span>{el?.text}</span>
                        <span>{el?.type}</span>
                      </div>
                    ))}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="RecipeSteps-preparation">
            <h4>Preparation</h4>
            <ol>
              {currentRecipe?.directions.map((step) => (
                <li>
                  {step?.instructions}
                  {step?.optional ? ` Optional.` : ""}
                </li>
              ))}
            </ol>
          </div>
          <div className="RecipeSteps-img">
            <img
              src={`${baseUrl}${currentRecipe?.images?.medium}`}
              alt={currentRecipe?.title}
            />
          </div>
        </div>
      </div>
      <button
        className="RecipeSteps-back-btn"
        onClick={() => setDisplayRecipe(false)}
      >
        Back to {section}
      </button>
    </div>
  );
}
