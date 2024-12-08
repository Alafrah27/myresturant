import { useState } from "react";
import { Link } from "react-router-dom";
import { UseLoginForm } from "../service/Apis";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = UseLoginForm();

  function handleLogin(e) {
    e.preventDefault();
    login({ email, password });
  }
  return (
    <div className="bg-white p-4 w-[400px]">
      <h2 className="text-3xl font-bold text-center text-slate-500 py-4">
        WELLCOME BACKE
      </h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-4 p-10">
        <div className="flex  flex-col gap-5">
          <label>Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Inter Your Email"
            className="px-3 sm:py-6 py-7 w-full focus:outline-none border-2 border-gray-300 rounded-sm"
          />
        </div>
        <div className="flex flex-col gap-5">
          <label>Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Inter Your Password"
            className="px-3  py-7 w-full outline-none border-2 border-gray-300 focus:outline-none rounded-sm"
          />{" "}
        </div>

        <button
          type="submit"
          className="px-3 my-5  py-7 w-full bg-orange-500 border border-none  focus:outline-none text-white my-3rounded-sm  text-3xl font-bold text-center p"
        >
          login
        </button>
      </form>
      <p className="text-center text-orange-500 font-semibold ">
        {` I Don't have an account ?`}
        <Link to="/singup" className="underline text-blue-500 mx-4">
          Create An Account
        </Link>
      </p>
    </div>
  );
}

export default LoginForm;
