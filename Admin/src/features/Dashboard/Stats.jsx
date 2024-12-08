import {
  HiMiniCalculator,
  HiOutlineBanknotes,
  HiOutlineChartBar,
  HiTruck,
} from "react-icons/hi2";
import Stat from "../../ui/Stat.jsx";
import { GetOrder } from "../Order/useOrder";
import { formatCurrency } from "../../lib/Currency.jsx";

function Stats() {
  const { order } = GetOrder();

  const AllOrderLength = order?.length || 0;

  const calculateDelivered = order?.filter(
    (item) => item.status === "delivered"
  ).length;

  const caluclateTotalPrice = order
    ?.filter((item) => item.status === "delivered")
    .reduce((total, item) => total + item.totalPrice, 0);

  const filteredOrders = order?.filter(
    (item) => item?.status === "delivered" || item.status === "processing"
  );

  // Sum the total prices of the filtered orders
  const totalFilteredPrice = filteredOrders?.reduce(
    (acc, cur) => acc + cur.totalPrice,
    0
  );

  // Calculate total price of all orders
  const totalOrdersPrice = order?.reduce((acc, cur) => acc + cur.totalPrice, 0);

  // Calculate occupancy rate (if totalOrdersPrice is not zero to avoid division by zero)
  const occupancyRate =
    totalOrdersPrice > 0 ? (totalFilteredPrice / totalOrdersPrice) * 100 : 0;
 
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-3 flex-grow w-full">
      <Stat
        value={AllOrderLength}
        title="Total Orders"
        color="blue"
        icon={<HiMiniCalculator />}
      />
      <Stat
        value={calculateDelivered}
        title="Delivered"
        color="green"
        icon={<HiTruck />}
      />
      <Stat
        value={formatCurrency(caluclateTotalPrice)}
        title="Total Revenue"
        color="yellow"
        icon={<HiOutlineBanknotes />}
      />
      <Stat
        value={Math.ceil(occupancyRate) + "%"}
        title="Occupancy Rate "
        color="red"
        icon={<HiOutlineChartBar />}
      />
    </div>
  );
}

export default Stats;
