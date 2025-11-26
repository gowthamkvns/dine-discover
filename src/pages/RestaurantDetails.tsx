import { useParams, Link } from "react-router-dom";
import { restaurants, reviews as initialReviews } from "@/data/restaurants";
import { Review } from "@/types/restaurant";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TrustBadge } from "@/components/TrustBadge";
import { ReviewCard } from "@/components/ReviewCard";
import { ReviewForm } from "@/components/ReviewForm";
import { ArrowLeft, Star, Clock, DollarSign } from "lucide-react";

const RestaurantDetails = () => {
  const { id } = useParams();
  const restaurant = restaurants.find((r) => r.id === id);
  const [reviews, setReviews] = useState<Review[]>(
    initialReviews.filter((r) => r.restaurantId === id)
  );

  if (!restaurant) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Restaurant not found</h1>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleReviewSubmit = (newReview: {
    username: string;
    rating: number;
    comment: string;
  }) => {
    const review: Review = {
      id: `r${Date.now()}`,
      restaurantId: restaurant.id,
      ...newReview,
      date: new Date().toISOString().split("T")[0],
    };
    setReviews([review, ...reviews]);
  };

  const menuCategories = [...new Set(restaurant.menu.map((item) => item.category))];

  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-[400px]">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="container mx-auto">
            <Link to="/">
              <Button variant="outline" size="sm" className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            </Link>
            <h1 className="text-4xl font-bold mb-2">{restaurant.name}</h1>
            <p className="text-lg text-muted-foreground">{restaurant.cuisine}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 space-y-8">
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 fill-primary text-primary" />
            <span className="text-lg font-medium">{restaurant.rating}</span>
            <span className="text-muted-foreground">
              ({restaurant.reviewCount} reviews)
            </span>
          </div>
          <TrustBadge rating={restaurant.rating} />
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="w-5 h-5" />
            <span>{restaurant.waitTime}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <DollarSign className="w-5 h-5" />
            <span>{restaurant.priceRange}</span>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">About</h2>
          <p className="text-muted-foreground">{restaurant.description}</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Menu</h2>
          <div className="space-y-6">
            {menuCategories.map((category) => (
              <div key={category}>
                <h3 className="text-xl font-semibold mb-3">{category}</h3>
                <div className="grid gap-4">
                  {restaurant.menu
                    .filter((item) => item.category === category)
                    .map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-between items-start p-4 rounded-lg border bg-card hover:shadow-md transition-shadow"
                      >
                        <div className="flex-1">
                          <h4 className="font-medium mb-1">{item.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                        <span className="font-semibold text-primary ml-4">
                          ${item.price}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Reviews ({reviews.length})</h2>
            <div className="space-y-4">
              {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
              {reviews.length === 0 && (
                <p className="text-muted-foreground text-center py-8">
                  No reviews yet. Be the first to review!
                </p>
              )}
            </div>
          </div>

          <div>
            <ReviewForm
              restaurantId={restaurant.id}
              onReviewSubmit={handleReviewSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
