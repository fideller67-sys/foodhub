import { ClipboardList, CreditCard, Bike } from 'lucide-react';

const Features = () => {
  return (
    <section className="bg-primary-bg py-10 md:py-20 mb-10 md:mb-20">
      <div className="container">
        <h2 className="text-center text-[22px] md:text-[32px] font-extrabold text-secondary mb-8 md:mb-12">Good food, made easy</h2>
        
        <div className="grid grid-cols-3 gap-2 md:gap-10 text-center">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center mb-3 md:mb-4 shadow-sm">
              <ClipboardList size={18} className="md:w-7 md:h-7 text-primary" />
            </div>
            <h3 className="text-[11px] md:text-lg font-bold text-secondary mb-1 md:mb-2">1 Select Dish</h3>
            <p className="text-[10px] md:text-[15px] text-text-muted leading-tight">Browse your<br className="md:hidden" /> favourites</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center mb-3 md:mb-4 shadow-sm">
              <CreditCard size={18} className="md:w-7 md:h-7 text-primary" />
            </div>
            <h3 className="text-[11px] md:text-lg font-bold text-secondary mb-1 md:mb-2">2 Easy Payment</h3>
            <p className="text-[10px] md:text-[15px] text-text-muted leading-tight">Pay securely in<br className="md:hidden" /> seconds</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center mb-3 md:mb-4 shadow-sm">
              <Bike size={18} className="md:w-7 md:h-7 text-primary" />
            </div>
            <h3 className="text-[11px] md:text-lg font-bold text-secondary mb-1 md:mb-2">3 Fast Delivery</h3>
            <p className="text-[10px] md:text-[15px] text-text-muted leading-tight">Track it to<br className="md:hidden" /> your door</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
