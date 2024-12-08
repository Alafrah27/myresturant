import { useState } from "react";
import { UseLoginForm } from "./useLoginForm";
import { Loader } from "lucide-react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLoading } = UseLoginForm();

  function handleLogin(e) {
    e.preventDefault();
    login({ email, password });
  }
  return (
    <div className="bg-white p-4 w-[400px]">
      <h2 className="text-3xl font-bold text-center text-slate-500 py-4">
        F&F LOGIN PAGE
      </h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-4 p-10">
        <div className="flex  flex-col gap-5">
          <label>Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Inter Your Email"
            className="px-3 py-4 w-full focus:outline-none border border-grey-300 rounded-sm"
            disabled={isLoading}
          />
        </div>
        <div className="flex flex-col gap-5">
          <label>Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Inter Your Password"
            className="px-3 py-4 w-full outline-none border border-grey-300 focus:outline-none rounded-sm"
            disabled={isLoading}
          />{" "}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="px-3 my-5  py-4 w-full bg-blue-500 border border-none  focus:outline-none text-white my-3rounded-sm  text-3xl font-bold text-center p"
        >
          {isLoading ? (
            <Loader
              size={18}
              className="animate-spin flex justify-center items-center"
            />
          ) : (
            "Login"
          )}
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
