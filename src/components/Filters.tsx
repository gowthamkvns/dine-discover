import { Button } from "@/components/ui/button";
import { cuisineTypes } from "@/data/restaurants";

interface FiltersProps {
  selectedCuisine: string;
  onCuisineChange: (cuisine: string) => void;
}

export const Filters = ({ selectedCuisine, onCuisineChange }: FiltersProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {cuisineTypes.map((cuisine) => (
        <Button
          key={cuisine}
          variant={selectedCuisine === cuisine ? "default" : "outline"}
          onClick={() => onCuisineChange(cuisine)}
          className="rounded-full"
        >
          {cuisine}
        </Button>
      ))}
    </div>
  );
};
