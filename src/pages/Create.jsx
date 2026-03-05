import { useForm } from "react-hook-form";

const Create = () => {
  const { register, handleSubmit } = useForm();

  return (
    <form>
      <input
        className="border-b outline-0 p-2"
        {...register("title")}
        type="text"
        placeholder="Recipe Title"
      />
    </form>
  );
};

export default Create;
