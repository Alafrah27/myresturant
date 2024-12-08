import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { GetOrder } from "../Order/useOrder";

function DuractionCahrts() {
  const { order } = GetOrder();

  const processedOrders = order || [];
  // Fallback to an empty array
  const total = processedOrders.reduce((acc, cur) => acc + cur.totalPrice, 0);

  const process = processedOrders
    .filter((item) => item.status === "processing")
    .reduce((acc, cur) => acc + cur.totalPrice, 0);
  const delivered = processedOrders
    .filter((item) => item.status === "delivered")
    .reduce((acc, cur) => acc + cur.totalPrice, 0);
  const cancelled = processedOrders
    .filter((item) => item.status === "cancelled")
    .reduce((acc, cur) => acc + cur.totalPrice, 0);

  const startDataDark = [
    {
      duration: "totalPrice",
      value: total, // Changed to number
      color: "#08a308",
    },
    {
      duration: "processing",
      value: process, // Changed to number
      color: "#0f766e",
    },
    {
      duration: "delivered",
      value: delivered, // Changed to number
      color: "#1d4ed8",
    },
    {
      duration: "cancelled", // Corrected spelling
      value: cancelled, // Changed to number
      color: "#ef4444",
    },
  ];
  const data = startDataDark;
  return (
    <div className="flex flex-col  gap-4  mx-auto lg:w-1/2 ">
      <h1 className="text-[24px] space-x-2 font-semibold text-gray-500 uppercase">
        Duration Summary
      </h1>
      <div className="w-full bg-gray-50">
        <ResponsiveContainer width="100%" height={240}>
          <PieChart>
            <Pie
              data={data}
              nameKey="duration"
              dataKey="value"
              innerRadius={85}
              outerRadius={110}
              cx="40%"
              cy="50%"
              paddingAngle={3}
            >
              {data.map((entry) => (
                <Cell
                  fill={entry.color}
                  stroke={entry.color}
                  key={entry.duration}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend
              verticalAlign="middle"
              align="right"
              width="30%"
              layout="vertical"
              iconSize={15}
              iconType="circle"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default DuractionCahrts;
