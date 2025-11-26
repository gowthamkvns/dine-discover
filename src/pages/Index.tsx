import { useState, useMemo } from "react";
import { restaurants } from "@/data/restaurants";
import { Filters } from "@/components/Filters";
import { RestaurantList } from "@/components/RestaurantList";
import { Utensils } from "lucide-react";

const Index = () => {
  const [selectedCuisine, setSelectedCuisine] = useState("All");

  const filteredRestaurants = useMemo(() => {
    if (selectedCuisine === "All") {
      return restaurants;
    }
    return restaurants.filter((r) => r.cuisine === selectedCuisine);
  }, [selectedCuisine]);

  const trendingRestaurants = useMemo(() => {
    return [...restaurants].sort((a, b) => b.rating - a.rating).slice(0, 3);
  }, []);

  const recommendedRestaurants = useMemo(() => {
    return restaurants.filter((r) => r.rating >= 4.7);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Utensils className="w-10 h-10" />
            <h1 className="text-4xl font-bold">Restaurant Finder</h1>
          </div>
          <p className="text-lg opacity-90">
            Discover amazing restaurants with trusted reviews and ratings
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-12">
        <section>
          <h2 className="text-3xl font-bold mb-6">Trending Now</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trendingRestaurants.map((restaurant) => (
              <div key={restaurant.id}>
                <RestaurantList restaurants={[restaurant]} />
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Recommended for You</h2>
          <p className="text-muted-foreground mb-6">
            Based on highly-rated restaurants you might love
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedRestaurants.map((restaurant) => (
              <div key={restaurant.id}>
                <RestaurantList restaurants={[restaurant]} />
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-2">All Restaurants</h2>
            <p className="text-muted-foreground mb-4">
              Filter by your favorite cuisine type
            </p>
            <Filters
              selectedCuisine={selectedCuisine}
              onCuisineChange={setSelectedCuisine}
            />
          </div>
          <RestaurantList restaurants={filteredRestaurants} />
        </section>
      </main>

      <footer className="bg-secondary py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 Restaurant Finder. Find your next great meal.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
