import { Clock, MapPin, IndianRupee, Calendar, Package, History, Star, QrCode, AlertCircle } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-300">
      {/* Header Section */}
      <div className="bg-base-100 shadow-lg mb-8">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Booking History
              </h1>
              <p className="text-base-content/70 mt-2">
                View and manage your turf bookings
              </p>
            </div>
            
            {/* Stats Summary */}
            <div className="flex gap-6">
              <div className="stat px-4 py-2 shadow-md rounded-lg bg-base-100">
                <div className="stat-figure text-primary">
                  <History size={24} />
                </div>
                <div className="stat-title text-xs">Total Bookings</div>
                <div className="stat-value text-primary text-2xl">{bookings.length}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-8">
        {bookings.length > 0 ? (
          <div className="space-y-6 mx-auto max-w-3xl">
            {bookings.map((booking) => (
              <div
                key={booking._id}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-base-200"
              >
                <div className="card-body p-6">
                  {/* Booking Status Badge */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-2">
                      <h2 className="card-title text-xl">{booking.turf.name}</h2>
                      <span className="badge badge-success badge-sm">Active</span>
                    </div>
                    <div className="badge badge-outline">Booking #{booking._id.slice(-6)}</div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Booking Details */}
                    <div className="space-y-4">
                      <div className="bg-base-200/50 p-4 rounded-lg space-y-3">
                        <p className="flex items-center text-base-content/80">
                          <MapPin className="mr-3 text-primary" size={18} />
                          {booking.turf.location}
                        </p>
                        <p className="flex items-center text-base-content/80">
                          <Calendar className="mr-3 text-primary" size={18} />
                          {booking.timeSlot.date}
                        </p>
                        <p className="flex items-center text-base-content/80">
                          <Clock className="mr-3 text-primary" size={18} />
                          {booking.timeSlot.formattedStartTime} - {booking.timeSlot.formattedEndTime}
                        </p>
                        <p className="flex items-center text-base-content/80">
                          <IndianRupee className="mr-3 text-primary" size={18} />
                          {booking.totalPrice.toLocaleString('en-IN')}
                        </p>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <button
                          className="btn btn-primary flex-1 gap-2"
                          onClick={() => openReviewModal(booking.turf._id)}
                        >
                          <Star size={16} />
                          Write Review
                        </button>
                      </div>
                    </div>

                    {/* QR Code Section */}
                    <div className="flex flex-col items-center justify-center p-4 bg-base-200/30 rounded-lg">
                      <div className="bg-white p-3 rounded-lg shadow-md">
                        <img
                          src={booking.qrCode}
                          alt="Booking QR Code"
                          className="w-32 h-32"
                        />
                      </div>
                      <div className="text-center mt-3">
                        <p className="text-sm font-medium">Scan QR Code</p>
                        <p className="text-xs text-base-content/60">for booking details</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <Package size={48} className="text-base-content/30 mb-4" />
            <h3 className="text-xl font-semibold mb-2">No Bookings Yet</h3>
            <p className="text-base-content/70 mb-4">
              You haven't made any bookings yet. Start exploring turfs to make your first booking!
            </p>
            <button 
              onClick={() => navigate('/turfs')}
              className="btn btn-primary"
            >
              Explore Turfs
            </button>
          </div>
        )}
      </div>

      {/* Review Modal */}
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