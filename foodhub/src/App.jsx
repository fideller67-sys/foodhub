import { useState, useEffect } from 'react';
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
import './index.css';

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [catRes, prodRes, testRes] = await Promise.all([
          fetch('http://localhost:5000/api/categories'),
          fetch('http://localhost:5000/api/products'),
          fetch('http://localhost:5000/api/testimonials')
        ]);

        const catData = await catRes.json();
        const prodData = await prodRes.json();
        const testData = await testRes.json();

        setCategories(catData);
        setProducts(prodData);
        setTestimonials(testData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="loading-screen">Loading Foodhub...</div>;
  }

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
