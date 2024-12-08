import { UseFilter } from "../context/filterContext";

function Filter({ options }) {
  const { setFilterValues } = UseFilter();

  return (
    <div className="border border-gray-100 bg-gray-50 shadow-sm rounded-sm p-1 flex gap-6 ">
      {options?.map((option) => {
        return (
          <button
            key={option?.value}
            onClick={() => {
              setFilterValues(option.value);
            }}
            className={`filter  border-0 rounded-sm font-semibold text-[10px] p-3 transition-all duration-300 foucus:outline-none   
               
           `}
            disabled={option.value === "filter"}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

export default Filter;
