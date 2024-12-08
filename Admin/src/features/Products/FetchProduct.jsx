import ProductList from "./ProductList";
import { GetProduct } from "./useProduct";
import { UseFilter } from "../../context/filterContext";
import Loading from "../../ui/Loading";

function FetchProduct() {
  const { product, isLoading } = GetProduct();
  const { filterValues } = UseFilter();
  const { search } = UseFilter();
  console.log("filterValues", filterValues);

  let filtered;
  if (filterValues === "All") {
    filtered = product;
  } else if (filterValues === "no-discount") {
    filtered = product.filter((item) => item.discount === 0);
  } else if (filterValues === "with-discount") {
    filtered = product.filter((item) => item.discount > 0);
  }

  return (
    <div className="flex flex-col gap-4 w-full bg-gray-50 py-3 px-5">
      <ul className="flex flex-col gap-4 w-full bg-gray-50 py-3 px-5">
        {isLoading ? (
          <Loading />
        ) : (
          filtered
            ?.filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.name.toLowerCase().includes(search.toLowerCase());
            })
            .map((item) => <ProductList item={item} key={item._id} />)
        )}
      </ul>
    </div>
  );
}

export default FetchProduct;
