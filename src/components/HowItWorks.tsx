const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Click Claim Button",
      description: "Start your reward journey by clicking the claim button above."
    },
    {
      number: "2", 
      title: "Complete Survey",
      description: "Answer a few quick questions about your shopping preferences."
    },
    {
      number: "3",
      title: "Complete Deals", 
      description: "Participate in partner offers to earn reward points."
    },
    {
      number: "4",
      title: "Earn More Rewards",
      description: "Complete more deals to earn more reward"
    },
    {
      number: "5",
      title: "Receive Your Reward",
      description: "Your gift card will be delivered to your email within 24 hours of completion."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          How It Works
        </h2>
        
        <div className="max-w-2xl mx-auto space-y-8">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                {step.number}
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-lg mb-1">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;