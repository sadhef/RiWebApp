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