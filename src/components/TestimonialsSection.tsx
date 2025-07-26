import TestimonialCard from "./TestimonialCard";

const TestimonialsSection = () => {
  const testimonials = [
    {
      rating: 5,
      text: "I was skeptical at first, but I actually received my $520 Target gift card after completing the tasks. The process was straightforward and legitimate.",
      author: "Emily R.",
      location: "Nevada"
    },
    {
      rating: 5,
      text: "Completed all the requirements and got my $750 reward. It took some time but was worth it. Great way to earn Target credit.",
      author: "Marcus T.",
      location: "California"
    },
    {
      rating: 5,
      text: "The surveys were easy and the partner offers were actually useful. Received my $430 gift card as promised. Highly recommend!",
      author: "Jennifer L.",
      location: "Florida"
    },
    {
      rating: 4,
      text: "Took a bit longer than expected to complete all requirements, but the $450 reward was worth it. Make sure to read all instructions carefully.",
      author: "Robert T.",
      location: "Ohio"
    }
  ];

  return (
    <section className="py-16 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          What Participants Say
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              rating={testimonial.rating}
              text={testimonial.text}
              author={testimonial.author}
              location={testimonial.location}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;