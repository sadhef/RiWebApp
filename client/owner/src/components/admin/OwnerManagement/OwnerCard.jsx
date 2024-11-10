import React from "react";
import { Link } from "react-router-dom";
import { User, Mail, Phone, Calendar, MapPin, Shield, Award, Activity } from "lucide-react";
import { format, parseISO } from "date-fns";

const OwnerCard = ({ owner }) => {
  return (
    <div className="group relative overflow-hidden bg-base-100 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50" />
      
      {/* Main Content */}
      <div className="relative p-6">
        {/* Header Section */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
              <User className="h-8 w-8 text-primary" />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-primary rounded-full p-1">
              <Shield className="h-4 w-4 text-white" />
            </div>
          </div>
          
          <div className="flex-1">
            <h2 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
              {owner.name}
            </h2>
            <div className="flex items-center space-x-2 mt-1">
              <Award className="h-4 w-4 text-primary" />
              <span className="text-sm text-base-content/70">Verified Owner</span>
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid gap-4 mb-6">
          <div className="flex items-center p-3 bg-base-200/50 rounded-lg hover:bg-base-200 transition-colors">
            <Mail className="h-5 w-5 text-primary mr-3" />
            <div>
              <p className="text-sm font-medium">{owner.email}</p>
              <p className="text-xs text-base-content/60">Email Address</p>
            </div>
          </div>

          <div className="flex items-center p-3 bg-base-200/50 rounded-lg hover:bg-base-200 transition-colors">
            <Phone className="h-5 w-5 text-primary mr-3" />
            <div>
              <p className="text-sm font-medium">{owner.phone}</p>
              <p className="text-xs text-base-content/60">Contact Number</p>
            </div>
          </div>

          <div className="flex items-center p-3 bg-base-200/50 rounded-lg hover:bg-base-200 transition-colors">
            <Calendar className="h-5 w-5 text-primary mr-3" />
            <div>
              <p className="text-sm font-medium">
                {format(parseISO(owner.createdAt), "PPP")}
              </p>
              <p className="text-xs text-base-content/60">Member Since</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center p-3 bg-primary/10 rounded-lg">
            <Activity className="h-5 w-5 text-primary mx-auto mb-1" />
            <p className="text-xs text-base-content/60">Active</p>
          </div>
          <div className="text-center p-3 bg-primary/10 rounded-lg">
            <MapPin className="h-5 w-5 text-primary mx-auto mb-1" />
            <p className="text-xs text-base-content/60">Turfs</p>
          </div>
          <div className="text-center p-3 bg-primary/10 rounded-lg">
            <Award className="h-5 w-5 text-primary mx-auto mb-1" />
            <p className="text-xs text-base-content/60">Verified</p>
          </div>
        </div>

        {/* Action Button */}
        <Link 
          to={`/admin/owners/${owner._id}/turf`}
          className="w-full btn btn-primary gap-2 hover:gap-3 transition-all"
        >
          <MapPin className="h-4 w-4" />
          View Turfs
        </Link>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-bl-full opacity-50" />
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-tr-full opacity-50" />
    </div>
  );
};

export default OwnerCard;