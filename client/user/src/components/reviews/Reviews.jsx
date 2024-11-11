import { useState } from "react";
import useReviews from "../../hooks/useReviews";
import { format } from "date-fns";
import ReviewSkeleton from "../ui/ReviewSkeleton";
import { 
  ChevronDown, 
  Star, 
  ThumbsUp, 
  MessageCircle,
  MoreHorizontal,
  User 
} from "lucide-react";

const REVIEWS_PER_PAGE = 5;

const Reviews = ({ turfId }) => {
  const { reviews, loading } = useReviews(turfId);
  const [displayCount, setDisplayCount] = useState(REVIEWS_PER_PAGE);

  if (loading) return <ReviewSkeleton />;

  const handleLoadMore = () => {
    setDisplayCount((prevCount) => prevCount + REVIEWS_PER_PAGE);
  };

  // Calculate review statistics
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length || 0;
  const ratingDistribution = Array(5).fill(0);
  reviews.forEach(review => ratingDistribution[review.rating - 1]++);

  return (
    <div className="mt-12 bg-base-100 rounded-2xl p-6 shadow-lg border border-base-200">
      {/* Reviews Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Customer Reviews
        </h2>
        <div className="text-sm text-base-content/60">
          {reviews.length} reviews
        </div>
      </div>

      {reviews.length === 0 ? (
        <div className="text-center py-12 bg-base-200/50 rounded-lg">
          <User size={48} className="mx-auto text-base-content/30 mb-4" />
          <p className="text-lg font-semibold">No Reviews Yet</p>
          <p className="text-base-content/60 mt-2">Be the first to review this turf!</p>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Rating Summary */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 bg-base-200/30 rounded-xl mb-8">
            {/* Average Rating */}
            <div className="flex items-center gap-4">
              <div className="text-4xl font-bold text-primary">
                {averageRating.toFixed(1)}
              </div>
              <div>
                <div className="flex gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={20}
                      className={star <= Math.round(averageRating) 
                        ? "fill-yellow-400 text-yellow-400" 
                        : "text-base-300"}
                    />
                  ))}
                </div>
                <p className="text-sm text-base-content/60">
                  Based on {reviews.length} reviews
                </p>
              </div>
            </div>

            {/* Rating Distribution */}
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center gap-2">
                  <div className="w-12 text-sm text-base-content/60">
                    {rating} stars
                  </div>
                  <div className="flex-1 h-2 bg-base-300 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary transition-all duration-500"
                      style={{ 
                        width: `${(ratingDistribution[rating - 1] / reviews.length) * 100}%` 
                      }}
                    />
                  </div>
                  <div className="w-12 text-sm text-base-content/60 text-right">
                    {ratingDistribution[rating - 1]}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews List */}
          <div className="space-y-6">
            {reviews.slice(0, displayCount).map((review) => (
              <div 
                key={review._id} 
                className="card bg-base-100 border border-base-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="card-body">
                  {/* Review Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="avatar placeholder">
                        <div className="w-10 h-10 rounded-full bg-primary/10">
                          <span className="text-primary text-lg">
                            {(review.user.name || "A")[0].toUpperCase()}
                          </span>
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold">
                          {review.user.name || "Anonymous"}
                        </div>
                        <div className="text-sm text-base-content/60">
                          {format(new Date(review.createdAt), "MMM d, yyyy")}
                        </div>
                      </div>
                    </div>
                    <button className="btn btn-ghost btn-circle btn-sm">
                      <MoreHorizontal size={16} />
                    </button>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={16}
                          className={star <= review.rating 
                            ? "fill-yellow-400 text-yellow-400" 
                            : "text-base-300"}
                        />
                      ))}
                    </div>
                    <div className="text-sm text-base-content/60">
                      {review.rating}/5
                    </div>
                  </div>

                  {/* Review Content */}
                  <p className="text-base-content/80 leading-relaxed mb-4">
                    {review.comment}
                  </p>

                  {/* Review Actions */}
                  <div className="flex items-center gap-4 pt-4 border-t border-base-200">
                    <button className="btn btn-ghost btn-sm gap-2">
                      <ThumbsUp size={14} />
                      Helpful
                    </button>
                    <button className="btn btn-ghost btn-sm gap-2">
                      <MessageCircle size={14} />
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {displayCount < reviews.length && (
            <div className="text-center mt-8">
              <button
                className="btn btn-primary btn-outline gap-2 px-8 hover:scale-105 transition-transform"
                onClick={handleLoadMore}
              >
                Load More Reviews
                <ChevronDown size={16} className="animate-bounce" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Reviews;