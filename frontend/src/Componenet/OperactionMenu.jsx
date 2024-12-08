import Filter from "../ui/Filter";

function OperactionMenu() {
  return (
    <div className="flex items-center gap-10">
      <Filter
        options={[
          { value: "All-Menu", label: "All-Menu" },
          { value: "pizza", label: "pizza" },
          { value: "French-Toast", label: "French Toast" },
          { value: "Tartines", label: "Tartines" },
          { value: "Salads", label: "Salads" },
          { value: "Sourdough-Managesh", label: "Sourdough Managesh" },
          { value: "Pasta", label: "Pasta" },
          { value: "New Dishes", label: "New Dishes" },
          { value: "eggs", label: "eggs" },
          { value: "Bowel", label: "Bowel" },
          { value: "Chicken", label: "Chicken" },
          { value: "Flatbread", label: "Flatbread" },
          { value: "Platters", label: "Platters" },
          { value: "Appetizers", label: "Appetizers" },
          { value: "Sandiwiches", label: "Sandiwiches" },
        ]}
      />
    </div>
  );
}

export default OperactionMenu;
