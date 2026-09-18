import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartSidebar = () => {
  const { cart, isCartOpen, closeCart, updateQuantity, removeFromCart, totalPrice } = useCart();

  return (
    <>
      {/* Backdrop */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[100] backdrop-blur-sm transition-opacity"
          onClick={closeCart}
        />
      )}

      {/* Sidebar */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-[110] shadow-2xl transition-transform duration-300 ease-in-out transform flex flex-col ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-bold text-secondary">Your Cart</h2>
          <button 
            onClick={closeCart}
            className="w-10 h-10 rounded-full bg-primary-bg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-text-muted gap-4">
              <div className="w-20 h-20 rounded-full bg-primary-bg flex items-center justify-center">
                <Trash2 size={32} className="text-primary opacity-50" />
              </div>
              <p>Your cart is empty.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 items-center bg-white border border-border p-3 rounded-2xl shadow-sm">
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-primary-bg">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="flex-1 flex flex-col">
                    <h4 className="text-[15px] font-bold text-secondary leading-tight mb-1">{item.name}</h4>
                    <span className="text-primary font-bold text-sm mb-2">₦ {item.price}</span>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-3 bg-background rounded-full px-2 py-1 border border-border">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-secondary shadow-sm hover:text-primary transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-secondary shadow-sm hover:text-primary transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-text-muted hover:text-red-500 transition-colors p-2"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t border-border bg-background">
            <div className="flex items-center justify-between mb-4">
              <span className="text-text-muted font-medium">Subtotal</span>
              <span className="text-xl font-bold text-secondary">₦ {totalPrice.toFixed(2)}</span>
            </div>
            <button className="w-full py-4 rounded-xl bg-primary text-white font-bold text-lg shadow-primary-hover hover:bg-primary-hover transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
