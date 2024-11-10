import React, { useState } from "react";
import useDashboardData from "@hooks/admin/useDashboardData";
import StatCard from "./StatCard";
import BookingHistoryChart from "./BookingHistoryChart";
import AdminDashboardSkeleton from "./AdminDashboardSkeleton";
import {
  Users,
  Building,
  MapPin,
  CreditCard,
  UserPlus,
  UserX,
  TrendingUp,
  ArrowUpRight,
  Clock,
  Calendar,
} from "lucide-react";

const AdminDashboard = () => {
  const { data, loading, error } = useDashboardData();
  const [selectedTimeRange, setSelectedTimeRange] = useState("30");

  if (loading) return <AdminDashboardSkeleton />;

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-base-200">
        <div className="card bg-base-100 shadow-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-error mb-4">Error Loading Dashboard</h2>
          <p className="text-base-content/70">Please try again later.</p>
        </div>
      </div>
    );
  }

  if (!data) return null;

  const totalRevenue = data.bookingHistory.reduce((sum, day) => sum + day.amount, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-300">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
          <div className="space-y-2 text-center lg:text-left mb-6 lg:mb-0">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Admin Dashboard
            </h1>
            <p className="text-base-content/70">
              Overview and analytics of your platform
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-base-100 rounded-lg shadow-lg p-3">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium">Last Updated</p>
              <p className="text-xs text-base-content/70">{new Date().toLocaleString()}</p>
            </div>
          </div>
        </div>

        {/* Primary Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <StatCard
            title="Total Users"
            value={data.totalUsers}
            icon={Users}
            className="bg-base-100 hover:shadow-lg transition-shadow duration-300"
          />
          <StatCard
            title="Total Owners"
            value={data.totalOwners}
            icon={Building}
            className="bg-base-100 hover:shadow-lg transition-shadow duration-300"
          />
          <StatCard
            title="Total Turfs"
            value={data.totalTurfs}
            icon={MapPin}
            className="bg-base-100 hover:shadow-lg transition-shadow duration-300"
          />
          <StatCard
            title="Total Bookings"
            value={data.totalBookings}
            icon={CreditCard}
            className="bg-base-100 hover:shadow-lg transition-shadow duration-300"
          />
        </div>

        {/* Secondary Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <StatCard
            title="Pending Requests"
            value={data.pendingRequests}
            icon={UserPlus}
            className="bg-warning/10 hover:bg-warning/20 transition-colors duration-300"
            iconClassName="text-warning"
          />
          <StatCard
            title="Rejected Requests"
            value={data.rejectedRequests}
            icon={UserX}
            className="bg-error/10 hover:bg-error/20 transition-colors duration-300"
            iconClassName="text-error"
          />
          <StatCard
            title="Total Revenue"
            value={totalRevenue}
            icon={TrendingUp}
            prefix="₹"
            className="bg-success/10 hover:bg-success/20 transition-colors duration-300"
            iconClassName="text-success"
          />
        </div>

        {/* Booking History Chart */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div className="space-y-2 mb-4 md:mb-0">
                <h2 className="card-title text-2xl flex items-center gap-2">
                  Booking History
                  <ArrowUpRight className="w-5 h-5 text-success" />
                </h2>
                <p className="text-base-content/70">Track booking performance over time</p>
              </div>
              <select
                className="select select-bordered w-full max-w-xs"
                value={selectedTimeRange}
                onChange={(e) => setSelectedTimeRange(e.target.value)}
              >
                <option value="7">Last 7 days</option>
                <option value="30">Last 30 days</option>
                <option value="90">Last 90 days</option>
              </select>
            </div>
            <div className="bg-base-200/50 rounded-xl p-6">
              <BookingHistoryChart
                data={data.bookingHistory.slice(-selectedTimeRange)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;