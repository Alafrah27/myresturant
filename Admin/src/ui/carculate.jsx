export const CalculateOccupancyRate = (order) => {
  // Filter orders to only include "delivered" and "processing" statuses
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

  return occupancyRate;
};

// Example usage:
