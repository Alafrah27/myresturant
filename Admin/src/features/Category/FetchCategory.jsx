import Loading from "../../ui/Loading";
import CategoryList from "./CategoryList";
import { GetCategory } from "./useCategory";

function FetchCategory({ search }) {
  const { category, isLoding } = GetCategory();
  return (
    <div className="flex flex-col gap-4 w-fullpy-3 bg-gray-50 px-5">
      <ul className="flex flex-wrap  justify-between  gap-4 w-full py-3 px-5">
        {isLoding ? (
          <Loading />
        ) : (
          category
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.name.toLowerCase().includes(search.toLowerCase());
            })
            .map((item) => (
              <CategoryList item={item} key={item._id} isLoding={isLoding} />
            ))
        )}
      </ul>
    </div>
  );
}

export default FetchCategory;
