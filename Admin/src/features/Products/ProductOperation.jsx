import Filter from "../../ui/Filter";

function ProductOperation() {
  return (
    <div className="flex items-center gap-10">
      <Filter
        options={[
          { value: "All", label: "All" },
          { value: "no-discount", label: "No Discount" },
          { value: "with-discount", label: "with Discount" },
        ]}
      />
    </div>
  );
}

export default ProductOperation;
