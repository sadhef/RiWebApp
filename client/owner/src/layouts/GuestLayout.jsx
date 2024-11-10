import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import PublicNavbar from "../components/layout/GuestNavbar";
import { Loader2, ArrowUp } from "lucide-react";
import Footer from "../components/common/Footer";

const PublicLayout = () => {
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  // Handle page transitions
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Handle scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-base-100 to-base-200">
      {/* Announcement Banner */}
      <div className="bg-gradient-to-r from-primary to-primary-focus text-primary-content py-2">
        <div className="container mx-auto px-4 text-center text-sm">
          <span className="font-medium">🎉 Special Offer!</span>{" "}
          Book your turf today and get 20% off{" "}
          <a href="/signup" className="underline font-semibold">
            Sign up now
          </a>
        </div>
      </div>

      {/* Navigation */}
      <PublicNavbar />

      {/* Main Content */}
      <main className="flex-grow pt-16">
        {loading ? (
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="text-center">
              <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto" />
              <p className="mt-4 text-base-content/70">Loading amazing content...</p>
            </div>
          </div>
        ) : (
          <div className="animate-fade-in">
            <Outlet />
          </div>
        )}
      </main>

      {/* Newsletter Section */}
      <section className="bg-base-200/50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-base-content/70 mb-6">
              Subscribe to our newsletter for exclusive offers and updates
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered flex-grow"
              />
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`
          fixed bottom-8 right-8 
          btn btn-circle btn-primary shadow-lg
          transition-all duration-300
          ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* Cookie Consent Banner */}
      <div className="fixed bottom-0 inset-x-0 bg-base-200/95 backdrop-blur-sm border-t border-base-300 p-4 z-50">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-base-content/70">
            We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
          </p>
          <div className="flex gap-2">
            <button className="btn btn-sm">Learn More</button>
            <button className="btn btn-primary btn-sm">Accept All</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add to your CSS
const styles = `
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in {
    animation: fade-in 0.3s ease-out;
  }
`;

export default PublicLayout;