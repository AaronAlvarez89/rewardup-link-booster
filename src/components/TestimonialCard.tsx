import { Star } from "lucide-react";

interface TestimonialCardProps {
  rating: number;
  text: string;
  author: string;
  location: string;
  verified?: boolean;
}

const TestimonialCard = ({ rating, text, author, location, verified = true }: TestimonialCardProps) => {
  return (
    <div className="bg-card p-6 rounded-lg border border-border">
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
        <span className="ml-2 text-sm text-muted-foreground">{rating}.0</span>
      </div>
      
      <p className="text-foreground mb-4 leading-relaxed">
        "{text}"
      </p>
      
      <div className="text-sm">
        <span className="font-semibold text-foreground">{author}</span>
        {verified && (
          <span className="text-muted-foreground ml-2">Verified Participant</span>
        )}
      </div>
    </div>
  );
};

export default TestimonialCard;