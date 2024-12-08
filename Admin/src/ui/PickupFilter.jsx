import Filter from "./Filter";

function PickupOperation() {
  return (
    <div className="flex items-center gap-10">
      <Filter
        options={[
          { value: "All", label: "All" },
          { value: "pending", label: "preparing" },
          { value: "ready", label: "Ready" },
          { value: "cancelled", label: "cancelled" },
        ]}
      />
    </div>
  );
}

export default PickupOperation;
