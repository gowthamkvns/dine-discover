import { Restaurant } from "@/types/restaurant";
import { RestaurantCard } from "./RestaurantCard";

interface RestaurantListProps {
  restaurants: Restaurant[];
}

export const RestaurantList = ({ restaurants }: RestaurantListProps) => {
  if (restaurants.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No restaurants found. Try a different filter!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};
