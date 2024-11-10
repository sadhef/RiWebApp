import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ReferenceLine
} from 'recharts';
import { TrendingUp, TrendingDown } from 'lucide-react';

const Chart = ({ 
  data = [], 
  title = "Analytics",
  subtitle = "Data visualization",
  yAxisLabel = "Value",
  xAxisLabel = "Timeline",
  color = "#8884d8"
}) => {
  // Calculate trend
  const calculateTrend = () => {
    if (data.length < 2) return 0;
    const firstValue = data[0].value;
    const lastValue = data[data.length - 1].value;
    return ((lastValue - firstValue) / firstValue) * 100;
  };

  const trend = calculateTrend();
  const isPositive = trend >= 0;

  // Calculate average
  const average = data.reduce((acc, curr) => acc + curr.value, 0) / data.length;

  // Custom Tooltip Component
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-base-200 p-3 rounded-lg shadow-lg border border-base-300">
          <p className="font-medium text-sm mb-1">{label}</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }}></div>
            <p className="text-lg font-bold">{payload[0].value}</p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-base-100 rounded-xl p-6 shadow-lg">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div className="space-y-1 mb-4 md:mb-0">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-base-content/60 text-sm">{subtitle}</p>
        </div>

        {/* Stats Summary */}
        <div className="flex flex-wrap gap-4">
          <div className="bg-base-200/50 rounded-lg p-3">
            <p className="text-xs text-base-content/60 mb-1">Average</p>
            <p className="text-lg font-bold">{average.toFixed(2)}</p>
          </div>
          <div className={`bg-${isPositive ? 'success' : 'error'}/10 rounded-lg p-3`}>
            <p className="text-xs text-base-content/60 mb-1">Trend</p>
            <div className="flex items-center gap-1">
              {isPositive ? (
                <TrendingUp className="w-4 h-4 text-success" />
              ) : (
                <TrendingDown className="w-4 h-4 text-error" />
              )}
              <span className={`font-bold ${isPositive ? 'text-success' : 'text-error'}`}>
                {Math.abs(trend).toFixed(1)}%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.1} />
                <stop offset="95%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            </defs>
            
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.1)"
              vertical={false}
            />
            
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#666', fontSize: 12 }}
              dy={10}
              label={{
                value: xAxisLabel,
                position: 'insideBottom',
                offset: -10
              }}
            />
            
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#666', fontSize: 12 }}
              dx={-10}
              label={{
                value: yAxisLabel,
                angle: -90,
                position: 'insideLeft'
              }}
            />
            
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            
            {/* Average Reference Line */}
            <ReferenceLine
              y={average}
              stroke="#666"
              strokeDasharray="3 3"
              label={{
                value: 'Average',
                position: 'right',
                fill: '#666',
                fontSize: 12
              }}
            />
            
            <Line
              type="monotone"
              dataKey="value"
              stroke={color}
              strokeWidth={2}
              dot={{ fill: color, strokeWidth: 2 }}
              activeDot={{ r: 6, strokeWidth: 0 }}
              name="Value"
              fill="url(#colorValue)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Legend Section */}
      <div className="flex flex-wrap gap-4 mt-6 text-sm text-base-content/60">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }}></div>
          <span>Data points</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded border-2" style={{ borderColor: '#666' }}></div>
          <span>Average line</span>
        </div>
      </div>
    </div>
  );
};

export default Chart;