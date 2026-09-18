import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Footer = () => {
  const { totalItems, totalPrice, openCart } = useCart();

  return (
    <footer className="bg-secondary text-white pt-16 relative">
      <div className="container pb-12 border-b border-white/10">
        <div>
          <h2 className="text-2xl font-extrabold text-white mb-4 flex items-baseline gap-1">
            Foodhub <span className="text-sm font-medium text-[#ccc]">by CWC</span>
          </h2>
          <p className="text-base text-[#ccc] mb-8">Great meals. Right to your door.</p>
          
          <div className="flex flex-col gap-2 mb-8 text-[#ccc] text-sm">
            <p>+2349160001414</p>
            <p>hello@foodhubcwc.com</p>
            <p>Open daily - 10:00 AM – 11:00 PM</p>
          </div>
          
          <div className="flex gap-6">
            <a href="#instagram" className="flex items-center gap-2 text-white text-sm font-medium transition-colors hover:text-primary">Instagram</a>
            <a href="#facebook" className="flex items-center gap-2 text-white text-sm font-medium transition-colors hover:text-primary">Facebook</a>
            <a href="#twitter" className="flex items-center gap-2 text-white text-sm font-medium transition-colors hover:text-primary">Whatsapp</a>
          </div>
        </div>
      </div>
      
      <div className="container py-6 text-xs text-[#888]">
        <p>© 2024 Foodhub by CWC</p>
      </div>

      {totalItems > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-secondary rounded-3xl py-4 px-6 flex items-center justify-between w-[calc(100%-48px)] max-w-[400px] shadow-lg z-[100] animate-[slideUp_0.3s_ease-out]">
          <div className="flex items-center gap-4">
            <ShoppingCart size={24} color="#F25C05" />
            <div>
              <p className="text-[13px] text-[#ccc] mb-0.5">{totalItems} items in cart</p>
              <p className="text-base font-bold text-white">₦ {totalPrice.toFixed(2)}</p>
            </div>
          </div>
          <button 
            onClick={openCart}
            className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-[15px] transition-all duration-200 bg-primary text-white hover:bg-primary-hover"
          >
            View Cart
          </button>
        </div>
      )}
    </footer>
  );
};

export default Footer;
