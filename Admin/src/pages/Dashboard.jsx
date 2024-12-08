import DuractionCahrts from "../features/Dashboard/DuractionCahrts";
import ProcessingOrder from "../features/Dashboard/ProcessingOrder";
import SalesChart from "../features/Dashboard/SalesChart";
import Stats from "../features/Dashboard/Stats";
import { format } from "date-fns";
// import OrderOperation from "../ui/orderOperation";

function Dashboard() {
  const date = new Date();

  return (
    <div className="  w-full px-4 h-screen mx-auto ">
      <div className="flex justify-between items-center w-full ">
        <h1 className="text-[24px]  font-semibold  ">Dasboard </h1>
        <div className="flex gap-10">
          <h1 className="text-[20px]  font-semibold   ">
            {format(new Date(), "yyyy-MM-dd")}
          </h1>
          <h1 className="text-[20px]  font-semibold   ">
            {format(date, "hh:mm a")}
          </h1>
        </div>
      </div>

      <div className="flex flex-col w-full h">
        <Stats />
      </div>

      <div className=" w-full h-auto">
        <div className="flex     justify-between   my-4 gap-5 mx-auto ">
          <ProcessingOrder />
          <DuractionCahrts />
        </div>
      </div>

      <div className=" w-full h-auto my-10">
        <SalesChart />
      </div>
    </div>
  );
}

export default Dashboard;
