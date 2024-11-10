import React from "react";
import { Search, Users, Mail, Calendar, Settings } from 'lucide-react';

const UserSkeleton = () => {
  return (
    <div className="container mx-auto p-6 bg-base-200/30 min-h-screen animate-fade-in">
      {/* Header Section */}
      <div className="relative overflow-hidden mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary-focus bg-clip-text text-transparent">
              User Management
            </h1>
            <div className="skeleton h-4 w-48 mt-2 rounded"></div>
          </div>
          <div className="skeleton h-10 w-10 rounded-lg"></div>
        </div>
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite]" />
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { icon: Users, label: "Total Users" },
          { icon: Calendar, label: "Active Today" },
          { icon: Mail, label: "Verified Users" },
          { icon: Settings, label: "Settings" }
        ].map((stat, index) => (
          <div key={index} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="card-body">
              <div className="flex items-center justify-between">
                <div className="skeleton h-12 w-12 rounded-xl"></div>
                <div className="space-y-2">
                  <div className="skeleton h-4 w-20 rounded"></div>
                  <div className="skeleton h-6 w-16 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1 relative">
          <div className="skeleton h-12 w-full rounded-lg"></div>
          <Search className="absolute right-4 top-3 h-6 w-6 text-base-300" />
        </div>
        <div className="flex gap-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="skeleton h-12 w-32 rounded-lg"></div>
          ))}
        </div>
      </div>

      {/* Users Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <div 
            key={index} 
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <div className="card-body">
              {/* User Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
                <div className="flex-1 space-y-3">
                  <div className="skeleton h-5 w-3/4 rounded"></div>
                  <div className="skeleton h-4 w-1/2 rounded"></div>
                </div>
                <div className="skeleton h-8 w-8 rounded-lg"></div>
              </div>

              {/* User Details */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-base-300" />
                  <div className="skeleton h-4 w-full rounded"></div>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-base-300" />
                  <div className="skeleton h-4 w-3/4 rounded"></div>
                </div>
              </div>

              {/* Status and Actions */}
              <div className="flex justify-between items-center mt-6">
                <div className="skeleton h-6 w-24 rounded-full"></div>
                <div className="flex space-x-2">
                  <div className="skeleton h-8 w-8 rounded-lg"></div>
                  <div className="skeleton h-8 w-8 rounded-lg"></div>
                </div>
              </div>

              {/* Shimmer Effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite] pointer-events-none"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-8">
        <div className="skeleton h-8 w-32 rounded"></div>
        <div className="flex space-x-2">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="skeleton h-10 w-10 rounded-lg"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Add these to your tailwind.config.js
const tailwindConfig = {
  theme: {
    extend: {
      animation: {
        shimmer: 'shimmer 2s infinite linear',
        'fade-in': 'fade-in 0.5s ease-out',
      },
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        'fade-in': {
          'from': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
};

export default UserSkeleton;