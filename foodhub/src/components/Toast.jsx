import { CheckCircle2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Toast = () => {
  const { toastMessage } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[150] animate-[slideDown_0.3s_ease-out]">
      <div className="bg-secondary text-white px-6 py-4 rounded-full shadow-lg flex items-center gap-3">
        <CheckCircle2 size={20} className="text-primary" />
        <p className="text-[15px] font-medium whitespace-nowrap">{toastMessage}</p>
      </div>
    </div>
  );
};

export default Toast;
