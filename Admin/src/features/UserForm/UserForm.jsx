import { useState } from "react";
import { UseSignupForm } from "./useSignupFrom";
import { Loader } from "lucide-react";
import { UseMoveBack } from "../../Hooks/useHooks";

export default function UserForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fristName, setFristName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isAdmin, setAdmin] = useState();
  const { signup, isLoading } = UseSignupForm();
  const navigate = UseMoveBack();

  function handleSubmit(e) {
    e.preventDefault();
    signup({ email, password, fristName, lastName, isAdmin });
    console.log({ email, password, fristName, lastName, isAdmin });
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-10 w-full bg-gray-50 border-gray-100 my-4 mx-auto px-10 py-10"
      >
        <div className="flex flex-row items-center gap-10">
          <label className="text-3xl  outline-none">FristName</label>
          <input
            value={fristName}
            onChange={(e) => setFristName(e.target.value)}
            className="py-5 px-3 border-gray-300 border-solid-3  w-1/2 bg-none border rounded-md focus:outline-none"
            type="type"
            placeholder="Enter Your FrisName"
          />
        </div>

        <div className="flex flex-row items-center gap-10">
          <label className="text-3xl  outline-none">LastName</label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="py-5 px-3 border-gray-300 border-solid-3  w-1/2 bg-none border rounded-md focus:outline-none"
            type="type"
            placeholder="Enter Your lastName"
          />
        </div>

        <div className="flex flex-row items-center gap-[7rem]  ">
          <label className="text-3xl  outline-none" htmlFor="">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="py-5 px-3  border-gray-300 border-solid-3  w-1/2 bg-none border rounded-md focus:outline-none"
            type="email"
            placeholder="Enter Your Email"
          />
        </div>

        <div className="flex flex-row items-center gap-10">
          <label className="text-3xl  outline-none">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="flex j py-5 px-3 border-gray-300 border-solid-3  w-1/2 bg-none border rounded-md focus:outline-none"
            type="password"
            placeholder="Enter Your Password"
          />
        </div>

        <div className="flex flex-row items-center gap-[4rem]">
          <label className="text-3xl  outline-none">isAdmin</label>
          <select
            value={isAdmin}
            onChange={(e) => setAdmin(e.target.value)}
            className="py-5 px-3  border-gray-300 border-solid-3  w-1/2 bg-none border rounded-md focus:outline-none"
          >
            <option
              className="py-5 px-3  border-gray-300 border-solid-3  w-1/2 bg-none border rounded-md focus:outline-none"
              value="admin"
            >
              admin
            </option>
            <option
              className="py-5 px-3  border-gray-300 border-solid-3 no-underline  w-1/2 bg-none border rounded-md focus:outline-none"
              value="customer"
            >
              customer
            </option>
          </select>
        </div>
        <div className="flex flex-row justify-end items-center gap-3">
          <button
            type="submit"
            className="bg-blue-500 text-white py-5 px-5 rounded-md border-none focus:outline-none"
          >
            {isLoading ? (
              <Loader size={18} className="animate-spin" />
            ) : (
              "Create User"
            )}
          </button>
          <button
            onClick={() => navigate()}
            className="bg-red-500     text-white py-5 px-5 rounded-md border-none focus:outline-none"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
