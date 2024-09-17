import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Orders from "../Order/Orders";
import Recipe from "../Recipe/Recipe";
import SectionTitle from "../SectionTitle/SectionTitle";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [cooks, setCooks] = useState([]);
  const [finished, setFinished] = useState([]);

  useEffect(() => {
    fetch("recipe.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  // hanlde want to cook
  const handleCook = (item) => {
    const added = cooks.find((add) => add.id === item.id);
    if (added) {
      return toast.error("already added");
    }
    setCooks([...cooks, item]);
    toast.success("Add as want to cook.");
  };

  // handle finished cooked and add to currently cooking table
  const handleFinish = (id) => {
    const done = cooks.find((cook) => cook.id === id);
    setFinished([...finished, done]);

    const ready = cooks.filter((cook) => cook.id !== id);
    setCooks(ready);
    toast.success("Cooking finish");
  };

  return (
    <div>
      <Toaster />
      <SectionTitle
        title="Our Receipe"
        description="Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. "
      />
      <div className="flex flex-col md:flex-row mb-10 gap-8">
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-5">
          {recipes.map((recipe) => (
            <Recipe recipe={recipe} key={recipe.id} handleCook={handleCook} />
          ))}
        </div>

        <div className="w-full md:w-2/5">
          <Orders
            cooks={cooks}
            handleFinish={handleFinish}
            finished={finished}
          />
        </div>
      </div>
    </div>
  );
};

export default Recipes;
