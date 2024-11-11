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