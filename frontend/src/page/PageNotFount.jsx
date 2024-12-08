import { useNavigate } from "react-router-dom";

function PAGEnotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center  w-full h-screen bg-slate-50 text-blue-600">
      <div className="flex flex-col gap-4 my-0 mx-auto items-center ">
        <h3 className="text-3xl font-bold text-slate-700">PAGE NOT FOUNT ):</h3>
        <button
          className="bg-blue-600 border border-none focus:outline-none animate-pulse  text-white semibold text-1xl w-[100px] py-5 px-4 rounded-md"
          onClick={() => navigate("/")}
        >
          GO BACK
        </button>
      </div>
    </div>
  );
}

export default PAGEnotFound;
