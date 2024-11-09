// client/owner/src/router.jsx
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "@components/ProtectedRoute/ProtectedRoute";

// Layouts
import { AdminLayout, OwnerLayout, GuestLayout } from "@layouts";

// Guest Pages
import Home from "@pages/Home.jsx";
import Login from "@pages/Login";
import SignUp from "@pages/SignUp";

// Owner Dashboard Components
import {
  AddTurf,
  OwnerDashboard,
  TurfManagement,
  OwnerReviews,
  OwnerBookings,
  BillGenerator,
  PersonalizedRecommendations
} from "@components/owner";

// Admin Dashboard Components
import {
  UserManagement,
  NewOwnerRequests,
  RejectedOwnerRequests,
  AdminDashboard,
  OwnerViewer,
  TurfList,
  AllTurf,
  TransactionSection,
} from "@components/admin";

// Error Page
import { NotFound } from "@components/common";

const router = createBrowserRouter([
  // Guest Routes
  {
    path: "/",
    element: <GuestLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },

  // Admin Routes
  {
    path: "/admin",
    element: (
      <ProtectedRoute requiredRole="admin">
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      { 
        index: true, 
        element: <AdminDashboard /> 
      },
      {
        path: "owner-requests",
        children: [
          { 
            path: "new", 
            element: <NewOwnerRequests /> 
          },
          { 
            path: "rejected", 
            element: <RejectedOwnerRequests /> 
          },
        ],
      },
      { 
        path: "users", 
        element: <UserManagement /> 
      },
      {
        path: "owners",
        children: [
          { 
            path: "", 
            element: <OwnerViewer /> 
          },
          { 
            path: ":ownerId/turf", 
            element: <TurfList /> 
          },
        ],
      },
      { 
        path: "turfs", 
        element: <AllTurf /> 
      },
      { 
        path: "transactions", 
        element: <TransactionSection /> 
      },
    ],
  },

  // Owner Routes
  {
    path: "/owner",
    element: (
      <ProtectedRoute requiredRole="owner">
        <OwnerLayout />
      </ProtectedRoute>
    ),
    children: [
      { 
        path: "", 
        element: <OwnerDashboard /> 
      },
      { 
        path: "turfs", 
        element: <TurfManagement /> 
      },
      { 
        path: "add-turf", 
        element: <AddTurf /> 
      },
      { 
        path: "reviews", 
        element: <OwnerReviews /> 
      },
      { 
        path: "bookings", 
        element: <OwnerBookings /> 
      },
      { 
        path: "generate-bills", 
        element: <BillGenerator /> 
      },
      { 
        path: "smart-insights", 
        element: <PersonalizedRecommendations /> 
      },
    ],
  },
]);

export default router;