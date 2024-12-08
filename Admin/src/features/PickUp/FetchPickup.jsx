import { UseFilter } from "../../context/filterContext";
import Loading from "../../ui/Loading";
import PickList from "./PickList";

import { GetPickup } from "./usePickup";

function FetchPickup() {
  const { pickup, isLoading } = GetPickup();
  const { filterValues } = UseFilter();
  let filtered;

  if (filterValues === "All") filtered = pickup;
  if (filterValues === "pending")
    filtered = pickup.filter((item) => item.status === "pending");
  if (filterValues === "ready")
    filtered = pickup.filter((item) => item.status === "ready");
  if (filterValues === "cancelled")
    filtered = pickup.filter((item) => item.status === "cancelled");
  console.log("order", pickup);
  return (
    <div className="flex flex-col gap-4 w-full bg-gray-50 py-3 px-5">
      <ul className="flex flex-col gap-4 w-full bg-gray-50 py-3 px-5">
        {isLoading ? (
          <Loading />
        ) : (
          filtered?.map((items, index) => (
            <PickList items={items} key={items._id} index={index + 1} />
          ))
        )}
      </ul>
    </div>
  );
}

export default FetchPickup;
