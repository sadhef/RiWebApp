import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { OwnerSidebar, AuthenticatedNavbar } from "@components/layout";
import { Loader2, Bell, HelpCircle, Settings } from "lucide-react";

const OwnerLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pageTitle, setPageTitle] = useState("");
  const [notifications, setNotifications] = useState([]);
  const location = useLocation();

  // Toggle sidebar
  const toggleSidebar = () => setIsOpen(!isOpen);

  // Handle page transitions
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Update page title based on route
  useEffect(() => {
    const path = location.pathname.split("/").pop();
    setPageTitle(path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, " "));
  }, [location]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 to-base-200">
      {/* Navbar with enhanced features */}
      <AuthenticatedNavbar toggleSidebar={toggleSidebar}>
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <Bell className="h-5 w-5" />
                {notifications.length > 0 && (
                  <span className="badge badge-sm badge-primary indicator-item">
                    {notifications.length}
                  </span>
                )}
              </div>
            </label>
            <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
              <div className="card-body">
                <span className="font-bold text-lg">Notifications</span>
                {notifications.length === 0 ? (
                  <p className="text-sm text-base-content/70">No new notifications</p>
                ) : (
                  notifications.map((notif) => (
                    <div key={notif.id} className="text-sm">{notif.message}</div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Help */}
          <button className="btn btn-ghost btn-circle">
            <HelpCircle className="h-5 w-5" />
          </button>

          {/* Settings */}
          <button className="btn btn-ghost btn-circle">
            <Settings className="h-5 w-5" />
          </button>
        </div>
      </AuthenticatedNavbar>

      {/* Main Layout */}
      <div className="flex flex-1 pt-16">
        {/* Sidebar with overlay */}
        <div className="relative z-30">
          <OwnerSidebar
            isOpen={isOpen}
            toggleSidebar={toggleSidebar}
            className={`
              fixed top-0 left-0 h-full
              transform transition-transform duration-300 ease-in-out
              ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
              shadow-xl
            `}
          />
          {/* Mobile overlay */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-black/50 lg:hidden"
              onClick={toggleSidebar}
            />
          )}
        </div>

        {/* Main Content Area */}
        <main
          className={`
            flex-1
            min-h-[calc(100vh-4rem)]
            transition-all duration-300 ease-in-out
            ${isOpen ? "lg:ml-64" : "ml-0"}
          `}
        >
          <div className="container mx-auto px-4 py-6">
            {/* Page Header with Quick Actions */}
            <div className="mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-focus bg-clip-text text-transparent">
                    {pageTitle}
                  </h1>
                  <nav className="flex mt-2" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-3">
                      <li className="inline-flex items-center">
                        <span className="text-sm text-gray-500">Owner</span>
                      </li>
                      <li>
                        <div className="flex items-center">
                          <span className="mx-2 text-gray-400">/</span>
                          <span className="text-sm text-primary">{pageTitle}</span>
                        </div>
                      </li>
                    </ol>
                  </nav>
                </div>
                {/* Quick Action Buttons */}
                <div className="flex gap-2">
                  <button className="btn btn-primary btn-sm">
                    Add New
                  </button>
                  <button className="btn btn-outline btn-sm">
                    Export
                  </button>
                </div>
              </div>
            </div>

            {/* Content Area with Loading State */}
            <div className="relative min-h-[calc(100vh-16rem)] bg-base-100 rounded-xl shadow-xl p-6">
              {loading ? (
                <div className="absolute inset-0 flex items-center justify-center bg-base-100/50 backdrop-blur-sm rounded-xl">
                  <div className="text-center">
                    <Loader2 className="w-10 h-10 animate-spin text-primary mx-auto" />
                    <p className="mt-2 text-sm text-base-content/70">
                      Loading content...
                    </p>
                  </div>
                </div>
              ) : (
                <div className="animate-fade-in">
                  <Outlet />
                </div>
              )}
            </div>

            {/* Footer with Additional Info */}
            <footer className="mt-8 border-t border-base-300 pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-base-content/70">
                <div>
                  <h4 className="font-semibold mb-2">Quick Links</h4>
                  <ul className="space-y-1">
                    <li>Dashboard</li>
                    <li>Add New Turf</li>
                    <li>View Bookings</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Support</h4>
                  <ul className="space-y-1">
                    <li>Help Center</li>
                    <li>Contact Support</li>
                    <li>Documentation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Contact</h4>
                  <ul className="space-y-1">
                    <li>Email: support@rifield.com</li>
                    <li>Phone: +1 234 567 890</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 text-center text-sm text-base-content/50">
                © 2024 RiField Owner Dashboard. All rights reserved.
              </div>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
};

export default OwnerLayout;