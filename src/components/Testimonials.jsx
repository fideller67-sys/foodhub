import { Star } from 'lucide-react';

const Testimonials = ({ testimonials }) => {
  return (
    <section className="container mb-20">
      <h2 className="section-title">What foodies say</h2>
      
      <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
        {testimonials.map((testimonial) => (
          <div className="bg-white border border-border rounded-xl p-8 flex-1 min-w-[300px] max-w-[500px] shadow-sm" key={testimonial.id}>
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={16} 
                  fill={i < testimonial.rating ? "#F25C05" : "transparent"} 
                  color={i < testimonial.rating ? "#F25C05" : "#ddd"} 
                />
              ))}
            </div>
            
            <p className="text-base text-secondary leading-relaxed italic mb-6">{testimonial.text}</p>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FFD166]"></div>
              <div>
                <h4 className="text-[15px] font-bold text-secondary">{testimonial.name}</h4>
                <span className="text-[13px] text-text-muted">{testimonial.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-start gap-2 mt-6">
        <span className="w-2 h-2 rounded-full bg-primary cursor-pointer transition-colors duration-200"></span>
        <span className="w-2 h-2 rounded-full bg-[#ddd] cursor-pointer transition-colors duration-200"></span>
      </div>
    </section>
  );
};

export default Testimonials;
