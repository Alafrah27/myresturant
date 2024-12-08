import { UseCartApi } from "../context/CartContext";

function Filter({ options }) {
  const { setFilteredValue } = UseCartApi();
  return (
    <select
      onChange={(e) => setFilteredValue(e.target.value)}
    >
      <option value="">Option Filter</option> {/* Default option */}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Filter;
