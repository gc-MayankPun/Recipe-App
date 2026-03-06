import { Link } from "react-router";

const RecipeCard = ({ recipe }) => {
  const { id, image, title, chef, description } = recipe;

  return (
    <Link
      to={`/recipe/details/${id}`}
      className="hover:scale-105 duration-150 block w-[23vw] mr-3 mb-3 rounded overflow-hidden shadow"
    >
      <img
        className="w-full h-[20vh] object-cover"
        src={image}
        alt={`${title}'s image`}
      />
      <h1 className="px-2 mt-2 font-black">{title}</h1>
      <small className="px-2 text-red-400">{chef}</small>
      <p className="px-2 pb-3">
        {description.slice(0, 100)}...{" "}
        <small className="text-blue-400">more</small>
      </p>
    </Link>
  );
};

export default RecipeCard;
