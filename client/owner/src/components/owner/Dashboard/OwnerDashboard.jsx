import React from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import CountUp from "react-countup";
import { Users, DollarSign, Star, MapPin } from "lucide-react";
import useOwnerDashboard from "@hooks/owner/useOwnerDashboard";

const OwnerDashboard = () => {
  const { dashboardData, loading, error } = useOwnerDashboard();

  if (error) {
    return (
      <div className="p-4">
        <div className="alert alert-error shadow-lg">
          <span>{error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6 bg-base-200 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
          Owner Dashboard
        </h1>

        {loading ? (
          <DashboardSkeleton />
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <StatCard
                title="Total Bookings"
                value={dashboardData.totalBookings}
                icon={<Users className="w-6 h-6 text-primary" />}
              />
              <StatCard
                title="Total Revenue"
                value={dashboardData.totalRevenue}
                icon={<DollarSign className="w-6 h-6 text-primary" />}
                prefix="₹"
              />
              <StatCard
                title="Total Reviews"
                value={dashboardData.totalReviews}
                icon={<Star className="w-6 h-6 text-primary" />}
              />
              <StatCard
                title="Total Turfs"
                value={dashboardData.totalTurfs}
                icon={<MapPin className="w-6 h-6 text-primary" />}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ChartCard title="Bookings per Turf">
                {dashboardData.bookingsPerTurf.length > 0 ? (
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                      data={dashboardData.bookingsPerTurf}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="bookings" fill="#22c55e" name="Bookings" />
                    </BarChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="flex items-center justify-center h-[300px] text-base-content/70">
                    No booking data available
                  </div>
                )}
              </ChartCard>

              <ChartCard title="Revenue Over Time">
                {dashboardData.revenueOverTime.length > 0 ? (
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart
                      data={dashboardData.revenueOverTime.map((item) => ({
                        date: new Date(item._id).toLocaleDateString(),
                        revenue: item.revenue,
                      }))}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="revenue"
                        stroke="#22c55e"
                        name="Revenue"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="flex items-center justify-center h-[300px] text-base-content/70">
                    No revenue data available
                  </div>
                )}
              </ChartCard>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const StatCard = ({ title, value, icon, prefix = "" }) => (
  <div className="card bg-base-100 shadow-xl">
    <div className="card-body">
      <div className="flex items-center justify-between">
        <h2 className="card-title text-sm font-medium">{title}</h2>
        {icon}
      </div>
      <p className="text-3xl font-bold mt-2">
        {prefix}
        <CountUp end={value || 0} duration={2.5} separator="," />
      </p>
    </div>
  </div>
);

const ChartCard = ({ title, children }) => (
  <div className="card bg-base-100 shadow-xl">
    <div className="card-body">
      <h2 className="card-title text-lg mb-4">{title}</h2>
      {children}
    </div>
  </div>
);

const DashboardSkeleton = () => (
  <div className="animate-pulse">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="h-4 bg-base-300 rounded w-3/4"></div>
            <div className="h-8 bg-base-300 rounded w-1/2 mt-2"></div>
          </div>
        </div>
      ))}
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[...Array(2)].map((_, i) => (
        <div key={i} className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="h-6 bg-base-300 rounded w-1/3 mb-4"></div>
            <div className="h-64 bg-base-300 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default OwnerDashboard;