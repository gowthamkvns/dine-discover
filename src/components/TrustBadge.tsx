import { Badge } from "@/components/ui/badge";
import { Shield } from "lucide-react";

interface TrustBadgeProps {
  rating: number;
}

export const TrustBadge = ({ rating }: TrustBadgeProps) => {
  const percentage = rating * 20;
  
  const getBadgeVariant = () => {
    if (percentage >= 80) return "success";
    if (percentage >= 50) return "warning";
    return "destructive";
  };

  const variant = getBadgeVariant();

  return (
    <Badge 
      variant={variant as any}
      className="flex items-center gap-1 font-medium"
    >
      <Shield className="w-3 h-3" />
      {percentage}% Trust Score
    </Badge>
  );
};
