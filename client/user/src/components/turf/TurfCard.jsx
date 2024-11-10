import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { 
  Clock, 
  MapPin, 
  IndianRupee, 
  Star, 
  Users,
  ArrowRight
} from "lucide-react";

const TurfCard = ({ turf }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div className="card bg-base-100 hover:shadow-2xl transition-all duration-300 group border border-base-200 overflow-hidden">
      {/* Image Section */}
      <figure className="relative overflow-hidden">
        <img
          src={turf.image}
          alt={turf.name}
          className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {/* Price Badge */}
        <div className="absolute top-4 right-4">
          <div className="badge badge-primary gap-2 p-3">
            <IndianRupee size={14} />
            {turf.pricePerHour}/hr
          </div>
        </div>
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <div className="badge badge-success gap-2 p-3">
            Open Now
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </figure>

      <div className="card-body p-5">
        {/* Title and Rating */}
        <div className="flex justify-between items-start mb-2">
          <h2 className="card-title text-lg font-bold hover:text-primary transition-colors">
            {turf.name}
          </h2>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="font-medium">{turf.avgRating || "4.5"}</span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center text-base-content/70 mb-3">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{turf.location}</span>
        </div>

        {/* Sport Types */}
        <div className="flex flex-wrap gap-2 mb-3">
          {turf.sportTypes.map((sport, index) => (
            <span 
              key={index} 
              className="badge badge-outline badge-sm hover:badge-primary transition-colors"
            >
              {sport}
            </span>
          ))}
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center text-sm text-base-content/70">
            <Clock size={16} className="mr-2" />
            <span>{turf.openTime} - {turf.closeTime}</span>
          </div>
          <div className="flex items-center text-sm text-base-content/70">
            <Users size={16} className="mr-2" />
            <span>Capacity: 10-15</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="card-actions justify-between items-center mt-2 pt-4 border-t border-base-200">
          {/* Quick Info */}
          <div className="text-sm text-base-content/70">
            Available for booking
          </div>
          
          {/* View Details Button */}
          <Link
            to={isLoggedIn ? `/auth/turf/${turf._id}` : `/turf/${turf._id}`}
            className="btn btn-primary btn-sm group/btn gap-2"
          >
            View Details
            <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TurfCard;