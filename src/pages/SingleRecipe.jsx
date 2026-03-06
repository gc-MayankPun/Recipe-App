import { useContext } from "react";
import { useParams } from "react-router";
import { recipecontext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";

const SingleRecipe = () => {
  const { data } = useContext(recipecontext);
  const { register, handleSubmit } = useForm();

  const params = useParams();
  const recipe = data.find((recipe) => recipe.id == params.id);

  const submitHandler = () => {};

  return recipe ? (
    <div className="w-full flex">
      <div className="left w-1/2 p-2">
        <h1 className="text-5xl font-black">{recipe.title}</h1>
        <img
          className="h-[20vh]"
          src={recipe.image}
          alt={`${recipe.title}'s image`}
        />
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
          Save Recipe
        </button>
      </form>
    </div>
  ) : (
    "Loading..."
  );
};

export default SingleRecipe;
