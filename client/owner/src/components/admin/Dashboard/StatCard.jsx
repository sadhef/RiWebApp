import React from "react";
import CountUp from "react-countup";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const StatCard = ({ 
  title, 
  value, 
  icon: Icon, 
  className = "",
  prefix = "",
  suffix = "",
  trend = 0,
  trendLabel = "vs last period",
  iconClassName = "",
  subtitle = "",
  previousValue = 0,
  isLoading = false
}) => {
  const hasTrend = trend !== undefined;
  const isPositive = trend >= 0;
  const changePercentage = previousValue ? ((value - previousValue) / previousValue) * 100 : 0;

  // Loading animation states
  if (isLoading) {
    return (
      <div className={`card shadow-xl animate-pulse ${className}`}>
        <div className="card-body">
          <div className="flex justify-between items-center mb-4">
            <div className="h-4 bg-base-300 rounded w-24"></div>
            <div className="rounded-full bg-base-300 p-2">
              <div className="w-6 h-6"></div>
            </div>
          </div>
          <div className="h-8 bg-base-300 rounded w-32"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`card shadow-xl transition-all duration-300 group ${className}`}>
      <div className="card-body">
        {/* Header */}
        <div className="flex justify-between items-start mb-2">
          <div>
            <h2 className="card-title text-sm font-medium opacity-70">{title}</h2>
            {subtitle && (
              <p className="text-xs text-base-content/50 mt-1">{subtitle}</p>
            )}
          </div>
          <div className={`rounded-full p-2 group-hover:bg-base-200/50 transition-colors duration-300 ${iconClassName}`}>
            <Icon className="h-6 w-6" />
          </div>
        </div>

        {/* Value */}
        <div className="space-y-2">
          <p className="text-3xl font-bold">
            {prefix}
            <CountUp 
              end={value} 
              duration={2.5} 
              separator="," 
              decimals={Number.isInteger(value) ? 0 : 2}
            />
            {suffix}
          </p>

          {/* Trend Indicator */}
          {hasTrend && (
            <div className="flex items-center gap-2">
              <div
                className={`flex items-center gap-1 text-sm font-medium
                  ${isPositive ? 'text-success' : 'text-error'}`}
              >
                {isPositive ? (
                  <ArrowUpRight className="w-4 h-4" />
                ) : (
                  <ArrowDownRight className="w-4 h-4" />
                )}
                <span>{Math.abs(changePercentage).toFixed(1)}%</span>
              </div>
              <span className="text-xs text-base-content/50">{trendLabel}</span>
            </div>
          )}
        </div>

        {/* Progress Bar (optional, shown when trend exists) */}
        {hasTrend && (
          <div className="mt-4 h-1 bg-base-200 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500
                ${isPositive ? 'bg-success' : 'bg-error'}`}
              style={{ width: `${Math.min(Math.abs(changePercentage), 100)}%` }}
            ></div>
          </div>
        )}
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
    </div>
  );
};

// Example Stories
export const Default = () => (
  <StatCard
    title="Total Revenue"
    value={15000}
    prefix="₹"
    icon={(props) => <Icon {...props} />}
  />
);

export const WithTrend = () => (
  <StatCard
    title="Monthly Users"
    value={2500}
    previousValue={2000}
    trend={25}
    icon={(props) => <Icon {...props} />}
    subtitle="Active users this month"
  />
);

export const Loading = () => (
  <StatCard
    title="Total Sales"
    value={0}
    isLoading={true}
    icon={(props) => <Icon {...props} />}
  />
);

export default StatCard;