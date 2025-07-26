import { Button } from "@/components/ui/button";
import TargetLogo from "./TargetLogo";
import StatsSection from "./StatsSection";
import HowItWorks from "./HowItWorks";
import TestimonialsSection from "./TestimonialsSection";
import CTASection from "./CTASection";
import Footer from "./Footer";
import SocialProofNotification from "./SocialProofNotification";
import { Badge } from "@/components/ui/badge";
import { Shield } from "lucide-react";

const TargetRewardsLanding = () => {
  const affiliateLink = "https://rewarduplevel.com/aff_c?offer_id=250&aff_id=4035";

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-6 bg-background border-b border-border">
        <div className="container mx-auto px-4 flex justify-center">
          <TargetLogo />
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-target-red-light">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-6 border-primary text-primary">
            🎁 Reward Program
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get Your $750 Gift Card
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Complete simple tasks and earn up to $750 in Target 
            gift cards. Join thousands of satisfied participants.
          </p>
          
          <Button 
            asChild
            size="lg" 
            className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold px-8 py-3 text-lg mb-6"
          >
            <a href={affiliateLink} target="_blank" rel="noopener noreferrer">
              Claim Your Giftcard →
            </a>
          </Button>
          
          <div className="flex justify-center items-center gap-2 text-muted-foreground">
            <Shield className="w-4 h-4" />
            <span className="text-sm">Secure & Verified Process</span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* How It Works */}
      <HowItWorks />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
      
      {/* Social Proof Notifications */}
      <SocialProofNotification />
    </div>
  );
};

export default TargetRewardsLanding;