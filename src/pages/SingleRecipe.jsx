import { useContext } from "react";
import { useNavigate, useParams } from "react-router";
import { recipecontext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipe = () => {
  const { data, setData } = useContext(recipecontext);
  const navigate = useNavigate();

  const params = useParams();
  const recipe = data.find((recipe) => recipe.id == params.id);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: recipe.title,
      image: recipe.image,
      description: recipe.description,
      instructions: recipe.instructions,
      ingredients: recipe.ingredients,
      chef: recipe.chef,
      categories: recipe.category,
    },
  });

  const submitHandler = (recipe) => {
    const recipeIndex = data.findIndex((recipe) => params.id == recipe.id);
    const copydata = [...data];
    copydata[recipeIndex] = { ...copydata[recipeIndex], ...recipe };
    setData(copydata);
    toast.success("Recipe updated!");
  };

  const deleteHandler = () => {
    const filterdata = data.filter((r) => r.id != params.id);
    setData(filterdata);
    toast.success("Recipe deleted!");
    navigate("/");
  };

  return recipe ? (
    <div className="w-full flex">
      <div className="left w-1/2 p-2">
        <h1 className="text-5xl font-black">{recipe.title}</h1>
        <img
          className="h-[20vh]"
          src={recipe.image}
          alt={`${recipe.title}'s image`}
        />
        <h2 className="text-lg font-bold">{recipe.chef}</h2>
        <p className="text-gray-400">{recipe.description}</p>
      </div>
      <form className="w-1/2 p-2" onSubmit={handleSubmit(submitHandler)}>
        <input
          className="block border-b outline-0 p-2"
          {...register("image")}
          type="url"
          placeholder="Enter Image Url"
        />

        <input
          className="block border-b outline-0 p-2"
          {...register("title")}
          type="text"
          placeholder="Recipe Title"
        />

        <input
          className="block border-b outline-0 p-2"
          {...register("chef")}
          type="text"
          placeholder="Recipe Chef"
        />

        <textarea
          className="block border-b outline-0 p-2"
          {...register("description")}
          placeholder="//start form here"
        ></textarea>

        <textarea
          className="block border-b outline-0 p-2"
          {...register("ingredients")}
          placeholder="//write ingredients seperated by coma"
        ></textarea>

        <textarea
          className="block border-b outline-0 p-2"
          {...register("instructions")}
          placeholder="//write instructions seperated by coma"
        ></textarea>

        <select
          className="block border-b outline-0 p-2"
          {...register("categories")}
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="supper">Supper</option>
          <option value="dinner">Dinner</option>
        </select>

        <button className="block mt-5 bg-gray-900 px-4 py-2 rounded">
          Update Recipe
        </button>
        <button
          onClick={deleteHandler}
          className="block mt-5 bg-red-900 px-4 py-2 rounded"
        >
          Delete Recipe
        </button>
      </form>
    </div>
  ) : (
    "Loading..."
  );
};

export default SingleRecipe;
