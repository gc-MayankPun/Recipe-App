import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";

const Create = () => {
  const { data, setData } = useContext();
  const { register, handleSubmit, reset } = useForm();

  const submitHandler = (recipe) => {
    recipe.id = nanoid();

    const copydata = [...data];
    copydata.push(recipe);
    setData(copydata);
    reset();
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
        <option value="cat-1">Category 1</option>
        <option value="cat-2">Category 2</option>
        <option value="cat-3">Category 3</option>
      </select>

      <button className="block mt-5 bg-gray-900 px-4 py-2 rounded">
        Save Recipe
      </button>
    </form>
  );
};

export default Create;
