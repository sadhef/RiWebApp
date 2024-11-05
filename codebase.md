# client\owner\.eslintrc.cjs

```cjs
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  "react/prop-types": "off",
}

```

# client\owner\.gitignore

```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

```

# client\owner\index.html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
     <link rel="icon" type="image/png" href = "/favicon.png"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>RiField</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

```

# client\owner\package.json

```json
{
  "name": "owner",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite --host",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.9.0",
    "@midudev/tailwind-animations": "^0.0.7",
    "@react-pdf/renderer": "^4.0.0",
    "@reduxjs/toolkit": "^2.2.6",
    "axios": "^1.7.2",
    "date-fns": "^3.6.0",
    "date-fns-tz": "^3.1.3",
    "lucide-react": "^0.416.0",
    "react": "^18.3.1",
    "react-avatar": "^5.0.3",
    "react-countup": "^6.5.3",
    "react-datepicker": "^7.5.0",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.52.1",
    "react-hot-toast": "^2.4.1",
    "react-redux": "^9.1.2",
    "react-router-dom": "^6.25.1",
    "react-time-picker": "^7.0.0",
    "recharts": "^2.12.7",
    "redux-persist": "^6.0.0",
    "yup": "^1.4.0"
  },
  "devDependencies": {
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.19",
    "daisyui": "^4.12.10",
    "eslint": "^8.57.0",
    "eslint-plugin-react": "^7.34.3",
    "eslint-plugin-react-hooks": "^4.6.2",
    "eslint-plugin-react-refresh": "^0.4.7",
    "postcss": "^8.4.40",
    "tailwindcss": "^3.4.7",
    "vite": "^5.3.4"
  }
}

```

# client\owner\postcss.config.js

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

```

# client\owner\project-structure.txt

```txt
client
└── owner
    ├── src
    │   ├── App.jsx
    │   ├── index.css
    │   ├── main.jsx
    │   ├── project-structure.txt
    │   ├── router.jsx
    │   ├── components
    │   │   ├── admin
    │   │   │   ├── index.jsx
    │   │   │   ├── Dashboard
    │   │   │   │   ├── AdminDashboard.jsx
    │   │   │   │   ├── AdminDashboardSkeleton.jsx
    │   │   │   │   ├── BookingHistoryChart.jsx
    │   │   │   │   ├── Chart.jsx
    │   │   │   │   └── StatCard.jsx
    │   │   │   ├── OwnerManagement
    │   │   │   │   ├── OwnerCard.jsx
    │   │   │   │   ├── OwnerList.jsx
    │   │   │   │   ├── OwnersSkeleton.jsx
    │   │   │   │   ├── OwnerViewer.jsx
    │   │   │   │   └── SearchBar.jsx
    │   │   │   ├── OwnerRequests
    │   │   │   │   ├── NewOwnerRequests.jsx
    │   │   │   │   ├── OwnerRequestsCard.jsx
    │   │   │   │   ├── OwnerRequestSearch.jsx
    │   │   │   │   ├── OwnerRequestSkeleton.jsx
    │   │   │   │   └── RejectedOwnerRequests.jsx
    │   │   │   ├── Transactions
    │   │   │   │   ├── TransactionFilters.jsx
    │   │   │   │   ├── TransactionSection.jsx
    │   │   │   │   ├── TransactionSkeleton.jsx
    │   │   │   │   └── TransactionTable.jsx
    │   │   │   ├── Turf
    │   │   │   │   ├── AllTurf.jsx
    │   │   │   │   ├── Turf.jsx
    │   │   │   │   ├── TurfList.jsx
    │   │   │   │   └── TurfSkeleton.jsx
    │   │   │   └── UserManagement
    │   │   │       ├── SearchInput.jsx
    │   │   │       ├── UserCard.jsx
    │   │   │       ├── UserPage.jsx
    │   │   │       └── UserSkeleton.jsx
    │   │   ├── common
    │   │   │   ├── Button.jsx
    │   │   │   ├── Carousel.jsx
    │   │   │   ├── Footer.jsx
    │   │   │   ├── FormField.jsx
    │   │   │   ├── index.jsx
    │   │   │   ├── NotFound.jsx
    │   │   │   └── ThemeSwitcher.jsx
    │   │   ├── layout
    │   │   │   ├── AdminSidebar.jsx
    │   │   │   ├── AuthenticatedNavbar.jsx
    │   │   │   ├── GuestNavbar.jsx
    │   │   │   ├── index.jsx
    │   │   │   └── OwnerSidebar.jsx
    │   │   ├── owner
    │   │   │   ├── index.jsx
    │   │   │   ├── Analytics
    │   │   │   │   ├── LocationAnalysis.jsx
    │   │   │   │   ├── RecommendationEngine.jsx
    │   │   │   │   ├── RevenueAnalytics.jsx
    │   │   │   │   └── UserPreferences.jsx
    │   │   │   ├── BillGeneration
    │   │   │   │   ├── BillPreview.jsx
    │   │   │   │   ├── BillTemplate.jsx
    │   │   │   │   └── TaxCalculator.jsx
    │   │   │   ├── BillManagement
    │   │   │   │   └── BillGenerator.jsx
    │   │   │   ├── BookingManagement
    │   │   │   │   ├── BookingActions.jsx
    │   │   │   │   ├── BookingList.jsx
    │   │   │   │   ├── CancellationModal.jsx
    │   │   │   │   ├── RefundProcess.jsx
    │   │   │   │   └── RescheduleModal.jsx
    │   │   │   ├── Bookings
    │   │   │   │   ├── BookingsSkeleton.jsx
    │   │   │   │   └── OwnerBookings.jsx
    │   │   │   ├── Dashboard
    │   │   │   │   ├── DashboardSkeleton.jsx
    │   │   │   │   └── OwnerDashboard.jsx
    │   │   │   ├── RateManagement
    │   │   │   │   └── RateManager.jsx
    │   │   │   ├── Review
    │   │   │   │   ├── OwnerReviews.jsx
    │   │   │   │   └── ReviewSkeleton.jsx
    │   │   │   └── TurfManagement
    │   │   │       ├── AddTurf.jsx
    │   │   │       ├── EditTurfForm.jsx
    │   │   │       ├── TurfCard.jsx
    │   │   │       ├── TurfCardSkeleton.jsx
    │   │   │       └── TurfManagement.jsx
    │   │   └── ProtectedRoute
    │   │       ├── index.jsx
    │   │       └── ProtectedRoute.jsx
    │   ├── hooks
    │   │   ├── useAxiosInstance.js
    │   │   ├── useLoginForm.jsx
    │   │   ├── useRefundManagement.js
    │   │   ├── useSignUpForm.jsx
    │   │   ├── admin
    │   │   │   ├── useDashboardData.jsx
    │   │   │   ├── useOwnerRequests.jsx
    │   │   │   ├── useOwners.jsx
    │   │   │   ├── useTransactionData.jsx
    │   │   │   ├── useTransactionManagement.jsx.jsx
    │   │   │   ├── useTurf.jsx
    │   │   │   ├── useTurfData.jsx
    │   │   │   └── useUsers.jsx
    │   │   └── owner
    │   │       ├── index.jsx
    │   │       ├── useAddTurf.jsx
    │   │       ├── useBillGeneration.jsx
    │   │       ├── useBookingManagement.jsx
    │   │       ├── useEditTurfForm.jsx
    │   │       ├── useOwnerBookings.jsx
    │   │       ├── useOwnerDashboard.jsx
    │   │       ├── useOwnerReviews.jsx
    │   │       ├── useRecommendations.jsx
    │   │       └── useTurfManagement.jsx
    │   ├── layouts
    │   │   ├── AdminLayout.jsx
    │   │   ├── GuestLayout.jsx
    │   │   ├── index.jsx
    │   │   └── OwnerLayout.jsx
    │   ├── pages
    │   │   ├── Home.jsx
    │   │   ├── Login.jsx
    │   │   └── SignUp.jsx
    │   └── redux
    │       ├── rootReducers.js
    │       ├── store.js
    │       └── slices
    │           ├── authSlice.js
    │           ├── themeSlice.js
    │           └── turfSlice.js
    ├── .eslintrc.cjs
    ├── index.html
    ├── package.json
    ├── postcss.config.js
    ├── tailwind.config.js
    ├── vercel.json
    └── vite.config.js

```

# client\owner\public\banner-1.png

This is a binary file of the type: Image

# client\owner\public\banner-2.jpeg

This is a binary file of the type: Image

# client\owner\public\banner-3.jpeg

This is a binary file of the type: Image

# client\owner\public\favicon.png

This is a binary file of the type: Image

# client\owner\public\logo.png

This is a binary file of the type: Image

# client\owner\README.md

```md
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

```

# client\owner\src\App.jsx

```jsx
import { RouterProvider } from "react-router-dom";
import router from "./router"
 
 export default function App() {
  return <RouterProvider router={router} />;
  
 }
 
```

# client\owner\src\components\admin\Dashboard\AdminDashboard.jsx

```jsx
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
} from "lucide-react";
import { useState } from "react";

const AdminDashboard = () => {
 const { data, loading, error } = useDashboardData();
  const [selectedTimeRange, setSelectedTimeRange] = useState("30");

 if (loading)  {
   return <AdminDashboardSkeleton />;
 }

 if (error) {
   return (
     <div className="flex justify-center items-center h-screen">
       <p>Error loading dashboard data. Please try again later.</p>
     </div>
   );
 }

 if (!data) {
   return null; 
 }

   const totalRevenue = data.bookingHistory.reduce((sum, day) => {
     return sum + day.amount;
   }, 0);

  return (
    <div className="min-h-screen bg-base-200 p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center lg:text-left">
          Admin Dashboard
        </h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <StatCard
            title="Total Users"
            value={data.totalUsers}
            icon={Users}
            className="bg-base-100"
          />
          <StatCard
            title="Total Owners"
            value={data.totalOwners}
            icon={Building}
            className="bg-base-100"
          />
          <StatCard
            title="Total Turfs"
            value={data.totalTurfs}
            icon={MapPin}
            className="bg-base-100"
          />
          <StatCard
            title="Total Bookings"
            value={data.totalBookings}
            icon={CreditCard}
            className="bg-base-100"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          <StatCard
            title="Pending Requests"
            value={data.pendingRequests}
            icon={UserPlus}
            className="bg-warning text-warning-content"
          />
          <StatCard
            title="Rejected Requests"
            value={data.rejectedRequests}
            icon={UserX}
            className="bg-error text-error-content"
          />
          <StatCard
            title="Total Revenue"
            value={totalRevenue}
            icon={TrendingUp}
            prefix="₹"
            className="bg-success text-success-content"
          />
        </div>

        <div className="card bg-base-100 shadow-xl mb-8">
          <div className="card-body max:md:p-0">
            <h2 className="card-title mb-4">Booking History</h2>
            <div className="flex justify-end mb-4">
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
            <BookingHistoryChart
              data={data.bookingHistory.slice(-selectedTimeRange)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

```

# client\owner\src\components\admin\Dashboard\AdminDashboardSkeleton.jsx

```jsx
import React from "react";
import {
  Users,
  Building,
  MapPin,
  CreditCard,
  UserPlus,
  UserX,
  TrendingUp,
} from "lucide-react";

const AdminDashboardSkeleton = () => {
  return (
    <div className="min-h-screen bg-base-200 p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center lg:text-left">
          Admin Dashboard
        </h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {[Users, Building, MapPin, CreditCard].map((Icon, index) => (
            <SkeletonCard key={index} Icon={Icon} />
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          {[UserPlus, UserX, TrendingUp].map((Icon, index) => (
            <SkeletonCard key={index} Icon={Icon} />
          ))}
        </div>

        <div className="card bg-base-100 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title mb-4">Booking History</h2>
            <div className="flex justify-end mb-4">
              <div className="w-48 h-10 bg-base-300 rounded animate-pulse"></div>
            </div>
            <div className="h-64 bg-base-300 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SkeletonCard = ({ Icon }) => (
  <div className="card bg-base-100 shadow-xl">
    <div className="card-body">
      <div className="flex justify-between items-center">
        <div className="w-24 h-4 bg-base-300 rounded animate-pulse"></div>
        <Icon className="h-6 w-6 text-base-300" />
      </div>
      <div className="w-16 h-8 bg-base-300 rounded animate-pulse mt-2"></div>
    </div>
  </div>
);

export default AdminDashboardSkeleton;

```

# client\owner\src\components\admin\Dashboard\BookingHistoryChart.jsx

```jsx
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const BookingHistoryChart = ({ data }) => (
  <div className="card bg-base-100 shadow-xl ">
    <div className="card-body">
      <h2 className="card-title mb-4">Booking History (Last 30 Days)</h2>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="amount"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default BookingHistoryChart;

```

# client\owner\src\components\admin\Dashboard\Chart.jsx

```jsx
 import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const Chart = ({ data = [] }) => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
    </LineChart>
  </ResponsiveContainer>
);


export default Chart;
```

# client\owner\src\components\admin\Dashboard\StatCard.jsx

```jsx
import React from "react";
import CountUp from "react-countup";

const StatCard = ({ title, value, icon: Icon,className  }) => (
  <div className={`card shadow-xl ${className}`}>
    <div className="card-body">
      <div className="flex justify-between items-center">
        <h2 className="card-title text-sm font-medium">{title}</h2>
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <p className="text-3xl font-bold">
     
        <CountUp end={value} duration={2.5} separator="," />
       
      </p>
    </div>
  </div>
);

export default StatCard;

```

# client\owner\src\components\admin\index.jsx

```jsx
//  User Management
export {default as UserManagement} from "./UserManagement/UserPage";

//  Owner Requests
export {default as NewOwnerRequests} from "./OwnerRequests/NewOwnerRequests";
export {default as RejectedOwnerRequests} from "./OwnerRequests/RejectedOwnerRequests"

// Dashboard
export {default as AdminDashboard} from "./Dashboard/AdminDashboard"

// Owner Management
export {default as OwnerViewer} from "./OwnerManagement/OwnerViewer"

// Turf
export {default as TurfList} from "./Turf/TurfList"
export {default as AllTurf} from "./Turf/AllTurf"

// Transactions
export {default as TransactionSection} from "./Transactions/TransactionSection"
```

# client\owner\src\components\admin\OwnerManagement\OwnerCard.jsx

```jsx
// src/components/OwnerViewer/OwnerCard.jsx
import React from "react";
import { User, Mail, Phone, Calendar, MapPin } from "lucide-react";
import { format, parseISO } from "date-fns";
import { Link } from "react-router-dom";

const OwnerCard = ({ owner }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="flex items-center">
          <User className="h-6 w-6 mr-2 " />
          <h2 className="card-title">{owner.name}</h2>
        </div>
        <div className="flex items-center mt-2">
          <Mail className="h-4 w-4 mr-2 text-gray-500" />
          <p>{owner.email}</p>
        </div>
        <div className="flex items-center mt-2">
          <Phone className="h-4 w-4 mr-2 text-gray-500" />
          <p>{owner.phone}</p>
        </div>
        <div className="flex items-center mt-2">
          <Calendar className="h-4 w-4 mr-2 text-gray-500" />
          <p>Created: {format(parseISO(owner.createdAt), "PPP")}</p>
        </div>
        <div className="card-actions justify-end mt-4">
          <Link to={`/admin/owners/${owner._id}/turf`} className="btn btn-primary flex items-center">
            <MapPin className="h-4 w-4 mr-2" />
            View Turf
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OwnerCard;

```

# client\owner\src\components\admin\OwnerManagement\OwnerList.jsx

```jsx
import React from "react";
import OwnerCard from "./OwnerCard";

const OwnerList = ({ owners }) => {
  return (
    <> 
      {owners.length === 0 && (
        <div className="alert alert-info shadow-lg w-full">
          <div>
            <span>No owners at the moment.</span>
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {owners.map((owner) => (
          <OwnerCard key={owner._id} owner={owner} />
        ))}
      </div>
    </>
  );
};

export default OwnerList;



```

# client\owner\src\components\admin\OwnerManagement\OwnersSkeleton.jsx

```jsx
import React from "react";

const OwnersSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="card bg-base-100 shadow-xl animate-pulse">
          <div className="card-body">
            <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3 mb-2"></div>
            <div className="card-actions justify-end">
              <div className="h-10 bg-gray-300 rounded w-1/3"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OwnersSkeleton;

```

# client\owner\src\components\admin\OwnerManagement\OwnerViewer.jsx

```jsx
 import  useOwners  from "@hooks/admin/useOwners";
import OwnerList from "./OwnerList";
import SearchBar from "./SearchBar";
import OwnersSkeleton from "./OwnersSkeleton";

const OwnerViewer = () => {
  const { owners, loading, searchTerm, handleSearch } = useOwners();

 
  if (loading) return <OwnersSkeleton />;

  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-2xl font-bold mb-4">Owner Viewer</h1>
      <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
      <OwnerList owners={owners} />
    </div>
  );
};

export default OwnerViewer;

```

# client\owner\src\components\admin\OwnerManagement\SearchBar.jsx

```jsx
import { Search } from "lucide-react";

const SearchBar = ({ searchTerm, handleSearch }) => {
  return (
    <div className="form-control w-full max-w-xs mb-2">
      <label className="label">
        <span className="label-text">Search requests</span>
      </label>
      <div className="relative">
        <input
          type="text"
          placeholder="Search by name or email"
          className="input input-bordered w-full pr-10"
          onChange={(e) => handleSearch(e.target.value)}
          value={searchTerm}
        />
        <Search className="absolute top-3 right-3 h-5 w-5 text-gray-400" />
      </div>
    </div>
  );
};

export default SearchBar;

```

# client\owner\src\components\admin\OwnerRequests\NewOwnerRequests.jsx

```jsx
import React from "react";
import useOwnerRequests from "@hooks/admin/useOwnerRequests";
// import useOwnerRequests from "../../../hooks/admin/useOwnerRequests";
import OwnerRequestCard from "./OwnerRequestsCard";
import OwnerRequestsSkeleton from "./OwnerRequestSkeleton";
import OwnerRequestSearch from "./OwnerRequestSearch";

const NewOwnerRequests = () => {
  const {
    requests,
    loading,
    handleAccept,
    handleReject,
    requestId,
    searchTerm,
    handleSearch,
  } = useOwnerRequests();

  if (loading) return <OwnerRequestsSkeleton />;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-primary">
        New Owner Requests
      </h1>
      <div className="mb-6">
        <OwnerRequestSearch
          searchTerm={searchTerm}
          handleSearch={handleSearch}
          
        />
      </div>
      {requests.length === 0 ? (
        <div className="alert alert-info shadow-lg">
          <div>
            <span>No new owner requests at the moment.</span>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {requests.map((request) => (
            <OwnerRequestCard
              key={request._id}
              request={request}
              onAccept={handleAccept}
              onReject={handleReject}
              isProcessing={requestId === request._id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NewOwnerRequests;

```

# client\owner\src\components\admin\OwnerRequests\OwnerRequestsCard.jsx

```jsx
import React from "react";
import { format } from "date-fns";
import {
  User,
  Mail,
  Calendar,
  CheckCircle,
  XCircle,
  RefreshCw,
} from "lucide-react";

const OwnerRequestCard = ({
  request,
  onAccept,
  onReject,
  onReconsider,
  isProcessing,
  isRejected,
}) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title flex items-center">
          <User size={20} className="mr-2" />
          {request.name}
        </h2>
        <p className="flex items-center text-sm text-gray-600">
          <Mail size={16} className="mr-2" />
          {request.email}
        </p>
        <p className="flex items-center text-sm text-gray-600">
          <Calendar size={16} className="mr-2" />
          {format(new Date(request.createdAt), "MMM dd, yyyy")}
        </p>
        <div className="card-actions justify-end mt-4">
          {isRejected ? (
            <button
              onClick={() => onReconsider(request._id)}
              className="btn btn-sm btn-primary relative"
              disabled={isProcessing}
            >
              <RefreshCw size={16} className="mr-1" />
              {isProcessing ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                "Reconsider"
              )}
            </button>
          ) : (
            <>
              <button
                onClick={() => onAccept(request._id)}
                className="btn btn-sm btn-success relative text-base-200"
                disabled={isProcessing}
              >
                <CheckCircle size={16} className="mr-1" />
                {isProcessing ? (
                  <span className="loading loading-spinner loading-sm"></span>
                ) : (
                  "Accept"
                )}
              </button>
              <button
                onClick={() => onReject(request._id)}
                className="btn btn-sm btn-error relative text-base-200"
                disabled={isProcessing}
              >
                <XCircle size={16} className="mr-1" />
                {isProcessing ? (
                  <span className="loading loading-spinner loading-sm"></span>
                ) : (
                  "Reject"
                )}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default OwnerRequestCard;

```

# client\owner\src\components\admin\OwnerRequests\OwnerRequestSearch.jsx

```jsx
 
import React from "react";
import { Search } from "lucide-react";

const OwnerRequestSearch = ({ searchTerm, handleSearch }) => {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">Search requests</span>
      </label>
      <div className="relative">
        <input
          type="text"
          placeholder="Search by name or email"
          className="input input-bordered w-full pr-10"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <Search className="absolute top-3 right-3 h-5 w-5 text-gray-400" />
      </div>
    </div>
  );
};

export default OwnerRequestSearch;

```

# client\owner\src\components\admin\OwnerRequests\OwnerRequestSkeleton.jsx

```jsx
const OwnerRequestsSkeleton = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-primary">
        Owner Requests
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="card bg-base-100 shadow-xl animate-pulse">
            <div className="card-body">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-gray-300 mr-2"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                <div className="h-4 bg-gray-300 rounded w-4/6"></div>
              </div>
              <div className="card-actions justify-end mt-4">
                <div className="h-8 w-20 bg-gray-300 rounded mr-2"></div>
                <div className="h-8 w-20 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OwnerRequestsSkeleton;

```

# client\owner\src\components\admin\OwnerRequests\RejectedOwnerRequests.jsx

```jsx
import React from "react";
import useOwnerRequests from "@hooks/admin/useOwnerRequests";
import OwnerRequestCard from "./OwnerRequestsCard";
import OwnerRequestsSkeleton from "./OwnerRequestSkeleton";
import OwnerRequestSearch from "./OwnerRequestSearch";

const RejectedOwnerRequests = () => {
  const {
    rejectedRequests,
    loading,
    handleReconsider,
    requestId,
    searchTerm,
    handleSearch,
  } = useOwnerRequests();

  if (loading) return <OwnerRequestsSkeleton />;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-primary">
        Rejected Owner Requests
      </h1>
      <div className="mb-6">
        <OwnerRequestSearch
          searchTerm={searchTerm}
          handleSearch={handleSearch}
        />
      </div>
      {rejectedRequests.length === 0 ? (
        <div className="alert alert-info shadow-lg">
          <div>
            <span>No rejected owner requests at the moment.</span>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {rejectedRequests.map((request) => (
            <OwnerRequestCard
              key={request._id}
              request={request}
              onReconsider={handleReconsider}
              isProcessing={requestId === request._id}
              isRejected={true}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default RejectedOwnerRequests;

```

# client\owner\src\components\admin\Transactions\TransactionFilters.jsx

```jsx
import React from "react";

const TransactionFilters = ({ filters, onFilterChange }) => {
  return (
    <div className="flex flex-wrap gap-4 mb-4">
      <input
        type="text"
        placeholder="Search..."
        name="search"
        value={filters.search}
        onChange={onFilterChange}
        className="input input-bordered w-full max-w-xs"
      />
      <input
        type="number"
        placeholder="Min Amount"
        name="minAmount"
        value={filters.minAmount}
        onChange={onFilterChange}
        className="input input-bordered w-full max-w-xs"
      />
      <input
        type="number"
        placeholder="Max Amount"
        name="maxAmount"
        value={filters.maxAmount}
        onChange={onFilterChange}
        className="input input-bordered w-full max-w-xs"
      />
      <input
        type="date"
        name="startDate"
        value={filters.startDate}
        onChange={onFilterChange}
        className="input input-bordered w-full max-w-xs"
      />
      <input
        type="date"
        name="endDate"
        value={filters.endDate}
        onChange={onFilterChange}
        className="input input-bordered w-full max-w-xs"
      />
    </div>
  );
};

export default TransactionFilters;

```

# client\owner\src\components\admin\Transactions\TransactionSection.jsx

```jsx
import useTransactionData from "@hooks/admin/useTransactionData";
import TransactionSkeleton from "./TransactionSkeleton";
import TransactionFilters from "./TransactionFilters";
import TransactionTable from "./TransactionTable";
import useTransactionManagement from "@hooks/admin/useTransactionManagement.jsx";

const TransactionSection = () => {
  const { transactions, loading, error } = useTransactionData();

  const {
    filters,
    sortField,
    sortDirection,
    filteredAndSortedTransactions,
    handleFilterChange,
    toggleSort,
  } = useTransactionManagement(transactions);

  if (loading) return <TransactionSkeleton />;
  if (error) return <div className="alert alert-error shadow-lg">{error}</div>;

  return (
    <div className="bg-base-100 shadow-xl rounded-lg overflow-hidden">
      <div className="p-6 bg-base-200">
        <h2 className="text-2xl font-bold mb-4">Recent Transactions</h2>
        <TransactionFilters
          filters={filters}
          onFilterChange={handleFilterChange}
        />
      </div>
      <TransactionTable
        transactions={filteredAndSortedTransactions}
        sortField={sortField}
        sortDirection={sortDirection}
        onSort={toggleSort}
      />
    </div>
  );
};

export default TransactionSection;

```

# client\owner\src\components\admin\Transactions\TransactionSkeleton.jsx

```jsx
const TransactionSkeleton = () => {
  return (
    <div className="bg-base-100 shadow-xl rounded-lg overflow-hidden">
      <div className="p-6 bg-base-200">
        <div className="skeleton h-8 w-64 mb-4"></div>
        <div className="flex flex-wrap gap-4 mb-4">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="skeleton h-12 w-full max-w-xs"></div>
          ))}
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              {[...Array(6)].map((_, index) => (
                <th key={index}>
                  <div className="skeleton h-4 w-20"></div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[...Array(5)].map((_, rowIndex) => (
              <tr key={rowIndex}>
                {[...Array(6)].map((_, colIndex) => (
                  <td key={colIndex}>
                    <div className="skeleton h-4 w-full"></div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionSkeleton;

```

# client\owner\src\components\admin\Transactions\TransactionTable.jsx

```jsx
import React from "react";
import Avatar from "react-avatar";
import { ChevronUp, ChevronDown } from "lucide-react";

const TransactionTable = ({
  transactions,
  sortField,
  sortDirection,
  onSort,
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>User</th>
            <th>
              <button
                className="flex items-center"
                onClick={() => onSort("createdAt")}
              >
                Date
                {sortField === "createdAt" &&
                  (sortDirection === "asc" ? (
                    <ChevronUp className="ml-2 h-4 w-4" />
                  ) : (
                    <ChevronDown className="ml-2 h-4 w-4" />
                  ))}
              </button>
            </th>
            <th>Turf</th>
            <th>Order ID</th>
            <th>Payment ID</th>
            <th>
              <button
                className="flex items-center"
                onClick={() => onSort("totalPrice")}
              >
                Amount
                {sortField === "totalPrice" &&
                  (sortDirection === "asc" ? (
                    <ChevronUp className="ml-2 h-4 w-4" />
                  ) : (
                    <ChevronDown className="ml-2 h-4 w-4" />
                  ))}
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction._id}>
              <td className="flex items-center space-x-3">
                <Avatar name={transaction.user.name} size="40" round={true} />
                <span>{transaction.user.name}</span>
              </td>
              <td>{new Date(transaction.createdAt).toLocaleDateString()}</td>
              <td>{transaction.turf.name}</td>
              <td>{transaction.payment.orderId}</td>
              <td>{transaction.payment.paymentId}</td>
              <td>₹{transaction.totalPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;

```

# client\owner\src\components\admin\Turf\AllTurf.jsx

```jsx
import { PackageOpen } from "lucide-react";
import useTurfData from "@hooks/admin/useTurf";
import Turf from "./Turf";
import TurfSkeleton from "./TurfSkeleton";

export const AllTurf = () => {
  const { turfData, loading } = useTurfData();

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {[...Array(6)].map((_, index) => (
          <TurfSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (!turfData || turfData.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 bg-base-200 rounded-lg">
        <PackageOpen size={64} className="text-gray-400 mb-4" />
        <p className="text-xl font-semibold text-gray-600">
          No turfs available
        </p>
        <p className="text-gray-500 mt-2">Check back later for new turfs!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {turfData.map((turf) => (
        <Turf key={turf._id} turf={turf} />
      ))}
    </div>
  );
};

export default AllTurf;

```

# client\owner\src\components\admin\Turf\Turf.jsx

```jsx
import React from "react";
import { MapPin, Clock, Star, Calendar } from "lucide-react";
import { format } from "date-fns";

const Turf = ({ turf }) => {
  return (
    <div className="card bg-base-100 shadow-xl w-full hover:shadow-2xl transition-shadow duration-300">
      <figure className="relative h-48 sm:h-56 md:h-64">
        <img
          src={turf.image}
          alt={turf.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 right-0 bg-base-100 text-primary font-semibold px-3 py-1 m-2 rounded-full">
          ₹{turf.pricePerHour}/hr
        </div>
      </figure>
      <div className="card-body p-4 sm:p-6">
        <h2 className="card-title text-lg sm:text-xl mb-2">{turf.name}</h2>
        <p className="text-sm sm:text-base text-gray-600 mb-4">
          {turf.description}
        </p>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center">
            <MapPin size={18} className="mr-2 text-primary" />
            <span>{turf.location}</span>
          </div>
          <div className="flex items-center">
            <Clock size={18} className="mr-2 text-primary" />
            <span>
              {turf.openTime} - {turf.closeTime}
            </span>
          </div>
          <div className="flex items-center">
            <Star size={18} className="mr-2 text-primary" />
            <span>{turf.avgRating} ratings</span>
          </div>
          <div className="flex items-center">
            <Calendar size={18} className="mr-2 text-primary" />
            <span>{format(new Date(turf.createdAt), "dd MMM yyyy")}</span>
          </div>
        </div>
         
      </div>
    </div>
  );
};

export default Turf;

```

# client\owner\src\components\admin\Turf\TurfList.jsx

```jsx
import { PackageOpen } from "lucide-react";
import useTurfData from "@hooks/admin/useTurfData";
import Turf from "./Turf";
import TurfSkeleton from "./TurfSkeleton";

export const TurfList = () => {
  const { turfData, loading } = useTurfData();

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {[...Array(6)].map((_, index) => (
          <TurfSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (!turfData || turfData.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 bg-base-200 rounded-lg">
        <PackageOpen size={64} className="text-gray-400 mb-4" />
        <p className="text-xl font-semibold text-gray-600">
          No turfs available
        </p>
        <p className="text-gray-500 mt-2">Check back later for new turfs!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {turfData.map((turf) => (
        <Turf key={turf._id} turf={turf} />
      ))}
    </div>
  );
};

export default TurfList;

```

# client\owner\src\components\admin\Turf\TurfSkeleton.jsx

```jsx
const TurfSkeleton = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl animate-pulse ">
      <div className="h-48 bg-gray-300"></div>
      <div className="card-body">
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-full mt-2"></div>
        <div className="h-4 bg-gray-300 rounded w-full mt-2"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4 mt-2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2 mt-2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/4 mt-4"></div>
      </div>
    </div>
  );
};

export default TurfSkeleton;

```

# client\owner\src\components\admin\UserManagement\SearchInput.jsx

```jsx
import React from "react";
import { Search } from "lucide-react";

const SearchInput = ({ searchTerm, handleSearch }) => {
  return (
    <div className={`form-control w-full max-w-xs ml-auto mb-6`}>
      <label className="label">
        <span className="label-text">Search users</span>
      </label>
      <div className="relative">
        <input
          type="text"
          placeholder="Search by name or email"
          className="input input-bordered w-full pr-10"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <Search className="absolute top-3 right-3 h-5 w-5 text-gray-400" />
      </div>
    </div>
  );
};

export default SearchInput;

```

# client\owner\src\components\admin\UserManagement\UserCard.jsx

```jsx
import React from "react";
import { Mail, Calendar } from "lucide-react";
import { format } from "date-fns";
import Avatar from "react-avatar";

const UserCard = ({ user }) => {
  return (
    <div className="card bg-base-100 shadow-xl  ">
      <div className="card-body">
        <div className="flex items-center mb-4">
          <div className="avatar placeholder mr-4">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-12 ">
              <Avatar name={user.name} size={40} round={true} />
            </div>
          </div>
          <h2 className="card-title">{user.name}</h2>
        </div>
        <p className="flex items-center text-sm text-gray-600">
          <Mail size={16} className="mr-2" />
          {user.email}
        </p>
        <p className="flex items-center text-sm text-gray-600">
          <Calendar size={16} className="mr-2" />
          {format(new Date(user.createdAt), "MMM dd, yyyy")}
        </p>
      </div>
    </div>
  );
};

export default UserCard;

```

# client\owner\src\components\admin\UserManagement\UserPage.jsx

```jsx
import React from "react";
import useUsers from "@hooks/admin/useUsers";
import UserSkeleton from "./UserSkeleton";
import UserCard from "./UserCard";
import SearchInput from "./SearchInput";

const UserPage = () => {
  const { users, loading, searchTerm, handleSearch } = useUsers();

  if (loading) return <UserSkeleton />;

  return (
    <div className="container mx-auto p-2  ">
      <h1 className="text-3xl font-bold mb-6 text-center text-primary">
        User Management
      </h1>
      <SearchInput
        searchTerm={searchTerm}
        handleSearch={handleSearch}
      />
      {users.length === 0 ? (
        <div className="alert alert-info shadow-lg">
          <div>
            <span>No users found matching your search.</span>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default UserPage;

```

# client\owner\src\components\admin\UserManagement\UserSkeleton.jsx

```jsx
import React from "react";

const UserSkeleton = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-primary">
        User Management
      </h1>
      <div className="form-control w-full max-w-xs mx-auto mb-6">
        <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
        <div className="h-10 bg-gray-300 rounded w-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="card bg-base-100 shadow-xl animate-pulse">
            <div className="card-body">
              <div className="flex items-center mb-4">
                <div className="rounded-full bg-gray-300 h-12 w-12 mr-4"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                <div className="h-4 bg-gray-300 rounded w-4/6"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserSkeleton;

```

# client\owner\src\components\common\Button.jsx

```jsx
const Button = ({ children, loading, className, ...props }) => {
  return (
    <button
      className={`btn ${className} relative`}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="loading loading-spinner loading-md"></span>
        </span>
      ) : null}
      <span className={loading ? "invisible" : ""}>{children}</span>
    </button>
  );
};

export default Button;

```

# client\owner\src\components\common\Carousel.jsx

```jsx
import { useState } from "react";
 

const Carousel = ({slides}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
   
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide}
            className="w-full h-full object-cover"
            alt={`Turf ${index + 1}`}
          />
        </div>
      ))}
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <button onClick={prevSlide} className="btn btn-circle">
          ❮
        </button>
        <button onClick={nextSlide} className="btn btn-circle">
          ❯
        </button>
      </div>
    </div>
  );
};


export default Carousel;
```

# client\owner\src\components\common\Footer.jsx

```jsx
 

const Footer = () => {
  return (
    <footer className="bg-base-200 py-4 text-center">
      <p>&copy; {new Date().getFullYear()} RiField. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

```

# client\owner\src\components\common\FormField.jsx

```jsx


 const FormField = ({ label, name, type, register, error }) =>
 (
  <div className="form-control">
    <label className="label">
      <span className="label-text">{label}</span>
    </label>
    <input
      type={type}
      placeholder={name}
      className="input input-bordered "
      {...register(name)}
    />
    {error && <span className="text-error text-xs">{error.message}</span>}
  </div>
);



export default FormField;

```

# client\owner\src\components\common\index.jsx

```jsx
// Theme Switcher
export {default as ThemeSwitcher} from "./ThemeSwitcher.jsx";

// Common Components
export {default as FormField} from "./FormField.jsx";
export {default as Button} from "./Button.jsx";

// Footer
export {default as Footer} from "./Footer.jsx";

// Home Carousel
export {default as Carousel} from "./Carousel.jsx";

// Not Found Page
export {default as NotFound} from "./NotFound.jsx";
 
```

# client\owner\src\components\common\NotFound.jsx

```jsx
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary">404</h1>
        <p className="text-2xl font-semibold mt-4 mb-8">Oops! Page not found</p>
        <p className="text-lg mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

```

# client\owner\src\components\common\ThemeSwitcher.jsx

```jsx
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Moon, Sun } from "lucide-react";
import { setTheme } from "../../redux/slices/themeSlice";

const ThemeSwitcher = () => {
  const theme = useSelector((state) => state.theme.current);
  const dispatch = useDispatch();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    dispatch(setTheme(newTheme));
  };

  return (
    <button className="btn btn-ghost btn-circle me-1" onClick={toggleTheme}>
      {theme === "light" ? <Moon /> : <Sun />}
    </button>
  );
};

export default ThemeSwitcher;

```

# client\owner\src\components\layout\AdminSidebar.jsx

```jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  X,
  Home,
  Users,
  Building,
  MapPin,
  DollarSign,
  UserPlus,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const AdminSidebar = ({ isOpen, toggleSidebar, className }) => {
  const location = useLocation();
  const [ownerRequestsOpen, setOwnerRequestsOpen] = useState(false);

  const navItems = [
    { to: "/admin", label: "Dashboard", icon: Home },
    {
      label: "Owner Requests",
      icon: UserPlus,
      subItems: [
        { to: "/admin/owner-requests/new", label: "New Requests" },
        { to: "/admin/owner-requests/rejected", label: "Rejected Requests" },
      ],
    },
    { to: "/admin/users", label: "Users", icon: Users },
    { to: "/admin/owners", label: "Owners", icon: Building },
    { to: "/admin/turfs", label: "Turfs", icon: MapPin },
    { to: "/admin/transactions", label: "Transactions", icon: DollarSign },
  ];

  const toggleOwnerRequests = () => {
    setOwnerRequestsOpen(!ownerRequestsOpen);
  };

  const renderNavItem = (item) => {
    if (item.subItems) {
      return (
        <div key={item.label}>
          <button
            onClick={toggleOwnerRequests}
            className={`flex items-center justify-between w-full px-4 py-2 text-sm hover:bg-base-300`}
          >
            <div className="flex items-center">
              <item.icon size={18} className="mr-2" />
              {item.label}
            </div>
            {ownerRequestsOpen ? (
              <ChevronUp size={18} />
            ) : (
              <ChevronDown size={18} />
            )}
          </button>
          {ownerRequestsOpen && (
            <div className="ml-4">
              {item.subItems.map((subItem) => (
                <Link
                  key={subItem.to}
                  to={subItem.to}
                  className={`flex items-center px-4 py-2 text-sm ${
                    location.pathname === subItem.to
                      ? "bg-accent text-accent-content"
                      : "hover:bg-base-300"
                  }`}
                  onClick={() => {
                    if (window.innerWidth < 1024) {
                      toggleSidebar();
                    }
                  }}
                >
                  {subItem.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <Link
        key={item.to}
        to={item.to}
        className={`flex items-center px-4 py-2 text-sm ${
          location.pathname === item.to
            ? "bg-accent text-accent-content"
            : "hover:bg-base-300"
        }`}
        onClick={() => {
          if (window.innerWidth < 1024) {
            toggleSidebar();
          }
        }}
      >
        <item.icon size={18} className="mr-2" />
        {item.label}
      </Link>
    );
  };

  return (
    <aside
      className={`${className} bg-base-200 overflow-y-auto fixed lg:static
          w-64 transition-transform duration-300 ease-in-out z-30 lg:z-0
          min-h-screen`}
    >
      <div className="flex items-center justify-between p-4 border-b">
        <span className="text-xl font-semibold">Admin Dashboard</span>
        <button onClick={toggleSidebar} className="lg:hidden">
          <X size={24} />
        </button>
      </div>
      <nav className="mt-1">{navItems.map(renderNavItem)}</nav>
    </aside>
  );
};

export default AdminSidebar;

```

# client\owner\src\components\layout\AuthenticatedNavbar.jsx

```jsx
import { Link, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import ThemeSwitcher from "../common/ThemeSwitcher.jsx";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@redux/slices/authSlice.js";

const AuthenticatedNavbar = ({ toggleSidebar }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const role = useSelector((state) => state?.auth?.role);
 const path = role === "admin" ? "/admin" : "/owner";
  const handleLogout = () => {
    dispatch(logout());
    navigate("/", { replace: true });
  };
  return (
    <div className="navbar bg-base-100 fixed top-0 z-50 shadow-md">
      <div className="navbar-start">
        <button className="btn btn-ghost lg:hidden" onClick={toggleSidebar}>
          <Menu size={24} />
        </button>
        <Link to={path} className="btn btn-ghost normal-case text-xl max-sm:p-0">
          <img
            src="/logo.png"
            alt="RiField"
            className="h-10 w-10 mask mask-squircle"
          />
          RiField
        </Link>
      </div>
      <div className="navbar-end">
        <ThemeSwitcher />
        <button className="btn btn-primary btn-outline" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default AuthenticatedNavbar;

```

# client\owner\src\components\layout\GuestNavbar.jsx

```jsx
import { Link } from "react-router-dom";
import ThemeSwitcher from "../common/ThemeSwitcher.jsx";

const GuestNavbar = () => {
  return (
    <div className="navbar bg-base-100 fixed top-0 z-50 shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img
            src="/logo.png"
            alt="RiField"
            className="h-10 w-10 mask mask-squircle"
          />
          RiField
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <ThemeSwitcher />
        <Link to="/signup" className="btn btn-primary btn-outline">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default GuestNavbar;

```

# client\owner\src\components\layout\index.jsx

```jsx
export { default as AuthenticatedNavbar } from "./AuthenticatedNavbar";
export { default as AdminSidebar } from "./AdminSidebar";
export { default as GuestNavbar } from "./GuestNavbar";
export { default as OwnerSidebar } from "./OwnerSidebar";
```

# client\owner\src\components\layout\OwnerSidebar.jsx

```jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { X, Home, MapPin, Star, Calendar, PlusCircle } from "lucide-react";

const OwnerSidebar = ({ isOpen, toggleSidebar, className }) => {
  const location = useLocation();

  const navItems = [
    { to: "/owner", label: "Dashboard", icon: Home },
    { to: "/owner/turfs", label: "My Turfs", icon: MapPin },
    { to: "/owner/add-turf", label: "Add Turf", icon: PlusCircle },
    { to: "/owner/reviews", label: "Reviews", icon: Star },
    { to: "/owner/bookings", label: "Bookings", icon: Calendar },
  ];

  return (
    <aside
      className={`${className} bg-base-200 overflow-y-auto  fixed lg:static 
    w-64 transition-transform duration-300 ease-in-out z-30 lg:z-0 min-h-screen`}
    >
      <div className="flex items-center justify-between p-4 border-b">
        <span className="text-xl font-semibold">Owner Dashboard</span>
        <button onClick={toggleSidebar} className="lg:hidden">
          <X size={24} />
        </button>
      </div>
      <nav className="mt-4">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`flex items-center px-4 py-2 text-sm ${
              location.pathname === item.to
                ? "bg-primary text-primary-content"
                : "hover:bg-base-300"
            }`}
            onClick={() => {
              if (window.innerWidth < 1024) {
                toggleSidebar();
              }
            }}
          >
            <item.icon size={18} className="mr-2" />
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default OwnerSidebar;

```

# client\owner\src\components\owner\Analytics\LocationAnalysis.jsx

```jsx
// client/owner/src/components/owner/Analytics/LocationAnalysis.jsx
import React, { useState, useEffect } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from 'react-simple-maps';
import axiosInstance from '../../../hooks/useAxiosInstance';

const LocationAnalysis = () => {
  const [locationData, setLocationData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLocationData();
  }, []);

  const fetchLocationData = async () => {
    try {
      const response = await axiosInstance.get('/api/owner/analytics/locations');
      setLocationData(response.data);
    } catch (error) {
      console.error('Error fetching location data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Location Analysis</h2>
        {loading ? (
          <div className="flex justify-center items-center h-96">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <div className="h-96">
            <ComposableMap>
              <Geographies geography="/india.json">
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#EAEAEC"
                      stroke="#D6D6DA"
                    />
                  ))
                }
              </Geographies>
              {locationData.map((location) => (
                <Marker
                  key={location.id}
                  coordinates={[location.longitude, location.latitude]}
                >
                  <circle r={5} fill="#F00" />
                </Marker>
              ))}
            </ComposableMap>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {locationData.map((location) => (
            <div key={location.id} className="stat bg-base-200 rounded-box p-4">
              <div className="stat-title">{location.name}</div>
              <div className="stat-value">{location.bookingCount}</div>
              <div className="stat-desc">Bookings this month</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationAnalysis;
```

# client\owner\src\components\owner\Analytics\RecommendationEngine.jsx

```jsx
// src/components/owner/Analytics/RecommendationEngine.jsx
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const RecommendationEngine = () => {
  const [recommendations, setRecommendations] = useState([]);
  const user = useSelector(state => state.auth.user);

  useEffect(() => {
    generateRecommendations();
  }, [user]);

  const generateRecommendations = async () => {
    try {
      const response = await fetch(`/api/recommendations/${user.id}`);
      const data = await response.json();
      setRecommendations(data);
    } catch (error) {
      console.error('Error generating recommendations:', error);
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Recommended for You</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {recommendations.map((item) => (
            <div key={item.id} className="card bg-base-200">
              <div className="card-body">
                <h3 className="font-bold">{item.name}</h3>
                <p>{item.description}</p>
                <p className="text-primary">Match Score: {item.matchScore}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendationEngine;
```

# client\owner\src\components\owner\Analytics\RevenueAnalytics.jsx

```jsx
import React, { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import axiosInstance from '../../../hooks/useAxiosInstance';

const RevenueAnalytics = () => {
  const [revenueData, setRevenueData] = useState([]);
  const [timeframe, setTimeframe] = useState('week');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchRevenueData();
  }, [timeframe]);

  const fetchRevenueData = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(`/api/owner/analytics/revenue?timeframe=${timeframe}`);
      setRevenueData(response.data);
    } catch (error) {
      console.error('Error fetching revenue data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Revenue Analytics</h2>
        
        <div className="flex gap-2 mb-4">
          <select 
            className="select select-bordered"
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
          >
            <option value="week">Last Week</option>
            <option value="month">Last Month</option>
            <option value="year">Last Year</option>
          </select>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="revenue" 
                stroke="#8884d8" 
                name="Revenue" 
              />
            </LineChart>
          </ResponsiveContainer>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="stat bg-base-200 rounded-box p-4">
            <div className="stat-title">Total Revenue</div>
            <div className="stat-value">
              ₹{revenueData.reduce((sum, item) => sum + item.revenue, 0)}
            </div>
          </div>
          <div className="stat bg-base-200 rounded-box p-4">
            <div className="stat-title">Average Revenue</div>
            <div className="stat-value">
              ₹{Math.round(revenueData.reduce((sum, item) => sum + item.revenue, 0) / revenueData.length)}
            </div>
          </div>
          <div className="stat bg-base-200 rounded-box p-4">
            <div className="stat-title">Peak Revenue</div>
            <div className="stat-value">
              ₹{Math.max(...revenueData.map(item => item.revenue))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueAnalytics;
```

# client\owner\src\components\owner\Analytics\UserPreferences.jsx

```jsx
// client/owner/src/components/owner/Analytics/UserPreferences.jsx
import React, { useState, useEffect } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip
} from 'recharts';
import axiosInstance from '../../../hooks/useAxiosInstance';

const UserPreferences = () => {
  const [preferences, setPreferences] = useState({
    sportTypes: [],
    timeSlots: [],
    daysOfWeek: []
  });
  const [loading, setLoading] = useState(true);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  useEffect(() => {
    fetchPreferences();
  }, []);

  const fetchPreferences = async () => {
    try {
      const response = await axiosInstance.get('/api/owner/analytics/preferences');
      setPreferences(response.data);
    } catch (error) {
      console.error('Error fetching preferences:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">User Preferences Analysis</h2>
        {loading ? (
          <div className="flex justify-center items-center h-96">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Sport Types Chart */}
            <div className="h-80">
              <h3 className="text-center mb-4">Popular Sports</h3>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={preferences.sportTypes}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                  >
                    {preferences.sportTypes.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Time Slots Chart */}
            <div className="h-80">
              <h3 className="text-center mb-4">Popular Time Slots</h3>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={preferences.timeSlots}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                  >
                    {preferences.timeSlots.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Days of Week Chart */}
            <div className="h-80">
              <h3 className="text-center mb-4">Popular Days</h3>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={preferences.daysOfWeek}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                  >
                    {preferences.daysOfWeek.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserPreferences;
```

# client\owner\src\components\owner\BillGeneration\BillPreview.jsx

```jsx
// client/owner/src/components/owner/BillGeneration/BillPreview.jsx
import React from 'react';
import TaxCalculator from './TaxCalculator';

const BillPreview = ({ booking, onGenerate }) => {
  const {
    totalPrice,
    taxes,
    finalAmount
  } = TaxCalculator.calculateTaxes(booking.amount);

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Bill Preview</h2>
        <div className="divide-y">
          <div className="py-2">
            <h3 className="font-semibold mb-2">Booking Details</h3>
            <p>Booking ID: {booking.id}</p>
            <p>Customer: {booking.user.name}</p>
            <p>Date: {new Date(booking.date).toLocaleDateString()}</p>
            <p>Time: {booking.startTime} - {booking.endTime}</p>
          </div>
          
          <div className="py-2">
            <h3 className="font-semibold mb-2">Amount Breakdown</h3>
            <div className="flex justify-between mb-1">
              <span>Base Amount:</span>
              <span>₹{totalPrice}</span>
            </div>
            <div className="flex justify-between mb-1">
              <span>CGST (9%):</span>
              <span>₹{taxes.cgst}</span>
            </div>
            <div className="flex justify-between mb-1">
              <span>SGST (9%):</span>
              <span>₹{taxes.sgst}</span>
            </div>
            <div className="flex justify-between font-bold mt-2">
              <span>Total Amount:</span>
              <span>₹{finalAmount}</span>
            </div>
          </div>
        </div>

        <div className="card-actions justify-end mt-4">
          <button 
            className="btn btn-primary"
            onClick={() => onGenerate(booking.id)}
          >
            Generate Bill
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillPreview;
```

# client\owner\src\components\owner\BillGeneration\BillTemplate.jsx

```jsx
// src/components/owner/BillGeneration/BillTemplate.jsx
import React from 'react';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  header: {
    marginBottom: 20,
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  section: {
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
});

const BillDocument = ({ booking }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.title}>Booking Invoice</Text>
      </View>
      <View style={styles.section}>
        <Text>Booking ID: {booking.id}</Text>
        <Text>Customer: {booking.user.name}</Text>
        <Text>Date: {booking.date}</Text>
        <Text>Time: {booking.startTime} - {booking.endTime}</Text>
      </View>
      <View style={styles.section}>
        <Text>Amount Details:</Text>
        <View style={styles.row}>
          <Text>Base Amount:</Text>
          <Text>₹{booking.baseAmount}</Text>
        </View>
        <View style={styles.row}>
          <Text>GST (18%):</Text>
          <Text>₹{booking.gstAmount}</Text>
        </View>
        <View style={styles.row}>
          <Text>Total Amount:</Text>
          <Text>₹{booking.totalAmount}</Text>
        </View>
      </View>
    </Page>
  </Document>
);

const BillTemplate = ({ booking }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Bill Generation</h2>
        <div className="mt-4">
          <PDFDownloadLink
            document={<BillDocument booking={booking} />}
            fileName={`invoice-${booking.id}.pdf`}
          >
            {({ loading }) => (
              <button 
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? 'Generating...' : 'Download Invoice'}
              </button>
            )}
          </PDFDownloadLink>
        </div>
      </div>
    </div>
  );
};

export default BillTemplate;
```

# client\owner\src\components\owner\BillGeneration\TaxCalculator.jsx

```jsx
// client/owner/src/components/owner/BillGeneration/TaxCalculator.jsx
const TaxCalculator = {
    calculateTaxes: (amount) => {
      const baseAmount = Number(amount);
      const gstRate = 0.18; // 18% GST (9% CGST + 9% SGST)
      
      const cgst = (baseAmount * 0.09).toFixed(2);
      const sgst = (baseAmount * 0.09).toFixed(2);
      const totalTax = (baseAmount * gstRate).toFixed(2);
      const finalAmount = (baseAmount + Number(totalTax)).toFixed(2);
  
      return {
        totalPrice: baseAmount.toFixed(2),
        taxes: {
          cgst,
          sgst,
          total: totalTax
        },
        finalAmount
      };
    },
  
    calculateBreakdown: (amount) => {
      const result = TaxCalculator.calculateTaxes(amount);
      return [
        { label: 'Base Amount', value: result.totalPrice },
        { label: 'CGST (9%)', value: result.taxes.cgst },
        { label: 'SGST (9%)', value: result.taxes.sgst },
        { label: 'Total Tax', value: result.taxes.total },
        { label: 'Final Amount', value: result.finalAmount }
      ];
    }
  };
  
  export default TaxCalculator;
```

# client\owner\src\components\owner\BillManagement\BillGenerator.jsx

```jsx
import React from 'react';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';

const BillGenerator = () => {
  const [loading, setLoading] = useState(false);

  const generateBill = async (booking) => {
    setLoading(true);
    try {
      const pdfDoc = await PDFDocument.create();
      const page = pdfDoc.addPage();
      const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

      // Add content to PDF
      page.drawText('TURF BOOKING BILL', {
        x: 50,
        y: 750,
        size: 20,
        font,
      });

      // Add booking details
      page.drawText(`Booking ID: ${booking.id}`, {
        x: 50,
        y: 700,
        size: 12,
        font,
      });

      // Save PDF
      const pdfBytes = await pdfDoc.save();
      
      // Download PDF
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `bill-${booking.id}.pdf`;
      link.click();

    } catch (error) {
      console.error('Error generating bill:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <button 
        className="btn btn-primary"
        onClick={generateBill}
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Generate Bill'}
      </button>
    </div>
  );
};

export default BillGenerator;
```

# client\owner\src\components\owner\BookingManagement\BookingActions.jsx

```jsx
// src/components/owner/BookingManagement/BookingActions.jsx
import React, { useState } from 'react';
import RescheduleModal from './RescheduleModal';
import CancellationModal from './CancellationModal';

const BookingActions = ({ booking, onReschedule, onCancel }) => {
  const [isRescheduleModalOpen, setRescheduleModalOpen] = useState(false);
  const [isCancelModalOpen, setCancelModalOpen] = useState(false);

  return (
    <div className="flex gap-2">
      <button 
        className="btn btn-primary btn-sm"
        onClick={() => setRescheduleModalOpen(true)}
      >
        Reschedule
      </button>
      <button 
        className="btn btn-error btn-sm"
        onClick={() => setCancelModalOpen(true)}
      >
        Cancel
      </button>

      {isRescheduleModalOpen && (
        <RescheduleModal
          booking={booking}
          onClose={() => setRescheduleModalOpen(false)}
          onReschedule={onReschedule}
        />
      )}

      {isCancelModalOpen && (
        <CancellationModal
          booking={booking}
          onClose={() => setCancelModalOpen(false)}
          onCancel={onCancel}
        />
      )}
    </div>
  );
};

export default BookingActions;
```

# client\owner\src\components\owner\BookingManagement\BookingList.jsx

```jsx
// src/components/owner/BookingManagement/BookingList.jsx
import React from 'react';
import BookingActions from './BookingActions';

const BookingList = ({ bookings, onReschedule, onCancel }) => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Booking Management</h2>
      <div className="grid gap-4">
        {bookings.map((booking) => (
          <div key={booking.id} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold">{booking.user.name}</h3>
                  <p className="text-sm text-gray-500">{booking.date}</p>
                  <p>Time: {booking.startTime} - {booking.endTime}</p>
                  <p>Amount: ₹{booking.amount}</p>
                </div>
                <BookingActions 
                  booking={booking}
                  onReschedule={onReschedule}
                  onCancel={onCancel}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingList;
```

# client\owner\src\components\owner\BookingManagement\CancellationModal.jsx

```jsx
// src/components/owner/BookingManagement/CancellationModal.jsx
import React, { useState } from 'react';

const CancellationModal = ({ booking, onClose, onCancel }) => {
  const [reason, setReason] = useState('');
  const [isRefundRequired, setIsRefundRequired] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onCancel(booking.id, { reason, isRefundRequired });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-base-100 p-6 rounded-lg w-full max-w-md">
        <h3 className="text-lg font-bold mb-4">Cancel Booking</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Cancellation Reason
            </label>
            <textarea
              className="textarea textarea-bordered w-full"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="checkbox"
                checked={isRefundRequired}
                onChange={(e) => setIsRefundRequired(e.target.checked)}
              />
              <span>Process Refund</span>
            </label>
          </div>
          <div className="flex justify-end gap-2">
            <button 
              type="button" 
              className="btn btn-ghost"
              onClick={onClose}
            >
              Close
            </button>
            <button type="submit" className="btn btn-error">
              Confirm Cancellation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CancellationModal;
```

# client\owner\src\components\owner\BookingManagement\RefundProcess.jsx

```jsx
// client/owner/src/components/owner/BookingManagement/RefundProcess.jsx
import React, { useState } from 'react';
import axiosInstance from '../../../hooks/useAxiosInstance';

const RefundProcess = ({ booking, onRefundComplete }) => {
  const [loading, setLoading] = useState(false);
  const [reason, setReason] = useState('');
  const [refundAmount, setRefundAmount] = useState(booking.amount);

  const handleRefund = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await axiosInstance.post(`/api/owner/bookings/${booking.id}/refund`, {
        reason,
        amount: refundAmount
      });

      if (response.data.success) {
        onRefundComplete(response.data);
      }
    } catch (error) {
      console.error('Error processing refund:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Process Refund</h2>
        <form onSubmit={handleRefund}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Refund Amount</span>
            </label>
            <input
              type="number"
              className="input input-bordered"
              value={refundAmount}
              onChange={(e) => setRefundAmount(e.target.value)}
              max={booking.amount}
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Reason for Refund</span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              required
            />
          </div>

          <div className="mt-4">
            <button 
              type="submit" 
              className="btn btn-primary w-full"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                'Process Refund'
              )}
            </button>
          </div>
        </form>
      </div>
      <div className="mt-4 space-y-4">
        <div className="bg-base-200 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Refund Policy</h3>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Full refund available for cancellations 24 hours before booking</li>
            <li>50% refund for cancellations within 24 hours</li>
            <li>No refund for no-shows or late cancellations</li>
          </ul>
        </div>

        <div className="bg-base-200 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Booking Details</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <p className="font-medium">Booking ID:</p>
              <p>{booking.id}</p>
            </div>
            <div>
              <p className="font-medium">Customer Name:</p>
              <p>{booking.userName}</p>
            </div>
            <div>
              <p className="font-medium">Booking Date:</p>
              <p>{new Date(booking.bookingDate).toLocaleDateString()}</p>
            </div>
            <div>
              <p className="font-medium">Original Amount:</p>
              <p>₹{booking.amount}</p>
            </div>
          </div>
        </div>

        <div className="bg-base-200 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Refund Summary</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Original Amount:</span>
              <span>₹{booking.amount}</span>
            </div>
            <div className="flex justify-between">
              <span>Refund Amount:</span>
              <span>₹{refundAmount}</span>
            </div>
            <div className="flex justify-between">
              <span>Processing Fee:</span>
              <span>₹{(booking.amount - refundAmount).toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <button
            type="button"
            className="btn btn-outline w-full"
            onClick={() => window.history.back()}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

// Add PropTypes validation
RefundProcess.propTypes = {
  booking: PropTypes.shape({
    id: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    userName: PropTypes.string.isRequired,
    bookingDate: PropTypes.string.isRequired,
  }).isRequired,
  onRefundComplete: PropTypes.func.isRequired,
};

export default RefundProcess;
```

# client\owner\src\components\owner\BookingManagement\RescheduleModal.jsx

```jsx
// src/components/owner/BookingManagement/RescheduleModal.jsx
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const RescheduleModal = ({ booking, onClose, onReschedule }) => {
  const [newDate, setNewDate] = useState(new Date());
  const [newTime, setNewTime] = useState(booking.startTime);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onReschedule(booking.id, { date: newDate, time: newTime });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-base-100 p-6 rounded-lg w-full max-w-md">
        <h3 className="text-lg font-bold mb-4">Reschedule Booking</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">New Date</label>
            <DatePicker
              selected={newDate}
              onChange={date => setNewDate(date)}
              className="input input-bordered w-full"
              minDate={new Date()}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">New Time</label>
            <select 
              className="select select-bordered w-full"
              value={newTime}
              onChange={(e) => setNewTime(e.target.value)}
            >
              {/* Time slots */}
              <option value="09:00">09:00 AM</option>
              <option value="10:00">10:00 AM</option>
              {/* Add more time slots */}
            </select>
          </div>
          <div className="flex justify-end gap-2">
            <button 
              type="button" 
              className="btn btn-ghost"
              onClick={onClose}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Confirm Reschedule
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RescheduleModal;
```

# client\owner\src\components\owner\Bookings\BookingsSkeleton.jsx

```jsx
import React from "react";

const BookingsSkeleton = () => {
  return (
    <div className="p-4">
      <div className="h-8 bg-base-300 rounded w-1/4 mb-4"></div>
      <div className="h-10 bg-base-300 rounded w-1/3 mb-4"></div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              {["Turf", "User", "Price", "Date", "Duration"].map((header) => (
                <th key={header} className="bg-base-300 h-8"></th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((i) => (
              <tr key={i}>
                {[1, 2, 3, 4, 5].map((j) => (
                  <td key={j} className="bg-base-300 h-6"></td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingsSkeleton;

```

# client\owner\src\components\owner\Bookings\OwnerBookings.jsx

```jsx
import useOwnerBookings from "@hooks/owner/useOwnerBookings";
import BookingsSkeleton from "./BookingsSkeleton";
import { format, subHours, subMinutes } from "date-fns";
import { ArrowUpDown, Calendar, Clock, User, IndianRupee } from "lucide-react";
import Avatar from "react-avatar";

const OwnerBookings = () => {
  const {
    bookings,
    loading,
    error,
    filterDays,
    setFilterDays,
    sortConfig,
    requestSort,
  } = useOwnerBookings();

  if (loading) return <BookingsSkeleton />;
  if (error) return <div className="alert alert-error shadow-lg">{error}</div>;

  const getSortDirection = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  const formatTime = (dateString) => {
    // Subtract 5 hours and 30 minutes from the time
    const adjustedDate = subMinutes(subHours(new Date(dateString), 5), 30);
    return format(adjustedDate, "h:mm aa");
  };

  return (
    <div className="p-4 md:p-6 bg-base-200 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-primary">
          Bookings Overview
        </h1>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 md:mb-6 gap-4">
          <select
            className="select select-primary w-full md:w-auto max-w-xs"
            value={filterDays}
            onChange={(e) => setFilterDays(Number(e.target.value))}
          >
            <option value={7}>Last 7 days</option>
            <option value={15}>Last 15 days</option>
            <option value={30}>Last 30 days</option>
          </select>

          <div className="stats shadow w-full md:w-auto">
            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Total Bookings</div>
              <div className="stat-value">{bookings.length}</div>
              <div className="stat-desc">From last {filterDays} days</div>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto bg-base-100 rounded-lg shadow-xl">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Turf</th>
                <th>User</th>
                <th
                  onClick={() => requestSort("startTime")}
                  className="cursor-pointer"
                >
                  Start Time{" "}
                  {getSortDirection("startTime") && (
                    <ArrowUpDown size={16} className="inline" />
                  )}
                </th>
                <th
                  onClick={() => requestSort("endTime")}
                  className="cursor-pointer"
                >
                  End Time{" "}
                  {getSortDirection("endTime") && (
                    <ArrowUpDown size={16} className="inline" />
                  )}
                </th>
                <th
                  onClick={() => requestSort("bookingDate")}
                  className="cursor-pointer"
                >
                  Date{" "}
                  {getSortDirection("bookingDate") && (
                    <ArrowUpDown className="inline" size={16} />
                  )}
                </th>
                <th>Duration</th>
                <th
                  onClick={() => requestSort("totalPrice")}
                  className="cursor-pointer"
                >
                  Price{" "}
                  {getSortDirection("totalPrice") && (
                    <ArrowUpDown size={16} className="inline" />
                  )}
                </th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id} className="hover">
                  <td className="whitespace-nowrap">{booking.turfName}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <Avatar name={booking.userName} size="32" round={true} />
                      <div className="hidden md:block font-bold">
                        {booking.userName}
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap">
                    <Clock size={16} className="inline mr-1" />
                    {formatTime(booking.startTime)}
                  </td>
                  <td className="whitespace-nowrap">
                    <Clock size={16} className="inline mr-1" />
                    {formatTime(booking.endTime)}
                  </td>
                  <td className="whitespace-nowrap">
                    <Calendar size={16} className="inline mr-1" />
                    {format(new Date(booking.bookingDate), "dd MMM yyyy")}
                  </td>
                  <td>{booking.duration.toFixed(2)} hrs</td>
                  <td>
                    <span className="badge badge-accent badge-lg">
                      <IndianRupee size={16} className="inline mr-1" />
                      {booking.totalPrice}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 md:mt-6 text-sm text-base-content opacity-70">
          Showing {bookings.length} bookings from the last {filterDays} days
        </div>
      </div>
    </div>
  );
};

export default OwnerBookings;

```

# client\owner\src\components\owner\Dashboard\DashboardSkeleton.jsx

```jsx
const DashboardSkeleton = () => {
  return (
    <div className="p-4 md:p-6 bg-base-200 min-h-screen animate-pulse">
      <div className="max-w-7xl mx-auto">
        <div className="h-8 bg-base-300 rounded w-1/4 mb-6"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-base-100 p-4 rounded-lg shadow-lg">
              <div className="h-4 bg-base-300 rounded w-1/2 mb-2"></div>
              <div className="h-6 bg-base-300 rounded w-3/4"></div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="bg-base-100 p-4 rounded-lg shadow-lg h-64"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardSkeleton;

```

# client\owner\src\components\owner\Dashboard\OwnerDashboard.jsx

```jsx
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
import useOwnerDashboard from "@hooks/owner/useOwnerDashboard";
import DashboardSkeleton from "./DashboardSkeleton";

const OwnerDashboard = () => {
  const { dashboardData, loading, error } = useOwnerDashboard();

  if (loading) return <DashboardSkeleton />;
  if (error) return <div className="alert alert-error shadow-lg">{error}</div>;

  const {
    totalBookings,
    totalReviews,
    totalRevenue,
    totalTurfs,
    bookingsPerTurf,
    revenueOverTime,
  } = dashboardData;

  // Prepare data for Revenue Over Time chart
  const revenueChartData = revenueOverTime.map((item) => ({
    date: new Date(item._id).toLocaleDateString(),
    revenue: item.revenue,
  }));

  return (
    <div className="p-4 md:p-6 bg-base-200 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
          Owner Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <StatCard title="Total Bookings" value={totalBookings} icon="📅" />
          <StatCard title="Total Reviews" value={totalReviews} icon="⭐" />
          <StatCard
            title="Total Revenue"
            value={totalRevenue}
            icon="💰"
            prefix="₹"
          />
          <StatCard title="Total Turfs" value={totalTurfs} icon="🏟️" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ChartCard title="Bookings per Turf">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={bookingsPerTurf}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="bookings" fill="#8884d8" name="Bookings" />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
          <ChartCard title="Revenue Over Time">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={revenueChartData}
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
                  stroke="#8884d8"
                  name="Revenue"
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, icon, prefix = "" }) => (
  <div className="bg-base-100 p-4 rounded-lg shadow-lg">
    <div className="flex items-center justify-between">
      <h2 className="text-lg font-semibold">{title}</h2>
      <span className="text-2xl">{icon}</span>
    </div>
    <p className="text-3xl font-bold mt-2">
      {prefix}
      <CountUp end={value || 0} duration={2.5} separator="," />
    </p>
  </div>
);

const ChartCard = ({ title, children }) => (
  <div className="bg-base-100 p-4 rounded-lg shadow-lg">
    <h2 className="text-lg font-semibold mb-4">{title}</h2>
    {children}
  </div>
);

export default OwnerDashboard;

```

# client\owner\src\components\owner\index.jsx

```jsx
export { default as AddTurf } from "./TurfManagement/AddTurf"
export { default as OwnerDashboard} from "./Dashboard/OwnerDashboard"

export {default as TurfManagement} from "./TurfManagement/TurfManagement"

export {default as OwnerReviews }  from "./Review/OwnerReviews"

export {default as OwnerBookings }  from "./Bookings/OwnerBookings"
```

# client\owner\src\components\owner\RateManagement\RateManager.jsx

```jsx
import React, { useState, useEffect } from 'react';
import axiosInstance from '../../../hooks/useAxiosInstance';

const RateManager = () => {
  const [rates, setRates] = useState({
    baseRate: 0,
    peakHourRate: 0,
    weekendRate: 0
  });

  useEffect(() => {
    fetchRates();
  }, []);

  const fetchRates = async () => {
    try {
      const response = await axiosInstance.get('/api/owner/turf/rates');
      setRates(response.data);
    } catch (error) {
      console.error('Error fetching rates:', error);
    }
  };

  const updateRates = async () => {
    try {
      await axiosInstance.put('/api/owner/turf/rates', rates);
      toast.success('Rates updated successfully');
    } catch (error) {
      toast.error('Error updating rates');
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Rate Management</h2>
        
        <div className="form-control">
          <label className="label">Base Rate (per hour)</label>
          <input
            type="number"
            className="input input-bordered"
            value={rates.baseRate}
            onChange={(e) => setRates({...rates, baseRate: e.target.value})}
          />
        </div>

        <div className="form-control">
          <label className="label">Peak Hour Rate (per hour)</label>
          <input
            type="number"
            className="input input-bordered"
            value={rates.peakHourRate}
            onChange={(e) => setRates({...rates, peakHourRate: e.target.value})}
          />
        </div>

        <div className="form-control">
          <label className="label">Weekend Rate (per hour)</label>
          <input
            type="number"
            className="input input-bordered"
            value={rates.weekendRate}
            onChange={(e) => setRates({...rates, weekendRate: e.target.value})}
          />
        </div>

        <button className="btn btn-primary mt-4" onClick={updateRates}>
          Update Rates
        </button>
      </div>
    </div>
  );
};

export default RateManager;
```

# client\owner\src\components\owner\Review\OwnerReviews.jsx

```jsx
 import { Star } from "lucide-react";
import useOwnerReviews from "@hooks/owner/useOwnerReviews";
import ReviewsSkeleton from "./ReviewSkeleton"
const OwnerReviews = () => {
  const { turfs, selectedTurf, setSelectedTurf, loading, error } =
    useOwnerReviews();

  if (loading) return <ReviewsSkeleton />;
  if (error) return <div className="text-error p-4">{error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Turf Reviews</h1>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/3">
          <ul className="menu bg-base-200 w-full rounded-box">
            {turfs.map((turf) => (
              <li key={turf.id}>
                <a
                  className={selectedTurf === turf.id ? "active" : ""}
                  onClick={() => setSelectedTurf(turf.id)}
                >
                  <span>{turf.name}</span>
                  <span className="badge badge-sm">
                    <Star size={12} className="text-yellow-400 mr-1" />
                    {turf.avgRating.toFixed(1)}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-2/3">
          {selectedTurf ? (
            <div>
              <h2 className="text-xl font-semibold mb-2">
                {turfs.find((t) => t.id === selectedTurf).name} Reviews
              </h2>
              <div className="space-y-4">
                {turfs
                  .find((t) => t.id === selectedTurf)
                  .reviews.map((review) => (
                    <div key={review.id} className="card bg-base-100 shadow-xl">
                      <div className="card-body">
                        <div className="flex justify-between items-center">
                          <h3 className="card-title text-lg">
                            {review.userName}
                          </h3>
                          <div className="flex items-center">
                            <Star size={16} className="text-yellow-400 mr-1" />
                            <span>{review.rating}</span>
                          </div>
                        </div>
                        <p>{review.comment}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500">
              Select a turf to view its reviews
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OwnerReviews;

```

# client\owner\src\components\owner\Review\ReviewSkeleton.jsx

```jsx
 
const ReviewsSkeleton = () => {
  return (
    <div className="p-4">
      <div className="h-8 bg-base-300 rounded w-1/4 mb-4"></div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/3">
          <div className="bg-base-200 rounded-box p-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-8 bg-base-300 rounded mb-2"></div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-2/3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="card bg-base-100 shadow-xl mb-4">
              <div className="card-body">
                <div className="h-6 bg-base-300 rounded w-1/4 mb-2"></div>
                <div className="h-4 bg-base-300 rounded w-full mb-1"></div>
                <div className="h-4 bg-base-300 rounded w-3/4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsSkeleton;

```

# client\owner\src\components\owner\TurfManagement\AddTurf.jsx

```jsx
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller } from "react-hook-form";
import { setHours, setMinutes } from "date-fns";
import { FormField } from "@components/common";
import useAddTurf from "@hooks/owner/useAddTurf";
import { Button } from "@components/common";
const AddTurf = () => {
  const {
    register,
    handleSubmit,
    errors,
    control,
    setValue,
    onSubmit,
    sportTypes,
    newSportType,
    setNewSportType,
    addSportType,
    removeSportType,
    openTime,
    loading,
  } = useAddTurf();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Turf</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:grid md:grid-cols-2 gap-4"
      >
        <div className="space-y-4">
          <FormField
            label="Turf Name"
            name="name"
            type="text"
            register={register}
            error={errors.name}
          />
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              {...register("description")}
              className="textarea textarea-bordered h-24"
              placeholder="Enter turf description"
            ></textarea>
            {errors.description && (
              <span className="text-error text-xs">
                {errors.description.message}
              </span>
            )}
          </div>
          <FormField
            label="Location"
            name="location"
            type="text"
            register={register}
            error={errors.location}
          />
          <FormField
            label="Price Per Hour"
            name="pricePerHour"
            type="number"
            register={register}
            error={errors.pricePerHour}
          />
        </div>
        <div className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              type="file"
              className="file-input file-input-bordered w-full"
              onChange={(e) => {
                const file = e.target.files[0];
                setValue("image", file);
              }}
              {...register("image", { required: true })}
            />
            {errors.image && (
              <span className="text-error text-xs">{errors.image.message}</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Open Time</span>
            </label>
            <Controller
              name="openTime"
              control={control}
              rules={{ required: "Open time is required" }}
              render={({ field }) => (
                <DatePicker
                  selected={field.value}
                  onChange={(date) => {
                    field.onChange(date);
                    setValue("closeTime", null);
                  }}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={60}
                  timeCaption="Time"
                  dateFormat="h:mm aa"
                  className="input input-bordered w-full"
                />
              )}
            />
            {errors.openTime && (
              <span className="text-error text-xs">
                {errors.openTime.message}
              </span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Close Time</span>
            </label>
            <Controller
              name="closeTime"
              control={control}
              rules={{ required: "Close time is required" }}
              render={({ field }) => (
                <DatePicker
                  selected={field.value}
                  onChange={field.onChange}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={60}
                  timeCaption="Time"
                  dateFormat="h:mm aa"
                  className="input input-bordered w-full"
                  disabled={!openTime}
                  minTime={openTime || setHours(setMinutes(new Date(), 0), 0)}
                  maxTime={setHours(setMinutes(new Date(), 30), 23)}
                />
              )}
            />
            {errors.closeTime && (
              <span className="text-error text-xs">
                {errors.closeTime.message}
              </span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Sport Types</span>
            </label>
            <div className="md:flex md:space-x-2">
              <input
                type="text"
                value={newSportType}
                onChange={(e) => setNewSportType(e.target.value)}
                className="input input-bordered md:flex-grow w-full "
                placeholder="Add a sport type"
              />
              <button
                type="button"
                onClick={addSportType}
                className="btn btn-outline btn-primary max-sm:mt-2"
              >
                Add
              </button>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {sportTypes.map((type, index) => (
                <span key={index} className="badge badge-lg">
                  {type}
                  <button
                    type="button"
                    onClick={() => removeSportType(type)}
                    className="ml-2 text-error"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
            {errors.sportTypes && (
              <span className="text-error text-xs">
                {errors.sportTypes.message}
              </span>
            )}
          </div>
        </div>
        <div className="md:col-span-2">
          <Button type="submit" className=" btn-primary w-full" loading={loading}>
            Add Turf
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddTurf;

```

# client\owner\src\components\owner\TurfManagement\EditTurfForm.jsx

```jsx
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format, parse } from 'date-fns';

const EditTurfForm = ({ turf, onSave, onCancel, turfId }) => {
 const validationSchema = Yup.object().shape({
   name: Yup.string().required("Name is required"),
   description: Yup.string(),
   pricePerHour: Yup.number()
     .required("Price per Hour is required")
     .positive("Price per Hour must be a positive number")
     .min(500, "Price per Hour must be greater than 500")
     .max(10000, "Price per Hour must be less than 10000"),
   location: Yup.string().required("Location is required"),
    openTime: Yup.date().required("Open Time is required"),
   closeTime: Yup.date()
     .required("Close Time is required")
     .min(Yup.ref("openTime"), "Close Time must be after Open Time"),
 });

  const {
    register,
    handleSubmit,
    control,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      ...turf,
      openTime: turf.openTime ? parse(turf.openTime, 'hh:mm a', new Date()) : null,
      closeTime: turf.closeTime ? parse(turf.closeTime, 'hh:mm a', new Date()) : null,
    },
  });

  const onSubmit = (data) => {
    onSave(
      {
        ...data,
        openTime: data.openTime ? format(data.openTime, 'hh:mm a') : null,
        closeTime: data.closeTime ? format(data.closeTime, 'hh:mm a') : null,
      },
      turfId
    );
  };

  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);
    const isTurfExisting = !!turf._id;

    return currentDate.getTime() < selectedDate.getTime() || isTurfExisting;
  };

  const filterCloseTime = (time) => {
    const openTime = getValues('openTime');
    return openTime?.getTime() < time.getTime();
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card bg-base-100 shadow-xl h-full">
      <div className="card-body p-4">
        <h2 className="card-title text-lg mb-4">Edit Turf</h2>
        <input
          type="text"
          {...register('name')}
          placeholder="Turf Name"
          className={`input input-bordered w-full mt-2 text-sm ${errors.name ? 'input-error' : ''}`}
        />
        {errors.name && <p className="text-error text-sm">{errors.name.message}</p>}
        <textarea
          {...register('description')}
          placeholder="Description"
          className={`textarea textarea-bordered w-full mt-2 text-sm ${errors.description ? 'textarea-error' : ''}`}
        ></textarea>
        {errors.description && <p className="text-error text-sm">{errors.description.message}</p>}
        <input
          type="number"
          {...register('pricePerHour', { valueAsNumber: true })}
          placeholder="Price per Hour"
          className={`input input-bordered w-full mt-2 text-sm ${errors.pricePerHour ? 'input-error' : ''}`}
        />
        {errors.pricePerHour && <p className="text-error text-sm">{errors.pricePerHour.message}</p>}
        <input
          type="text"
          {...register('location')}
          placeholder="Location"
          className={`input input-bordered w-full mt-2 text-sm ${errors.location ? 'input-error' : ''}`}
        />
        {errors.location && <p className="text-error text-sm">{errors.location.message}</p>}
        <input
          type="text"
          {...register('sportsType')}
          placeholder="Sports Type"
          className={`input input-bordered w-full mt-2 text-sm `}
        />
 
      <div className="flex flex-col sm:flex-row gap-4 mt-2">
        <div className="flex-1">
          <label className="label">
            <span className="label-text">Open Time</span>
          </label>
          <Controller
            control={control}
            name="openTime"
            render={({ field }) => (
              <DatePicker
                {...field}
                selected={field.value}
                onChange={(date) => field.onChange(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={60}
                timeCaption="Time"
                dateFormat="h:mm aa"
                className={`input input-bordered w-full text-sm ${errors.openTime ? 'input-error' : ''}`}
                filterTime={filterPassedTime}
              />
            )}
          />
          {errors.openTime && <p className="text-error text-sm">{errors.openTime.message}</p>}
        </div>
        <div className="flex-1">
          <label className="label">
            <span className="label-text">Close Time</span>
          </label>
          <Controller
            control={control}
            name="closeTime"
            render={({ field }) => (
              <DatePicker
                {...field}
                selected={field.value}
                onChange={(date) => field.onChange(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={60}
                timeCaption="Time"
                dateFormat="h:mm aa"
                className={`input input-bordered w-full text-sm ${errors.closeTime ? 'input-error' : ''}`}
                filterTime={filterCloseTime}
                disabled={!getValues('openTime')}
              />
            )}
          />
          {errors.closeTime && <p className="text-error text-sm">{errors.closeTime.message}</p>}
        </div>
      </div>

        <div className="card-actions justify-end mt-4">
          <button type="button" className="btn btn-ghost btn-sm" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit" className="btn btn-primary btn-sm">
            Save Changes
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditTurfForm;
```

# client\owner\src\components\owner\TurfManagement\TurfCard.jsx

```jsx
import React from "react";
import { Edit2, Trash2, Clock, MapPin, Tag, Star } from "lucide-react";

const TurfCard = ({ turf, onEdit }) => {
  return (
    <div className="card bg-base-100 shadow-xl h-full">
      <figure className="px-4 pt-4">
        <img
          src={turf.image}
          alt={turf.name}
          className="rounded-xl object-cover w-full h-48"
        />
      </figure>
      <div className="card-body p-4">
        <div className="flex justify-between items-center">
          <h2 className="card-title text-lg">{turf.name}</h2>
          <div className="flex items-center">
            <Star size={16} className="text-yellow-400 mr-1" />
            <span className="text-sm font-semibold">
              {turf.avgRating ? turf.avgRating.toFixed(1) : "N/A"}
            </span>
          </div>
        </div>
        <p className="text-sm">{turf.description}</p>
        <div className="flex items-center mt-2 text-sm">
          <MapPin size={14} className="mr-2" />
          <span>{turf.location}</span>
        </div>
        <div className="flex items-center mt-2 text-sm">
          <Tag size={14} className="mr-2" />
          <span>₹{turf.pricePerHour}/hour</span>
        </div>
        <div className="flex items-center mt-2 text-sm">
          <Clock size={14} className="mr-2" />
          <span>
            {turf.openTime} - {turf.closeTime}
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {turf.sportTypes.map((sport, index) => (
            <div key={index} className="badge badge-accent mt-2">
              {sport}
            </div>
          ))}
        </div>
        <div className="card-actions justify-end mt-4">
          <button
            className="btn btn-primary btn-sm"
            onClick={() => onEdit(turf)}
          >
            <Edit2 size={14} className="mr-1" /> Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default TurfCard;

```

# client\owner\src\components\owner\TurfManagement\TurfCardSkeleton.jsx

```jsx
const TurfCardSkeleton = () => {
  return (
    <div className="card bg-base-100 shadow-xl h-full animate-pulse">
      <div className="px-4 pt-4">
        <div className="h-48 bg-gray-300 rounded-xl"></div>
      </div>
      <div className="card-body p-4">
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
        <div className="h-6 bg-gray-300 rounded w-1/4 mb-2"></div>
        <div className="flex justify-end mt-4">
          <div className="h-8 bg-gray-300 rounded w-20 mr-2"></div>
          <div className="h-8 bg-gray-300 rounded w-20"></div>
        </div>
      </div>
    </div>
  );
};


export default TurfCardSkeleton;
```

# client\owner\src\components\owner\TurfManagement\TurfManagement.jsx

```jsx
import { useEffect, useState } from "react";
import useTurfManagement from "@hooks/owner/useTurfManagement";
import EditTurfForm from "./EditTurfForm";
import TurfCardSkeleton from "./TurfCardSkeleton";
import TurfCard from "./TurfCard";

const TurfManagement = () => {
  const { turfs, isLoading, error, fetchTurfs, editTurf } = useTurfManagement();
  const [editingTurf, setEditingTurf] = useState(null);

  useEffect(() => {
    fetchTurfs();
  }, []);

  const handleEdit = (turf) => {
    setEditingTurf(turf);
  };

  const handleSaveEdit = (updatedTurf, turfId) => {
    editTurf(updatedTurf, turfId);
    setEditingTurf(null);
  };

  const handleCancelEdit = () => {
    setEditingTurf(null);
  };

  if (error) {
    return <div className="text-error text-center mt-8">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Turf Management</h1>

      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="w-full">
              <TurfCardSkeleton />
            </div>
          ))}
        </div>
      ) : turfs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {turfs.map((turf) => (
            <div key={turf._id} className="w-full">
              {editingTurf && editingTurf._id === turf._id ? (
                <EditTurfForm
                  turf={editingTurf}
                  onSave={handleSaveEdit}
                  onCancel={handleCancelEdit}
                  turfId={turf._id}
                />
              ) : (
                <TurfCard turf={turf} onEdit={() => handleEdit(turf)} />
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 mt-8">
          No turfs available.
        </div>
      )}
    </div>
  );
};

export default TurfManagement;

```

# client\owner\src\components\ProtectedRoute\index.jsx

```jsx
export {default as ProtectedRoute} from "./ProtectedRoute"
```

# client\owner\src\components\ProtectedRoute\ProtectedRoute.jsx

```jsx
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children, requiredRole }) {
  const { isAuthenticated, role } = useSelector((state) => state?.auth);
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (requiredRole && role !== requiredRole) {
    return <Navigate to="/" replace />;
  }

  return children;
}

```

# client\owner\src\hooks\admin\useDashboardData.jsx

```jsx
import { useEffect, useState } from "react";
import axiosInstance from "../useAxiosInstance";

const useDashboardData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get("/api/admin/dashboard");
      setData(response.data);
    } catch (err) {
      console.error("Error fetching dashboard data:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error };
};

export default useDashboardData;
```

# client\owner\src\hooks\admin\useOwnerRequests.jsx

```jsx
import { useState, useEffect, useCallback } from "react";
import axiosInstance from "../useAxiosInstance";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";

const useOwnerRequests = () => {
  const [requests, setRequests] = useState([]);
  const [allRequests, setAllRequests] = useState([]);
  const [rejectedRequests, setRejectedRequests] = useState([]);
  const [allRejectedRequests, setAllRejectedRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [requestId, setRequestId] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();

  const currentPath = location.pathname.split("/").pop();

  const handleSearch = useCallback(
    (term) => {
      setSearchTerm(term);
      if (term === "") {
        setRequests(allRequests);
        setRejectedRequests(allRejectedRequests);
        return;
      }
      setSearchTerm(term);
      const filtered =
        currentPath === "new"
          ? requests.filter(
              (request) =>
                request.name.toLowerCase().includes(term.toLowerCase()) ||
                request.email.toLowerCase().includes(term.toLowerCase())
            )
          : rejectedRequests.filter(
              (request) =>
                request.name.toLowerCase().includes(term.toLowerCase()) ||
                request.email.toLowerCase().includes(term.toLowerCase())
            );

      if (currentPath === "new") {
        setRequests(filtered);
      } else if (currentPath === "rejected") {
        setRejectedRequests(filtered);
      }
    },
    [allRequests, allRejectedRequests]
  );

  const fetchRequests = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(
        "/api/admin/owner-requests/list"
      );
      const data = await response.data;
      setRequests(data.ownerRequests);
      setAllRequests(data.ownerRequests);
      setRejectedRequests(data.ownerRejectedRequests);
      setAllRejectedRequests(data.ownerRejectedRequests);
    } catch (err) {
      console.log(err, "err");
      toast.error(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAccept = async (id) => {
    setRequestId(id);
    try {
      // Replace with your actual API endpoint
      const response = await axiosInstance.put(
        `/api/admin/owner-requests/${id}/accept`
      );
      const result = await response.data;
       toast.success(result.message);
      setRequests(requests.filter((request) => request._id !== id));
    } catch (err) {
      console.error(err);
      toast.error(err.response.data.message);
    } finally {
      setRequestId("");
    }
  };

  const handleReject = async (id) => {
    setRequestId(id);
    try {
      const response = await axiosInstance.delete(
        `/api/admin/owner-requests/${id}`
      );
      const result = await response.data;
      toast.success(result.message);
      setRequests(requests.filter((request) => request._id !== id));
    } catch (err) {
      console.error(err, "delete error");
      toast.error(err.response?.data?.message);
    } finally {
      setRequestId("");
    }
  };

  const handleReconsider = async (id) => {
    setRequestId(id);
    try {
      const response = await axiosInstance.put(
        `/api/admin/owner-requests/reconsider/${id}`
      );
      const result = await response.data;
      toast.success(result.message);
      setRejectedRequests(
        rejectedRequests.filter((request) => request._id !== id)
      );
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message);
    } finally {
      setRequestId("");
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return {
    requests,
    loading,
    handleAccept,
    handleReject,
    requestId,
    rejectedRequests,
    handleReconsider,
    searchTerm,
    handleSearch,
  };
};

export default useOwnerRequests;

```

# client\owner\src\hooks\admin\useOwners.jsx

```jsx
// useOwners.jsx
import { useState, useEffect } from "react";
import axiosInstance from "../useAxiosInstance";

const useOwners = () => {
  const [owners, setOwners] = useState({
    all: [],
    filtered: [],
  });
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (value) => {
    setSearchTerm(value);
    if (value === "") {
      setOwners((prev) => {
        console.log(prev, "prev");
        return {
          ...prev,
          filtered: prev.all,
        };
      });
    } else {
      const filtered = owners.all.filter(
        (owner) =>
          owner.name.toLowerCase().includes(value.toLowerCase()) ||
          owner.email.toLowerCase().includes(value.toLowerCase())
      );
      setOwners((prev) => ({
        ...prev,
        filtered: filtered,
      }));
    }
  };

  const fetchOwners = async () => {
    try {
      const response = await axiosInstance.get("/api/admin/owners/list");
      const result = response.data.owners;
      setOwners({
        all: result,
        filtered: result,
      });
      setLoading(false);
    } catch (err) {
      console.error("Error fetching owners:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOwners();
  }, []);

  return { owners: owners.filtered, loading, searchTerm, handleSearch };
};

export default useOwners;

```

# client\owner\src\hooks\admin\useTransactionData.jsx

```jsx
import { useState, useEffect } from "react";
import axiosInstance from "../useAxiosInstance";

const useTransactionData = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get("/api/admin/transactions");
        const result = response.data;
         setTransactions(result.transactions);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  return { transactions, loading, error };
};

export default useTransactionData;

```

# client\owner\src\hooks\admin\useTransactionManagement.jsx.jsx

```jsx
import { useState, useMemo, useEffect } from "react";

const useTransactionManagement = (initialTransactions) => {
  const [transactions, setTransactions] = useState([]);
  const [sortField, setSortField] = useState("createdAt");
  const [sortDirection, setSortDirection] = useState("desc");
  const [filters, setFilters] = useState({
    search: "",
    minAmount: "",
    maxAmount: "",
    startDate: "",
    endDate: "",
  });

  useEffect(() => {
     setTransactions(initialTransactions || []);
  }, [initialTransactions]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const toggleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("desc");
    }
  };

  const filteredAndSortedTransactions = useMemo(() => {
 

    try {
      const filtered = transactions.filter((transaction) => {
        const searchLower = filters.search.toLowerCase();
        const matchesSearch =
          transaction.user.name.toLowerCase().includes(searchLower) ||
          transaction.turf.name.toLowerCase().includes(searchLower) ||
          transaction.payment.orderId.toLowerCase().includes(searchLower) ||
          transaction.payment.paymentId.toLowerCase().includes(searchLower);

        const withinPriceRange =
          (!filters.minAmount ||
            transaction.totalPrice >= Number(filters.minAmount)) &&
          (!filters.maxAmount ||
            transaction.totalPrice <= Number(filters.maxAmount));

        const withinDateRange =
          (!filters.startDate ||
            new Date(transaction.createdAt) >= new Date(filters.startDate)) &&
          (!filters.endDate ||
            new Date(transaction.createdAt) <= new Date(filters.endDate));

        return matchesSearch && withinPriceRange && withinDateRange;
      });

      const sorted = [...filtered].sort((a, b) => {
        if (sortField === "createdAt") {
          return sortDirection === "asc"
            ? new Date(a.createdAt) - new Date(b.createdAt)
            : new Date(b.createdAt) - new Date(a.createdAt);
        } else if (sortField === "totalPrice") {
          return sortDirection === "asc"
            ? a.totalPrice - b.totalPrice
            : b.totalPrice - a.totalPrice;
        }
        return 0;
      });

       return sorted;
    } catch (error) {
      console.error("Error in filtering and sorting:", error);
      return [];
    }
  }, [transactions, filters, sortField, sortDirection]);

  return {
    filters,
    sortField,
    sortDirection,
    filteredAndSortedTransactions,
    handleFilterChange,
    toggleSort,
  };
};

export default useTransactionManagement;

```

# client\owner\src\hooks\admin\useTurf.jsx

```jsx
import { useEffect, useState } from "react";
import axiosInstance from "../useAxiosInstance";
 
const useTurfData = () => {
  const [turfData, setTurfData] = useState(null);
  const [loading, setLoading] = useState(true);


 
  const fetchTurfData = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(
        `/api/admin/turfs/all`
      );
      const result = await response.data;
       setTurfData(result.turfs);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTurfData();
  }, []);

  return { turfData, loading };
};

export default useTurfData;

```

# client\owner\src\hooks\admin\useTurfData.jsx

```jsx
import { useEffect, useState } from "react";
import axiosInstance from "../useAxiosInstance";
import { useParams } from "react-router-dom";

const useTurfData = () => {
  const [turfData, setTurfData] = useState(null);
  const [loading, setLoading] = useState(true);

  const { ownerId } = useParams();


  const fetchTurfData = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(
        `/api/admin/owners/${ownerId}/turf`
      );
      const result = await response.data;
      setTurfData(result.turfs);
     } catch (err) {
      console.log(err);
    }finally{
        setLoading(false);
    }
  };

  useEffect(() => {
    fetchTurfData();
  }, []);

  return { turfData, loading };
};

export default useTurfData;

```

# client\owner\src\hooks\admin\useUsers.jsx

```jsx
import { useState, useEffect, useCallback } from "react";
import axiosInstance from "../useAxiosInstance";

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchUsers = async () => {
    try {
      // Replace this with your actual API call
      const response = await axiosInstance.get("/api/admin/users/all");
      const result = await response.data;
      setUsers(result.users);
      setFilteredUsers(result.users);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSearch = useCallback(
    (term) => {
      setSearchTerm(term);
      const filtered = users.filter(
        (user) =>
          user.name.toLowerCase().includes(term.toLowerCase()) ||
          user.email.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredUsers(filtered);
    },
    [users]
  );

  return { users: filteredUsers, loading, searchTerm, handleSearch };
};

export default useUsers;

```

# client\owner\src\hooks\owner\index.jsx

```jsx
export { default as useAddTurf } from "./useAddTurf";
export { default as useTurfManagement } from "./useTurfManagement";

export { default as useEditTurfForm } from "./useEditTurfForm";

export { default as useOwnerReviews } from "./useOwnerReviews";

export { default as useOwnerBookings } from "./useOwnerBookings";

export { default as useOwnerDashboard } from "./useOwnerDashboard";

```

# client\owner\src\hooks\owner\useAddTurf.jsx

```jsx
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { format } from "date-fns";
import toast from "react-hot-toast";
import axiosInstance from "../useAxiosInstance";
import { useNavigate } from "react-router-dom";

const addTurfSchema = yup.object().shape({
  name: yup
    .string()
    .required("Enter the name of the turf")
    .min(3, "Name must be at least 3 characters long"),
  description: yup
    .string()
    .required("Enter the description of the turf")
    .min(3, "Description must be at least 3 characters long"),
  location: yup
    .string()
    .required("Enter the location of the turf")
    .min(3, "Location must be at least 3 characters long"),
  pricePerHour: yup
    .number()
    .required("Enter the price per hour of the turf")
    .min(500, "Price per hour must be at least 500 rupees")
    .max(3000, "Price per hour must be at most 3000 rupees"),
  image: yup
    .mixed()
    .test(
      "image",
      "Please upload a valid image (PNG, JPEG, or WebP)",
      function (value) {
        if (!value || !value[0]) return false;
        const file = value[0];
        const acceptedFormats = ["image/png", "image/jpeg", "image/webp"];
        return acceptedFormats.includes(file.type);
      }
    ),
  openTime: yup.date().required("Open time is required"),
  closeTime: yup
    .date()
    .required("Close time is required")
    .min(yup.ref("openTime"), "Close time must be after open time"),
  sportTypes: yup
    .array()
    .of(yup.string())
    .min(1, "At least one sport type is required"),
});

export default function useAddTurf() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(addTurfSchema),
    defaultValues: {
      sportTypes: [],
      openTime: null,
      closeTime: null,
    },
  });

  const [sportTypes, setSportTypes] = useState([]);
  const [newSportType, setNewSportType] = useState("");
  const openTime = watch("openTime");

  useEffect(() => {
    setValue("sportTypes", sportTypes);
  }, [sportTypes, setValue]);

  const addSportType = () => {
    if (newSportType && !sportTypes.includes(newSportType)) {
      setSportTypes([...sportTypes, newSportType]);
      setNewSportType("");
    }
  };

  const removeSportType = (type) => {
    setSportTypes(sportTypes.filter((sport) => sport !== type));
  };

  const onSubmit = async (data) => {
    setLoading(true);

    const formData = new FormData();

    Object.keys(data).forEach((key) => {
      if (key === "image") {
        if (data[key] && data[key][0]) {
          formData.append(key, data[key][0]);
        }
      } else if (key === "openTime" || key === "closeTime") {
        if (data[key] instanceof Date) {
          formData.append(key, format(data[key], "hh:mm aa"));
        }
      } else if (key === "sportTypes") {
        if (Array.isArray(data[key])) {
          data[key].forEach((sport, index) => {
            formData.append(`sportTypes[${index}]`, sport);
          });
        }
      } else {
        formData.append(key, data[key]);
      }
    });

    for (let [key, value] of formData.entries()) {
     }
    try {
      const response = await axiosInstance.post(
        "/api/owner/turf/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
       const result = await response.data;
      toast.success(result.message);
      navigate("/owner/turfs");
     } catch (error) {
      if (error.response) {
        toast.error(error.response?.data?.message);
      } else if (error.request) {
        toast.error("No response from server. Please try again later.");
      } else {
        toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    control,
    setValue,
    onSubmit,
    sportTypes,
    newSportType,
    setNewSportType,
    addSportType,
    removeSportType,
    openTime,
    loading,
  };
}

```

# client\owner\src\hooks\owner\useBillGeneration.jsx

```jsx
// client/owner/src/hooks/owner/useBillGeneration.jsx
import { useState } from 'react';
import axiosInstance from '../useAxiosInstance';

const useBillGeneration = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateBill = async (bookingId) => {
    setLoading(true);
    try {
      const response = await axiosInstance.post(`/api/owner/bills/generate/${bookingId}`);
      const bill = response.data;
      return bill;
    } catch (err) {
      setError(err.response?.data?.message || 'Error generating bill');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const previewBill = async (bookingId) => {
    try {
      const response = await axiosInstance.get(`/api/owner/bills/preview/${bookingId}`);
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || 'Error previewing bill');
      throw err;
    }
  };

  return {
    generateBill,
    previewBill,
    loading,
    error
  };
};

export default useBillGeneration;
```

# client\owner\src\hooks\owner\useBookingManagement.jsx

```jsx
// src/hooks/owner/useBookingManagement.jsx
import { useState, useCallback } from 'react';
import axiosInstance from '../useAxiosInstance';

const useBookingManagement = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleReschedule = useCallback(async (bookingId, newSchedule) => {
    setLoading(true);
    try {
      await axiosInstance.put(`/api/owner/bookings/reschedule/${bookingId}`, newSchedule);
      setLoading(false);
      return true;
    } catch (err) {
      setError(err.response?.data?.message || 'Error rescheduling booking');
      setLoading(false);
      return false;
    }
  }, []);

  const handleCancel = useCallback(async (bookingId, cancellationDetails) => {
    setLoading(true);
    try {
      await axiosInstance.put(`/api/owner/bookings/cancel/${bookingId}`, cancellationDetails);
      setLoading(false);
      return true;
    } catch (err) {
      setError(err.response?.data?.message || 'Error cancelling booking');
      setLoading(false);
      return false;
    }
  }, []);

  return {
    loading,
    error,
    handleReschedule,
    handleCancel
  };
};

export default useBookingManagement;
```

# client\owner\src\hooks\owner\useEditTurfForm.jsx

```jsx
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { format, parse } from "date-fns";

export const useEditTurfForm = (initialValues) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Turf name is required"),
    description: Yup.string().required("Description is required"),
    pricePerHour: Yup.number()
      .required("Price per hour is required")
      .positive("Price per hour must be a positive number"),
    location: Yup.string().required("Location is required"),
    sportsType: Yup.string().required("Sports type is required"),
    openTime: Yup.string().required("Open time is required"),
    closeTime: Yup.string()
      .required("Close time is required")
      .test(
        "closeTimeAfterOpenTime",
        "Close time must be after open time",
        (closeTime, context) => {
          const openTime = context.parent.openTime;
          return closeTime
            ? new Date(`1970-01-01 ${closeTime}`) >
                new Date(`1970-01-01 ${openTime}`)
            : true;
        }
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      ...initialValues,
      openTime: initialValues?.openTime
        ? format(parse(initialValues.openTime, "HH:mm", new Date()), "hh:mm a")
        : "",
      closeTime: initialValues?.closeTime
        ? format(parse(initialValues.closeTime, "HH:mm", new Date()), "hh:mm a")
        : "",
    },
  });

  const onSubmit = (data) => {
    return {
      ...data,
      openTime: data.openTime,
      closeTime: data.closeTime,
    };
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    reset,
    setValue,
  };
};

export default useEditTurfForm;
```

# client\owner\src\hooks\owner\useOwnerBookings.jsx

```jsx
import { useState, useEffect, useMemo } from "react";
import axiosInstance from "../useAxiosInstance";

const useOwnerBookings = () => {
  const [allBookings, setAllBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterDays, setFilterDays] = useState(30);
  const [sortConfig, setSortConfig] = useState(null);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get("/api/owner/bookings");
      const result = response.data;
      setAllBookings(result);
      setLoading(false);
    } catch (err) {
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("Failed to fetch bookings");
      }
      setLoading(false);
    }
  };

  const filteredBookings = useMemo(() => {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - filterDays);
    return allBookings.filter(
      (booking) => new Date(booking.bookingDate) >= cutoffDate
    );
  }, [allBookings, filterDays]);

  const sortedBookings = useMemo(() => {
    let sortableBookings = [...filteredBookings];
    if (sortConfig !== null) {
      sortableBookings.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableBookings;
  }, [filteredBookings, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return {
    bookings: sortedBookings,
    loading,
    error,
    filterDays,
    setFilterDays,
    sortConfig,
    requestSort,
  };
};

export default useOwnerBookings;

```

# client\owner\src\hooks\owner\useOwnerDashboard.jsx

```jsx
import { useState, useEffect } from "react";
import axiosInstance from "../useAxiosInstance";

const useOwnerDashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    totalBookings: 0,
    totalReviews: 0,
    totalRevenue: 0,
    totalTurfs: 0,
    bookingsPerTurf: [],
    revenueOverTime: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get("/api/owner/dashboard");
         setDashboardData(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
        setError("Failed to fetch dashboard data");
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  return { dashboardData, loading, error };
};

export default useOwnerDashboard;

```

# client\owner\src\hooks\owner\useOwnerReviews.jsx

```jsx
import { useState, useEffect } from "react";
import axiosInstance from "../useAxiosInstance";

const useOwnerReviews = () => {
  const [turfs, setTurfs] = useState([]);
  const [selectedTurf, setSelectedTurf] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTurfs();
  }, []);

  const fetchTurfs = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get("/api/owner/reviews/turfs-with-reviews");
      setTurfs(response.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch turfs and reviews");
      setLoading(false);
    }
  };

  return { turfs, selectedTurf, setSelectedTurf, loading, error };
};

export default useOwnerReviews;

```

# client\owner\src\hooks\owner\useRecommendations.jsx

```jsx
// client/owner/src/hooks/owner/useRecommendations.jsx
import { useState, useEffect } from 'react';
import axiosInstance from '../useAxiosInstance';

const useRecommendations = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRecommendations = async (userId) => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(`/api/owner/analytics/recommendations/${userId}`);
      setRecommendations(response.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Error fetching recommendations');
    } finally {
      setLoading(false);
    }
  };

  const generatePersonalizedRecommendations = async (userData) => {
    try {
      const response = await axiosInstance.post('/api/owner/analytics/recommendations/generate', userData);
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || 'Error generating recommendations');
      throw err;
    }
  };

  return {
    recommendations,
    loading,
    error,
    fetchRecommendations,
    generatePersonalizedRecommendations
  };
};

export default useRecommendations;
```

# client\owner\src\hooks\owner\useTurfManagement.jsx

```jsx
import { useState } from "react";
import axiosInstance from "../useAxiosInstance";

const useTurfManagement = () => {
  const [turfs, setTurfs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTurfs = async () => {
    setIsLoading(true);
    try {
      // Replace this with your actual API call
      const response = await axiosInstance.get("/api/owner/turf/all");
      const result = await response.data;
      setTurfs(result);
    } catch (err) {
      setError("Failed to fetch turfs");
    } finally {
      setIsLoading(false);
    }
  };

  const addTurf = async (newTurf) => {
    try {
      // Replace this with your actual API call
      const response = await fetch("/api/turfs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTurf),
      });
      const addedTurf = await response.json();
      setTurfs((prev) => [...prev, addedTurf]);
    } catch (err) {
      setError("Failed to add turf");
    }
  };

  const editTurf = async (updatedTurf, turfId) => {
    try {
      const response = await axiosInstance.put(
        `/api/owner/turf/${turfId}`,
        updatedTurf
      );
      const result = await response.data;
      setTurfs(result.allTurfs);
    } catch (error) {
      console.log(error, "error in edit turf");
    }
  };

  const deleteTurf = async (id) => {
    try {
      // Replace this with your actual API call
      await fetch(`/api/turfs/${id}`, { method: "DELETE" });
      setTurfs((prev) => prev.filter((turf) => turf.id !== id));
    } catch (err) {
      setError("Failed to delete turf");
    }
  };

  return {
    turfs,
    isLoading,
    error,
    fetchTurfs,
    addTurf,
    editTurf,
    deleteTurf,
  };
};

export default useTurfManagement;

```

# client\owner\src\hooks\useAxiosInstance.js

```js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});


axiosInstance.interceptors.request.use((config) => {
  let token = null;
  try {
    const persistedUser = localStorage.getItem("persist:root");
    if (persistedUser) {
      const parsedUser = JSON.parse(persistedUser);
      if (parsedUser.auth) {
        const parsedAuth = JSON.parse(parsedUser.auth);
        token = parsedAuth.token;
      }
    }
  } catch (error) {
    console.error("Error parsing persisted user data:", error);
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }  

  return config;
});

export default axiosInstance;


 
```

# client\owner\src\hooks\useLoginForm.jsx

```jsx
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import axiosInstance from "./useAxiosInstance";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import {login} from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Enter your email")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/gm,
      "Enter a valid email"
    ),
  password: yup
    .string()
    .required("Enter your password")
    .min(6, "Password must be at least 6 characters long"),
});

const useLoginForm = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
   setLoading(true);
    try {
      const response = await axiosInstance.post("api/owner/auth/login", data);
      const result = await response.data;
      dispatch(login({token:result.token,role:result.role}));
      if(result.role === "owner") {
        navigate("/owner");
      }else if(result.role === "admin") {
        navigate("/admin");
      }
       axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${result.token}`;
      toast.success(result.message);      
    } catch (error) {
      console.error(error, "error");
      if(error.response) {
        toast.error(error.response?.data?.message);
      } else if(error.request) {
        toast.error("No response from server. Please try again later.");
      } else {
        toast.error(error.message);
      }
    }finally{
      setLoading(false);
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    loading,
  };
};

export default useLoginForm;

```

# client\owner\src\hooks\useRefundManagement.js

```js
import { useState } from 'react';
import axiosInstance from '../useAxiosInstance';
import toast from 'react-hot-toast';

export const useRefundManagement = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const processRefund = async (bookingId, refundData) => {
    setLoading(true);
    try {
      const response = await axiosInstance.post(
        `/api/owner/bookings/${bookingId}/refund`,
        refundData
      );
      
      toast.success('Refund processed successfully');
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || 'Error processing refund');
      toast.error('Error processing refund');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const calculateRefundAmount = (booking, cancellationTime) => {
    const bookingTime = new Date(booking.bookingDate);
    const timeDifference = bookingTime - cancellationTime;
    const hoursDifference = timeDifference / (1000 * 60 * 60);

    if (hoursDifference >= 24) {
      return booking.amount; // Full refund
    } else if (hoursDifference >= 12) {
      return booking.amount * 0.5; // 50% refund
    }
    return 0; // No refund
  };

  return {
    loading,
    error,
    processRefund,
    calculateRefundAmount,
  };
};
```

# client\owner\src\hooks\useSignUpForm.jsx

```jsx
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import axiosInstance from "./useAxiosInstance";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/slices/authSlice";
 
const registerSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .required("Enter your email")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/gm,
      "Enter a valid email"
    ),
  phone: yup
    .string()
    .required("Enter your phone number")
    .matches(/^[0-9]{10}$/, "Enter a valid 10-digit phone number")
    .min(10, "Phone number must be at least 10 digits long")
    .max(10, "Phone number must be at most 10 digits long"),

  password: yup
    .string()
    .required("Enter your password")
    .min(6, "Password must be at least 6 characters long"),
  confirmPassword: yup
    .string()
    .required("Enter your password")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const useSignUpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);



  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (data) => {
     setLoading(true);
    try {
      const response = await axiosInstance.post(
        "/api/owner/auth/register",
        data
      );
      const result = await response.data;
        dispatch(login({ token: result.token, role: result.role }));
        if (result.role === "owner") {
          navigate("/owner");
        } else if (result.role === "admin") {
          navigate("/admin");
        }
        
    } catch (error){
       if (error.response) {
        // Server responded with a status other than 200 range
        toast.error(
          `${error.response.data.message || "Registration failed"}`
        );
      } else if (error.request) {
        // Request was made but no response was received
        toast.error("No response from server. Please try again later.");
      } else {
        // Something else caused the error
        toast.error(`Error: ${error.message}`);
      }
    }
     finally {
      setLoading(false);
    }
  };

  return { register, handleSubmit, errors, onSubmit, loading };
};

export default useSignUpForm;

```

# client\owner\src\index.css

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: "Poppins", sans-serif;
}
```

# client\owner\src\layouts\AdminLayout.jsx

```jsx
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { AdminSidebar, AuthenticatedNavbar } from "@components/layout";

const AdminLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex flex-col min-h-screen">
      <AuthenticatedNavbar toggleSidebar={toggleSidebar} />
      <div className="flex flex-1 pt-16">
        <AdminSidebar
          isOpen={isOpen}
          toggleSidebar={toggleSidebar}
          className={`
            ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          `}
        />
        <main
          className={`
          flex-1 
          overflow-x-hidden 
          overflow-y-auto 
          p-4 
          transition-all 
          duration-300 
          ease-in-out
          ${isOpen ? "lg:ml-64" : "ml-0"}
        `}
        >
          <div className="container mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;

```

# client\owner\src\layouts\GuestLayout.jsx

```jsx
import { Outlet } from "react-router-dom";
import PublicNavbar from "../components/layout/GuestNavbar";

const PublicLayout = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <PublicNavbar />
      <main className="flex-grow pt-16 ">
        <Outlet />
      </main>
    </div>
  );
};

export default PublicLayout;

```

# client\owner\src\layouts\index.jsx

```jsx
export { default as AdminLayout } from "./AdminLayout";
export { default as OwnerLayout } from "./OwnerLayout";
export { default as GuestLayout } from "./GuestLayout";
```

# client\owner\src\layouts\OwnerLayout.jsx

```jsx
import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import { OwnerSidebar, AuthenticatedNavbar } from "@components/layout";

const OwnerLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex flex-col min-h-screen">
      <AuthenticatedNavbar toggleSidebar={toggleSidebar} />
      <div className="flex flex-1 pt-16">
        <OwnerSidebar
          isOpen={isOpen}
          toggleSidebar={toggleSidebar}
          className={`${
            isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}
        />
        <main
          className={`
          flex-1 
          overflow-x-hidden 
          overflow-y-auto 
          p-4 
          transition-all 
          duration-300 
          ease-in-out
          ${isOpen ? "lg:ml-64" : "ml-0"}
        `}
        >
          <div className="container mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default OwnerLayout;

```

# client\owner\src\main.jsx

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        <Toaster position="bottom-center" duration={500} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

```

# client\owner\src\pages\Home.jsx

```jsx
import { Link } from "react-router-dom";
import { Carousel, Footer } from "@components/common";
import { 
  ArrowRight, 
  BarChart3, 
  Users, 
  Calendar, 
  Settings,
  Layout,
  MessageSquare,
  ClipboardList,
  TrendingUp
} from 'lucide-react';
import banner1 from "/banner-1.png";
import banner2 from "/banner-2.jpeg";
import banner3 from "/banner-3.jpeg";

const Home = () => {
  const slides = [banner1, banner2, banner3];

  const features = [
    {
      icon: <Layout className="w-8 h-8" />,
      title: "Dashboard Overview",
      description: "Comprehensive view of bookings, revenue, and user analytics"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "User Management",
      description: "Efficiently manage users, permissions and roles"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Booking Management",
      description: "Handle reservations and scheduling with ease"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "System Controls",
      description: "Complete control over platform settings"
    }
  ];

  const stats = [
    { 
      number: "₹1K+", 
      label: "Revenue Generated",
      icon: <TrendingUp className="w-6 h-6 text-primary" />
    },
    { 
      number: "1000+", 
      label: "Active Bookings",
      icon: <ClipboardList className="w-6 h-6 text-primary" />
    },
    { 
      number: "10+", 
      label: "Registered Turfs",
      icon: <BarChart3 className="w-6 h-6 text-primary" />
    },
    { 
      number: "24/7", 
      label: "Support Access",
      icon: <MessageSquare className="w-6 h-6 text-primary" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-300">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:32px_32px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row-reverse items-center py-20 lg:py-32 gap-16">
            {/* Dashboard Preview */}
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-30"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Carousel slides={slides} />
                </div>
              </div>
            </div>

            {/* Hero Content */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="space-y-4">
                <span className="bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium">
                  Management Dashboard
                </span>
                <h1 className="text-5xl lg:text-6xl font-bold">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    RiField Admin
                  </span>
                  <br />
                  <span className="text-base-content">
                    Control Center
                  </span>
                </h1>
                <p className="text-xl text-base-content/70">
                  Comprehensive management platform for turf administrators. 
                  Monitor, analyze, and control all aspects of your turf business.
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <Link
                    to="/login"
                    className="btn btn-primary btn-lg group gap-2"
                  >
                    Access Dashboard
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-base-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-base-200/50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-base-content/70 font-medium mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative bg-gradient-to-b from-base-200 to-base-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold">Management Features</h2>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              Powerful tools for efficient turf management
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-base-100 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-base-content/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-gradient-to-r from-primary to-accent text-primary-content">
        <div className="absolute inset-0 bg-grid-slate-100/[0.04] bg-[size:32px_32px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <div className="text-center space-y-8">
            <h2 className="text-4xl font-bold">Ready to Manage?</h2>
            <p className="text-xl max-w-2xl mx-auto text-primary-content/90">
              Access your management dashboard and take control of your turf business.
            </p>
            <Link
              to="/login"
              className="btn btn-secondary btn-lg hover:scale-105 transform transition inline-flex items-center gap-2"
            >
              Login to Dashboard
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
```

# client\owner\src\pages\Login.jsx

```jsx
import useLoginForm from "@hooks/useLoginForm";
import { Link } from "react-router-dom";
import { Button, FormField } from "@components/common";
import { Lock, Mail, ArrowRight, Shield } from 'lucide-react';

const Login = () => {
  const { register, handleSubmit, errors, onSubmit, loading } = useLoginForm();

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-300">
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:32px_32px]" />
      
      <div className="relative container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-center gap-12 min-h-screen">
        {/* Left Side - Info */}
        <div className="w-full lg:w-1/2 max-w-md space-y-6 text-center lg:text-left">
          <div className="space-y-4">
            <span className="bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium">
              Admin Control Panel
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Welcome Back
              </span>
            </h1>
            <p className="text-base-content/70 text-lg">
              Access your management dashboard to control and monitor your turf business
            </p>
          </div>

          {/* Security Info */}
          <div className="bg-base-100 p-6 rounded-2xl shadow-lg space-y-4">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-primary" />
              <div>
                <h3 className="font-semibold text-lg">Secure Admin Access</h3>
                <p className="text-base-content/70">Enhanced security for administrative control</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full lg:w-1/2 max-w-md">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-20"></div>
            <div className="relative bg-base-100 shadow-xl rounded-2xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold">Admin Login</h2>
                <p className="text-base-content/70 mt-2">
                  Enter your credentials to access the dashboard
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-4">
                  <FormField
                    label="Email Address"
                    name="email"
                    type="email"
                    register={register}
                    error={errors.email}
                    icon={<Mail className="w-5 h-5 text-base-content/50" />}
                    className="input-bordered focus:input-primary transition-colors"
                  />
                  <FormField
                    label="Password"
                    name="password"
                    type="password"
                    register={register}
                    error={errors.password}
                    icon={<Lock className="w-5 h-5 text-base-content/50" />}
                    className="input-bordered focus:input-primary transition-colors"
                  />
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="checkbox checkbox-primary checkbox-sm" />
                    <span className="text-base-content/70">Remember me</span>
                  </label>
                  <Link to="/forgot-password" className="text-primary hover:text-primary-focus transition-colors">
                    Forgot Password?
                  </Link>
                </div>

                <Button 
                  type="submit" 
                  className="btn-primary w-full group"
                  loading={loading}
                >
                  {loading ? (
                    "Signing in..."
                  ) : (
                    <>
                      Sign In to Dashboard
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-8 text-center">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-base-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-base-100 text-base-content/70">
                      Need an admin account?
                    </span>
                  </div>
                </div>
                
                <Link 
                  to="/signup"
                  className="inline-flex items-center justify-center gap-2 mt-4 text-primary hover:text-primary-focus transition-colors font-medium group"
                >
                  Register as Administrator
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-6 text-sm text-base-content/70">
            For technical support, contact
            <Link to="/support" className="text-primary hover:text-primary-focus ml-1">
              IT Support Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
```

# client\owner\src\pages\SignUp.jsx

```jsx
import { Link } from "react-router-dom";
import useSignUpForm from "@hooks/useSignUpForm";
import { Button, FormField } from "@components/common";
import { User, Mail, Lock, Phone, ArrowRight, Shield, Settings } from 'lucide-react';

const SignUp = () => {
  const { register, handleSubmit, errors, onSubmit, loading } = useSignUpForm();

  const adminFeatures = [
    "Full dashboard access",
    "User management controls",
    "Analytics & reporting",
    "System configuration"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-300">
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:32px_32px]" />
      
      <div className="relative container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-center gap-12 min-h-screen">
        {/* Left Section - Info */}
        <div className="w-full lg:w-1/2 max-w-md space-y-6 text-center lg:text-left">
          <div className="space-y-4">
            <span className="bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium">
              Administrator Registration
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Join RiField
              </span>
              <br />
              <span className="text-base-content">
                Management Team
              </span>
            </h1>
            <p className="text-base-content/70 text-lg">
              Create your administrator account to access the management dashboard
            </p>
          </div>

          {/* Admin Features */}
          <div className="space-y-4 bg-base-100 p-6 rounded-2xl shadow-lg">
            <h3 className="font-semibold text-xl flex items-center gap-2">
              <Settings className="w-5 h-5 text-primary" />
              Admin Privileges
            </h3>
            <ul className="space-y-3">
              {adminFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-base-content/70">
                  <Shield className="w-5 h-5 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Section - Sign Up Form */}
        <div className="w-full lg:w-1/2 max-w-xl">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-20"></div>
            <div className="relative bg-base-100 shadow-xl rounded-2xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold">Create Admin Account</h2>
                <p className="text-base-content/70 mt-2">
                  Fill in your details to register as an administrator
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <FormField
                    label="Full Name"
                    name="name"
                    type="text"
                    register={register}
                    error={errors.name}
                    icon={<User className="w-5 h-5 text-base-content/50" />}
                    className="input-bordered focus:input-primary transition-colors"
                  />
                  <FormField
                    label="Phone Number"
                    name="phone"
                    type="text"
                    register={register}
                    error={errors.phone}
                    icon={<Phone className="w-5 h-5 text-base-content/50" />}
                    className="input-bordered focus:input-primary transition-colors"
                  />
                </div>

                <FormField
                  label="Email Address"
                  name="email"
                  type="email"
                  register={register}
                  error={errors.email}
                  icon={<Mail className="w-5 h-5 text-base-content/50" />}
                  className="input-bordered focus:input-primary transition-colors"
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <FormField
                    label="Password"
                    name="password"
                    type="password"
                    register={register}
                    error={errors.password}
                    icon={<Lock className="w-5 h-5 text-base-content/50" />}
                    className="input-bordered focus:input-primary transition-colors"
                  />
                  <FormField
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    register={register}
                    error={errors.confirmPassword}
                    icon={<Lock className="w-5 h-5 text-base-content/50" />}
                    className="input-bordered focus:input-primary transition-colors"
                  />
                </div>

                <div className="space-y-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="checkbox checkbox-primary checkbox-sm" 
                      {...register('terms')}
                    />
                    <span className="text-sm text-base-content/70">
                      I agree to the{" "}
                      <Link to="/terms" className="text-primary hover:text-primary-focus">
                        Terms of Service
                      </Link>
                      {" "}and{" "}
                      <Link to="/privacy" className="text-primary hover:text-primary-focus">
                        Privacy Policy
                      </Link>
                    </span>
                  </label>

                  <Button 
                    type="submit" 
                    className="btn-primary w-full group"
                    loading={loading}
                  >
                    {loading ? (
                      "Creating Account..."
                    ) : (
                      <>
                        Create Admin Account
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </div>
              </form>

              <div className="mt-8 text-center">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-base-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-base-100 text-base-content/70">
                      Already have an account?
                    </span>
                  </div>
                </div>
                
                <Link 
                  to="/login" 
                  className="inline-flex items-center justify-center gap-2 mt-4 text-primary hover:text-primary-focus transition-colors font-medium group"
                >
                  Sign in to Dashboard
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-6 text-sm text-base-content/70">
            Need help?{" "}
            <Link to="/support" className="text-primary hover:text-primary-focus">
              Contact IT Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
```

# client\owner\src\redux\rootReducers.js

```js
// src/redux/rootReducer.js
import { combineReducers } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import authReducer from "./slices/authSlice";
// import turfReducer from "./slices/turfSlice";

const rootReducer = combineReducers({
  theme: themeReducer,
  auth: authReducer,
  // turf: turfReducer,
});

export default rootReducer;

```

# client\owner\src\redux\slices\authSlice.js

```js
// src/redux/slices/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    role: null,
    token: null,
    isAuthenticated: false,

  },
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.role = action.payload.role;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.token = null;
      state.role = null;
      state.isAuthenticated = false;
    },
  
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

```

# client\owner\src\redux\slices\themeSlice.js

```js
import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    current: "light",
  },
  reducers: {
    setTheme: (state, action) => {
      state.current = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;

```

# client\owner\src\redux\slices\turfSlice.js

```js
import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    turfs: [],
    loading: true,
    error:null
}

const turfSlice = createSlice({
    name: "turf",
    initialState,
    reducers:{
        setTurfs: (state, action) => {
            state.turfs = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
})

export const {setTurfs, setLoading, setError} = turfSlice.actions;
export default turfSlice.reducer;
```

# client\owner\src\redux\store.js

```js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducers";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["theme", "auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }),
});

export const persistor = persistStore(store);

```

# client\owner\src\router.jsx

```jsx
import { createBrowserRouter } from "react-router-dom";

// import {ProtectedRoute} from "@components/ProtectedRoute"

import Home from "@pages/Home.jsx";
import Login from "@pages/Login";
import SignUp from "@pages/SignUp";

//  all the components that are used in the layout
import { AdminLayout, OwnerLayout, GuestLayout } from "@layouts";

//  all the components that are used in the owner dashboard
import {
  AddTurf,
  OwnerDashboard,
  TurfManagement,
  OwnerReviews,
  OwnerBookings,
} from "@components/owner";

//  all the components that are used in the admin dashboard
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
import ProtectedRoute from "@components/ProtectedRoute/ProtectedRoute";

// 404 page

import { NotFound } from "@components/common";

const router = createBrowserRouter([
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
  {
    path: "/admin",
    element: (
      <ProtectedRoute requiredRole="admin">
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <AdminDashboard /> },
      {
        path: "owner-requests",
        children: [
          { path: "new", element: <NewOwnerRequests /> },
          { path: "rejected", element: <RejectedOwnerRequests /> },
        ],
      },
      { path: "users", element: <UserManagement /> },
      {
        path: "owners",
        children: [
          { path: "", element: <OwnerViewer /> },
          { path: ":ownerId/turf", element: <TurfList /> },
        ],
      },

      { path: "turfs", element: <AllTurf /> },
      { path: "transactions", element: <TransactionSection /> },
    ],
  },
  {
    path: "/owner",
    element: (
      <ProtectedRoute requiredRole="owner">
        <OwnerLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: "", element: <OwnerDashboard /> },
      { path: "add-turf", element: <AddTurf /> },
      { path: "turfs", element: <TurfManagement /> },
      { path: "reviews", element: <OwnerReviews /> },
      { path: "bookings", element: <OwnerBookings /> },
    ],
  },
]);

export default router;

```

# client\owner\tailwind.config.js

```js
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#22c55e",
        "primary-focus": "#16a34a",
      },
      backgroundImage: {
        banner: "url('/r.png')",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    rtl: false,
    prefix: "",
    logs: true,
  },
};

```

# client\owner\vercel.json

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}

```

# client\owner\vite.config.js

```js
// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@redux": path.resolve(__dirname, "./src/redux"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@layouts": path.resolve(__dirname, "./src/layouts")
    },
  },
});

```

# client\user\.eslintrc.cjs

```cjs
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/prop-types": "off",
  },
};

```

# client\user\.gitignore

```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

```

# client\user\index.html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>RiField</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

```

# client\user\package.json

```json
{
  "name": "user",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite --host",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.9.0",
    "@midudev/tailwind-animations": "^0.0.7",
    "@reduxjs/toolkit": "^2.2.6",
    "axios": "^1.7.2",
    "date-fns": "^3.6.0",
    "gsap": "^3.12.5",
    "lucide-react": "^0.414.0",
    "react": "^18.3.1",
    "react-datepicker": "^7.3.0",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.52.1",
    "react-hot-toast": "^2.4.1",
    "react-redux": "^9.1.2",
    "react-router-dom": "^6.25.1",
    "redux-persist": "^6.0.0",
    "yup": "^1.4.0"
  },
  "devDependencies": {
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.19",
    "daisyui": "^4.12.10",
    "eslint": "^8.57.0",
    "eslint-plugin-react": "^7.34.3",
    "eslint-plugin-react-hooks": "^4.6.2",
    "eslint-plugin-react-refresh": "^0.4.7",
    "postcss": "^8.4.40",
    "tailwindcss": "^3.4.6",
    "vite": "^5.3.4"
  }
}

```

# client\user\postcss.config.js

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

```

# client\user\project-structure.txt

```txt
��c l i e n t /  
 % % %  u s e r /  
         % % %  p u b l i c /  
         %      % % %  f a v i c o n . i c o  
         %      % % %  l o g o 1 9 2 . p n g  
         %      % % %  l o g o 5 1 2 . p n g  
         %      % % %  m a n i f e s t . j s o n  
         %      % % %  r o b o t s . t x t  
         % 
         % % %  s r c /  
         %      % % %  A p p . j s x  
         %      % % %  i n d e x . c s s  
         %      % % %  m a i n . j s x  
         %      % % %  p r o j e c t - s t r u c t u r e . t x t  
         %      % % %  r o u t e r . j s x  
         %      % 
         %      % % %  c o m p o n e n t s /  
         %      %      % % %  a u t h /  
         %      %      %      % % %  A u t h N a v b a r . j s x  
         %      %      % 
         %      %      % % %  c o m m o n /  
         %      %      %      % % %  B u t t o n . j s x  
         %      %      %      % % %  C a r o u s e l . j s x  
         %      %      %      % % %  F o r m F i e l d . j s x  
         %      %      %      % % %  N o t F o u n d . j s x  
         %      %      %      % % %  T h e m e S w i t c h e r . j s x  
         %      %      % 
         %      %      % % %  l a y o u t /  
         %      %      %      % % %  F o o t e r . j s x  
         %      %      %      % % %  N a v b a r . j s x  
         %      %      % 
         %      %      % % %  R e s e r v a t i o n /  
         %      %      %      % % %  D a t e S e l e c t i o n . j s x  
         %      %      %      % % %  D u r a t i o n S e l e c t i o n . j s x  
         %      %      %      % % %  i n d e x . j s x  
         %      %      %      % % %  R e s e r v a t i o n S u m m a r y . j s x  
         %      %      %      % % %  T i m e S e l e c t i o n . j s x  
         %      %      % 
         %      %      % % %  r e v i e w s /  
         %      %      %      % % %  R e v i e w s . j s x  
         %      %      %      % % %  W r i t e R e v i e w . j s x  
         %      %      % 
         %      %      % % %  s e a r c h /  
         %      %      %      % % %  S e a r c h T u r f . j s x  
         %      %      % 
         %      %      % % %  t u r f /  
         %      %      %      % % %  T u r f . j s x  
         %      %      %      % % %  T u r f B o o k i n g H i s t o r y . j s x  
         %      %      %      % % %  T u r f C a r d . j s x  
         %      %      %      % % %  T u r f D e t a i l s . j s x  
         %      %      % 
         %      %      % % %  u i /  
         %      %              % % %  R e s e r v a t i o n S k e l e t o n . j s x  
         %      %              % % %  R e v i e w S k e l e t o n . j s x  
         %      %              % % %  S k e l e t o n L o a d e r . j s x  
         %      %              % % %  T u r f B o o k i n g H i s t o r y S k e l e t o n . j s x  
         %      %              % % %  T u r f C a r d S k e l e t o n . j s x  
         %      %              % % %  T u r f D e t a i l s S k e l e t o n . j s x  
         %      % 
         %      % % %  c o n f i g /  
         %      %      % % %  r a z o r p a y . j s  
         %      % 
         %      % % %  f e a t u r e s /  
         %      %      % % %  b e c o m e O w n e r /  
         %      %              % % %  B e c o m e O w n e r . j s x  
         %      % 
         %      % % %  h o o k s /  
         %      %      % % %  u s e A x i o s I n s t a n c e . j s  
         %      %      % % %  u s e B e c o m e O w n e r . j s x  
         %      %      % % %  u s e B o o k i n g C o n f i r m a t i o n . j s x  
         %      %      % % %  u s e B o o k i n g H i s t o r y . j s x  
         %      %      % % %  u s e D a t e S e l e c t i o n . j s x  
         %      %      % % %  u s e D u r a t i o n S e l e c t i o n . j s x  
         %      %      % % %  u s e L o g i n F o r m . j s x  
         %      %      % % %  u s e R e s e r v a t i o n . j s x  
         %      %      % % %  u s e R e v i e w s . j s x  
         %      %      % % %  u s e S i g n U p F o r m . j s x  
         %      %      % % %  u s e T i m e S e l e c t i o n . j s x  
         %      %      % % %  u s e T u r f D a t a . j s x  
         %      %      % % %  u s e W r i t e R e v i e w . j s x  
         %      % 
         %      % % %  l a y o u t s /  
         %      %      % % %  P r o t e c t e d L a y o u t . j s x  
         %      %      % % %  R o o t . j s x  
         %      % 
         %      % % %  p a g e s /  
         %      %      % % %  H o m e . j s x  
         %      %      % % %  a u t h /  
         %      %              % % %  L o g i n . j s x  
         %      %              % % %  S i g n U p . j s x  
         %      % 
         %      % % %  r e d u x /  
         %      %      % % %  r o o t R e d u c e r s . j s  
         %      %      % % %  s t o r e . j s  
         %      %      % % %  s l i c e s /  
         %      %              % % %  a u t h S l i c e . j s  
         %      %              % % %  t h e m e S l i c e . j s  
         %      %              % % %  t u r f S l i c e . j s  
         %      % 
         %      % % %  u t i l s /  
         %              % % %  d a t e U t i l s . j s x  
         % 
         % % %  . e s l i n t r c . c j s  
         % % %  i n d e x . h t m l  
         % % %  p a c k a g e . j s o n  
         % % %  p o s t c s s . c o n f i g . j s  
         % % %  t a i l w i n d . c o n f i g . j s  
         % % %  v e r c e l . j s o n  
         % % %  v i t e . c o n f i g . j s  
 
```

# client\user\public\banner-1.png

This is a binary file of the type: Image

# client\user\public\banner-2.jpeg

This is a binary file of the type: Image

# client\user\public\banner-3.jpeg

This is a binary file of the type: Image

# client\user\public\favicon.png

This is a binary file of the type: Image

# client\user\public\logo.png

This is a binary file of the type: Image

# client\user\README.md

```md
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

```

# client\user\src\App.jsx

```jsx
import Navbar from "./components/Navbar";

 
 export default function App() {
   return (
   <>
   <Navbar />
   </>
   );
 }
 
```

# client\user\src\components\auth\AuthNavbar.jsx

```jsx
import { Link, NavLink, useNavigate } from "react-router-dom";
import ThemeSwitcher from "../common/ThemeSwitcher.jsx";
import { logout } from "../../redux/slices/authSlice.js";
import { useDispatch } from "react-redux";

export default function AuthNavbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/", { replace: true });
  };
  return (
    <div className="navbar bg-base-100 fixed top-0 z-50 shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/auth">Home</Link>
            </li>
            <li>
              <Link to="/auth/turfs">Turfs</Link>
            </li>
            <li>
              <Link to="/auth/booking-history">My Bookings</Link>
            </li>
            <li>
              <NavLink
                to="/auth/become-owner"
                className={({ isActive }) => (isActive ? "text-accent" : "")}
              >
                Become an Owner
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to="/auth" className="btn btn-ghost normal-case text-xl">
          <img
            src="/logo.png"
            alt="RiField"
            className="h-10 w-10 mask mask-squircle"
          />
          RiField
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/auth">Home</Link>
          </li>
          <li>
            <Link to="/auth/turfs">Turfs</Link>
          </li>
          <li>
            <Link to="/auth/booking-history">My Bookings</Link>
          </li>
          <li>
            <NavLink
              to="/auth/become-owner"
              className={({ isActive }) => (isActive ? "text-accent" : "")}
            >
              Become an Owner
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <ThemeSwitcher />
        <button className="btn btn-ghost" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

```

# client\user\src\components\common\Button.jsx

```jsx
const Button = ({ children, loading, className, ...props }) => {
  return (
    <button
      className={`btn ${className} relative`}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="loading loading-spinner loading-md"></span>
        </span>
      ) : null}
      <span className={loading ? "invisible" : ""}>{children}</span>
    </button>
  );
};

export default Button;

```

# client\user\src\components\common\Carousel.jsx

```jsx
import { useState } from "react";

const Carousel = ({slides}) => {
  const [currentSlide, setCurrentSlide] = useState(0);


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide}
            className="w-full h-full object-cover"
            alt={`Turf ${index + 1}`}
          />
        </div>
      ))}
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <button onClick={prevSlide} className="btn btn-circle">
          ❮
        </button>
        <button onClick={nextSlide} className="btn btn-circle">
          ❯
        </button>
      </div>
    </div>
  );
};


export default Carousel;
```

# client\user\src\components\common\FormField.jsx

```jsx


 const FormField = ({ label, name, type, register, error }) =>
 (
  <div className="form-control">
    <label className="label">
      <span className="label-text">{label}</span>
    </label>
    <input
      type={type}
      placeholder={name}
      className="input input-bordered"
      {...register(name)}
    />
    {error && <span className="text-error text-xs">{error.message}</span>}
  </div>
);

//  const Form = ({ children }) => {
//   return <div className="form-control">{children}</div>;
// };
 
// export { FormField, Form };

export default FormField;

```

# client\user\src\components\common\NotFound.jsx

```jsx
 import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NotFound = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
   return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary">404</h1>
        <p className="text-2xl font-semibold mt-4 mb-8">Oops! Page not found</p>
        <p className="text-lg mb-8">
          The page you&#39;re looking for doesn&#39;t exist or has been moved.
        </p>
        <Link to={isLoggedIn ? "/auth": "/"} className="btn btn-primary">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

```

# client\user\src\components\common\ThemeSwitcher.jsx

```jsx
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Moon, Sun } from "lucide-react";
import { setTheme } from "../../redux/slices/themeSlice";

const ThemeSwitcher = () => {
  const theme = useSelector((state) => state.theme.current);
  const dispatch = useDispatch();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    dispatch(setTheme(newTheme));
  };

  return (
    <button className="btn btn-ghost btn-circle" onClick={toggleTheme}>
      {theme === "light" ? <Moon /> : <Sun />}
    </button>
  );
};

export default ThemeSwitcher;

```

# client\user\src\components\layout\Footer.jsx

```jsx
const Footer = () => {
  return (
    <footer className="bg-base-200 py-4 text-center">
      <p>&copy; {new Date().getFullYear()} RiField. All rights reserved.</p>
      <p>
        Developed with ❤ by{" "}
        <a
          href="https://github.com/sadhef"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Mohammed Sadhef
        </a>
      </p>
    </footer>
  );
};

export default Footer;

```

# client\user\src\components\layout\Navbar.jsx

```jsx
import { Link } from "react-router-dom";
import ThemeSwitcher from "../common/ThemeSwitcher";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 fixed top-0 z-50 shadow-md animate-slide-in-top">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/turfs">Turfs</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img
            src="/logo.png"
            alt="RiField"
            className="h-10 w-10 mask mask-squircle"
          />
          RiField
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/turfs">Turfs</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <ThemeSwitcher />
        <Link to="/login" className="btn btn-ghost">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

```

# client\user\src\components\Reservation\DateSelection.jsx

```jsx
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, addDays, isSameDay } from "date-fns";

const DateSelection = ({ selectedDate, handleDateChange }) => {
  return (
    <div className="flex flex-col space-y-4 mb-6">
      <div className="w-full">
        <label className="label">
          <span className="label-text">Select Date</span>
        </label>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd-MM-yyyy"
          minDate={new Date()}
          className="input input-bordered w-full"
        />
      </div>
      <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
        <button
          className="btn btn-outline btn-sm w-full sm:w-auto"
          onClick={() => handleDateChange(addDays(selectedDate, -1))}
          disabled={isSameDay(selectedDate, new Date())}
        >
          PREV DATE
        </button>
        <div className="badge badge-primary text-lg p-4">
          {format(selectedDate, "dd-MM-yyyy")}
        </div>
        <button
          className="btn btn-outline btn-sm w-full sm:w-auto"
          onClick={() => handleDateChange(addDays(selectedDate, 1))}
        >
          NEXT DATE
        </button>
      </div>
    </div>
  );
};

export default DateSelection;

```

# client\user\src\components\Reservation\DurationSelection.jsx

```jsx
import { getEndTime } from "../../utils/dateUtils";

const DurationSelection = ({
  selectedStartTime,
  duration,
  handleDurationChange,
  isDurationAvailable,
}) => {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-4">Select Duration</h3>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        {[1, 2, 3].map((hours) => (
          <button
            key={hours}
            className={`btn flex-1 ${
              duration === hours ? "btn-primary" : "btn-outline"
            }`}
            onClick={() => handleDurationChange(hours)}
            disabled={!isDurationAvailable(selectedStartTime, hours)}
          >
            <div>
              <div>
                {hours} hour{hours > 1 ? "s" : ""}
              </div>
              <div className="text-sm">
                {selectedStartTime} to {getEndTime(selectedStartTime, hours)}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DurationSelection;

```

# client\user\src\components\Reservation\index.jsx

```jsx
import DateSelection from "./DateSelection";
import TimeSelection from "./TimeSelection";
import DurationSelection from "./DurationSelection";
import ReservationSummary from "./ReservationSummary";
import useReservation from "../../hooks/useReservation";
import ReservationSkeleton from "../ui/ReservationSkeleton";

const Reservation = () => {
  const {
    selectedDate,
    selectedStartTime,
    duration,
    availableTimes,
    timeSlots,
    pricePerHour,
    handleDateChange,
    handleTimeSelection,
    handleDurationChange,
    isTimeSlotBooked,
    isDurationAvailable,
    confirmReservation,
    loading,
  } = useReservation();

if( loading) return <ReservationSkeleton />;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Reserve Turf</h2>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body p-4 sm:p-6">
          <DateSelection
            selectedDate={selectedDate}
            handleDateChange={handleDateChange}
          />
          <TimeSelection
            availableTimes={availableTimes}
            selectedStartTime={selectedStartTime}
            handleTimeSelection={handleTimeSelection}
            isTimeSlotBooked={isTimeSlotBooked}
            timeSlots={timeSlots}
            duration={duration}
          />
          {selectedStartTime && (
            <DurationSelection
              selectedStartTime={selectedStartTime}
              duration={duration}
              handleDurationChange={handleDurationChange}
              isDurationAvailable={isDurationAvailable}
            />
          )}
          {selectedStartTime && duration > 0 && (
            <ReservationSummary
              selectedDate={selectedDate}
              selectedStartTime={selectedStartTime}
              duration={duration}
              pricePerHour={pricePerHour}
            />
          )}
          <div className="mt-6">
            <button
              className="btn btn-primary w-full relative"
              disabled={
                !selectedStartTime ||
                !isDurationAvailable(selectedStartTime, duration) ||
                loading
              }
              onClick={confirmReservation}
            >
              {loading ? (
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="loading loading-spinner loading-md"></span>
                </span>
              ) : (
                "Confirm Reservation"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;

```

# client\user\src\components\Reservation\ReservationSummary.jsx

```jsx
import { format } from "date-fns";
import { getEndTime } from "../../utils/dateUtils";

const ReservationSummary = ({
  selectedDate,
  selectedStartTime,
  duration,
  pricePerHour,
}) => {
 
  return (
    <div className="mt-6 p-4 bg-base-200 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Your Reservation</h3>
      <p>Date: {format(selectedDate, "dd-MM-yyyy")}</p>
      <p>
        Time: {selectedStartTime} to {getEndTime(selectedStartTime, duration)}
      </p>
      <p>
        Duration: {duration} hour{duration > 1 ? "s" : ""}
      </p>
      <p className="font-bold">Price: {pricePerHour * duration} INR</p>
    </div>
  );
};

export default ReservationSummary;

```

# client\user\src\components\Reservation\TimeSelection.jsx

```jsx
import { parse, isAfter, addHours } from "date-fns";

const TimeSelection = ({
  availableTimes,
  selectedStartTime,
  handleTimeSelection,
  isTimeSlotBooked,
  timeSlots,
  duration,
}) => {
  // const isTimeSlotSelected = (time) => time === selectedStartTime;
  const isTimeSlotSelected = (time) => {
    if (!selectedStartTime || !duration) return false;
    const start = parse(selectedStartTime, "hh:mm a", new Date());
    const end = addHours(start, duration);
    const current = parse(time, "hh:mm a", new Date());
    return current >= start && current < end;
  };

  const isTimeSlotDisabled = (time) => {
    const closeTime = parse(timeSlots.closeTime, "hh:mm a", new Date());
    const currentTime = parse(time, "hh:mm a", new Date());
    return isAfter(currentTime, closeTime) || isTimeSlotBooked(time);
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Select Start Time</h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 sm:gap-4">
        {availableTimes.map((time) => (
          <button
            key={time}
            className={`btn btn-sm ${
              isTimeSlotSelected(time)
                ? "bg-blue-500 hover:bg-blue-600 text-white"
                : isTimeSlotDisabled(time)
                ? "btn-disabled"
                : "btn-ghost"
            }`}
            onClick={() => handleTimeSelection(time)}
            disabled={isTimeSlotDisabled(time)}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimeSelection;

```

# client\user\src\components\reviews\Reviews.jsx

```jsx
import  { useState } from "react";
import useReviews from "../../hooks/useReviews";
import { format } from "date-fns";
import ReviewSkeleton from "../ui/ReviewSkeleton";
import { ChevronDown } from "lucide-react";

const REVIEWS_PER_PAGE = 5;

const Reviews = ({ turfId }) => {
  const { reviews, loading } = useReviews(turfId);
  const [displayCount, setDisplayCount] = useState(REVIEWS_PER_PAGE);

  if (loading) return <ReviewSkeleton />;

  const handleLoadMore = () => {
    setDisplayCount((prevCount) => prevCount + REVIEWS_PER_PAGE);
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Reviews</h2>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        <>
          <div className="space-y-4">
            {reviews.slice(0, displayCount).map((review) => (
              <div key={review._id} className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold">
                      {review.user.name || "Anonymous"}
                    </div>
                    <div className="text-sm text-gray-500">
                      {format(new Date(review.createdAt), "MMM d, yyyy")}
                    </div>
                  </div>
                  <div className="rating rating-md">
                    {[...Array(review.rating)].map((_, i) => (
                      <input
                        key={i}
                        type="radio"
                        name={`rating-${review._id}`}
                        className="mask mask-star-2 bg-orange-400 cursor-auto"
                        readOnly
                        disabled
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 break-all">
                    {review.comment}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {displayCount < reviews.length && (
            <div className="text-center mt-6">
              <button
                className="btn btn-primary btn-outline"
                onClick={handleLoadMore}
              >
                Load More
                <ChevronDown className="ml-2 h-4 w-4" />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Reviews;

```

# client\user\src\components\reviews\WriteReview.jsx

```jsx
import { Star } from "lucide-react";
import { useState } from "react";

const WriteReview = ({
  rating,
  review,
  isSubmitting,
  onClose,
  onRatingChange,
  onReviewChange,
  onSubmit,
}) => {
  const [ratingError, setRatingError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if a rating has been selected
    if (rating === 0) {
      setRatingError(true);
      return;
    }
    setRatingError(false);
    onSubmit();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-base-100 rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Write a Review</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Rating</label>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-8 h-8 cursor-pointer ${
                    star <= rating
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                  onClick={() => onRatingChange(star)}
                />
              ))}
            </div>
            {ratingError && (
              <div className="text-red-500 text-sm mt-2">
                Please select a rating.
              </div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="review" className="block text-sm font-medium mb-2">
              Your Review
            </label>
            <textarea
              id="review"
              rows="4"
              className="textarea textarea-bordered w-full"
              value={review}
              onChange={onReviewChange}
              placeholder="Write your review here..."
              title="Please enter your review"
              
            ></textarea>
          
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              className="btn btn-ghost"
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Review"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WriteReview;

```

# client\user\src\components\search\SearchTurf.jsx

```jsx
import   { useState } from "react";

const SearchTurf = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSearch} className="flex w-full max-w-xl ml-auto mb-8 ">
      <input
        type="text"
        placeholder="Search for turfs..."
        className="input input-bordered w-full"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit" className="btn btn-primary ml-2">
        Search
      </button>
    </form>
  );
};

export default SearchTurf;

```

# client\user\src\components\turf\Turf.jsx

```jsx
import { useState } from "react";
import TurfCard from "./TurfCard.jsx";
import TurfCardSkeleton from "../ui/TurfCardSkeleton.jsx";
import useTurfData from "../../hooks/useTurfData.jsx";
import SearchTurf from "../search/SearchTurf.jsx";

const Turf = () => {
  const { turfs, loading, error } = useTurfData();
  const [filteredTurfs, setFilteredTurfs] = useState(turfs);

  const handleSearch = (searchTerm) => {
    const filtered = turfs.filter(
      (turf) =>
        turf.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        turf.sportTypes.some((sport) =>
          sport.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        turf.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTurfs(filtered);
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 ">
      <h1 className="text-3xl font-bold text-center mb-8">Discover Turfs</h1>
      <SearchTurf onSearch={handleSearch} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading
          ? Array.from({ length: 3 }).map((_, index) => (
              <TurfCardSkeleton key={`skeleton-${index}`} />
            ))
          : (filteredTurfs.length > 0 ? filteredTurfs : turfs).map((turf) => (
              <TurfCard key={turf._id} turf={turf} />
            ))}
      </div>
    </div>
  );
};

export default Turf;

```

# client\user\src\components\turf\TurfBookingHistory.jsx

```jsx
import { Clock, MapPin, IndianRupee, Calendar } from "lucide-react";
import useBookingHistory from "../../hooks/useBookingHistory";
import useWriteReview from "../../hooks/useWriteReview";
import TurfBookingHistorySkeleton from "../../components/ui/TurfBookingHistorySkeleton";
import WriteReview from "../../components/reviews/WriteReview";

const TurfBookingHistory = () => {
  const { loading, bookings } = useBookingHistory();
  const {
    isReviewModalOpen,
    rating,
    review,
    isSubmitting,
    openReviewModal,
    closeReviewModal,
    handleRatingChange,
    handleReviewChange,
    submitReview,
  } = useWriteReview();

  if (loading) {
    return <TurfBookingHistorySkeleton />;
  }

  return (
    <div className="container mx-auto p-4 bg-base-200 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">
        Your Turf Booking History
      </h1>
      <div className="space-y-6 mx-auto lg:w-1/2">
        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="card bg-base-100 shadow-xl animate-bounce-fade-in"
          >
            <div className="card-body ">
              <h2 className="card-title text-2xl mb-4">{booking.turf.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="flex items-center">
                    <MapPin className="mr-2" /> {booking.turf.location}
                  </p>
                  <p className="flex items-center">
                    <Calendar className="mr-2" /> {booking.timeSlot.date}
                  </p>
                  <p className="flex items-center">
                    <Clock className="mr-2" />{" "}
                    {booking.timeSlot.formattedStartTime} -{" "}
                    {booking.timeSlot.formattedEndTime}
                  </p>
                  <p className="flex items-center">
                    <IndianRupee className="mr-2" />
                    {booking.totalPrice}
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <img
                    src={booking.qrCode}
                    alt="Booking QR Code"
                    className="w-32 h-32 mb-2"
                  />
                  <p className="text-sm text-gray-500">Scan for details</p>
                </div>
              </div>
              <button
                className="btn btn-primary mt-4"
                onClick={() => openReviewModal(booking.turf._id)}
              >
                Write a Review
              </button>
            </div>
          </div>
        ))}
      </div>
      {isReviewModalOpen && (
        <WriteReview
          rating={rating}
          review={review}
          isSubmitting={isSubmitting}
          onClose={closeReviewModal}
          onRatingChange={handleRatingChange}
          onReviewChange={handleReviewChange}
          onSubmit={submitReview}
        />
      )}
    </div>
  );
};

export default TurfBookingHistory;

```

# client\user\src\components\turf\TurfCard.jsx

```jsx
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TurfCard = ({ turf }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <div className="card bg-base-100 shadow-xl animate-bounce-fade-in">
      <figure>
        <img
          src={turf.image}
          alt={turf.name}
          className="w-full h-48 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{turf.name}</h2>
        <div className="flex flex-wrap gap-2 mt-2">
          {turf.sportTypes.map((sport, index) => (
            <span key={index} className="badge badge-outline">
              {sport}
            </span>
          ))}
        </div>
        <p className="mt-2">
          Open: {turf.openTime} - {turf.closeTime}
        </p>
        <div className="card-actions justify-end mt-4">
          <Link
            to={isLoggedIn ? `/auth/turf/${turf._id}` : `/turf/${turf._id}`}
            className="btn btn-primary"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TurfCard;

```

# client\user\src\components\turf\TurfDetails.jsx

```jsx
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import useTurfData from "../../hooks/useTurfData";
import useReviews from "../../hooks/useReviews";
import Reviews from "../reviews/Reviews";
import TurfDetailsSkeleton from "../ui/TurfDetailsSkeleton";
import { MapPin, Clock, Activity, IndianRupee } from "lucide-react";

const TurfDetails = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const { id } = useParams();
  const navigate = useNavigate();
  const { loading, turfs } = useTurfData();
  const { averageRating } = useReviews(id);

  if (loading) {
    return <TurfDetailsSkeleton />;
  }

  const turf = turfs.find((t) => t._id === id);

  if (!turf) {
    return (
      <div className="alert alert-warning shadow-lg">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current flex-shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <span>Turf not found</span>
        </div>
      </div>
    );
  }

  const handleReservation = () => {
    if (isLoggedIn) {
      navigate(`/auth/reserve/${id}`);
    } else {
      navigate(`/login`);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-slide-in-left">
        <div className="bg-base-100 shadow-xl rounded-lg overflow-hidden">
          <div className="relative h-96">
            <img
              src={turf.image || "/banner-1.png"}
              alt={turf.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <h2 className="text-3xl font-bold text-white">{turf.name}</h2>
              <div className="flex items-center space-x-2 text-white">
                <MapPin className="w-4 h-4" />
                <p className="text-sm">{turf.location}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-base-100 shadow-xl rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <h3 className="text-2xl font-bold">Rating</h3>
            <div className="rating rating-md">
              {averageRating ? (
                [1, 2, 3, 4, 5].map((star) => (
                  <input
                    key={star}
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked={star === Math.round(averageRating)}
                    readOnly
                  />
                ))
              ) : (
                <p className="text-sm opacity-70">No reviews yet</p>
              )}
            </div>
            {averageRating && (
              <span className="text-lg">({averageRating.toFixed(1)})</span>
            )}
          </div>
          <p className="text-lg mb-6">{turf.description}</p>
          <div className="grid grid-cols-2 gap-6 mb-6">
            <InfoItem
              icon={<IndianRupee />}
              label="Price per Hour"
              value={`₹ ${turf.pricePerHour}`}
            />
            <InfoItem
              icon={<Activity />}
              label="Sports"
              value={turf.sportTypes.join(", ")}
            />
            <InfoItem
              icon={<Clock />}
              label="Open Time"
              value={turf.openTime}
            />
            <InfoItem
              icon={<Clock />}
              label="Close Time"
              value={turf.closeTime}
            />
          </div>
          <div className="card-actions">
            <button
              className="btn btn-primary btn-lg w-full"
              onClick={handleReservation}
            >
              Reserve Now
            </button>
          </div>
        </div>
      </div>
      <div className="mt-12">
         <Reviews turfId={id} />
      </div>
    </div>
  );
};

const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-center space-x-3">
    <div className="bg-primary bg-opacity-10 p-3 rounded-full">
      {React.cloneElement(icon, { className: "w-6 h-6 text-primary" })}
    </div>
    <div>
      <p className="text-sm font-semibold text-gray-500">{label}</p>
      <p className="text-lg font-medium">{value}</p>
    </div>
  </div>
);

export default TurfDetails;

```

# client\user\src\components\ui\ReservationSkeleton.jsx

```jsx
 
const ReservationSkeleton = () => {
  return (
    <div className="container mx-auto px-4 py-8 animate-pulse">
      <div className="h-8 w-48 bg-gray-300 rounded mb-6"></div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body p-4 sm:p-6">
          {/* Date selection skeleton */}
          <div className="flex flex-col space-y-4 mb-6">
            <div className="w-full">
              <div className="h-6 w-24 bg-gray-300 rounded mb-2"></div>
              <div className="h-10 bg-gray-300 rounded w-full"></div>
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
              <div className="h-10 w-full sm:w-28 bg-gray-300 rounded"></div>
              <div className="h-10 w-32 bg-gray-300 rounded"></div>
              <div className="h-10 w-full sm:w-28 bg-gray-300 rounded"></div>
            </div>
          </div>

          {/* Available start times skeleton */}
          <div>
            <div className="h-6 w-32 bg-gray-300 rounded mb-4"></div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 sm:gap-4">
              {[...Array(18)].map((_, index) => (
                <div key={index} className="h-8 bg-gray-300 rounded"></div>
              ))}
            </div>
          </div>

          {/* Duration selection skeleton */}
          <div className="mt-6">
            <div className="h-6 w-32 bg-gray-300 rounded mb-4"></div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="h-16 bg-gray-300 rounded flex-1"
                ></div>
              ))}
            </div>
          </div>

          {/* Selected time summary skeleton */}
          <div className="mt-6 p-4 bg-base-200 rounded-lg">
            <div className="h-6 w-40 bg-gray-300 rounded mb-2"></div>
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="h-4 bg-gray-300 rounded mb-2 w-3/4"
              ></div>
            ))}
          </div>

          {/* Confirm reservation button skeleton */}
          <div className="mt-6">
            <div className="h-12 bg-gray-300 rounded w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationSkeleton;

```

# client\user\src\components\ui\ReviewSkeleton.jsx

```jsx
 
const ReviewSkeleton = () => {
  return (
    <div className="card bg-base-100 shadow-xl animate-pulse">
      <div className="card-body">
        <div className="flex items-center justify-between">
          <div className="font-semibold">
            <div className="h-5 bg-gray-300 rounded w-24"></div>
          </div>
          <div className="text-sm text-gray-500">
            <div className="h-4 bg-gray-300 rounded w-20"></div>
          </div>
        </div>
        <div className="rating rating-md">
          {[...Array(5)].map((_, i) => (
            <input
              key={i}
              type="radio"
              name={`rating-${i}`}
              className="mask mask-star-2 bg-orange-400 opacity-30"
            />
          ))}
        </div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSkeleton;

```

# client\user\src\components\ui\SkeletonLoader.jsx

```jsx
 

  const SkeletonLoader = () => {
  return (
    <div className="card bg-base-100 shadow-xl animate-pulse">
      <div className="h-48 bg-base-300"></div>
      <div className="card-body">
        <div className="h-6 bg-base-300 rounded w-3/4"></div>
        <div className="h-4 bg-base-300 rounded w-full mt-2"></div>
        <div className="h-4 bg-base-300 rounded w-full mt-2"></div>
        <div className="flex flex-wrap gap-2 mt-4">
          <div className="h-6 bg-base-300 rounded w-16"></div>
          <div className="h-6 bg-base-300 rounded w-16"></div>
        </div>
        <div className="h-4 bg-base-300 rounded w-1/2 mt-2"></div>
        <div className="card-actions justify-end mt-4">
          <div className="h-10 bg-base-300 rounded w-32"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;

```

# client\user\src\components\ui\TurfBookingHistorySkeleton.jsx

```jsx

const TurfBookingHistorySkeleton = () => {
  return (
    <div className="container mx-auto p-4 bg-base-200 animate-pulse">
      <div className="h-8 bg-base-300 rounded w-3/4 mx-auto mb-8  "></div>
      {[1, 2, 3].map((item) => (
        <div key={item} className="card bg-base-100 shadow-xl mb-6 mx-auto lg:w-1/2">
          <div className="card-body">
            <div className="h-6 bg-base-300 rounded w-1/2 mb-4"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                {[1, 2, 3, 4].map((line) => (
                  <div key={line} className="flex items-center">
                    <div className="w-4 h-4 bg-base-300 rounded-full mr-2"></div>
                    <div className="h-4 bg-base-300 rounded w-3/4"></div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="w-32 h-32 bg-base-300 rounded mb-2"></div>
                <div className="h-4 bg-base-300 rounded w-1/2"></div>
              </div>
            </div>
            <div className="mt-4">
              <div className="h-10 bg-base-300 rounded w-1/3"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TurfBookingHistorySkeleton;

```

# client\user\src\components\ui\TurfCardSkeleton.jsx

```jsx
const TurfCardSkeleton = () => {
  return (
    <div className="card bg-base-100 shadow-xl animate-pulse ">
      <div className="h-48 bg-base-300"></div>
      <div className="card-body">
        <div className="h-6 bg-base-300 rounded w-3/4"></div>
        <div className="flex flex-wrap gap-2 mt-4">
          <div className="h-6 bg-base-300 rounded w-16"></div>
          <div className="h-6 bg-base-300 rounded w-16"></div>
        </div>
        <div className="h-4 bg-base-300 rounded w-1/2 mt-2"></div>
        <div className="card-actions justify-end mt-4">
          <div className="h-10 bg-base-300 rounded w-32"></div>
        </div>
      </div>
    </div>
  );
};

export default TurfCardSkeleton;

```

# client\user\src\components\ui\TurfDetailsSkeleton.jsx

```jsx
const TurfDetailsSkeleton = () => (
  <div className="container mx-auto px-4 py-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-4">
        <div className="skeleton h-64 w-full"></div>
        <div className="skeleton h-32 w-full"></div>
      </div>
      <div className="space-y-6">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="skeleton h-8 w-3/4"></div>
            <div className="skeleton h-4 w-1/2"></div>
            <div className="skeleton h-20 w-full"></div>
            <div className="grid grid-cols-2 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="space-y-2">
                  <div className="skeleton h-4 w-3/4"></div>
                  <div className="skeleton h-8 w-full"></div>
                </div>
              ))}
            </div>
            <div className="skeleton h-10 w-1/3 ml-auto mt-4"></div>
          </div>
        </div>
        <div className="skeleton h-8 w-1/4"></div>
      </div>
    </div>
  </div>
);


export default TurfDetailsSkeleton;
```

# client\user\src\config\razorpay.js

```js
import toast from "react-hot-toast";
import axiosInstance from "../hooks/useAxiosInstance";

export const createOrder = async (totalPrice) => {
  const response = await axiosInstance.post("/api/user/booking/create-order", {
    totalPrice,
  });
    return response.data;
};

export const handlePayment = async (order,user) => {
   return new Promise((resolve, reject) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      order_id: order.id, // Make sure this is included
      name: "RiField",
      description: "Book a spot for your next adventure",

      handler: function (response) {
         if (response.error) {
          toast.error(response.error.message);
          reject(response.error);
        } else {
          resolve(response);
        }
      },
      prefill: {
        name: user.name,
        email: user.email,
        contact: "",
      },
     
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  });
};

```

# client\user\src\features\becomeOwner\BecomeOwner.jsx

```jsx
import FormField from "../../components/common/FormField";
import Button from "../../components/common/Button";
import useBecomeOwner from "../../hooks/useBecomeOwner";

const BecomeOwner = () => {
  const { register, handleSubmit, errors, onSubmit, loading } =
    useBecomeOwner();
  return (
    <div className="container mx-auto mt-20  p-2">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Become a Turf Owner
      </h1>
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
            <FormField
              label="Name"
              name="name"
              type="text"
              register={register}
              error={errors.name}
              
            />
            <FormField
              label="Email"
              name="email"
              type="email"
              register={register}
              error={errors.email}
            />
            <FormField
              label="Phone Number"
              name="phone"
              type="text"
              register={register}
              error={errors.phone}
            />
            <Button className="btn btn-primary w-full mt-6" loading={loading}>
              Submit Application
            </Button>
          </form>
        </div>

        {/* content section */}
        <div className=" ">
          <div className=" shadow-md border p-6 rounded-lg h-full">
            <h2 className="text-2xl font-semibold mb-4">
              Becoming a Turf Owner
            </h2>
            <p className="mb-4">
              Join our platform as a turf owner and start managing your sports
              facilities efficiently. Here&#39;s what you need to know:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>Fill out the application form with your details.</li>
              <li>Our admin team will review your application thoroughly.</li>
              <li>
                You&#39;ll receive an email with the decision on your
                application.
              </li>
              <li>
                If approved, the email will contain a link to create your owner
                account.
              </li>
              <li>
                Once your account is set up, you can start managing your turf
                business.
              </li>
            </ul>
            <h3 className="text-xl font-semibold mb-2">
              As a Turf Owner, you can:
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Add and manage multiple turfs</li>
              <li>View and handle bookings</li>
              <li>Manage payments and transactions</li>
              <li>Set availability and pricing</li>
              <li>Communicate with customers</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeOwner;

```

# client\user\src\hooks\useAxiosInstance.js

```js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true, // Important for CORS
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
});


axiosInstance.interceptors.request.use((config) => {
  let token = null;
  try {
    const persistedUser = localStorage.getItem("persist:user");
    if (persistedUser) {
      const parsedUser = JSON.parse(persistedUser);
      if (parsedUser.auth) {
        const parsedAuth = JSON.parse(parsedUser.auth);
        token = parsedAuth.token;
      }
    }
  } catch (error) {
    console.error("Error parsing persisted user data:", error);
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    delete config.headers.Authorization;
  }

  return config;
});

export default axiosInstance;

```

# client\user\src\hooks\useBecomeOwner.jsx

```jsx
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axiosInstance from "./useAxiosInstance";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const becomeOwnerSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .required("Enter your email")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/gm,
      "Enter a valid email"
    ),
  phone: yup
    .string()
    .required("Enter your phone number")
    .matches(/^[0-9]{10}$/, "Enter a valid 10-digit phone number")
    .min(10, "Phone number must be at least 10 digits long")
    .max(10, "Phone number must be at most 10 digits long"),
});

const useBecomeOwner = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
     const {
       register,
       handleSubmit,
       formState: { errors },
     } = useForm({
       resolver: yupResolver(becomeOwnerSchema),
     });
       const onSubmit = async (data) => {
         setLoading(true);
         try {
            const response = await axiosInstance.post(
              "/api/owner/auth/ownerRequest", data
            );
            const result = await response.data;
             toast.success(result.message);
             navigate("/auth")
         } catch (error) {
           if(error.response){
             toast.error(error.response?.data?.message);
           }
         }finally{
           setLoading(false);
         }
       };

       return { register, handleSubmit, errors, onSubmit, loading };
}

export default useBecomeOwner;
```

# client\user\src\hooks\useBookingConfirmation.jsx

```jsx
import { format, parse, set, formatISO, addHours, parseISO } from "date-fns";
import toast from "react-hot-toast";
import axiosInstance from "./useAxiosInstance";
import { createOrder, handlePayment } from "../config/razorpay";
import "https://checkout.razorpay.com/v1/checkout.js";
import { useNavigate } from "react-router-dom";

const useBookingConfirmation = (
  id,
  selectedDate,
  selectedStartTime,
  duration,
  pricePerHour,
  setLoading
) => {
  const navigate = useNavigate();
  const confirmReservation = async () => {
    const selectedTurfDate = format(selectedDate, "yyyy-MM-dd");
    const parsedStartTime = parse(selectedStartTime, "hh:mm a", new Date());

    const combinedStartDateTime = set(parseISO(selectedTurfDate), {
      hours: parsedStartTime.getHours(),
      minutes: parsedStartTime.getMinutes(),
      seconds: 0,
      milliseconds: 0,
    });

    const combinedEndDateTime = addHours(combinedStartDateTime, duration);

    const startTimeISO = formatISO(combinedStartDateTime);
    const endTimeISO = formatISO(combinedEndDateTime);

    try {
      setLoading(true);

      const order = await createOrder(pricePerHour * duration);
      setLoading(false);

      const razorpayResponse = await handlePayment(order.order, order.user);
      setLoading(true);
      const bookingData = {
        id,
        duration,
        startTime: startTimeISO,
        endTime: endTimeISO,
        totalPrice: pricePerHour * duration,
        selectedTurfDate,
        paymentId: razorpayResponse.razorpay_payment_id,
        orderId: razorpayResponse.razorpay_order_id,
        razorpay_signature: razorpayResponse.razorpay_signature,
      };

      const response = await axiosInstance.post(
        "/api/user/booking/verify-payment",
        bookingData
      );
      const result = await response.data;
      toast.success(result.message);
      navigate("/auth/booking-history");
    } catch (err) {
      if (err.response) {
        toast.error(err.response?.data?.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    confirmReservation,
  };
};

export default useBookingConfirmation;

```

# client\user\src\hooks\useBookingHistory.jsx

```jsx
import { useEffect, useState } from "react";
import axiosInstance from "./useAxiosInstance";
import toast from "react-hot-toast";
import { format, parseISO, subHours, subMinutes } from "date-fns";

export default function useBookingHistory() {
  
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  const formatBookingsData = (bookings) => {
    return bookings.map((booking) => {
      const adjustTime = (timeString) => {
        const date = parseISO(timeString);
        const adjustedDate = subMinutes(subHours(date, 5), 30);
        return adjustedDate;
      };

      const adjustedStartTime = adjustTime(booking.timeSlot.startTime);
      const adjustedEndTime = adjustTime(booking.timeSlot.endTime);

      return {
        ...booking,
        timeSlot: {
          ...booking.timeSlot,
          formattedStartTime: format(adjustedStartTime, "hh:mm a"),
          formattedEndTime: format(adjustedEndTime, "hh:mm a"),
          date: format(adjustedStartTime, "dd MMM yyyy"),
        },
      };
    });
  };

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(
        "/api/user/booking/get-bookings"
      );
      const result = response.data;
      const formattedBookings = formatBookingsData(result);
      setBookings(formattedBookings);
    } catch (error) {
      console.error(error, "error");
      toast.error(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return { bookings, loading };
}

```

# client\user\src\hooks\useDateSelection.jsx

```jsx
const useDateSelection = (
  setSelectedDate,
  setSelectedStartTime,
  setDuration
) => {
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedStartTime(null);
    setDuration(1);
  };

  return {
    handleDateChange,
  };
};

export default useDateSelection;

```

# client\user\src\hooks\useDurationSelection.jsx

```jsx
import {
  parse,
  isAfter,
  addHours,
  format,
  isBefore,
  isEqual,
  addDays,
} from "date-fns";

const useDurationSelection = (
  selectedStartTime,
  timeSlots,
  isTimeSlotBooked,
  setDuration
) => {
  const handleDurationChange = (newDuration) => {
    setDuration(newDuration);
  };

  const isDurationAvailable = (startTime, hours) => {
    if (!startTime) return false;

    const start = parse(startTime, "hh:mm a", new Date());
    const end = addHours(start, hours);

    let closeTime = parse(timeSlots.closeTime, "hh:mm a", new Date());
    if (isBefore(closeTime, start) || isEqual(closeTime, start)) {
      closeTime = addDays(closeTime, 1);
    }

    if (isAfter(end, closeTime)) return false;

    for (let i = 0; i < hours; i++) {
      const checkTime = addHours(start, i);
      if (isTimeSlotBooked(format(checkTime, "hh:mm a"))) {
        return false;
      }
    }

    return true;
  };

  return {
    handleDurationChange,
    isDurationAvailable,
  };
};

export default useDurationSelection;

```

# client\user\src\hooks\useLoginForm.jsx

```jsx
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axiosInstance from "./useAxiosInstance";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/slices/authSlice";
import { useDispatch } from "react-redux";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Enter your email")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/gm,
      "Enter a valid email"
    ),
  password: yup
    .string()
    .required("Enter your password")
    .min(6, "Password must be at least 6 characters long"),
});

const useLoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await axiosInstance.post("/api/user/auth/login", data);
      const result = await response.data;
      toast.success(result.message);
      dispatch(login(result.token));
      navigate("/auth", { replace: true });
      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${result.token}`;
    } catch (error) {
      if (error.response) {
        toast.error(error.response?.data?.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    loading,
  };
};

export default useLoginForm;

```

# client\user\src\hooks\useReservation.jsx

```jsx
import { useParams } from "react-router-dom";
import useDateSelection from "./useDateSelection";
import useTimeSelection from "./useTimeSelection";
import useDurationSelection from "./useDurationSelection";
import useBookingConfirmation from "./useBookingConfirmation";
import { useState } from "react";

const useReservation = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedStartTime, setSelectedStartTime] = useState(null);
  const [bookedTime, setBookedTime] = useState([]);
  const [timeSlots, setTimeSlots] = useState({ openTime: "", closeTime: "" });
  const [pricePerHour, setPricePerHour] = useState(0);
  const [duration, setDuration] = useState(1);



  const { handleDateChange } = useDateSelection(
    setSelectedDate,
    setSelectedStartTime,
    setDuration
  );

  const { availableTimes, handleTimeSelection, isTimeSlotBooked } =
    useTimeSelection(
      selectedDate,
      id,
      setSelectedStartTime,
      setBookedTime,
      setTimeSlots,
      setPricePerHour,
      bookedTime,
      timeSlots,
      setDuration
    );

  const { handleDurationChange, isDurationAvailable } = useDurationSelection(
    selectedStartTime,
    timeSlots,
    isTimeSlotBooked,
    setDuration
  );

  const { confirmReservation } = useBookingConfirmation(
    id,
    selectedDate,
    selectedStartTime,
    duration,
    pricePerHour,
    setLoading
  );

  return {
    selectedDate,
    selectedStartTime,
    duration,
    availableTimes,
    timeSlots,
    handleDateChange,
    handleTimeSelection,
    handleDurationChange,
    isTimeSlotBooked,
    isDurationAvailable,
    confirmReservation,
    pricePerHour,
    loading,
  };
};

export default useReservation;

```

# client\user\src\hooks\useReviews.jsx

```jsx
import { useEffect, useState } from "react";
import axiosInstance from "./useAxiosInstance";
import toast from "react-hot-toast";

const useReviews = (turfId) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [averageRating, setAverageRating] = useState(0);

  const fetchReviews = async () => {
    try {
      const response = await axiosInstance.get(`/api/user/review/${turfId}`);
       const result = response.data;
       setReviews(result.reviews);
      setAverageRating(result.averageRating);
    } catch (err) {
      console.log(err, "error");
      toast.error(err.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchReviews();
  }, []);

  return { reviews, loading, averageRating };
};

export default useReviews;

```

# client\user\src\hooks\useSignUpForm.jsx

```jsx
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axiosInstance from "./useAxiosInstance";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {login} from "../redux/slices/authSlice"

const registerSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .required("Enter your email")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/gm,
      "Enter a valid email"
    ),
  password: yup
    .string()
    .required("Enter your password")
    .min(6, "Password must be at least 6 characters long"),
  confirmPassword: yup
    .string()
    .required("Enter your password")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const useSignUpForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (data) => {

    setLoading(true);
    try {
      const response = await axiosInstance.post(
        "/api/user/auth/register",
        data
      );
      const result = await response.data;
      toast.success(result.message);
      dispatch(login(result.token));
      navigate("/auth", { replace: true });
      axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${result.token}`;
    } catch (error) {
      if (error.response) {
        toast.error(error.response?.data?.message);
      }
    }finally{
      setLoading(false);
    }
  };

  return { register, handleSubmit, errors, onSubmit, loading };
};

export default useSignUpForm;

```

# client\user\src\hooks\useTimeSelection.jsx

```jsx
import {  useEffect, useMemo } from "react";
import {
  format,
  parse,
  isBefore,
  isAfter,
  parseISO,
  addMinutes,
  addDays,
  addHours,
} from "date-fns";
import axiosInstance from "./useAxiosInstance";

const useTimeSelection = (
  selectedDate,
  turfId,
  setSelectedStartTime,
  setBookedTime,
  setTimeSlots,
  setPricePerHour,
  bookedTime,
  timeSlots,
  setDuration
) => {
  const availableTimes = useMemo(() => {
    if (!timeSlots.openTime || !timeSlots.closeTime) return [];

    const times = [];
    const openTime = parse(timeSlots.openTime, "hh:mm a", new Date());
    const closeTime = parse(timeSlots.closeTime, "hh:mm a", new Date());

    let currentTime = openTime;

    while (isBefore(currentTime, closeTime)) {
      times.push(format(currentTime, "hh:mm a"));
      // currentTime = addMinutes(currentTime, 60);
      currentTime = addHours(currentTime, 1);
    }

    return times;
  }, [timeSlots.openTime, timeSlots.closeTime]);

  const handleTimeSelection = (time) => {
    setSelectedStartTime(time);
    setDuration(1);
  };

  const isTimeSlotBooked = (time) => {
    const timeToCheck = parse(time, "hh:mm a", new Date());
    return bookedTime.some((booking) => {
      const bookingStart = parse(booking.startTime, "hh:mm a", new Date());
      let bookingEnd = parse(booking.endTime, "hh:mm a", new Date());

      if (isBefore(bookingEnd, bookingStart)) {
        bookingEnd = addDays(bookingEnd, 1);
      }

      return (
        (isAfter(timeToCheck, bookingStart) ||
          isSameTime(timeToCheck, bookingStart)) &&
        isBefore(timeToCheck, bookingEnd)
      );
    });
  };

  const isSameTime = (time1, time2) => {
    return (
      time1.getHours() === time2.getHours() &&
      time1.getMinutes() === time2.getMinutes()
    );
  };

  const fetchByDate = async (currentSelectedDate, turfId) => {
    const date = format(currentSelectedDate, "yyyy-MM-dd");

    try {
      const response = await axiosInstance.get(
        `/api/user/turf/timeslot?date=${date}&turfId=${turfId}`
      );
      const result = await response.data;
      setTimeSlots(result.timeSlots);
      setPricePerHour(result.timeSlots.pricePerHour);

      const formattedBookedTime = result.bookedTime.map((booking) => ({
        ...booking,
        startTime: format(
          addMinutes(
            parseISO(booking.startTime),
            parseISO(booking.startTime).getTimezoneOffset()
          ),
          "hh:mm a",
          { timeZone: "UTC" }
        ),
        endTime: format(
          addMinutes(
            parseISO(booking.endTime),
            parseISO(booking.endTime).getTimezoneOffset()
          ),
          "hh:mm a",
          { timeZone: "UTC" }
        ),
      }));
      setBookedTime(formattedBookedTime);
    } catch (error) {
      console.log("Error in fetchByDate", error.message);
    }
  };

  useEffect(() => {
    fetchByDate(selectedDate, turfId);
  }, [selectedDate, turfId]);

  return {
    availableTimes,
    handleTimeSelection,
    isTimeSlotBooked,
  };
};

export default useTimeSelection;

```

# client\user\src\hooks\useTurfData.jsx

```jsx
import { useSelector, useDispatch } from "react-redux";
import { setTurfs, setLoading, setError } from "../redux/slices/turfSlice";
import axiosInstance from "../hooks/useAxiosInstance";
import { useEffect } from "react";

const useTurfData = () => {
  const dispatch = useDispatch();
  const { turfs, loading } = useSelector((state) => state.turf);

  useEffect(() => {
    const fetchTurfData = async () => {
      try {
        dispatch(setLoading(true));
        // Fetch your turf data here
        const response = await axiosInstance.get("/api/user/turf/all");
        const data = await response.data.turfs;
        dispatch(setTurfs(data));
      } catch (err) {
        dispatch(setError(err.message));
      } finally {
        dispatch(setLoading(false));
      }
    };
    fetchTurfData();
  }, []);

  return { turfs, loading };
};

export default useTurfData;

```

# client\user\src\hooks\useWriteReview.jsx

```jsx
import { useState } from "react";
import axiosInstance from "./useAxiosInstance";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useWriteReview = () => {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [turfId, setTurfId] = useState(null);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const openReviewModal = (bookingId) => {
    setTurfId(bookingId);
    setIsReviewModalOpen(true);
  };

  const closeReviewModal = () => {
    setIsReviewModalOpen(false);
    setTurfId(null);
    setRating(0);
    setReview("");
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const submitReview = async () => {
    if (!turfId) return;

    setIsSubmitting(true);

    try {
      // Replace with your actual API endpoint
      const response = await axiosInstance.post(`/api/user/review/${turfId}`, {
        rating,
        review,
      });
      const result = await response.data;
      toast.success(result.message);
      closeReviewModal();
      navigate(`/auth/turf/${turfId}`);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isReviewModalOpen,
    rating,
    review,
    isSubmitting,
    openReviewModal,
    closeReviewModal,
    handleRatingChange,
    handleReviewChange,
    submitReview,
  };
};

export default useWriteReview;

```

# client\user\src\index.css

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: "Poppins", sans-serif;
}
```

# client\user\src\layouts\ProtectedLayout.jsx

```jsx
import { Navigate, Outlet } from "react-router-dom";
import AuthNavbar from "../components/auth/AuthNavbar";
import {useSelector} from "react-redux"

 

export default function ProtectedLayout() {
  const {isLoggedIn} = useSelector(state=> state.auth)
  if(!isLoggedIn){
    return <Navigate to= "/login" replace />
   }

  return (
    <div className="flex flex-col min-h-screen ">
      <AuthNavbar />
      <main className="flex-grow pt-16 ">
        <Outlet />
      </main>
    </div>
  );
}

```

# client\user\src\layouts\Root.jsx

```jsx
 
import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />
      <main className="flex-grow pt-16 ">
        <Outlet />
      </main>
    </div>
  );
};

export default Root;

```

# client\user\src\main.jsx

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
 import './index.css'
import { Provider } from 'react-redux'
import {store, persistor} from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react'
import { RouterProvider } from 'react-router-dom'
import router from "./router"
import { Toaster } from 'react-hot-toast'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
        <Toaster position="bottom-center" duration={500} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

```

# client\user\src\pages\auth\Login.jsx

```jsx
import { Link, useNavigate } from "react-router-dom";
import useLoginForm from "../../hooks/useLoginForm";
import FormField from "../../components/common/FormField";
import Button from "../../components/common/Button";
import { Lock, Mail, ArrowRight } from 'lucide-react';

const Login = () => {
  const { register, handleSubmit, errors, onSubmit, loading } = useLoginForm();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-300">
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:32px_32px]" />
      
      <div className="relative container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-center gap-12 min-h-screen">
        {/* Left Section - Welcome Text */}
        <div className="w-full lg:w-1/2 max-w-md space-y-6 text-center lg:text-left">
          <div className="space-y-4">
            <span className="bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium">
              Welcome Back
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Login to RiField
              </span>
            </h1>
            <p className="text-base-content/70 text-lg">
              Access your premium turf booking account and continue your elite sports journey
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 pt-8">
            <div className="bg-base-100 p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-base-content/70">Premium Turfs</div>
            </div>
            <div className="bg-base-100 p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-accent">50K+</div>
              <div className="text-sm text-base-content/70">Happy Players</div>
            </div>
          </div>
        </div>

        {/* Right Section - Login Form */}
        <div className="w-full lg:w-1/2 max-w-md">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-20"></div>
            <div className="relative bg-base-100 shadow-xl rounded-2xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold">Sign In</h2>
                <p className="text-base-content/70 mt-2">
                  Enter your credentials to access your account
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-4">
                  <FormField
                    label="Email Address"
                    name="email"
                    type="email"
                    register={register}
                    error={errors.email}
                    icon={<Mail className="w-5 h-5 text-base-content/50" />}
                    className="input-bordered focus:input-primary transition-colors"
                  />
                  <FormField
                    label="Password"
                    name="password"
                    type="password"
                    register={register}
                    error={errors.password}
                    icon={<Lock className="w-5 h-5 text-base-content/50" />}
                    className="input-bordered focus:input-primary transition-colors"
                  />
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="checkbox checkbox-primary checkbox-sm" />
                    <span className="text-base-content/70">Remember me</span>
                  </label>
                  <Link to="/forgot-password" className="text-primary hover:text-primary-focus transition-colors">
                    Forgot Password?
                  </Link>
                </div>

                <Button 
                  type="submit" 
                  className="btn-primary w-full group"
                  loading={loading}
                >
                  {loading ? (
                    "Signing in..."
                  ) : (
                    <>
                      Sign In
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-8 text-center">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-base-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-base-100 text-base-content/70">
                      Don't have an account?
                    </span>
                  </div>
                </div>
                
                <Link 
                  to="/signup"
                  className="inline-flex items-center justify-center gap-2 mt-4 text-primary hover:text-primary-focus transition-colors font-medium group"
                >
                  Create a free account
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-6 text-sm text-base-content/70">
            By signing in, you agree to our
            <Link to="/terms" className="text-primary hover:text-primary-focus ml-1">
              Terms of Service
            </Link>
            {" "}and{" "}
            <Link to="/privacy" className="text-primary hover:text-primary-focus">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
```

# client\user\src\pages\auth\SignUp.jsx

```jsx
import { Link } from "react-router-dom";
import FormField from "../../components/common/FormField";
import useSignUpForm from "../../hooks/useSignUpForm";
import Button from "../../components/common/Button";
import { User, Mail, Lock, ArrowRight, CheckCircle } from 'lucide-react';

const SignUp = () => {
  const { register, handleSubmit, errors, onSubmit, loading } = useSignUpForm();

  const benefits = [
    "Access to premium turf facilities",
    "Priority booking windows",
    "Exclusive member rates",
    "24/7 premium support"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-300">
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:32px_32px]" />
      
      <div className="relative container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-center gap-12 min-h-screen">
        {/* Left Section - Benefits */}
        <div className="w-full lg:w-1/2 max-w-md space-y-6 text-center lg:text-left">
          <div className="space-y-4">
            <span className="bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium">
              Join RiField Today
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Start Your Premium
              </span>
              <br />
              <span className="text-base-content">
                Turf Experience
              </span>
            </h1>
            <p className="text-base-content/70 text-lg">
              Join the elite community of sports enthusiasts and enjoy premium benefits
            </p>
          </div>

          <div className="space-y-4 bg-base-100 p-6 rounded-2xl shadow-lg">
            <h3 className="font-semibold text-xl">Premium Member Benefits</h3>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3 text-base-content/70">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-base-100 p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-base-content/70">Premium Turfs</div>
            </div>
            <div className="bg-base-100 p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-accent">50K+</div>
              <div className="text-sm text-base-content/70">Happy Players</div>
            </div>
          </div>
        </div>

        {/* Right Section - Sign Up Form */}
        <div className="w-full lg:w-1/2 max-w-md">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-20"></div>
            <div className="relative bg-base-100 shadow-xl rounded-2xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold">Create Account</h2>
                <p className="text-base-content/70 mt-2">
                  Join the premium turf booking platform
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-4">
                  <FormField
                    label="Full Name"
                    name="name"
                    type="text"
                    register={register}
                    error={errors.name}
                    icon={<User className="w-5 h-5 text-base-content/50" />}
                    className="input-bordered focus:input-primary transition-colors"
                  />
                  <FormField
                    label="Email Address"
                    name="email"
                    type="email"
                    register={register}
                    error={errors.email}
                    icon={<Mail className="w-5 h-5 text-base-content/50" />}
                    className="input-bordered focus:input-primary transition-colors"
                  />
                  <FormField
                    label="Password"
                    name="password"
                    type="password"
                    register={register}
                    error={errors.password}
                    icon={<Lock className="w-5 h-5 text-base-content/50" />}
                    className="input-bordered focus:input-primary transition-colors"
                  />
                  <FormField
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    register={register}
                    error={errors.confirmPassword}
                    icon={<Lock className="w-5 h-5 text-base-content/50" />}
                    className="input-bordered focus:input-primary transition-colors"
                  />
                </div>

                <div className="space-y-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="checkbox checkbox-primary checkbox-sm" 
                      {...register('terms')}
                    />
                    <span className="text-sm text-base-content/70">
                      I agree to the{" "}
                      <Link to="/terms" className="text-primary hover:text-primary-focus">
                        Terms of Service
                      </Link>
                      {" "}and{" "}
                      <Link to="/privacy" className="text-primary hover:text-primary-focus">
                        Privacy Policy
                      </Link>
                    </span>
                  </label>

                  <Button 
                    type="submit" 
                    className="btn-primary w-full group"
                    loading={loading}
                  >
                    {loading ? (
                      "Creating Account..."
                    ) : (
                      <>
                        Create Account
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </div>
              </form>

              <div className="mt-8 text-center">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-base-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-base-100 text-base-content/70">
                      Already have an account?
                    </span>
                  </div>
                </div>
                
                <Link 
                  to="/login" 
                  className="inline-flex items-center justify-center gap-2 mt-4 text-primary hover:text-primary-focus transition-colors font-medium group"
                >
                  Sign in to your account
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-6 text-sm text-base-content/70">
            Need help?{" "}
            <Link to="/contact" className="text-primary hover:text-primary-focus">
              Contact our support team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
```

# client\user\src\pages\Home.jsx

```jsx
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Carousel from "../components/common/Carousel";
import Footer from "../components/layout/Footer";
import useTurfData from "../hooks/useTurfData";
import TurfCard from "../components/turf/TurfCard";
import TurfCardSkeleton from "../components/ui/TurfCardSkeleton";
import { Trophy, Star, Clock, Shield, ArrowRight } from 'lucide-react';
import banner1 from "/banner-1.png";
import banner2 from "/banner-2.jpeg";
import banner3 from "/banner-3.jpeg";

const Home = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const { turfs, loading } = useTurfData();
  const slides = [banner1, banner2, banner3];

  const stats = [
    { number: "500+", label: "Premium Turfs" },
    { number: "50K+", label: "Happy Players" },
    { number: "100%", label: "Secure Booking" },
    { number: "24/7", label: "Support" }
  ];

  const features = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Premium Quality",
      description: "Experience world-class turf facilities"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Exclusive Access",
      description: "Get priority booking and special rates"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Instant Confirmation",
      description: "Secure your slot in real-time"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Guaranteed Service",
      description: "100% satisfaction guaranteed"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-300">
      {/* Hero Section with Dynamic Background */}
      <div className="relative overflow-hidden bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:32px_32px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row items-center py-20 lg:py-32 gap-16">
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="inline-block">
                <span className="bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium">
                  Premium Turf Booking Platform
                </span>
              </div>
              <h1 className="text-5xl font-extrabold">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Elite Turf
                </span>
                <br />
                <span className="text-base-content">
                  Booking Experience
                </span>
              </h1>
              <p className="text-xl text-base-content/80">
                Experience the premium booking of turf facilities. 
                Your game deserves nothing but the best.
              </p>
              <div className="flex items-center gap-4">
                <Link
                  to={isLoggedIn ? "/auth/turfs" : "/signup"}
                  className="group btn btn-primary btn-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
                >
                  <span>Book Premium Turf</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-30"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Carousel slides={slides} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-base-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-base-content/70 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Premium Features */}
      <div className="relative bg-gradient-to-b from-base-200 to-base-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold">Premium Experience</h2>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              Elevate your game with our premium features and exclusive benefits
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-base-100 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-base-content/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Turfs */}
      <div className="bg-base-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="flex justify-between items-end mb-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">Featured Premium Turfs</h2>
              <p className="text-base-content/70 text-xl">
                Discover our hand-picked selection of elite facilities
              </p>
            </div>
            <Link
              to={isLoggedIn ? "/auth/turfs" : "/turfs"}
              className="group btn btn-primary"
            >
              View All
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <TurfCardSkeleton key={`skeleton-${index}`} />
                ))
              : turfs.slice(0, 3).map((turf) => (
                  <div
                    key={turf._id}
                    className="group transform hover:-translate-y-2 transition-all duration-300"
                  >
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity"></div>
                      <div className="relative">
                        <TurfCard turf={turf} />
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>

      {/* Premium CTA Section */}
      <div className="relative bg-gradient-to-r from-primary to-accent text-primary-content">
        <div className="absolute inset-0 bg-grid-slate-100/[0.04] bg-[size:32px_32px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <div className="text-center space-y-8">
            <h2 className="text-4xl font-bold">Ready for a Premium Experience?</h2>
            <p className="text-xl max-w-2xl mx-auto text-primary-content/90">
              Join the elite community of sports enthusiasts who choose nothing but the best.
              Your premium turf experience awaits.
            </p>
            <Link
              to={isLoggedIn ? "/auth/turfs" : "/signup"}
              className="group inline-flex items-center btn btn-secondary btn-lg hover:shadow-lg hover:shadow-secondary/50 transition-all duration-300"
            >
              Book Your Premium Turf
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
```

# client\user\src\redux\rootReducers.js

```js
// src/redux/rootReducer.js
import { combineReducers } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import authReducer from "./slices/authSlice";
import turfReducer from "./slices/turfSlice";

const rootReducer = combineReducers({
  theme: themeReducer,
  auth: authReducer,
  turf: turfReducer,
});

export default rootReducer;

```

# client\user\src\redux\slices\authSlice.js

```js

import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    token: null ,
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.token = null;
    },
  
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

```

# client\user\src\redux\slices\themeSlice.js

```js
import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    current: "light",
  },
  reducers: {
    setTheme: (state, action) => {
      state.current = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;

```

# client\user\src\redux\slices\turfSlice.js

```js
import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    turfs: [],
    loading: true,
    error:null
}

const turfSlice = createSlice({
    name: "turf",
    initialState,
    reducers:{
        setTurfs: (state, action) => {
            state.turfs = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
})

export const {setTurfs, setLoading, setError} = turfSlice.actions;
export default turfSlice.reducer;
```

# client\user\src\redux\store.js

```js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducers";

const persistConfig = {
  key: "user",
  storage,
  whitelist: ["theme", "auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }),
});

export const persistor = persistStore(store);

```

# client\user\src\router.jsx

```jsx
import { createBrowserRouter } from "react-router-dom";
import Root from "./layouts/Root";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Turf from "./components/turf/Turf";
import TurfDetails from "./components/turf/TurfDetails";
import BecomeOwner from "./features/becomeOwner/BecomeOwner";
import ProtectedLayout from "./layouts/ProtectedLayout";
import Reservation from "./components/Reservation";
import TurfBookingHistory from "./components/turf/TurfBookingHistory";
import NotFound from "./components/common/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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
      {
        path: "turfs",
        element: <Turf />,
      },
      {
        path: "turf/:id",
        element: <TurfDetails />,
      },
    ],
  },
  {
    path: "/auth",
    element: <ProtectedLayout />,
    // errorElement: <div>Error</div>,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "turfs",
        element: <Turf />,
      },
      {
        path: "turf/:id",
        element: <TurfDetails />,
      },

      {
        path: "reserve/:id",
        element: <Reservation />,
      },
      {
        path: "become-owner",
        element: <BecomeOwner />,
      },
      {
        path: "booking-history",
        element: <TurfBookingHistory />,
      },
    ],
  },
]);

export default router;

```

# client\user\src\utils\dateUtils.jsx

```jsx
import { parse, addHours, format, isEqual } from "date-fns";

export const getEndTime = (startTime, hours) => {
  if (!startTime) return "";
  const start = parse(startTime, "hh:mm a", new Date());
  const end = addHours(start, hours);
  return format(end, "hh:mm a");
};

export const isSameTime = (time1, time2) => {
  return isEqual(
    parse(time1, "hh:mm a", new Date()),
    parse(time2, "hh:mm a", new Date())
  );
};

export const parseTime = (time) => parse(time, "hh:mm a", new Date());

export const formatTime = (date) => format(date, "hh:mm a");

```

# client\user\tailwind.config.js

```js
import daisyui from "daisyui";
import animations from "@midudev/tailwind-animations";


/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#22c55e",
        "primary-focus": "#16a34a",
      },
      backgroundImage:{
        "banner": "url('/r.png')",
      }
    },
  },
  plugins: [daisyui, animations],
  daisyui: {
    themes: ["light", "dark"],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    rtl: false,
    prefix: "",
    logs: true,
  },
};

```

# client\user\vercel.json

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}

```

# client\user\vite.config.js

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

```

# README.md

```md
# TurfSpot

TurfSpot is a comprehensive turf booking application with three modules: Admin, Owner, and User. This app allows users to view and book turf grounds, owners to manage their turfs and bookings, and admins to oversee all activities within the platform.

## Features

### User Module

- **Browse Turfs**: Users can view various turfs, check their details, and select time slots for booking.
- **Slot Booking**: Purchase time slots using Razorpay. After booking, users receive a confirmation email with all the booking details, including price, turf name, start time, end time, and a QR code containing all these details.
- **Rate Turfs**: Users can provide ratings for the turfs they have booked.
- **Become Owner**: Users can apply to become turf owners by filling out a form. Admins will review the application and send an approval or rejection email accordingly.

### Owner Module

- **Turf Management**: Owners can add new turfs, manage their existing turfs, and view all related booking details.
- **Dashboard**: Owners have access to a dashboard where they can view transactions and booking statistics in a graphical format.
- **Review Management**: Owners can view and manage reviews left by users for their turfs.

### Admin Module

- **Owner Requests**: Admins can approve or reject requests from users who wish to become owners. If approved, the user will receive an email with a registration link to the owner section.
- **User and Owner Management**: Admins can view all users and owners registered on the platform.
- **Turf Management**: Admins can view all turfs listed by owners and manage them as necessary.
- **Transaction Overview**: Admins have access to all transactions on the platform and can view transaction data on a monthly basis in graph format.

## Technologies Used

- **Frontend**: React, Tailwind CSS, DaisyUI, Redux
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Payments**: Razorpay
- **Image Hosting**: Cloudinary



## Installation

1. Clone the repository
   \`\`\`bash
   git clone https://github.com/RijoKsd/TurfSpot.git
   \`\`\`
2. Install dependencies for both client and server
   \`\`\`bash
   cd TurfSpot
   npm install
   cd server
   npm install
   cd ../client/owner
   npm install
   cd ../user
   npm install
   \`\`\`
3. Create a `.env` file in the `server` directory and add the following environment variables:

   \`\`\`env
    PORT = your_port
    MONGO_URI=your_mongo_uri

    CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    CLOUDINARY_API_SECRET=your_cloudinary_api_secret

    OWNER_URL = your_owner_url
    USER_URL = your_user_url

    EMAIL = your_email for sending emails
    PASSWORD = your_password for sending emails(you will get from app password in google account)

    RAZORPAY_KEY_ID = your_razorpay_key_id
    RAZORPAY_SECRET_KEY = your_razorpay_secret_key
   
    JWT_SECRET = your_jwt_secret


   \`\`\`

4. Run the application

   \`\`\`bash
   # To run the backend
   cd server
   npm run server

   # To run the owner client
   cd ../client/owner
   npm run dev

   # To run the user client
   cd ../user
   npm run dev
   \`\`\`

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License.

## Contact

For any inquiries or questions, please contact us at [rijobdk@gmail.com](mailto:rijobdk@gmail.com).


```

# server\.gitignore

```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
.env


/*.md
```

# server\config\database.js

```js
// config/database.js
import mongoose from "mongoose";
import dotenv from 'dotenv';
import chalk from 'chalk';

dotenv.config();

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI;
    
    if (!mongoURI) {
      throw new Error('MONGODB_URI is not defined in environment variables');
    }

    // Connection options
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000,
      socketTimeoutMS: 45000,
      family: 4,
      retryWrites: true,
      w: 'majority',
      maxPoolSize: 10,
      minPoolSize: 5,
      maxIdleTimeMS: 60000,
      connectTimeoutMS: 30000
    };

    // Create connection
    const conn = await mongoose.connect(mongoURI, options);

    // Log success
    console.log(chalk.green('✓ MongoDB Connected:', chalk.blue(conn.connection.host)));

    // Handle connection events
    mongoose.connection.on('connected', () => {
      console.log(chalk.green('✓ MongoDB connection established'));
    });

    mongoose.connection.on('error', (err) => {
      console.error(chalk.red('MongoDB connection error:'), err);
    });

    mongoose.connection.on('disconnected', () => {
      console.log(chalk.yellow('MongoDB disconnected'));
    });

    return conn;

  } catch (error) {
    console.error(chalk.red('MongoDB connection error:'), error.message);
    if (process.env.NODE_ENV === 'development') {
      console.error(chalk.red('Full error:'), error);
    }
    throw error;
  }
};

export default connectDB;
```

# server\config\razorpay.js

```js
import Razorpay from "razorpay"
import dotenv from "dotenv";
dotenv.config();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export default razorpay;
```

# server\controllers\admin\dashboard.controller.js

```js
import User from "../../models/user.model.js";
import Turf from "../../models/turf.model.js";
import Booking from "../../models/booking.model.js";
import OwnerRequest from "../../models/ownerRequest.model.js";
import Owner from "../../models/owner.model.js";

const getDashboard = async (req, res) => {
   try {
    // Get only the count

    const totalUsers = await User.countDocuments();
    const totalOwners = await Owner.countDocuments({ role: "owner" });
    const totalTurfs = await Turf.countDocuments();
    const totalBookings = await Booking.countDocuments();
    const pendingRequests = await OwnerRequest.countDocuments({
      status: "pending",
    });
    const rejectedRequests = await OwnerRequest.countDocuments({
      status: "rejected",
    });

    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const bookingHistory = await Booking.aggregate([
      { $match: { createdAt: { $gte: thirtyDaysAgo } } },
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
          amount: { $sum: "$totalPrice" },
        },
      },
      { $sort: { _id: 1 } },
      {
        $project: {
          date: "$_id",
          amount: 1,
          _id: 0,
        },
      },
    ]);
    return res.status(200).json({
      totalUsers,
      totalOwners,
      totalTurfs,
      totalBookings,
      pendingRequests,
      rejectedRequests,
      bookingHistory,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Error getting dashboard" });
  }
};

export default getDashboard;

```

# server\controllers\admin\ownerManagement.controller.js

```js
import Turf from "../../models/turf.model.js";
import Owner from "../../models/owner.model.js";
import Review from "../../models/review.model.js";

//  get all owners

export const getAllOwners = async (req, res) => {
  const admin = req.admin.role;
  if (admin !== "admin") {
    return res
      .status(403)
      .json({ success: false, message: "Unauthorized access denied" });
  }
  try {
    const owners = await Owner.find({ role: "owner" }, { password: 0 });
    res.status(200).json({
      message: " Fetched all owners",
      owners,
    });
  } catch (error) {
    console.error("Error in getAllOwners: ", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// get turf by owner id

export const getTurfByOwnerId = async (req, res) => {
  const admin = req.admin.role;
  const { id } = req.params;
  if (admin !== "admin") {
    return res
      .status(403)
      .json({ success: false, message: "Unauthorized access denied" });
  }
  try {
    const turfs = await Turf.find({ owner: id }).lean();
    const turfsWithAvgRating = await Promise.all(
      turfs.map(async (turf) => {
        const reviews = await Review.find({ turf: turf._id });
        const totalRating = reviews.reduce(
          (sum, review) => sum + review.rating,
          0
        );
        const avgRating = reviews.length > 0 ? totalRating / reviews.length : 0;
        return {
          ...turf,
          avgRating: Number(avgRating.toFixed(1)),
        };
      })
    );

    console.log(turfsWithAvgRating, "turfsWithAvgRating");

    return res.status(200).json({
      message: " Fetched turf",
      turfs: turfsWithAvgRating,
    });
  } catch (error) {
    console.error("Error in getTurfByOwnerId: ", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

```

# server\controllers\admin\requestManagement.controller.js

```js
import chalk from "chalk";
import OwnerRequest from "../../models/ownerRequest.model.js";
import generateEmail from "../../utils/generateEmail.js";

//  get all requested owners
export const getAllRequestedOwners = async (req, res) => {
  const admin = req.admin.role;
  if (admin !== "admin") {
    return res
      .status(403)
      .json({ success: false, message: "Unauthorized access denied" });
  }
  try {
    const ownerRequests = await OwnerRequest.find({ status: "pending" });
    const ownerRejectedRequests = await OwnerRequest.find({
      status: "rejected",
    });
    res.status(200).json({
      success: true,
      message: "success",
      ownerRequests,
      ownerRejectedRequests,
    });
  } catch (err) {
    console.log(chalk.red("Error in getAllRequestedOwners: ", err));
  }
};

// approve the pending owner request by id
export const approveOwnerRequest = async (req, res) => {
  const admin = req.admin.role;
  const { id } = req.params;
  if (admin !== "admin") {
    return res
      .status(403)
      .json({ success: false, message: "Unauthorized access denied" });
  }
  try {
    const ownerRequest = await OwnerRequest.findById(id);
    if (!ownerRequest) {
      return res
        .status(404)
        .json({ success: false, message: "Owner request not found" });
    }
    ownerRequest.status = "approved";
    await ownerRequest.save();
    const to = ownerRequest.email;
    const subject = "Your request has been approved";
    const html = ` 
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h1 style="color: #4CAF50;">Your request to become an owner has been approved</h1>
        <p>Congratulations! You can now create your account by clicking the button below:</p>
        <button style="background-color: #4CAF50; border: none; padding: 10px 20px; text-align: center; display: inline-block; margin: 10px 0; cursor: pointer; border-radius: 5px;">
            <a href="${process.env.OWNER_URL}" style="color: white; text-decoration: none; font-size: 16px;">Create your account</a>
        </button>
    </div>
`;
    await generateEmail(to, subject, html);
    return res
      .status(200)
      .json({ success: true, message: "Owner request approved" });
  } catch (err) {
    console.log(chalk.red("Error in approveOwnerRequest: ", err));
    return res.status(500).json({ message: "error", data: err });
  }
};

// reject the pending owner request
export const deleteOwnerRequest = async (req, res) => {
  const admin = req.admin.role;
  const { id } = req.params;
  if (admin !== "admin") {
    return res
      .status(403)
      .json({ success: false, message: "Unauthorized access denied" });
  }
  try {
    const ownerRequest = await OwnerRequest.findById(id);
    if (!ownerRequest) {
      return res
        .status(404)
        .json({ success: false, message: "Owner request not found" });
    }
    ownerRequest.status = "rejected";
    await ownerRequest.save();
    const to = ownerRequest.email;
    const subject = "Your request has been rejected";
    const html = ` 
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h1 style="color: #4CAF50;">Your request to become an owner has been rejected</h1>
        <p>We apologize for the inconvenience. Please contact us if you have any further questions.</p>
        <p>Thank you for your understanding.</p>
    </div>
`;
    await generateEmail(to, subject, html);
    return res
      .status(200)
      .json({ success: true, message: "Owner request rejected" });
  } catch (eer) {
    console.log("Error in deleteOwnerRequest: ", eer);
    return res.status(500).json({ message: "Internal server error" });
  }
};


// reconsider the rejected owner request
export const reconsiderOwnerRequest = async (req, res) =>{
  const admin = req.admin.role;
  const { id } = req.params;
  if (admin !== "admin") {
    return res
      .status(403)
      .json({ success: false, message: "Unauthorized access denied" });
  }
  try{
    const ownerRequest  = await OwnerRequest.findById(id);
    if (!ownerRequest) {
      return res
        .status(404)
        .json({ success: false, message: "Owner request not found" });
    }
    ownerRequest.status = "pending";
    await ownerRequest.save();
    const to = ownerRequest.email;
    const subject = "Your request has been reconsidered";
    const html = ` 
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h1 style="color: #4CAF50;">Your request to become an owner has been reconsidered</h1>
        <p>We apologize for the inconvenience. Please contact us if you have any further questions.</p>
        <p>Thank you for your understanding.</p>
    </div>
`;
    await generateEmail(to, subject, html);
    return res
      .status(200)
      .json({ success: true, message: "Owner request reconsidered" });
  }catch(err){
    console.log(chalk.red("Error in reconsiderOwnerRequest: ", err));
    return res.status(500).json({ message: "Internal server error" });
  }
}
```

# server\controllers\admin\transaction.controller.js

```js
import Booking from "../../models/booking.model.js";

// get all transactions

export const getAllTransaction = async (req,res)=>{
    const admin = req.admin.role;
    if (admin !== "admin") {
      return res
        .status(403)
        .json({ success: false, message: "Unauthorized access denied" });
    }
    try {
        const transactions = await Booking.find({},{createdAt:1,payment:1, totalPrice:1 }).populate("user", {name:1, _id:0}).populate("turf",{name:1,_id:0}).sort({createAt:-1});
        console.log(transactions, "transactions");
        return res.status(200).json({
            message: " Fetched all transactions",
            transactions,
        });
        
    } catch (error) {
        console.error("Error in getAllTransaction: ", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}
```

# server\controllers\admin\turf.controller.js

```js
import Turf from "../../models/turf.model.js";
import Review from "../../models/review.model.js";

//  get all turfs

export const getAllTurfs = async (req, res) => {
  const admin = req.admin.role;
  if (admin !== "admin") {
    return res
      .status(403)
      .json({ success: false, message: "Unauthorized access denied" });
  }
  try {
    const turfs = await Turf.find().lean();

    // Calculate average rating for each turf
    const turfsWithAvgRating = await Promise.all(
      turfs.map(async (turf) => {
        const reviews = await Review.find({ turf: turf._id });
        const totalRating = reviews.reduce(
          (sum, review) => sum + review.rating,
          0
        );
        const avgRating = reviews.length > 0 ? totalRating / reviews.length : 0;
        return {
          ...turf,
          avgRating: Number(avgRating.toFixed(1)),
        };
      })
    );
    console.log(turfsWithAvgRating);
    return res.status(200).json({
      turfs: turfsWithAvgRating,
    });
  } catch (error) {
    console.error("Error in getAllTurfs: ", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

```

# server\controllers\admin\userManagement.controller.js

```js
import User from "../../models/user.model.js";

// get all users
export const getAllUsers = async (req, res) => {
  console.log("getAllUsers called");
  const admin = req.admin.role;
  if (admin !== "admin") {
    return res
      .status(403)
      .json({ success: false, message: "Unauthorized access denied" });
  }
  try {
    const users = await User.find({},{ password:0});
    res.status(200).json({ success: true, message: "success", users });
    
  } catch (error) {
    console.error("Error in getAllUsers: ", error);
    return res.status(500).json({ message: "Internal server error" });
    
  }
};

```

# server\controllers\owner\analytics.controller.js

```js
import Booking from '../../models/booking.model.js';

export const getRevenueAnalytics = async (req, res) => {
  try {
    const { timeframe } = req.query;
    const ownerId = req.owner.id;

    let dateFilter;
    const now = new Date();

    switch (timeframe) {
      case 'week':
        dateFilter = new Date(now.setDate(now.getDate() - 7));
        break;
      case 'month':
        dateFilter = new Date(now.setMonth(now.getMonth() - 1));
        break;
      case 'year':
        dateFilter = new Date(now.setFullYear(now.getFullYear() - 1));
        break;
      default:
        dateFilter = new Date(now.setDate(now.getDate() - 7));
    }

    const bookings = await Booking.aggregate([
      {
        $match: {
          createdAt: { $gte: dateFilter },
          owner: mongoose.Types.ObjectId(ownerId)
        }
      },
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
          revenue: { $sum: "$totalPrice" }
        }
      },
      {
        $sort: { _id: 1 }
      }
    ]);

    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
```

# server\controllers\owner\auth.controller.js

```js
import * as argon2 from "argon2";
import chalk from "chalk";
import { generateOwnerToken } from "../../utils/generateJwtToken.js";
import Owner from "../../models/owner.model.js";
import { validationResult } from "express-validator";
import OwnerRequest from "../../models/ownerRequest.model.js";

//  owner request controller when admin approves the owner, the owner can register and login

export const ownerRequest = async (req, res) => {
  const { name, email, phone } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, message: errors.array() });
  }
  try {
    const ownerRequest = await OwnerRequest.findOne({ email });
    if (ownerRequest) {
      return res
        .status(400)
        .json({ success: false, message: "Owner request already exists" });
    }
    const newOwnerRequest = new OwnerRequest({
      name,
      email,
      phone,
    });
    await newOwnerRequest.save();
    return res
      .status(201)
      .json({ success: true, message: "Owner request created successfully" });
  } catch (err) {
    console.log(chalk.red(err.message));
    return res.status(400).json({ success: false, message: err.message });
  }
};

export const registerOwner = async (req, res) => {
  const { name, email, phone, password } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, message: errors.array() });
  }

  try {
    const ownerRequest = await OwnerRequest.findOne({ email });

    if (!ownerRequest) {
      return res
        .status(400)
        .json({ success: false, message: "Owner request does not exist" });
    }

    if (ownerRequest.status === "pending") {
      return res
        .status(400)
        .json({ success: false, message: "Owner request is not approved" });
    }

    if (ownerRequest.status === "rejected") {
      return res
        .status(400)
        .json({ success: false, message: "Owner request is rejected" });
    }

    const owner = await Owner.findOne({ email });
    if (owner) {
      return res
        .status(400)
        .json({ success: false, message: "Owner already exists" });
    }
    const hashedPassword = await argon2.hash(password);

    const newOwner = new Owner({
      name,
      email,
      phone,
      password: hashedPassword,
    });
    await newOwner.save();
    const token = generateOwnerToken(newOwner);
    return res.status(201).json({
      success: true,
      message: "Owner created successfully",
      token,
      role: newOwner.role,
    });
  } catch (err) {
    console.log(chalk.red(err.message));
    return res.status(500).json({ success: false, message: err.message });
  }
};



export const loginOwner = async (req, res) => {
  const { email, password } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const owner = await Owner.findOne({ email });
    if (!owner) {
      return res
        .status(400)
        .json({ success: false, message: "Owner does not exist" });
    }
    const isPasswordCorrect = await argon2.verify(owner.password, password);
    if (!isPasswordCorrect) {
      return res
        .status(400)
        .json({ success: false, message: "Incorrect password" });
    }
    const token = generateOwnerToken(owner);
    return res
      .status(200)
      .json({
        success: true,
        message: "Login successful",
        token,
        role: owner.role,
      });
  } catch (err) {
    console.log(chalk.red(err.message));
    return res.status(400).json({ success: false, message: err.message });
  }
};

```

# server\controllers\owner\booking.controller.js

```js
import Booking from "../../models/booking.model.js";
import Turf from "../../models/turf.model.js";

export const getOwnerBookings = async (req, res) => {
  try {
    const ownerId = req.owner.id;

    // Find turfs owned by this owner
    const ownedTurfs = await Turf.find({ owner: ownerId }).select("_id");
    console.log(ownedTurfs.length, "ownedTurfs");

    if (ownedTurfs.length === 0) {
      console.log("No bookings found for this owner's turfs");
      return res.status(404).json({ message: "No turfs found for this owner" });
    }

    const turfIds = ownedTurfs.map((turf) => turf._id);

    const bookings = await Booking.aggregate([
      {
        $match: {
          turf: { $in: turfIds },
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "user",
          foreignField: "_id",
          as: "user",
        },
      },
      {
        $lookup: {
          from: "turves",
          localField: "turf",
          foreignField: "_id",
          as: "turf",
        },
      },
      {
        $lookup: {
          from: "timeslots",
          localField: "timeSlot",
          foreignField: "_id",
          as: "timeSlot",
        },
      },
      { $unwind: "$user" },
      { $unwind: "$turf" },
      { $unwind: "$timeSlot" },
      {
        $project: {
          id: "$_id",
          turfName: "$turf.name",
          userName: "$user.name",
          totalPrice: 1,
          bookingDate: "$createdAt",
          duration: {
            $divide: [
              { $subtract: ["$timeSlot.endTime", "$timeSlot.startTime"] },
              1000 * 60 * 60, // Convert milliseconds to hours
            ],
          },
          startTime: "$timeSlot.startTime",
          endTime: "$timeSlot.endTime",
        },
      },
      { $sort: { bookingDate: -1 } },
    ]);

    if (bookings.length === 0) {
      return res
        .status(404)
        .json({ message: "No bookings found for this owner's turfs" });
    }

    return res.status(200).json(bookings);
  } catch (error) {
    console.error("Error in getOwnerBookings:", error);
    res
      .status(500)
      .json({ message: "Error fetching bookings", error: error.message });
  }
};

```

# server\controllers\owner\bookingEnhanced.controller.js

```js
// server/controllers/owner/bookingEnhanced.controller.js
import Booking from "../../models/booking.model.js";
import Notification from "../../models/notification.model.js";
import Refund from "../../models/refund.model.js";
import razorpay from "../../config/razorpay.js";
import generateEmail from "../../utils/generateEmail.js";

export const getBookingAnalytics = async (req, res) => {
  try {
    const ownerId = req.owner.id;
    
    // Get bookings for owner's turfs
    const bookings = await Booking.find({
      turf: { $in: await Turf.find({ owner: ownerId }).select('_id') }
    });

    // Calculate analytics
    const analytics = {
      totalBookings: bookings.length,
      totalRevenue: bookings.reduce((sum, booking) => sum + booking.totalPrice, 0),
      cancelledBookings: bookings.filter(b => b.status === "cancelled").length,
      rescheduledBookings: bookings.filter(b => b.status === "rescheduled").length,
    };

    res.status(200).json(analytics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const rescheduleBooking = async (req, res) => {
  try {
    const { bookingId } = req.params;
    const { newDate, newTime, reason } = req.body;

    const booking = await Booking.findById(bookingId)
      .populate('user')
      .populate('turf');

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    // Store old time for reference
    const oldTime = booking.timeSlot;

    // Update booking status
    booking.status = "rescheduled";
    booking.rescheduledFrom = oldTime;
    
    // Create new time slot
    const newTimeSlot = await TimeSlot.create({
      turf: booking.turf._id,
      startTime: newDate,
      endTime: newTime
    });

    booking.timeSlot = newTimeSlot._id;
    await booking.save();

    // Create notification
    await Notification.create({
      user: booking.user._id,
      title: "Booking Rescheduled",
      message: `Your booking for ${booking.turf.name} has been rescheduled to ${newDate}`,
      type: "reschedule"
    });

    // Send email
    const emailContent = generateHTMLContent(
      "Booking Rescheduled",
      `Your booking has been rescheduled.\nNew Date: ${newDate}\nNew Time: ${newTime}\nReason: ${reason}`
    );
    await generateEmail(booking.user.email, "Booking Rescheduled", emailContent);

    res.status(200).json({ message: "Booking rescheduled successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const processRefund = async (req, res) => {
  try {
    const { bookingId } = req.params;
    const { reason } = req.body;

    const booking = await Booking.findById(bookingId).populate('user');

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    // Create Razorpay refund
    const refund = await razorpay.payments.refund(booking.payment.paymentId, {
      amount: booking.totalPrice * 100, // Convert to paise
      notes: {
        reason: reason,
        bookingId: bookingId
      }
    });

    // Create refund record
    await Refund.create({
      booking: bookingId,
      amount: booking.totalPrice,
      reason: reason,
      status: "processed",
      razorpayRefundId: refund.id
    });

    // Update booking
    booking.payment.refunded = true;
    await booking.save();

    // Create notification
    await Notification.create({
      user: booking.user._id,
      title: "Refund Processed",
      message: `Refund of ₹${booking.totalPrice} has been processed for your booking`,
      type: "refund"
    });

    // Send email
    const emailContent = generateHTMLContent(
      "Refund Processed",
      `Your refund of ₹${booking.totalPrice} has been processed.\nReason: ${reason}`
    );
    await generateEmail(booking.user.email, "Refund Processed", emailContent);

    res.status(200).json({ message: "Refund processed successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
```

# server\controllers\owner\bookingManagement.controller.js

```js
// server/controllers/owner/bookingManagement.controller.js
import Booking from '../../models/booking.model.js';
import TimeSlot from '../../models/timeSlot.model.js';
import generateEmail from '../../utils/generateEmail.js';

export const rescheduleBooking = async (req, res) => {
  try {
    const { bookingId } = req.params;
    const { date, time } = req.body;

    const booking = await Booking.findById(bookingId)
      .populate('user')
      .populate('turf');

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    // Update time slot
    const newTimeSlot = await TimeSlot.create({
      turf: booking.turf._id,
      startTime: new Date(`${date}T${time}`),
      endTime: new Date(`${date}T${time}`), // Add duration
    });

    booking.timeSlot = newTimeSlot._id;
    await booking.save();

    // Send email notification
    const emailContent = `Your booking has been rescheduled to ${date} at ${time}`;
    await generateEmail(booking.user.email, 'Booking Rescheduled', emailContent);

    res.status(200).json({ message: 'Booking rescheduled successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const cancelBooking = async (req, res) => {
  try {
    const { bookingId } = req.params;
    const { reason, isRefundRequired } = req.body;

    const booking = await Booking.findById(bookingId)
      .populate('user')
      .populate('turf');

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    booking.status = 'cancelled';
    booking.cancellationReason = reason;
    await booking.save();

    if (isRefundRequired) {
      // Implement refund logic here
      // Use Razorpay refund API
    }

    // Send email notification
    const emailContent = `Your booking has been cancelled. Reason: ${reason}`;
    await generateEmail(booking.user.email, 'Booking Cancelled', emailContent);

    res.status(200).json({ message: 'Booking cancelled successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
```

# server\controllers\owner\dashboard.controller.js

```js
import Booking from "../../models/booking.model.js";
import Review from "../../models/review.model.js";
import Turf from "../../models/turf.model.js";
import User from "../../models/user.model.js";
 

export const getDashboardData = async (req, res) => {
  try {
    const ownerId =  req.owner.id;

    // Step 1: Find all turfs owned by this owner
    const turfs = await Turf.find({ owner: ownerId }).select("_id name");
    const turfIds = turfs.map((turf) => turf._id);

    const [
      totalBookings,
      totalReviews,
      totalRevenue,
      bookingsPerTurf,
      revenueOverTime,
    ] = await Promise.all([
      Booking.countDocuments({ turf: { $in: turfIds } }),
      Review.countDocuments({ turf: { $in: turfIds } }),
      Booking.aggregate([
        { $match: { turf: { $in: turfIds } } },
        { $group: { _id: null, total: { $sum: "$totalPrice" } } },
      ]),
      Booking.aggregate([
        { $match: { turf: { $in: turfIds } } },
        { $group: { _id: "$turf", count: { $sum: 1 } } },
        {
          $lookup: {
            from: "turves",
            localField: "_id",
            foreignField: "_id",
            as: "turfInfo",
          },
        },
        { $unwind: "$turfInfo" },
        { $project: { name: "$turfInfo.name", bookings: "$count" } },
      ]),
      Booking.aggregate([
        { $match: { turf: { $in: turfIds } } },
        {
          $group: {
            _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
            revenue: { $sum: "$totalPrice" },
          },
        },
        { $sort: { _id: 1 } },
        { $limit: 30 },
      ]),
    ]);

   const  rifibookingsPerTurf =  await Booking.aggregate([
      { $match: { turf: { $in: turfIds } } },
      { $group: { _id: "$turf", bookings: { $sum: 1 } } },
      {
        $lookup: {
          from: "turfs",
          localField: "_id",
          foreignField: "_id",
          as: "turfInfo",
        },
      },
      { $unwind: "$turfInfo" },
      { $project: { name: "$turfInfo.name", bookings: 1 } },
    ]);
      console.log(rifibookingsPerTurf, "rifibookingsPerTurf");
    res.json({
      totalBookings,
      totalReviews,
      totalRevenue: totalRevenue[0]?.total || 0,
      totalTurfs: turfs.length,
      bookingsPerTurf,
      revenueOverTime,
    });
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    res
      .status(500)
      .json({ message: "Error fetching dashboard data", error: error.message });
  }
};
```

# server\controllers\owner\refund.controller.js

```js
import Booking from '../../models/booking.model.js';
import Refund from '../../models/refund.model.js';
import razorpay from '../../config/razorpay.js';
import generateEmail from '../../utils/generateEmail.js';

export const processRefund = async (req, res) => {
  try {
    const { bookingId } = req.params;
    const { reason, amount } = req.body;

    const booking = await Booking.findById(bookingId)
      .populate('user')
      .populate('turf');

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    // Process refund through Razorpay
    const refund = await razorpay.payments.refund(booking.payment.paymentId, {
      amount: amount * 100, // Convert to paise
      notes: {
        reason: reason,
        bookingId: bookingId
      }
    });

    // Create refund record
    const refundRecord = await Refund.create({
      booking: bookingId,
      amount: amount,
      reason: reason,
      razorpayRefundId: refund.id,
      status: 'processed'
    });

    // Update booking status
    booking.status = 'refunded';
    booking.refund = refundRecord._id;
    await booking.save();

    // Send email notification
    const emailContent = `
      <h1>Refund Processed</h1>
      <p>Your refund of ₹${amount} has been processed for booking #${bookingId}.</p>
      <p>Reason: ${reason}</p>
      <p>You should receive the refund in 5-7 business days.</p>
    `;

    await generateEmail(
      booking.user.email,
      'Refund Processed for Your Booking',
      emailContent
    );

    res.status(200).json({
      message: 'Refund processed successfully',
      refund: refundRecord
    });
  } catch (error) {
    console.error('Error processing refund:', error);
    res.status(500).json({
      message: 'Error processing refund',
      error: error.message
    });
  }
};

```

# server\controllers\owner\review.controller.js

```js
import Turf from "../../models/turf.model.js";
import Review from "../../models/review.model.js";

export const getTurfsWithReviews = async (req, res) => {
  const ownerId = req.owner.id;

  try {
    const turfs = await Turf.find({ owner: ownerId })
      .select("name reviews")
      .lean();

  
    // Fetch reviews for all turfs

    const turfIds = turfs.map((turf) => turf._id);
    const reviews = await Review.find({ turf: { $in: turfIds } })
      .populate("user", "name")
      .lean();

    // Calculate average rating and add reviews to each turf

    const turfsWithReviews = turfs.map((turf) => {
      const turfReviews = reviews.filter((review) =>
        review.turf.equals(turf._id)
      );
      const avgRating =
        turfReviews.reduce((sum, review) => sum + review.rating, 0) /
        (turfReviews.length || 1);
      return {
        id: turf._id,
        name: turf.name,
        avgRating: parseFloat(avgRating.toFixed(1)),
        reviews: turfReviews.map((review) => ({
          id: review._id,
          userName: review.user.name,
          rating: review.rating,
          comment: review.comment,
          createdAt: review.createdAt,
        })),
      };
    });

    return res.status(200).json(turfsWithReviews);
  } catch (error) {
    console.error("Error in getTurfsWithReviews", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

```

# server\controllers\owner\turf.controller.js

```js
import { validationResult } from "express-validator";
import cloudinary from "../../utils/cloudinary.js";
import Turf from "../../models/turf.model.js";
import chalk from "chalk";
import Review from "../../models/review.model.js"

export const turfRegister = async (req, res) => {
  const image = req.file.path;
  const owner = req.owner.id;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, message: errors.array() });
  }
  try {
    // upload the turf image to cloudinary
    const turfImage = await cloudinary.uploader.upload(image, {
      folder: "RiField/turfs",
    });
    const turf = new Turf({
      image: turfImage.secure_url,
      owner,
      ...req.body,
    });
    await turf.save();
    return res
      .status(201)
      .json({ success: true, message: "Turf created successfully" });
  } catch (err) {
    console.error(chalk.red(err.message));
    return res.status(500).json({ success: false, message: err.message });
  }
};

// get all turfs by owner id

export const getTurfByOwner = async (req, res) => {
  const ownerId = req.owner.id;

  try {
    const turfs = await Turf.find({ owner: ownerId });

    // get all reviews by turf id of owner
    const turfsWithAvgRating = await Promise.all(
      turfs.map(async (turf) => {
        const reviewCount = turf.reviews.length;
        const avgRating =
          reviewCount > 0
            ? await Review.aggregate([
                { $match: { turf: turf._id } },
                { $group: { _id: null, avgRating: { $avg: "$rating" } } },
              ])
            : 0;
        return {
          ...turf.toObject(),
          avgRating: avgRating[0] ? avgRating[0].avgRating : 0,
        };
      })
    );
 
    return res.status(200).json(turfsWithAvgRating);
  } catch (err) {
    console.error("Error getting turfs by ownerId", err);
    return res.status(500).json({ success: false, message: err.message });
  }
};

//  edit turf by id

export const editTurfById = async (req, res) => {
  const owner = req.owner.id;

  const { id } = req.params;
  const { sportTypes, sportsType, ...otherDetails } = req.body;
  if (req.body.sportsType) {
    sportTypes.push(sportsType);
  }
 

  const updatedTurfData = {
    ...otherDetails,
    sportTypes,
  };

  try {
    const updatedTurf = await Turf.findOne({ owner: owner, _id: id });
    if (!updatedTurf) {
      return res
        .status(404)
        .json({ success: false, message: "Turf not found" });
    }

    await Turf.findOneAndUpdate({ owner: owner, _id: id }, updatedTurfData, {
      new: true,
    });
    const allTurfs = await Turf.find({ owner: owner });
    return res
      .status(200)
      .json({ success: true, message: "Turf updated successfully", allTurfs });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ success: false, message: err.message });
  }
};

```

# server\controllers\user\auth.controller.js

```js
import * as argon2 from "argon2";
import chalk from "chalk";
import User from "../../models/user.model.js";
import { generateUserToken } from "../../utils/generateJwtToken.js";
import { validationResult } from "express-validator";

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, message: errors.array() });
  }

  try {
    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }
    const hashedPassword = await argon2.hash(password);

    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    const token = generateUserToken(newUser._id);
    return res
      .status(201)
      .json({ success: true, message: "User created successfully", token });
  } catch (err) {
    console.log(chalk.red(err.message));
    return res.status(400).json({ success: false, message: err.message });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email" });
    }
    const isPasswordCorrect = await argon2.verify(user.password, password);
    if (!isPasswordCorrect) {
      return res
        .status(400)
        .json({ success: false, message: "Incorrect password" });
    }
    const token = generateUserToken(user._id);
    return res
      .status(200)
      .json({ success: true, message: "Login successful", token });
  } catch (err) {
    console.log(chalk.red(err.message));
    return res.status(400).json({ success: false, message: err.message });
  }
};

```

# server\controllers\user\booking.controller.js

```js
import adjustTime from "../../utils/adjustTime.js";
import razorpay from "../../config/razorpay.js";
import crypto from "crypto";
import Booking from "../../models/booking.model.js";
import TimeSlot from "../../models/timeSlot.model.js";
import generateQRCode from "../../utils/generateQRCode.js";
import Turf from "../../models/turf.model.js";
import generateEmail, {
  generateHTMLContent,
} from "../../utils/generateEmail.js";
import User from "../../models/user.model.js";
import { format, parseISO } from "date-fns";

export const createOrder = async (req, res) => {
  const userId = req.user.user;
  try {
    const { totalPrice } = req.body;
    // select only name and contact and email
    const user = await User.findById(userId).select("name  email");
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const options = {
      amount: totalPrice * 100,
      currency: "INR",
      receipt: `receipt${Date.now()}`,
    };
    const order = await razorpay.orders.create(options);
    return res.status(200).json({ order, user });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const verifyPayment = async (req, res) => {
  const userId = req.user.user;

  const {
    id: turfId,
    duration,
    startTime,
    endTime,
    selectedTurfDate,
    totalPrice,
    paymentId,
    orderId,
    razorpay_signature,
  } = req.body;

  try {
    const formattedStartTime = format(parseISO(startTime), "hh:mm a");
    const formattedEndTime = format(parseISO(endTime), "hh:mm a");
    const formattedDate = format(parseISO(selectedTurfDate), "d MMM yyyy");

    // verify the Razorpay signature
    const hmac = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET);
    hmac.update(`${orderId}|${paymentId}`);
    const generatedSignature = hmac.digest("hex");
    if (generatedSignature !== razorpay_signature) {
      console.log("Payment Verification Failed");
      return res
        .status(400)
        .json({ success: false, message: "Payment Verification Failed" });
    }

    // payment successful

    //  why format here?
    // This time is storing in DB for the time slot that is created
    const adjustedStartTime = adjustTime(startTime, selectedTurfDate);
    const adjustedEndTime = adjustTime(endTime, selectedTurfDate);

    const [user, turf] = await Promise.all([
      User.findById(userId),
      Turf.findById(turfId),
    ]);
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    if (!turf) {
      return res
        .status(404)
        .json({ success: false, message: "Turf not found" });
    }

    //  generate QR code
    const QRcode = await generateQRCode(
      totalPrice,
      formattedStartTime,
      formattedEndTime,
      formattedDate,
      turf.name,
      turf.location
    );

    // Create time slot and booking

    const [timeSlot, booking] = await Promise.all([
      TimeSlot.create({
        turf: turfId,
        startTime: adjustedStartTime,
        endTime: adjustedEndTime,
      }),
      Booking.create({
        user: userId,
        turf: turfId,
        timeSlot: null, // Will be updated after TimeSlot is created
        totalPrice,
        qrCode: QRcode,
        payment: { orderId, paymentId },
      }),
    ]);

    // Update the booking with time slot

    booking.timeSlot = timeSlot._id;

    await Promise.all([
      booking.save(),
      User.findByIdAndUpdate(userId, { $push: { bookings: booking._id } }),
    ]);

    // Generate and send email
    const htmlContent = generateHTMLContent(
      turf.name,
      turf.location,
      formattedDate,
      formattedStartTime,
      formattedEndTime,
      totalPrice,
      QRcode
    );

    await generateEmail(user.email, "Booking Confirmation", htmlContent);
    return res.status(200).json({
      success: true,
      message: "Booking successful, Check your email for the receipt",
    });
  } catch (error) {
    console.error("Error in verifyPayment", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while processing your booking",
    });
  }
};

// get bookings for a user
export const getBookings = async (req, res) => {
  const userId = req.user.user;
  try {
  const bookings = await Booking.find({ user: userId })
    .sort({ createdAt: -1 })
    .select("qrCode totalPrice")
    .populate("timeSlot", "startTime endTime")
    .populate("turf", "name location");
      console.log(bookings, "bookings");
    return res.status(200).json(bookings);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

```

# server\controllers\user\review.controller.js

```js
import Review from "../../models/review.model.js";
import Turf from "../../models/turf.model.js";


export const addReview = async (req, res) => {
   const userId = req.user.user;
  const { id } = req.params;
  const { rating, review:comment } = req.body;

  if (!rating || !comment) {
    return res
      .status(400)
      .json({ message: "Please provide all the required fields" });
  }
  try {
    const turf = await Turf.findById(id);
    const review = new Review({
      user: userId,
      turf: id,
      rating,
      comment,
    });

    turf.reviews.push(review._id);
    
    await Promise.all([turf.save(), review.save()]);
    return res.status(201).json({ message: "Review added successfully" });
  } catch (error) {
    console.error("Error in addReview", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const viewReviewsByTurf = async (req, res) => {
  const { id } = req.params; // turf id
  try {
    const reviews = await Review.find({ turf: id }).sort({ createdAt: -1 }).populate("user", "name")
    const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length; // average rating
     return res
       .status(200)
       .json({
         message: "Reviews retrieved successfully",
         reviews,
         averageRating,
       });
  } catch (error) {
    console.error("Error in viewReviewsByTurf", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

```

# server\controllers\user\turf.controller.js

```js
import chalk from "chalk";
import Turf from "../../models/turf.model.js";
import TimeSlot from "../../models/timeSlot.model.js";
import { format, parseISO, startOfDay } from "date-fns";

// get all turfs
export const getAllTurfs = async (req, res) => {
  try {
    const turfs = await Turf.find({});
    return res.status(200).json({ turfs });
  } catch (err) {
    console.log(chalk.red("Error in getAllTurfs"), err);
    return res.status(500).json({ message: err.message });
  }
};

// get single turf by id

export const getTurfById = async (req, res) => {
  const { id } = req.params;
  try {
    const turf = await Turf.findById(id);
    if (!turf) {
      return res.status(404).json({ message: "Turf not found" });
    }
    return res.status(200).json({ turf });
  } catch (error) {
    console.log(chalk.red("Error in getTurfById"), error);
    return res.status(500).json({ message: error.message });
  }
};

// get time slots by turf id

export const getTimeSlotByTurfId = async (req, res) => {
  const { date, turfId } = req.query;

  const selectedDate = new Date(date);
  const startOfSelectedDate = startOfDay(selectedDate);
  const endOfSelectedDate = new Date(startOfSelectedDate);
  endOfSelectedDate.setDate(endOfSelectedDate.getDate() + 1);

  const query = {
    turf: turfId,
    startTime: { $gte: startOfSelectedDate },
    endTime: { $lt: endOfSelectedDate },
  };

  try {
    // get all time slot when there is no turfid  in Timeslot db
    const bookedTime = await TimeSlot.find(query);
    const timeSlots = await Turf.findById(turfId).select([
      "openTime",
      "closeTime",
      "pricePerHour",
    ]);
    return res.status(200).json({ timeSlots, bookedTime });
  } catch (error) {
    console.log(chalk.red("Error in getTimeSlotByTurfId"), error);
    return res.status(500).json({ message: error.message });
  }
};

```

# server\env.sample

```sample
OWNER_URL = // owner url for sending email to owner
USER_URL =  // user url for sending email to user

MONGO_URI =   // mongodb url

JWT_SECRET =  // jwt secret

EMAIL =  // email for sending email
// password will get from app password in google account
PASSWORD =  // password for sending email


PORT = 1234

//  This details will get from cloudinary account
CLOUDINARY_CLOUD_NAME =  // cloudinary cloud name
CLOUDINARY_API_KEY =  // cloudinary api key
CLOUDINARY_API_SECRET =  // cloudinary api secret


// This details will get from razorpay account
RAZORPAY_KEY_ID =  // razorpay key id
RAZORPAY_KEY_SECRET = // razorpay key secret


// For further details about this project contact me : rijobdk@gmail.com

```

# server\middleware\jwt\admin.middleware.js

```js
import jwt from "jsonwebtoken";

const verifyAdminToken = async (req, res, next) => {
  try {
    const header = req.headers.authorization;
    if (!header) {
      return res.status(401).json({ message: "Invalid authorization" });
    }
    const token = header.split(" ")[1];
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "No token , authorization denied" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(403).json({
        success: false,
        message: "Invalid token , authorization denied",
      });
    }
    req.admin = decoded;
    if (req.admin.role !== "admin") {
      return res.status(403).json({ success: false, message: "Unauthorized" });
    }
    next();
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export default verifyAdminToken;

```

# server\middleware\jwt\owner.middleware.js

```js
import jwt from "jsonwebtoken";

const verifyOwnerToken = async (req, res, next) => {
  try {
    const header = req.headers.authorization;
    if (!header)
      return res.status(401).json({ message: "Invalid authorization" });
    const token = header.split(" ")[1];
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "No token , authorization denied" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res
        .status(403)
        .json({
          success: false,
          message: "Invalid token , authorization denied",
        });
    }
    req.owner = decoded;
    if(req.owner.role !=="owner"){
        return res.status(403).json({ success: false, message: "Unauthorized" });
    }
    next();
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

export default verifyOwnerToken;

```

# server\middleware\jwt\user.middleware.js

```js
import jwt from "jsonwebtoken";

const verifyUserToken = async (req, res, next) => {
  try {
    const header = req.headers.authorization;
    if (!header) {
      // No token provided
      return res
        .status(401)
        .json({ message: "Unauthorized: No token provided" });
    }
    const token = header.split(" ")[1];
    if (!token) {
      // No token provided
      return res
        .status(401)
        .json({ message: "Unauthorized: No token provided" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      // Invalid token
      return res.status(403).json({ message: "Forbidden: Invalid token" });
    }
    // Attach the decoded user information to the request
    req.user = decoded;
    next();
  } catch (err) {
    // Internal server error
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default verifyUserToken;

```

# server\middleware\uploads\upload.middleware.js

```js
import multer from "multer";

const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({storage});
export default upload;
```

# server\middleware\validators\owner\authValidator.js

```js
import { body } from "express-validator";

export const validateRegisterInput = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Email is invalid"),
  body("phone").isMobilePhone("en-IN").withMessage("Phone number is invalid"),
  body("password").notEmpty().withMessage("Password is required"),
  body("confirmPassword").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Passwords do not match");
    }
    return true;
  }),
];

export const validateLoginInput = [
  body("email").isEmail().withMessage("Email is invalid"),
  body("password").notEmpty().withMessage("Password is required"),
];

export const validateOwnerRequestInput = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Email is invalid"),
  body("phone").isMobilePhone("en-IN").withMessage("Phone number is invalid"),
];

```

# server\middleware\validators\owner\turfValidator.js

```js
import { body } from "express-validator";

export const validateTurfInput = [
  body("name").notEmpty().withMessage("Name is required"),
  body("description").notEmpty().withMessage("Description is required"),
  body("location").notEmpty().withMessage("Location is required"),
  body("sportTypes").notEmpty().withMessage("Sport types is required"),
  body("pricePerHour")
    .notEmpty()
    .withMessage("Price per hour is required")
    .isNumeric()
    .withMessage("Price per hour must be a number"),
];

```

# server\middleware\validators\user\authValidator.js

```js
import { body } from "express-validator";

export const validateRegisterInput = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Email is invalid"),
  body("password").notEmpty().withMessage("Password is required"),
  body("confirmPassword").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Passwords do not match");
    }
    return true;
  }),
];

export const validateLoginInput = [
    body("email").isEmail().withMessage("Email is invalid"),
    body("password").notEmpty().withMessage("Password is required"),
];

```

# server\models\booking.model.js

```js
// server/models/booking.model.js
import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  turf: { type: mongoose.Schema.Types.ObjectId, ref: "Turf" },
  timeSlot: { type: mongoose.Schema.Types.ObjectId, ref: "TimeSlot" },
  totalPrice: { type: Number, required: true },
  status: { 
    type: String, 
    enum: ["confirmed", "cancelled", "rescheduled", "completed"],
    default: "confirmed"
  },
  cancellationReason: { type: String },
  rescheduledFrom: { type: Date },
  qrCode: { type: String, required: true },
  payment: {
    orderId: { type: String, required: true },
    paymentId: { type: String, required: true },
    refunded: { type: Boolean, default: false }
  },
}, { timestamps: true });

export default mongoose.model("Booking", bookingSchema);
```

# server\models\notification.model.js

```js
import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: { type: String, required: true },
  message: { type: String, required: true },
  type: { type: String, enum: ["booking", "cancellation", "reschedule", "refund"] },
  isRead: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.model("Notification", notificationSchema);
```

# server\models\owner.model.js

```js
import mongoose from "mongoose";

const ownerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    role: { type: String, enum: ["admin", "owner"], default: "owner" },
  },
  { timestamps: true }
);

export default mongoose.model("Owner", ownerSchema);

```

# server\models\ownerRequest.model.js

```js
import mongoose from "mongoose";

const ownerRequestSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email:{type:String, required: true, unique: true},
    phone:{type:String, required: true},
    status:{type:String, enum: ["pending", "approved", "rejected"], default: "pending"},
}, { timestamps: true });

export default mongoose.model("OwnerRequest", ownerRequestSchema);
```

# server\models\refund.model.js

```js
import mongoose from "mongoose";

const refundSchema = new mongoose.Schema({
  booking: { type: mongoose.Schema.Types.ObjectId, ref: "Booking" },
  amount: { type: Number, required: true },
  reason: { type: String, required: true },
  razorpayRefundId: { type: String },
  status: {
    type: String,
    enum: ["pending", "processed", "failed"],
    default: "pending"
  },
}, { timestamps: true });

export default mongoose.model("Refund", refundSchema);
```

# server\models\review.model.js

```js
import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId, ref:'User', required:true},
    turf:{type:mongoose.Schema.Types.ObjectId, ref:'Turf', required:true},
    rating:{type:Number, required:true},
    comment:{type:String, required:true},
}, { timestamps: true });

export default mongoose.model("Review", reviewSchema);
```

# server\models\timeSlot.model.js

```js
import mongoose from "mongoose";

const timeSlotSchema = new mongoose.Schema({
    turf:{ type:mongoose.Schema.Types.ObjectId, ref:'Turf'},
    startTime: {type:Date, required:true},
    endTime: {type:Date, required:true},
 }, { timestamps: true });

export default mongoose.model("TimeSlot", timeSlotSchema);
```

# server\models\turf.model.js

```js
import mongoose from "mongoose";

const turfSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    image: { type: String, required: true },
    sportTypes: [{ type: String, required: true }],
    pricePerHour: { type: Number, required: true },
    openTime: { type: String, required: true },
    closeTime: { type: String, required: true },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Owner",
      required: true,
    },
  },
  { timestamps: true }
);

const Turf = mongoose.model("Turf", turfSchema);

export default Turf;

```

# server\models\user.model.js

```js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique: true},
    password:{type:String, required:true},
    bookings:[{type:mongoose.Schema.Types.ObjectId, ref:'Booking'}],
 }, {timestamps: true});

const User = mongoose.model("User", userSchema);

export default User;
```

# server\package.json

```json
{
  "name": "server",
  "version": "1.0.0",
  "main": "server.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js",
    "server": "nodemon server.js",
    "create-admin": "node scripts/createAdmin.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "devDependencies": {
    "nodemon": "^3.1.4"
  },
  "dependencies": {
    "argon2": "^0.40.3",
    "chalk": "^5.3.0",
    "cloudinary": "^2.3.0",
    "cors": "^2.8.5",
    "date-fns": "^3.6.0",
    "dotenv": "^16.4.5",
    "express": "^4.21.1",
    "express-validator": "^7.1.0",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.8.0",
    "multer": "^1.4.5-lts.1",
    "nodemailer": "^6.9.16",
    "pdf-lib": "^1.17.1",
    "qrcode": "^1.5.3",
    "razorpay": "^2.9.5",
    "recharts": "^2.13.3"
  }
}

```

# server\project-structure.txt

```txt
��s e r v e r  
 %      . e n v  
 %      . g i t i g n o r e  
 %      e n v . s a m p l e  
 %      p a c k a g e - l o c k . j s o n  
 %      p a c k a g e . j s o n  
 %      p r o j e c t - s t r u c t u r e . t x t  
 %      s e r v e r . j s  
 %      v e r c e l . j s o n  
 % 
 % % % %c o n f i g  
 %              d a t a b a s e . j s  
 %              r a z o r p a y . j s  
 % 
 % % % %c o n t r o l l e r s  
 %      % % % %a d m i n  
 %      %              d a s h b o a r d . c o n t r o l l e r . j s  
 %      %              o w n e r M a n a g e m e n t . c o n t r o l l e r . j s  
 %      %              r e q u e s t M a n a g e m e n t . c o n t r o l l e r . j s  
 %      %              t r a n s a c t i o n . c o n t r o l l e r . j s  
 %      %              t u r f . c o n t r o l l e r . j s  
 %      %              u s e r M a n a g e m e n t . c o n t r o l l e r . j s  
 %      % 
 %      % % % %o w n e r  
 %      %              a n a l y t i c s . c o n t r o l l e r . j s  
 %      %              a u t h . c o n t r o l l e r . j s  
 %      %              b o o k i n g . c o n t r o l l e r . j s  
 %      %              b o o k i n g E n h a n c e d . c o n t r o l l e r . j s  
 %      %              b o o k i n g M a n a g e m e n t . c o n t r o l l e r . j s  
 %      %              d a s h b o a r d . c o n t r o l l e r . j s  
 %      %              r e f u n d . c o n t r o l l e r . j s  
 %      %              r e v i e w . c o n t r o l l e r . j s  
 %      %              t u r f . c o n t r o l l e r . j s  
 %      % 
 %      % % % %u s e r  
 %                      a u t h . c o n t r o l l e r . j s  
 %                      b o o k i n g . c o n t r o l l e r . j s  
 %                      r e v i e w . c o n t r o l l e r . j s  
 %                      t u r f . c o n t r o l l e r . j s  
 % 
 % % % %m i d d l e w a r e  
 %      % % % %j w t  
 %      %              a d m i n . m i d d l e w a r e . j s  
 %      %              o w n e r . m i d d l e w a r e . j s  
 %      %              u s e r . m i d d l e w a r e . j s  
 %      % 
 %      % % % %u p l o a d s  
 %      %              u p l o a d . m i d d l e w a r e . j s  
 %      % 
 %      % % % %v a l i d a t o r s  
 %              % % % %o w n e r  
 %              %              a u t h V a l i d a t o r . j s  
 %              %              t u r f V a l i d a t o r . j s  
 %              % 
 %              % % % %u s e r  
 %                              a u t h V a l i d a t o r . j s  
 % 
 % % % %m o d e l s  
 %              b o o k i n g . m o d e l . j s  
 %              n o t i f i c a t i o n . m o d e l . j s  
 %              o w n e r . m o d e l . j s  
 %              o w n e r R e q u e s t . m o d e l . j s  
 %              r e f u n d . m o d e l . j s  
 %              r e v i e w . m o d e l . j s  
 %              t i m e S l o t . m o d e l . j s  
 %              t u r f . m o d e l . j s  
 %              u s e r . m o d e l . j s  
 % 
 % % % %r o u t e s  
 %      %      i n d e x . j s  
 %      % 
 %      % % % %a d m i n  
 %      %              a d m i n . r o u t e s . j s  
 %      %              d a s h b o a r d . r o u t e s . j s  
 %      %              o w n e r M a n a g e m e n t . r o u t e s . j s  
 %      %              r e q u e s t M a n a g e m e n t . r o u t e s . j s  
 %      %              t r a n s a c t i o n . r o u t e s . j s  
 %      %              t u r f . r o u t e s . j s  
 %      %              u s e r M a n a g e m e n t . r o u t e s . j s  
 %      % 
 %      % % % %o w n e r  
 %      %              a n a l y t i c s . r o u t e s . j s  
 %      %              a u t h . r o u t e s . j s  
 %      %              b o o k i n g E n h a n c e d . r o u t e s . j s  
 %      %              b o o k i n g M a n a g e m e n t . r o u t e s . j s  
 %      %              b o o k i n g s . r o u t e s . j s  
 %      %              d a s h b o a r d . r o u t e s . j s  
 %      %              o w n e r . r o u t e s . j s  
 %      %              r e f u n d . r o u t e s . j s  
 %      %              r e v i e w s . r o u t e s . j s  
 %      %              t u r f . r o u t e s . j s  
 %      % 
 %      % % % %u s e r  
 %                      a u t h . r o u t e s . j s  
 %                      b o o k i n g . r o u t e s . j s  
 %                      r e v i e w . r o u t e s . j s  
 %                      t u r f . r o u t e s . j s  
 %                      u s e r . r o u t e s . j s  
 % 
 % % % %s c r i p t s  
 %              c r e a t e A d m i n . j s  
 % 
 % % % %u t i l s  
                 a d j u s t T i m e . j s  
                 c l o u d i n a r y . j s  
                 e r r o r H a n d l e r . j s  
                 g e n e r a t e E m a i l . j s  
                 g e n e r a t e H T M L C o n t e n t . j s  
                 g e n e r a t e J w t T o k e n . j s  
                 g e n e r a t e Q R C o d e . j s  
 
```

# server\routes\admin\admin.routes.js

```js
import { Router } from "express"

import turfRouter from "./turf.routes.js"
import dashboardRouter from "./dashboard.routes.js";
import transactionRouter from "./transaction.routes.js"
import userManagementRouter from "./userManagement.routes.js"
import ownerRequestRouter from "./requestManagement.routes.js"
import ownerManagementRouter from "./ownerManagement.routes.js"
import verifyAdminToken from "../../middleware/jwt/admin.middleware.js"

const adminRouter = Router()

adminRouter.use("/owner-requests", verifyAdminToken, ownerRequestRouter);
adminRouter.use("/users", verifyAdminToken, userManagementRouter);
adminRouter.use("/owners", verifyAdminToken, ownerManagementRouter);
adminRouter.use("/turfs", verifyAdminToken, turfRouter);
adminRouter.use("/dashboard", verifyAdminToken, dashboardRouter);
adminRouter.use("/transactions", verifyAdminToken, transactionRouter);

export default adminRouter;


```

# server\routes\admin\dashboard.routes.js

```js
import express from "express";
import  getDashboard  from "../../controllers/admin/dashboard.controller.js";

const dashboardRouter = express.Router();

dashboardRouter.get("/", getDashboard);

export default dashboardRouter;

```

# server\routes\admin\ownerManagement.routes.js

```js
import { Router } from "express";
import {
  getAllOwners,
  getTurfByOwnerId,
} from "../../controllers/admin/ownerManagement.controller.js";

const ownerManagementRouter = Router();

ownerManagementRouter.get("/list",getAllOwners);
ownerManagementRouter.get("/:id/turf",getTurfByOwnerId);

export default ownerManagementRouter;
```

# server\routes\admin\requestManagement.routes.js

```js
import { Router } from "express";
import {
  getAllRequestedOwners,
  approveOwnerRequest,
  deleteOwnerRequest,
  reconsiderOwnerRequest,
} from "../../controllers/admin/requestManagement.controller.js";


const ownerRequestRouter = Router();

ownerRequestRouter.get("/list",getAllRequestedOwners);
ownerRequestRouter.put("/:id/accept",approveOwnerRequest);
ownerRequestRouter.delete("/:id",deleteOwnerRequest);
ownerRequestRouter.put("/reconsider/:id",reconsiderOwnerRequest);

export default ownerRequestRouter;
```

# server\routes\admin\transaction.routes.js

```js
import express from "express";         
import {getAllTransaction} from "../../controllers/admin/transaction.controller.js";
const transactionRouter = express.Router();

transactionRouter.get("/", getAllTransaction);

export default transactionRouter;
```

# server\routes\admin\turf.routes.js

```js
import { Router } from "express";
import { getAllTurfs } from "../../controllers/admin/turf.controller.js";
import verifyAdminToken from "../../middleware/jwt/admin.middleware.js";

const turfRouter = Router();

turfRouter.get("/all", verifyAdminToken,getAllTurfs);

export default turfRouter;
```

# server\routes\admin\userManagement.routes.js

```js
import express from "express";
import {getAllUsers} from "../../controllers/admin/userManagement.controller.js"
import verifyAdminToken from "../../middleware/jwt/admin.middleware.js";

const userManagementRouter = express.Router();

userManagementRouter.get("/all", getAllUsers);

export default userManagementRouter;


```

# server\routes\index.js

```js
import { Router } from "express";
import userRouter from "./user/user.routes.js";
import ownerRouter from "./owner/owner.routes.js";
import adminRouter from "./admin/admin.routes.js";

const rootRouter = Router();

rootRouter.use("/user", userRouter);
rootRouter.use("/owner", ownerRouter)
rootRouter.use("/admin", adminRouter)

export default rootRouter;

```

# server\routes\owner\analytics.routes.js

```js
import { Router } from 'express';
import { getRevenueAnalytics } from '../../controllers/owner/analytics.controller.js';
import verifyOwnerToken from '../../middleware/jwt/owner.middleware.js';

const router = Router();

router.get('/revenue', verifyOwnerToken, getRevenueAnalytics);

export default router;
```

# server\routes\owner\auth.routes.js

```js
import { Router } from "express";
import {
  registerOwner,
  loginOwner,
  ownerRequest,
} from "../../controllers/owner/auth.controller.js";
import {
  validateRegisterInput,
  validateLoginInput,
  validateOwnerRequestInput,
} from "../../middleware/validators/owner/authValidator.js";

const authRouter = Router();
authRouter.post("/register",validateRegisterInput,  registerOwner);
authRouter.post("/login",validateLoginInput, loginOwner);
authRouter.post("/ownerRequest",validateOwnerRequestInput, ownerRequest);

export default authRouter;




```

# server\routes\owner\bookingEnhanced.routes.js

```js
// server/routes/owner/bookingEnhanced.routes.js
import { Router } from "express";
import { 
  getBookingAnalytics, 
  rescheduleBooking, 
  processRefund 
} from "../../controllers/owner/bookingEnhanced.controller.js";
import verifyOwnerToken from "../../middleware/jwt/owner.middleware.js";

const router = Router();

router.get("/analytics", verifyOwnerToken, getBookingAnalytics);
router.put("/reschedule/:bookingId", verifyOwnerToken, rescheduleBooking);
router.post("/refund/:bookingId", verifyOwnerToken, processRefund);

export default router;
```

# server\routes\owner\bookingManagement.routes.js

```js
// server/routes/owner/bookingManagement.routes.js
import { Router } from 'express';
import { rescheduleBooking, cancelBooking } from '../../controllers/owner/bookingManagement.controller.js';
import verifyOwnerToken from '../../middleware/jwt/owner.middleware.js';

const router = Router();

router.put('/reschedule/:bookingId', verifyOwnerToken, rescheduleBooking);
router.put('/cancel/:bookingId', verifyOwnerToken, cancelBooking);

export default router;
```

# server\routes\owner\bookings.routes.js

```js
import express from "express";
import {getOwnerBookings} from "../../controllers/owner/booking.controller.js";
import verifyOwnerToken from "../../middleware/jwt/owner.middleware.js";

const bookingsRouter = express.Router();
bookingsRouter.get("/", verifyOwnerToken, getOwnerBookings);


export default bookingsRouter;
```

# server\routes\owner\dashboard.routes.js

```js
import express from "express";
import { getDashboardData} from "../../controllers/owner/dashboard.controller.js"
import verifyOwnerToken from "../../middleware/jwt/owner.middleware.js";

const dashboardRouter = express.Router();

dashboardRouter.get("/", verifyOwnerToken, getDashboardData);

export default dashboardRouter;
```

# server\routes\owner\owner.routes.js

```js
import { Router } from "express"
import authRouter from "./auth.routes.js"
import turfRouter from "./turf.routes.js"
import reviewsRouter from "./reviews.routes.js"
import bookingsRouter from "./bookings.routes.js"
import dashboardRouter from "./dashboard.routes.js"
import refundRouter from './refund.routes.js';
import bookingEnhancedRouter from './bookingEnhanced.routes.js';
import analyticsRouter from './analytics.routes.js';

const ownerRouter = Router()


ownerRouter.use("/auth",authRouter);
ownerRouter.use("/turf",turfRouter);
ownerRouter.use("/reviews",reviewsRouter);
ownerRouter.use("/bookings",bookingsRouter);
ownerRouter.use("/dashboard", dashboardRouter)
ownerRouter.use("/refund", refundRouter);
ownerRouter.use("/bookingEnhanced", bookingEnhancedRouter);
ownerRouter.use("/analytics", analyticsRouter);
export default ownerRouter;

```

# server\routes\owner\refund.routes.js

```js
import { Router } from 'express';
import { processRefund } from '../../controllers/owner/refund.controller.js';
import verifyOwnerToken from '../../middleware/jwt/owner.middleware.js';

const router = Router();

router.post('/:bookingId/refund', verifyOwnerToken, processRefund);

export default router;
```

# server\routes\owner\reviews.routes.js

```js
import {Router} from "express";
import verifyOwnerToken from "../../middleware/jwt/owner.middleware.js";

import { getTurfsWithReviews } from "../../controllers/owner/review.controller.js";
const reviewsRouter = Router();

reviewsRouter.get("/turfs-with-reviews", verifyOwnerToken, getTurfsWithReviews);

export default reviewsRouter;
```

# server\routes\owner\turf.routes.js

```js
import { Router } from "express";
 import {
  turfRegister,
  getTurfByOwner,
  editTurfById,
} from "../../controllers/owner/turf.controller.js";
import upload from "../../middleware/uploads/upload.middleware.js";
import verifyOwnerToken from "../../middleware/jwt/owner.middleware.js";

const turfRouter = Router();

turfRouter.post(
  "/register",
  verifyOwnerToken,
  upload.single("image"),
  
  turfRegister
);

turfRouter.get("/all", verifyOwnerToken, getTurfByOwner);
turfRouter.put("/:id", verifyOwnerToken,  editTurfById);


export default turfRouter;

```

# server\routes\user\auth.routes.js

```js
import { Router } from "express";
import {
  registerUser,
  loginUser,
} from "../../controllers/user/auth.controller.js";
import {
  validateRegisterInput,
  validateLoginInput,
} from "../../middleware/validators/user/authValidator.js";

const authRouter = Router();
authRouter.post("/register", validateRegisterInput, registerUser);
authRouter.post("/login", validateLoginInput, loginUser);

export default authRouter;

```

# server\routes\user\booking.routes.js

```js
import { Router } from "express";
import {
  verifyPayment,
  createOrder,
  getBookings,
} from "../../controllers/user/booking.controller.js";
import verifyUserToken from "../../middleware/jwt/user.middleware.js";

const bookingRouter = Router();

bookingRouter.post("/create-order", verifyUserToken, createOrder);
bookingRouter.post("/verify-payment", verifyUserToken, verifyPayment);
bookingRouter.get("/get-bookings", verifyUserToken, getBookings);

export default bookingRouter;

```

# server\routes\user\review.routes.js

```js
import express from "express";
import {
  addReview,
  viewReviewsByTurf,
} from "../../controllers/user/review.controller.js";
import verifyUserToken from "../../middleware/jwt/user.middleware.js";

const reviewRouter = express.Router();

reviewRouter.post("/:id", verifyUserToken, addReview);
reviewRouter.get("/:id", viewReviewsByTurf);

export default reviewRouter;

```

# server\routes\user\turf.routes.js

```js
import { Router } from "express";
import {
  getAllTurfs,
  getTurfById,
  getTimeSlotByTurfId,
} from "../../controllers/user/turf.controller.js";

const turfRouter = Router();

// get all turfs
turfRouter.get("/all", getAllTurfs);
// get single turf by id
turfRouter.get("/details/:id", getTurfById);
// get time slots by turf id pass with query
turfRouter.get("/timeSlot", getTimeSlotByTurfId);
// update time slots by turf id pass with query



export default turfRouter;

```

# server\routes\user\user.routes.js

```js
import { Router } from "express";
import authRouter from "./auth.routes.js"
import turfRouter from "./turf.routes.js"
import bookingRouter from "./booking.routes.js"
import reviewRouter from "./review.routes.js"


const userRouter = Router();

userRouter.use("/auth", authRouter);
userRouter.use("/turf", turfRouter);
userRouter.use("/booking", bookingRouter);
userRouter.use("/review", reviewRouter)

export default userRouter;
```

# server\scripts\createAdmin.js

```js
// server/scripts/createAdmin.js
import dotenv from 'dotenv';
import * as argon2 from 'argon2';
import connectDB from '../config/database.js';
import Owner from '../models/owner.model.js';
import chalk from 'chalk';
import path from 'path';
import { fileURLToPath } from 'url';

// Get directory name in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from parent directory's .env file
dotenv.config({ path: path.join(__dirname, '..', '.env') });

async function createAdmin() {
    try {
        // Verify environment variables
        if (!process.env.MONGODB_URI) {
            throw new Error('MONGODB_URI is not defined in environment variables');
        }

        // Connect to MongoDB
        await connectDB();
        console.log(chalk.green('✓ Connected to MongoDB'));

        // Define admin credentials
        const adminData = {
            name: "RiField Admin",
            email: "admin@sadhef.com",
            phone: "1234567890",
            password: "Admin@4848",
            role: "admin"
        };

        // Check if admin already exists
        const existingAdmin = await Owner.findOne({ email: adminData.email });
        if (existingAdmin) {
            console.log(chalk.yellow('⚠️ Admin already exists with this email'));
            console.log(chalk.cyan('\nExisting Admin Email:'), chalk.white(adminData.email));
            process.exit(0);
        }

        // Hash the password
        const hashedPassword = await argon2.hash(adminData.password);

        // Create new admin
        const admin = new Owner({
            ...adminData,
            password: hashedPassword
        });

        // Save admin to database
        await admin.save();
        
        // Success message
        console.log(chalk.green('\n✓ Admin created successfully'));
        console.log(chalk.cyan('\nAdmin Credentials:'));
        console.log(chalk.cyan('Email:'), chalk.white(adminData.email));
        console.log(chalk.cyan('Password:'), chalk.white(adminData.password));
        console.log(chalk.cyan('\nAPI Endpoints:'));
        console.log(chalk.cyan('Login URL:'), chalk.white('POST http://localhost:5000/api/owner/auth/login'));
        console.log(chalk.cyan('Frontend URL:'), chalk.white('http://localhost:5173/login'));
        
        console.log(chalk.yellow('\n⚠️ Important:'));
        console.log(chalk.yellow('- Change the default password after first login'));
        console.log(chalk.yellow('- Keep these credentials secure'));
        console.log(chalk.yellow('- Do not share the admin access'));

    } catch (error) {
        console.error(chalk.red('\n✖ Error creating admin:'), error.message);
    } finally {
        // Exit the script
        process.exit(0);
    }
}

// Run the admin creation script
createAdmin();
```

# server\server.js

```js
// server.js
import express from 'express';
import cors from 'cors';
import connectDB from './config/database.js';
import dotenv from 'dotenv';
import rootRouter from './routes/index.js';
import chalk from 'chalk';

// Load environment variables
dotenv.config({
  path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env'
});

const app = express();

// Enhanced CORS configuration
const corsOptions = {
  origin: process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',') : '*',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  maxAge: 86400 // 24 hours
};

// Middleware
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(cors(corsOptions));

// Request logging middleware
app.use((req, res, next) => {
  console.log(chalk.cyan(`${req.method} ${req.path} [${new Date().toISOString()}]`));
  next();
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'Server is running',
    environment: process.env.NODE_ENV,
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// API routes
app.use('/api', rootRouter);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
    path: req.originalUrl
  });
});

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(chalk.red('Error:'), err);

  // MongoDB errors
  if (err.name === 'MongoError' || err.name === 'MongoServerError') {
    return res.status(500).json({
      success: false,
      message: 'Database error occurred',
      error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
    });
  }

  // Validation errors
  if (err.name === 'ValidationError') {
    return res.status(400).json({
      success: false,
      message: 'Validation error',
      errors: Object.values(err.errors).map(e => e.message)
    });
  }

  // JWT errors
  if (err.name === 'JsonWebTokenError' || err.name === 'TokenExpiredError') {
    return res.status(401).json({
      success: false,
      message: 'Invalid or expired token'
    });
  }

  // Default error response
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? {
      stack: err.stack,
      details: err
    } : undefined
  });
});

// Enhanced error handling for uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error(chalk.red('⚠️ Uncaught Exception:'));
  console.error(error);
  
  // Send error to your error tracking service here (e.g., Sentry)
  
  if (process.env.NODE_ENV === 'development') {
    process.exit(1);
  }
});

// Enhanced error handling for unhandled promise rejections
process.on('unhandledRejection', (error) => {
  console.error(chalk.red('⚠️ Unhandled Rejection:'));
  console.error(error);
  
  // Send error to your error tracking service here (e.g., Sentry)
  
  if (process.env.NODE_ENV === 'development') {
    process.exit(1);
  }
});

// Graceful shutdown
process.on('SIGTERM', async () => {
  console.log(chalk.yellow('SIGTERM received. Performing graceful shutdown...'));
  // Close database connection and other resources
  try {
    await mongoose.connection.close();
    console.log(chalk.green('MongoDB connection closed.'));
    process.exit(0);
  } catch (err) {
    console.error(chalk.red('Error during graceful shutdown:'), err);
    process.exit(1);
  }
});

const PORT = process.env.PORT || 5000;

// Enhanced server startup
const startServer = async () => {
  try {
    // Connect to database
    await connectDB();
    console.log(chalk.green('✓ MongoDB Connected'));

    // Start server
    const server = app.listen(PORT, () => {
      console.log(chalk.green(`✓ Server running on port ${PORT}`));
      console.log(chalk.cyan(`✓ Environment: ${process.env.NODE_ENV}`));
      console.log(chalk.cyan(`✓ CORS enabled for: ${corsOptions.origin}`));
    });

    // Handle server errors
    server.on('error', (error) => {
      console.error(chalk.red('Server error:'), error);
      if (error.code === 'EADDRINUSE') {
        console.error(chalk.red(`Port ${PORT} is already in use`));
        process.exit(1);
      }
    });

  } catch (error) {
    console.error(chalk.red('Failed to start server:'), error);
    if (process.env.NODE_ENV === 'development') {
      process.exit(1);
    }
  }
};

// Start the server
startServer().catch((error) => {
  console.error(chalk.red('Server startup failed:'), error);
  process.exit(1);
});

export default app;
```

# server\utils\adjustTime.js

```js
import {
  parseISO,
  addHours,
  addMinutes,
  setYear,
  setMonth,
  setDate,
} from "date-fns";

function adjustTime(timeString, selectedTurfDate) {
  // Parse the original time
  const originalTime = parseISO(timeString);

  // Parse the selected turf date
  const turfDate = parseISO(selectedTurfDate);

  // Add 5 hours and 30 minutes
  let adjustedTime = addMinutes(addHours(originalTime, 5), 30);

  // Set the date components from the selectedTurfDate
  adjustedTime = setYear(adjustedTime, turfDate.getFullYear());
  adjustedTime = setMonth(adjustedTime, turfDate.getMonth());
  adjustedTime = setDate(adjustedTime, turfDate.getDate());

  return adjustedTime;
}

export default adjustTime;

```

# server\utils\cloudinary.js

```js
import {v2 as cloudinary} from "cloudinary";
import dotenv from "dotenv";
dotenv.config();


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
export default cloudinary;



```

# server\utils\errorHandler.js

```js
export class AppError extends Error {
    constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode;
      this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
      this.isOperational = true;
  
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
  export const catchAsync = (fn) => {
    return (req, res, next) => {
      fn(req, res, next).catch(next);
    };
  };
```

# server\utils\generateEmail.js

```js
import nodemailer from "nodemailer";
import chalk from "chalk";

export default async function generateEmail(to, subject, html) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: to,
      subject: subject,
      html: html,
    };
    await transporter.sendMail(mailOptions);
  } catch (e) {
    console.log(chalk.redBright.bold("Error in generateEmail"), e);
  }
}

export const generateHTMLContent = (turfName, location,date,startTime,endTime,totalPrice, QRcode) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Booking Confirmation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background-color: #4CAF50;
            color: white;
            text-align: center;
            padding: 20px;
            border-radius: 5px 5px 0 0;
        }
        .content {
            background-color: #f9f9f9;
            padding: 20px;
            border-radius: 0 0 5px 5px;
        }
        h1 {
            margin: 0;
        }
        .info {
            margin-bottom: 15px;
        }
        .info strong {
            font-weight: bold;
            color: #4CAF50;
        }
        .qr-code {
            text-align: center;
            margin: 20px 0;
        }
        .qr-code img {
            max-width: 200px;
            height: auto;
        }
        .footer {
            text-align: center;
            margin-top: 20px;
            color: #777;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Booking Confirmation</h1>
    </div>
    <div class="content">
        <p>Your booking has been successful.</p>
        <div class="info">
            <p><strong>Turf Name:</strong> ${turfName}</p>
            <p><strong>Location:</strong> ${location}</p>
            <p><strong>Date:</strong> ${date}</p>
            <p><strong>Start Time:</strong> ${startTime}</p>
            <p><strong>End Time:</strong> ${endTime}</p>
            <p><strong>Total Price:</strong> ${totalPrice}</p>
        </div>
        <div class="qr-code">
            <img src="${QRcode}" alt="QR Code">
        </div>
        <p>Thank you for using our service.</p>
        <p>Best Regards,<br>The Team</p>
    </div>
    <div class="footer">
        <p>This is an automated email. Please do not reply.</p>
    </div>
</body>
</html>
`;
};

```

# server\utils\generateHTMLContent.js

```js
// server/utils/generateHTMLContent.js
export const generateHTMLContent = (title, message) => {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background-color: #4CAF50;
              color: white;
              padding: 20px;
              text-align: center;
            }
            .content {
              padding: 20px;
              background-color: #f9f9f9;
            }
            .footer {
              text-align: center;
              padding: 20px;
              color: #666;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>${title}</h1>
            </div>
            <div class="content">
              ${message.replace(/\n/g, '<br>')}
            </div>
            <div class="footer">
              <p>Thank you for using our service!</p>
            </div>
          </div>
        </body>
      </html>
    `;
  };
```

# server\utils\generateJwtToken.js

```js
import jwt from "jsonwebtoken";

export function generateUserToken(user) {
    return jwt.sign({user}, process.env.JWT_SECRET,{
         expiresIn: "1d"
    })
}

export const generateOwnerToken = (owner) => {
    const {role,id} = owner;
    return jwt.sign({ id, role }, process.env.JWT_SECRET, {
        expiresIn: "1d"
    })
}
```

# server\utils\generateQRCode.js

```js
import QRCode from "qrcode";
import cloudinary from "./cloudinary.js"

async function generateQRCode(
  price,
  startTime,
  endTime,
  date,
  turfName,
  location
) {
  try {
    // Create the content string
    const content = `Turf Name: ${turfName}\nLocation: ${location}\nPrice: ${price}\nDate: ${date}\nStart Time: ${startTime}\nEnd Time: ${endTime}`;

    // Generate QR code as a data URL
    const qrCodeDataURL = await QRCode.toDataURL(content);

    // Upload the QR code to Cloudinary
    const uploadResponse = await cloudinary.uploader.upload(qrCodeDataURL, {
      folder: "RiField/qrcode"
    });

    console.log("QR code has been generated and uploaded successfully!");
    return uploadResponse.secure_url;
  } catch (error) {
    console.error("Error generating or uploading QR code:", error);
    throw error;
  }
}

export default generateQRCode;

```

# server\vercel.json

```json

{
  "version": 2,
  "builds": [
    {
      "src": "server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "server.js",
      "methods": ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
      "headers": {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Authorization"
      }
    }
  ]
}
```

