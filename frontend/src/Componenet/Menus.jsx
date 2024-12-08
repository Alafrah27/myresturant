import { UseCartApi } from "../context/CartContext";
import { GetAllProduct } from "../service/Apis";
import Loader from "../ui/Loader";
import OperactionMenu from "./OperactionMenu";
import MenuItem from "./MenuItem";

function Menus() {
  const { product, isLoading } = GetAllProduct();
  console.log("product", product);
  const { filteredValue } = UseCartApi();
  let filtered;

  if (filteredValue === "All-Menu") filtered = product;
  if (filteredValue === "pizza")
    filtered = product.filter((item) => item.category.name === "pizza");
  if (filteredValue === "French-Toast")
    filtered = product.filter((item) => item.category.name === "French-Toast");
  if (filteredValue === "Tartines")
    filtered = product.filter((item) => item.category.name === "Tartines");
  if (filteredValue === "Salads")
    filtered = product.filter((item) => item.category.name === "Salads");
  if (filteredValue === "Sourdough-Managesh")
    filtered = product.filter(
      (item) => item.category.name === "Sourdough-Managesh"
    );
  if (filteredValue === "Pasta")
    filtered = product.filter((item) => item.category.name === "Pasta");
  if (filteredValue === "New Dishes")
    filtered = product.filter((item) => item.category.name === "New Dishes");
  if (filteredValue === "eggs")
    filtered = product.filter((item) => item.category.name === "eggs");
  if (filteredValue === "Bowel")
    filtered = product.filter((item) => item.category.name === "Bowel");
  if (filteredValue === "Chicken")
    filtered = product.filter((item) => item.category.name === "Chicken");
  if (filteredValue === "Flatbread")
    filtered = product.filter((item) => item.category.name === "Flatbread");
  if (filteredValue === "Platters")
    filtered = product.filter((item) => item.category.name === "Platters");
  if (filteredValue === "Appetizers")
    filtered = product.filter((item) => item.category.name === "Appetizers");
  if (filteredValue === "Sandiwiches")
    filtered = product.filter((item) => item.category.name === "Sandiwiches");

  if (isLoading) return <Loader />;
  if (!filtered) return <Loader />


  return (
    <div className="max-w-[950px] mx-auto my-10">
      <div className="flex justify-between items-center text-1xl my-8 w-full px-4">
        <h1 className="font-semibold text-[15px]">All Menus</h1>
        <OperactionMenu />
      </div>

      <ul className="divide-y divide-stone-200 px-3 lg:px-2 flex flex-col gap-5 w-full   ">
        {filtered?.map((item) => (
          <MenuItem item={item} key={item._id} />
        ))}
      </ul>
    </div>
  );
}

export default Menus;
