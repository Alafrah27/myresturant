import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { GetOrder } from "../Order/useOrder";
import { eachDayOfInterval, format, isSameDay, subDays } from "date-fns";

export default function SalesChart() {
  const { order } = GetOrder();

  const allDate = eachDayOfInterval({
    start: subDays(new Date(), 30),
    end: new Date(),
  });
  const data = allDate.map((date) => {
    return {
      label: format(date, "MM dd"),
      totalSales: order
        ?.filter((order) => isSameDay(date, new Date(order.createAt)))
        .reduce((acc, cur) => acc + cur.totalPrice, 0),
    };
  });
  const colors = {
    totalSales: { stroke: "#4f46e5", fill: "#4f46e5" },
    extrasSales: { stroke: "#22c55e", fill: "#22c55e" },
    text: "#6b7280",
    background: "#18212f",
  };

  return (
    <div className="flex flex-col gap-4 w-full  py-3 my-4 px-5 bg-gray-50 ">
      <h1 className="text-[24px] space-x-2 font-semibold text-gray-500 uppercase">
        SalesChart
      </h1>
      <div>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data} height={300} width={700}>
            <XAxis
              dataKey="label"
              tick={{ stroke: colors.text }}
              tickLine={{ stroke: colors.text }}
            />
            <YAxis
              unit="  sr "
              tick={{ stroke: colors.text }}
              tickLine={{ stroke: colors.text }}
            />
            <CartesianGrid strokeDasharray="4" />
            <Tooltip contentStyle={{ backgroundColor: colors.background }} />
            <Area
              dataKey="totalSales"
              type="monotone"
              stroke={colors.totalSales.stroke}
              fill={colors.totalSales.fill}
              strokeWidth={2}
              name="Total sales"
              unit=" sr"
            />
            <Area
              dataKey="extrasSales"
              type="monotone"
              stroke={colors.extrasSales.stroke}
              fill={colors.extrasSales.fill}
              strokeWidth={2}
              name="Extra sales"
              unit=" sr"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
