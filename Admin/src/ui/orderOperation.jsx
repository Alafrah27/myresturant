import Filter from "./Filter";

function OrderOperation() {
  return (
    <div className="flex items-center gap-10">
      <Filter
        options={[
          { value: "All", label: "All" },
          { value: "processing", label: "processing" },
          { value: "delivered", label: "delivered" },
          { value: "cancelled", label: "cancelled" },
        ]}
      />
    </div>
  );
}

export default OrderOperation;
