import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Products from './components/Products';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';
import Toast from './components/Toast';
import { categories, products, testimonials } from './data';
import './index.css';

function App() {
  return (
    <CartProvider>
      <div className="app">
        <Header />
        <main>
          <Hero />
          <Categories categories={categories} />
          <Products products={products} />
          <Features />
          <Testimonials testimonials={testimonials} />
        </main>
        <Footer />
        <CartSidebar />
        <Toast />
      </div>
    </CartProvider>
  );
}

export default App;
