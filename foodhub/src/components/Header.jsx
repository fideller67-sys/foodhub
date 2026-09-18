import { ShoppingCart, Search, MapPin, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { totalItems, openCart } = useCart();

  return (
    <header className="flex items-center justify-between py-4 container">
      {/* Mobile Layout: Logo, Location, Hamburger */}
      <div className="flex items-baseline gap-1 text-[20px] md:text-[22px] font-extrabold text-primary">
        <h2>Foodhub<span className="text-xs md:text-sm font-semibold text-secondary ml-1">by CWC</span></h2>
      </div>
      
      <div className="flex items-center gap-1 md:gap-2 text-[11px] md:text-sm font-medium text-text-muted">
        <MapPin size={16} className="text-primary md:w-[18px] md:h-[18px]" />
        <span>Lagos, Nigeria</span>
      </div>

      <button className="md:hidden flex items-center justify-center p-2 bg-white border border-border rounded-lg shadow-sm">
        <Menu size={20} className="text-secondary" />
      </button>

      {/* Desktop Layout: Nav & Actions */}
      <nav className="hidden md:flex gap-6">
        <a href="#local" className="text-[15px] font-medium text-text-muted transition-colors hover:text-primary">Local Dishes</a>
        <a href="#fast-food" className="text-[15px] font-medium text-text-muted transition-colors hover:text-primary">Fast Food</a>
        <a href="#drinks" className="text-[15px] font-medium text-text-muted transition-colors hover:text-primary">Drinks</a>
        <a href="#desserts" className="text-[15px] font-medium text-text-muted transition-colors hover:text-primary">Desserts</a>
      </nav>

      <div className="hidden md:flex items-center gap-4">
        <div className="flex items-center gap-2 bg-white border border-border px-4 py-2.5 rounded-full">
          <Search size={18} className="text-text-muted" />
          <input type="text" placeholder="Search meals" className="border-none outline-none w-[150px] text-sm" />
        </div>
        <button 
          onClick={openCart}
          className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-[15px] transition-all duration-200 bg-primary text-white hover:bg-primary-hover hover:-translate-y-0.5 hover:shadow-primary-hover"
        >
          <ShoppingCart size={18} />
          <span>Cart {totalItems > 0 && `(${totalItems})`}</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
