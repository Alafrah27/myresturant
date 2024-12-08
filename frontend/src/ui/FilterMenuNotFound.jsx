import { useNavigate } from "react-router-dom";

function FilterMenuNotFound() {
  const navgate = useNavigate();
  return (
    <div className="flex flex-col gap-4 max-w-[950px] h-[300px] mx-auto my-[100px]">
      <h1 className="text-center font-bold capitalize text-[20px]  text-gray-500">
        item not found
      </h1>
      <h1 onClick={() => navgate(-1)}>&times; go back</h1>
    </div>
  );
}

export default FilterMenuNotFound;
