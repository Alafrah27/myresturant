import { useState } from "react";

// import { Loader } from "lucide-react";
import { UseMoveBack } from "../../Hooks/useHooks";
import { UsepdateUser } from "./useUpdate";
import toast from "react-hot-toast";
import { AuthUser } from "../LoginForm/Auth";

export default function UpdateUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fristName, setFristName] = useState("");
  const [lastName, setLastName] = useState("");
  const [image, setImage] = useState("");

  const navigate = UseMoveBack();
  const { UpdateProfile, isPending } = UsepdateUser();
  const { User } = AuthUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !email == "" ||
      password == "" ||
      fristName == "" ||
      lastName == "" ||
      image == ""
    ) {
      return toast.error("Please add all fields");
    }

    try {
      const updatedData = {
        email,
        password,
        fristName,
        lastName,
      };
      if (image) {
        if (image) updatedData.image = await readFileAsDataURL(image);
      }

      UpdateProfile(updatedData);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  function readFileAsDataURL(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
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
            disabled={User?.email}
            value={User?.email}
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

        <div className="flex flex-row items-center gap-[6rem]">
          <label className="text-3xl  outline-none">Image</label>
          <input
            name="image"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            className="gb-blue-500 border-none focus:outline-none"
          />
        </div>
        <div className="flex flex-row justify-end items-center gap-4">
          <button
            disabled={isPending}
            type="submit"
            className="bg-blue-500 text-white py-5 px-5 rounded-md border-none focus:outline-none"
          >
            {/* {isLoading ? (
              <Loader size={18} className="animate-spin" />
            ) : (
              "Create User"
            )} */}
            update user
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
