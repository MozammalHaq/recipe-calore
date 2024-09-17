import { AiOutlineFire } from "react-icons/ai";
import { FaRegClock } from "react-icons/fa";
import recipeImage from "../../assets/recipe.jpg";

const Recipe = ({ recipe, handleCook }) => {
  const { recipeName, shortDescription, ingredients, preparingTime, calories } =
    recipe;

  return (
    <div className="border rounded-lg p-4 border-gray-300 max-w-sm mx-auto">
      <img className="w-full rounded-lg" src={recipeImage} alt={recipeName} />
      <h2 className="text-2xl my-2 font-bold">{recipeName}</h2>
      <p className="text-sm md:text-base">{shortDescription}</p>
      <hr className="my-4 border-gray-300" />
      <h3 className="text-lg font-bold">Ingredients: {ingredients.length}</h3>
      <ul className="list-disc ml-6 text-sm mt-2 space-y-1">
        {ingredients.map((item, index) => (
          <li key={index} className="">
            {item}
          </li>
        ))}
      </ul>
      <hr className="my-4 border-gray-300" />
      <div className="font-semibold flex flex-wrap gap-4 mb-4">
        <p className="flex items-center gap-2 text-sm">
          <FaRegClock /> {preparingTime} minutes
        </p>
        <p className="flex items-center gap-2 text-sm">
          <AiOutlineFire /> {calories} calories
        </p>
      </div>
      <button
        onClick={() => handleCook(recipe)}
        className="bg-green-500 text-black py-2 px-4 font-bold rounded-full text-sm"
      >
        Want to Cook
      </button>
    </div>
  );
};

export default Recipe;
