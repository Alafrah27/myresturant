import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [filterValues, setFilterValues] = useState("All");
  const [search, setSearch] = useState("");
  return (
    <FilterContext.Provider
      value={{ filterValues, setFilterValues, search, setSearch }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function UseFilter() {
  const context = useContext(FilterContext);
  if (context === null) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
}
