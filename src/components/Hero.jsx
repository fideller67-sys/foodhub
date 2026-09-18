import { Clock, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section>
      <div className="bg-gradient-to-br from-[#c32720] to-primary rounded-b-[45px] p-6 md:p-16 flex flex-col md:flex-row items-center gap-12 text-white mb-10 md:mb-16 overflow-hidden relative">
        <div className="flex-1 w-full z-10 animate-fade-in flex flex-col items-center md:items-start text-center md:text-left mt-4 md:mt-0">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full text-[12px] md:text-[13px] font-semibold tracking-wide mb-6 backdrop-blur-sm border border-white/10">
            <Clock size={14} className="md:w-4 md:h-4" />
            <span>DELIVERY IN 30-45 MIN</span>
          </div>
          
          <h1 className="text-[36px] md:text-[56px] font-extrabold leading-[1.15] mb-4 md:mb-5 tracking-tight w-full max-w-[400px] md:max-w-none">
            Fresh, Fast & Delicious<br className="hidden md:block" /> Meals Delivered
          </h1>
          
          <p className="text-[15px] md:text-lg opacity-90 max-w-[450px] leading-relaxed mb-8 md:mb-10 px-2 md:px-0">
            Your favourite local meals and quick bites, delivered hot and fresh to your door.
          </p>

          <div className="w-full max-w-[500px] flex flex-col md:flex-row gap-3 md:bg-white md:p-2 rounded-xl mb-8 md:shadow-lg">
            <div className="flex items-center gap-3 px-4 py-4 md:py-0 flex-1 bg-white rounded-xl text-text-dark w-full shadow-sm md:shadow-none">
              <MapPin size={20} className="text-primary min-w-[20px]" />
              <input type="text" placeholder="Search restaurants or dishes" className="border-none outline-none w-full text-[15px] md:text-base bg-transparent placeholder-text-muted" />
            </div>
            <button className="w-full md:w-auto px-8 py-4 rounded-xl text-[15px] md:text-base font-bold transition-all duration-200 bg-secondary md:bg-secondary text-white hover:bg-black flex items-center justify-center shadow-lg md:shadow-none">
              Order Now
            </button>
          </div>

          <div className="flex items-center justify-between md:justify-start w-full md:w-auto gap-3 text-[13px] md:text-sm font-medium border-t border-white/20 md:border-none pt-6 md:pt-0">
            <div className="flex items-center gap-2">
              <div className="flex">
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-[#d73f1a] md:border-primary bg-[#FFD166] -ml-2.5 first:ml-0 shadow-sm"></div>
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-[#d73f1a] md:border-primary bg-[#06D6A0] -ml-2.5 shadow-sm"></div>
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-[#d73f1a] md:border-primary bg-[#EF476F] -ml-2.5 shadow-sm"></div>
              </div>
              <span className="text-white">Loved by 10,000+ foodies</span>
            </div>
            <span className="font-bold text-white flex items-center gap-1">4.8 <span className="text-[#FFD166]">★</span></span>
          </div>
        </div>

        <div className="hidden md:flex flex-1 w-full max-w-[520px] h-[400px] bg-white/10 rounded-3xl border border-white/20 items-center justify-center text-5xl font-bold text-white/50 backdrop-blur-md relative overflow-hidden animate-fade-in shadow-lg" style={{animationDelay: '0.2s'}}>
          <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800" alt="Delicious Food" className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
