import { Star, X, Send, AlertCircle } from "lucide-react";
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
  const [isHovered, setIsHovered] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) {
      setRatingError(true);
      return;
    }
    setRatingError(false);
    onSubmit();
  };

  const ratingTexts = {
    1: "Poor",
    2: "Fair",
    3: "Good",
    4: "Very Good",
    5: "Excellent"
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn">
      <div className="relative w-full max-w-md transform transition-all animate-slideUp">
        {/* Modal Content */}
        <div className="bg-base-100 rounded-2xl shadow-2xl border border-base-200 overflow-hidden">
          {/* Header */}
          <div className="p-6 bg-base-200/50 border-b border-base-200">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Write a Review
              </h2>
              <button
                onClick={onClose}
                className="btn btn-ghost btn-sm btn-circle hover:rotate-90 transition-transform"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Rating Section */}
            <div className="space-y-4">
              <label className="block text-sm font-medium text-base-content/70">
                How would you rate your experience?
              </label>
              <div className="flex flex-col items-center space-y-3 p-4 bg-base-200/30 rounded-xl">
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className="relative group"
                      onMouseEnter={() => setIsHovered(star)}
                      onMouseLeave={() => setIsHovered(0)}
                      onClick={() => onRatingChange(star)}
                    >
                      <Star
                        className={`w-8 h-8 transition-all duration-200 
                          ${star <= (isHovered || rating)
                            ? "text-yellow-400 fill-yellow-400 scale-110"
                            : "text-base-300 hover:text-base-content/50"}`}
                      />
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 
                        whitespace-nowrap text-sm font-medium bg-base-300 text-base-content 
                        px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        {ratingTexts[star]}
                      </div>
                    </button>
                  ))}
                </div>
                {rating > 0 && (
                  <div className="text-center text-base-content/70 text-sm animate-fadeIn">
                    {ratingTexts[rating]}
                  </div>
                )}
              </div>
              {ratingError && (
                <div className="flex items-center gap-2 text-error text-sm animate-slideRight">
                  <AlertCircle size={16} />
                  Please select a rating
                </div>
              )}
            </div>

            {/* Review Text Section */}
            <div className="space-y-3">
              <label htmlFor="review" className="block text-sm font-medium text-base-content/70">
                Share your thoughts
              </label>
              <textarea
                id="review"
                rows="4"
                className="textarea textarea-bordered w-full bg-base-200/30 focus:textarea-primary
                  transition-all duration-200 placeholder:text-base-content/30"
                value={review}
                onChange={onReviewChange}
                placeholder="Tell us about your experience..."
                title="Please enter your review"
              />
              <div className="text-right text-sm text-base-content/50">
                {review.length}/500 characters
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3 pt-4 border-t border-base-200">
              <button
                type="button"
                className="btn btn-ghost hover:bg-base-200 transition-colors"
                onClick={onClose}
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary gap-2 min-w-[120px]"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit
                    <Send size={16} className="transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// Add these animations to your global CSS
const animations = `
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes slideRight {
  from { transform: translateX(-20px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

.animate-fadeIn {
  animation: fadeIn 0.3s ease-out;
}

.animate-slideUp {
  animation: slideUp 0.4s ease-out;
}

.animate-slideRight {
  animation: slideRight 0.3s ease-out;
}
`;

export default WriteReview;