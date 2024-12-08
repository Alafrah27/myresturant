import PostProfile from "../features/UserForm/FetchUser";

import Pagination from "../Hooks/UseFetch";

function AllUsers() {
  return (
    <div className="flex flex-col  w-full">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-[24px] space-x-2 font-semibold  ">Get All Users</h1>
        <input
          className="flex j py-5 px-3 border-gray-300 border-solid-3 w-1/2   bg-none border rounded-md focus:outline-none"
          type="type"
          placeholder="Search by Name"
        />
      </div>
      <div className="flex flex-col  w-full border-2 border-gray-200 my-7 p-1">
        <div className="tableStayle  mx-5  ">
          <div>image</div>
          <div>FristName</div>
          <div>LastName</div>
          <div>Email</div>
          <div>Status</div>
          <div>CreateAt</div>
        </div>
        <PostProfile />
        <Pagination />
      </div>
    </div>
  );
}

export default AllUsers;
