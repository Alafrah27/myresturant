import { Link, Outlet, useParams } from "react-router-dom";
// import { GetOrderById } from "../service/Apis";

function GetOrder() {
  // const { getOrder } = GetOrderById();
  const { id } = useParams();

  return (
    <div className="max-w-[950px] flex flex-col gap-9   px-4 py-6 w-full mx-auto my-2">
      <div className="flex gap-5 p-3  space-x-2 mx-6">
        <h1 className="font-semibold outline-none bg-gray-400 rounded-md px-4 py-2 text-black">
          <Link to={`/order/${id}`} className="cursor-pointer outline-none">
            New Order{" "}
          </Link>
        </h1>
        <h1 className="font-semibold outline-none bg-gray-400 rounded-md px-4 py-2 text-black">
          <Link
            to={`/order/${id}/allorder`}
            className="cursor-pointer outline-none"
          >
            All Orders
          </Link>
        </h1>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default GetOrder;
