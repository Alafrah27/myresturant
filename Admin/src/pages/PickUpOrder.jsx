import AddPickup from "../features/PickUp/AddPickup";
import FetchPickup from "../features/PickUp/FetchPickup";
import PickupOperation from "../ui/PickupFilter";

function PickUpOrder() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-[24px] space-x-2 font-semibold  ">
          delivery & pick up
        </h1>

        <PickupOperation />
        <AddPickup />
      </div>
      <div className="flex flex-col  w-full border-2 border-gray-200 my-2 p-1">
        <div className="pickList flex items-center mx-12   ">
          <div>Number</div>
          <div>OrderNumber</div>
          <div>company Name</div>
          <div>status</div>
          <div>createAt</div>
        </div>

        <FetchPickup />
        <div className=" flex justify-end items-center bg-gray-50 px-4"></div>
      </div>
    </div>
  );
}

export default PickUpOrder;
