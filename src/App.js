import React, { useEffect, useState } from "react";
import { baseUrl } from "./utils/urlConfig";
import axios from "axios";
import Navbar from "./components/Navbar";
import RecipeList from "./components/RecipeList";
import RecipeSteps from "./components/RecipeSteps";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [specials, setSpecials] = useState([]);
  const [displayRecipe, setDisplayRecipe] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState({});
  const section = "Popular this week";

  useEffect(() => {
    axios
      .get(`${baseUrl}/recipes`)
      .then((response) => {
        setRecipes(response?.data);
      })
      .catch((error) => console.log(error));

    axios
      .get(`${baseUrl}/specials`)
      .then((response) => {
        setSpecials(response?.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Navbar />
      <main>
        {!displayRecipe ? (
          <RecipeList
            section={section}
            recipes={recipes}
            setDisplayRecipe={setDisplayRecipe}
            setCurrentRecipe={setCurrentRecipe}
          />
        ) : (
          <RecipeSteps
            section={section}
            currentRecipe={currentRecipe}
            specials={specials}
            setDisplayRecipe={setDisplayRecipe}
          />
        )}
      </main>
    </>
  );
}

export default App;
