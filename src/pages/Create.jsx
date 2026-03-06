import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const Create = () => {
  const navigate = useNavigate();

  const { setData } = useContext(recipecontext);
  const { register, handleSubmit, reset } = useForm();

  const submitHandler = (recipe) => {
    recipe.id = nanoid();
    setData((prev) => [...prev, recipe]);
    toast.success("New recipe created!");
    reset();
    navigate("/recipes");
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
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
        Save Recipe
      </button>
    </form>
  );
};

export default Create;
