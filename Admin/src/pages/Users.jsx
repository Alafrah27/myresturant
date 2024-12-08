import UserForm from "../features/UserForm/UserForm";

function Users() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h2 className="text-4xl font-bold">Create Users New Account</h2>
      <UserForm />
    </div>
  );
}

export default Users;
