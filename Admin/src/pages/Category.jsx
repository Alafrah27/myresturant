import { useState } from "react";
import AddCategory from "../features/Category/AddCategory";
import FetchCategory from "../features/Category/FetchCategory";

function Category() {
  const [search, setSearch] = useState("");
  return (
    <div className="flex flex-col  w-full">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-[24px] space-x-2 font-semibold  ">
          All Categories
        </h1>
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="flex j py-5 px-3 border-gray-300 border-solid-3 w-1/3   bg-none border rounded-md focus:outline-none"
          type="type"
          placeholder="Search by Name"
        />
        <AddCategory />
      </div>
      <div className="flex flex-col  w-full border-2 bg border-gray-50 my-7 p-1">
        <FetchCategory search={search} />
      </div>
      <div className=" flex justify-end items-center my-2"></div>
    </div>
  );
}

export default Category;
