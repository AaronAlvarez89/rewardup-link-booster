import { Users, Award, Star } from "lucide-react";

const StatsSection = () => {
  return (
    <div className="flex justify-center items-center gap-16 py-12">
      <div className="text-center">
        <div className="flex justify-center mb-2">
          <Users className="w-8 h-8 text-primary" />
        </div>
        <div className="text-2xl font-bold text-foreground">50K+</div>
        <div className="text-muted-foreground">Participants</div>
      </div>
      
      <div className="text-center">
        <div className="flex justify-center mb-2">
          <Award className="w-8 h-8 text-primary" />
        </div>
        <div className="text-2xl font-bold text-foreground">$2.5M+</div>
        <div className="text-muted-foreground">Rewards Distributed</div>
      </div>
      
      <div className="text-center">
        <div className="flex justify-center mb-2">
          <Star className="w-8 h-8 text-primary" />
        </div>
        <div className="text-2xl font-bold text-foreground">4.8/5</div>
        <div className="text-muted-foreground">User Rating</div>
      </div>
    </div>
  );
};

export default StatsSection;