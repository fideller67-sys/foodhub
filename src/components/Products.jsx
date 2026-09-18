import { Plus, SlidersHorizontal, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Products = ({ products }) => {
  const { addToCart } = useCart();

  return (
    <section className="container mb-20">
      <div className="flex justify-between items-baseline mb-6 md:mb-8">
        <h2 className="text-[20px] md:text-[28px] font-bold mb-0 text-secondary">Popular near you</h2>
        <button className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center bg-primary-bg text-primary transition-all duration-200 hover:bg-primary hover:text-white">
          <SlidersHorizontal size={16} className="md:w-5 md:h-5" />
        </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
        {products.map((product) => (
          <div className="bg-white rounded-xl p-3 md:p-4 shadow-sm border border-border transition-all duration-200 hover:-translate-y-1 hover:shadow-md group" key={product.id}>
            <div className="relative h-[120px] md:h-[200px] rounded-lg overflow-hidden mb-3 md:mb-4 bg-gradient-to-br from-[#FF8A3D] to-[#F25C05]">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              <button 
                className="absolute bottom-2 right-2 md:bottom-3 md:right-3 w-8 h-8 md:w-10 md:h-10 bg-primary rounded-full flex items-center justify-center shadow-md transition-all duration-200 hover:scale-110 hover:bg-primary-hover z-10"
                onClick={() => addToCart(product)}
                aria-label="Add to cart"
              >
                <Plus size={20} color="white" className="md:w-6 md:h-6" />
              </button>
            </div>
            
            <div className="flex flex-col gap-1 md:gap-2">
              <h3 className="text-[13px] md:text-base font-bold text-secondary leading-tight">{product.name}</h3>
              <p className="text-[11px] md:text-[13px] text-text-muted leading-snug md:leading-relaxed h-[32px] md:h-[36px] overflow-hidden line-clamp-2">{product.description}</p>
              
              <div className="flex justify-between items-center mt-1 md:mt-2">
                <span className="font-extrabold text-[14px] md:text-base text-secondary">₦ {product.price}</span>
                <div className="flex items-center gap-1 text-[11px] md:text-[13px] font-bold text-primary">
                  <span>{product.rating}</span>
                  <Star size={12} color="#F25C05" fill="#F25C05" className="md:w-3.5 md:h-3.5" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
