import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { TrendingUp, TrendingDown, ArrowRight } from "lucide-react";

const BookingHistoryChart = ({ data }) => {
  // Calculate percentage change
  const getPercentageChange = () => {
    if (data.length < 2) return 0;
    const oldValue = data[0].amount;
    const newValue = data[data.length - 1].amount;
    return ((newValue - oldValue) / oldValue) * 100;
  };

  const percentageChange = getPercentageChange();
  const isPositiveChange = percentageChange >= 0;

  // Format currency
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value);
  };

  // Custom Tooltip
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-base-200 p-4 rounded-lg shadow-lg border border-base-300">
          <p className="text-sm font-medium mb-2">{label}</p>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <p className="text-lg font-bold">{formatCurrency(payload[0].value)}</p>
          </div>
        </div>
      );
    }
    return null;
  };

  // Get min and max values for YAxis domain
  const amounts = data.map(item => item.amount);
  const minAmount = Math.min(...amounts);
  const maxAmount = Math.max(...amounts);
  const yAxisDomain = [minAmount * 0.8, maxAmount * 1.2];

  return (
    <div className="bg-base-100 rounded-xl p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold mb-2">Booking History</h2>
          <div className="flex items-center gap-2">
            <div className={`flex items-center gap-1 ${
              isPositiveChange ? 'text-success' : 'text-error'
            }`}>
              {isPositiveChange ? (
                <TrendingUp className="w-4 h-4" />
              ) : (
                <TrendingDown className="w-4 h-4" />
              )}
              <span className="font-medium">
                {Math.abs(percentageChange).toFixed(1)}%
              </span>
            </div>
            <span className="text-base-content/60">vs previous period</span>
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-6">
          <div className="bg-base-200/50 rounded-lg p-3">
            <p className="text-sm text-base-content/60 mb-1">Total Revenue</p>
            <p className="text-lg font-bold">
              {formatCurrency(data.reduce((sum, item) => sum + item.amount, 0))}
            </p>
          </div>
          <ArrowRight className="text-base-content/30" />
          <div className="bg-base-200/50 rounded-lg p-3">
            <p className="text-sm text-base-content/60 mb-1">Average</p>
            <p className="text-lg font-bold">
              {formatCurrency(data.reduce((sum, item) => sum + item.amount, 0) / data.length)}
            </p>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            <defs>
              <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.1)"
              vertical={false}
            />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tick={{ fill: '#666', fontSize: 12 }}
              dy={10}
            />
            <YAxis
              domain={yAxisDomain}
              tickFormatter={formatCurrency}
              tickLine={false}
              axisLine={false}
              tick={{ fill: '#666', fontSize: 12 }}
              dx={-10}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Area
              type="monotone"
              dataKey="amount"
              name="Revenue"
              stroke="#8884d8"
              fill="url(#colorAmount)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Legend/Info */}
      <div className="flex flex-wrap gap-4 text-sm text-base-content/60">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary/30"></div>
          <span>Area represents revenue trend</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary"></div>
          <span>Line shows exact values</span>
        </div>
      </div>
    </div>
  );
};

export default BookingHistoryChart;