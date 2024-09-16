import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import SectionTitle from "../SectionTitle/SectionTitle";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  console.log(recipes);

  useEffect(() => {
    fetch("recipe.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div>
      <SectionTitle
        title="Our Receipe"
        description="Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. "
      />
      <div className="flex mb-10 gap-10">
        <div className="w-[60%] grid grid-cols-2 gap-5">
          {recipes.map((recipe) => (
            <Recipe recipe={recipe} key={recipe.id} />
          ))}
        </div>

        <div className="flex-1 bg-green-500 p-4">
          <h2 className="text-white">Second Div (Remaining Space)</h2>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
