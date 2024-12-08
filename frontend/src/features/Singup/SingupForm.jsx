import { useState } from "react";
import { Link } from "react-router-dom";
import { UseSignupForm } from "../../service/Apis";

function SignupForm() {
  const [fristName, setFristName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup } = UseSignupForm();

  function handleSingup(e) {
    e.preventDefault();
    signup({ fristName, lastName, email, password });
  }
  return (
    <div className="bg-white p-4 w-[400px]">
      <h2 className="text-3xl font-bold text-center text-slate-500 py-4 my-4">
        CREATE YOUR ACCOUNT & JOIN US
      </h2>
      <form onSubmit={handleSingup} className="flex flex-col gap-4 p-10">
        <div className="flex  flex-col gap-5">
          <label className="text-gray-500">FristName</label>
          <input
            value={fristName}
            onChange={(e) => setFristName(e.target.value)}
            type="text"
            placeholder="Inter Your FristName"
            className="px-3 py-6 w-full focus:outline-none border border-grey-300 rounded-sm"
          />
        </div>
        <div className="flex  flex-col gap-5">
          <label className="text-gray-500">LastName</label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            placeholder="Inter Your LastName"
            className="px-3 py-6 w-full focus:outline-none border border-grey-300 rounded-sm"
          />
        </div>
        <div className="flex  flex-col gap-5">
          <label className="text-gray-500">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Inter Your Email"
            className="px-3 py-6 w-full focus:outline-none border border-grey-300 rounded-sm"
          />
        </div>
        <div className="flex flex-col gap-5">
          <label className="text-gray-500">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Inter Your Password"
            className="px-3 py-6 w-full outline-none border border-grey-300 focus:outline-none rounded-sm"
          />{" "}
        </div>

        <button
          type="submit"
          className="px-3 my-5  py-6 w-full bg-orange-500 border border-none  focus:outline-none text-white my-3rounded-sm  text-3xl font-bold text-center p"
        >
          Create Account
        </button>
      </form>
      <p className="text-center text-orange-500 font-semibold ">
        Already Have An Account ?{" "}
        <Link to="/login" className="underline text-blue-500 mx-4">
          Login
        </Link>
      </p>
    </div>
  );
}

export default SignupForm;
