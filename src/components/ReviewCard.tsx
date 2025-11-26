import { Card, CardContent } from "@/components/ui/card";
import { Review } from "@/types/restaurant";
import { Star, User } from "lucide-react";
import { format } from "date-fns";

interface ReviewCardProps {
  review: Review;
}

export const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <Card>
      <CardContent className="p-4 space-y-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
              <User className="w-5 h-5 text-muted-foreground" />
            </div>
            <div>
              <p className="font-medium">{review.username}</p>
              <p className="text-xs text-muted-foreground">
                {format(new Date(review.date), "MMM d, yyyy")}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-primary text-primary" />
            <span className="font-medium">{review.rating}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">{review.comment}</p>
      </CardContent>
    </Card>
  );
};
