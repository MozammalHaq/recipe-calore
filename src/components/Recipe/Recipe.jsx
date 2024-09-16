import recipeImage from "../../assets/recipe.jpg";

const Recipe = ({ recipe }) => {
  const { recipeName, shortDescription, ingredients } = recipe;
  return (
    <div className="border rounded-lg p-3 border-gray-300">
      <img className="rounded-lg" src={recipeImage} alt="" />
      <h2 className="text-2xl my-2 font-bold">{recipeName}</h2>
      <p>{shortDescription}</p>
      <hr className="my-4" />
      <h3 className="text-xl font-bold">Ingredients: {ingredients.length}</h3>
      <ul className="list-disc ml-6 text-sm mt-2">
        {ingredients.map((item) => (
          <li className="">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recipe;
