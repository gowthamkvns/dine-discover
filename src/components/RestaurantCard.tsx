import { Card, CardContent } from "@/components/ui/card";
import { Restaurant } from "@/types/restaurant";
import { TrustBadge } from "./TrustBadge";
import { Star, Clock, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  return (
    <Link to={`/restaurant/${restaurant.id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
        <div className="aspect-video relative overflow-hidden">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardContent className="p-4 space-y-3">
          <div className="space-y-1">
            <h3 className="font-semibold text-lg">{restaurant.name}</h3>
            <p className="text-sm text-muted-foreground">{restaurant.cuisine}</p>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-primary text-primary" />
              <span className="font-medium">{restaurant.rating}</span>
              <span className="text-sm text-muted-foreground">
                ({restaurant.reviewCount} reviews)
              </span>
            </div>
            <TrustBadge rating={restaurant.rating} />
          </div>

          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{restaurant.waitTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <DollarSign className="w-4 h-4" />
              <span>{restaurant.priceRange}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
