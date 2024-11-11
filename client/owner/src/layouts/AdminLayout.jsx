import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AdminSidebar, AuthenticatedNavbar } from "@components/layout";
import { Loader2 } from "lucide-react";

const AdminLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pageTitle, setPageTitle] = useState("");
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
      {/* Navbar */}
      <AuthenticatedNavbar toggleSidebar={toggleSidebar} />

      {/* Main Layout */}
      <div className="flex flex-1 pt-16">
        {/* Sidebar with overlay */}
        <div className="relative z-30">
          <AdminSidebar
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
            {/* Page Header */}
            <div className="mb-6">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-focus bg-clip-text text-transparent">
                  {pageTitle}
                </h1>
                <nav className="flex" aria-label="Breadcrumb">
                  <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <li className="inline-flex items-center">
                      <span className="text-sm text-gray-500">Admin</span>
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

            {/* Footer */}
            <footer className="mt-8 text-center text-sm text-base-content/70">
              <p>© 2024 Admin Dashboard. All rights reserved.</p>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
};

// Add to your tailwind.config.js
const tailwindConfig = {
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
};

export default AdminLayout;