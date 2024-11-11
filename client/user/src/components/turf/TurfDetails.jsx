import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import useTurfData from "../../hooks/useTurfData";
import useReviews from "../../hooks/useReviews";
import Reviews from "../reviews/Reviews";
import TurfDetailsSkeleton from "../ui/TurfDetailsSkeleton";
import { 
  MapPin, 
  Clock, 
  Activity, 
  IndianRupee, 
  Calendar,
  Users,
  Star,
  AlertCircle,
  Share2,
  Heart,
  ArrowRight,
  Info
} from "lucide-react";

const TurfDetails = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const { id } = useParams();
  const navigate = useNavigate();
  const { loading, turfs } = useTurfData();
  const { averageRating } = useReviews(id);

  if (loading) return <TurfDetailsSkeleton />;

  const turf = turfs.find((t) => t._id === id);

  if (!turf) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="text-center space-y-4 max-w-md mx-auto p-6 bg-base-100 rounded-lg shadow-xl">
          <AlertCircle size={48} className="mx-auto text-warning" />
          <h2 className="text-2xl font-bold">Turf Not Found</h2>
          <p className="text-base-content/70">
            The turf you're looking for doesn't exist or has been removed.
          </p>
          <button 
            onClick={() => navigate(-1)} 
            className="btn btn-primary"
          >
            Go Back
          </button>
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
    <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-300">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={turf.image || "/banner-1.png"}
          alt={turf.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        
        {/* Price Badge */}
        <div className="absolute top-6 right-6">
          <div className="badge badge-primary gap-2 p-4 text-lg">
            <IndianRupee size={18} />
            {turf.pricePerHour}/hr
          </div>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {turf.name}
                </h1>
                <div className="flex items-center space-x-4 text-white/90">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    <p className="text-sm">{turf.location}</p>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                    <span>{averageRating ? averageRating.toFixed(1) : 'New'}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="btn btn-circle btn-ghost bg-white/10 backdrop-blur-sm">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="btn btn-circle btn-ghost bg-white/10 backdrop-blur-sm">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 -mt-20">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description Card */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="text-xl font-bold mb-4">About This Turf</h3>
                <p className="text-base-content/70 leading-relaxed">
                  {turf.description}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-6 mt-6">
                  <InfoItem
                    icon={<Activity />}
                    label="Sports Available"
                    value={turf.sportTypes.join(", ")}
                  />
                  <InfoItem
                    icon={<Users />}
                    label="Capacity"
                    value="10-15 players"
                  />
                  <InfoItem
                    icon={<Clock />}
                    label="Operating Hours"
                    value={`${turf.openTime} - ${turf.closeTime}`}
                  />
                  <InfoItem
                    icon={<Calendar />}
                    label="Availability"
                    value="Open Daily"
                  />
                </div>
              </div>
            </div>

            {/* Reviews Section */}
            <Reviews turfId={id} />
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <div className="card bg-base-100 shadow-xl sticky top-8">
              <div className="card-body">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-2xl font-bold">₹{turf.pricePerHour}</h3>
                    <p className="text-base-content/70">per hour</p>
                  </div>
                  <div className="badge badge-success gap-2">
                    Available
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-2 text-base-content/70">
                    <Info size={16} />
                    <span>Instant confirmation</span>
                  </div>
                  <div className="flex items-center gap-2 text-base-content/70">
                    <Clock size={16} />
                    <span>Minimum booking: 1 hour</span>
                  </div>
                </div>

                <button
                  className="btn btn-primary btn-lg w-full gap-2"
                  onClick={handleReservation}
                >
                  {isLoggedIn ? "Book Now" : "Login to Book"}
                  <ArrowRight size={16} />
                </button>

                <p className="text-center text-sm text-base-content/70 mt-4">
                  No payment required to reserve
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-start gap-3">
    <div className="bg-primary/10 p-3 rounded-xl">
      {React.cloneElement(icon, { className: "w-5 h-5 text-primary" })}
    </div>
    <div>
      <p className="text-sm font-medium text-base-content/70">{label}</p>
      <p className="text-base font-semibold mt-1">{value}</p>
    </div>
  </div>
);

export default TurfDetails;