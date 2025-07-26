import { Button } from "@/components/ui/button";
import { Shield, Clock } from "lucide-react";

const CTASection = () => {
  const affiliateLink = "https://rewarduplevel.com/aff_c?offer_id=250&aff_id=4035";

  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Claim Your Reward?
        </h2>
        
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied participants who have already 
          claimed their Target gift cards.
        </p>
        
        <Button 
          asChild
          size="lg" 
          className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3 text-lg mb-6"
        >
          <a href={affiliateLink} target="_blank" rel="noopener noreferrer">
            Start Your Claim Process →
          </a>
        </Button>
        
        <div className="flex justify-center items-center gap-8 text-white/90">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            <span>Secure Process</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span>Quick Setup</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;