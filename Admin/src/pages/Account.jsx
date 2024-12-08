import UpdateUser from "../features/UserForm/UpdateUser";

function Account() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h1 className="text-[24px] space-x-2 font-semibold  ">Update User</h1>
      <UpdateUser />
    </div>
  );
}

export default Account;
