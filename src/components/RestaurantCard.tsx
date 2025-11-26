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
      <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full">
        <div className="aspect-[16/10] relative overflow-hidden">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardContent className="p-5 space-y-4">
          <div className="space-y-2">
            <h3 className="font-bold text-xl">{restaurant.name}</h3>
            <p className="text-sm text-muted-foreground font-medium">{restaurant.cuisine}</p>
          </div>
          
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-primary text-primary" />
              <span className="font-semibold text-lg">{restaurant.rating}</span>
              <span className="text-sm text-muted-foreground">
                ({restaurant.reviewCount} reviews)
              </span>
            </div>
            <TrustBadge rating={restaurant.rating} />
          </div>

          <div className="flex items-center justify-between text-sm text-muted-foreground pt-2 border-t">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{restaurant.waitTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              <span className="font-medium">{restaurant.priceRange}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
