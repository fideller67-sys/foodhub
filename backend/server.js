const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const categories = [
  { id: 1, name: 'Local Dishes', icon: 'utensils', color: '#F25C05' },
  { id: 2, name: 'Fast Food', icon: 'burger', color: '#FDECE0' },
  { id: 3, name: 'Drinks', icon: 'cup-soda', color: '#FDECE0' },
  { id: 4, name: 'Desserts', icon: 'cake', color: '#FDECE0' },
  { id: 5, name: 'Breakfast', icon: 'egg-fried', color: '#FDECE0' },
  { id: 6, name: 'More', icon: 'salad', color: '#FDECE0' },
];

const products = [
  {
    id: 1,
    name: 'Jollof Rice & Chicken',
    description: 'Spicy fried chicken, plantain and smoky jollof',
    price: 3500,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800',
    category: 'Local Dishes'
  },
  {
    id: 2,
    name: 'Classic Beef Burger',
    description: 'Grilled beef, cheddar, lettuce and house sauce',
    price: 4800,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800',
    category: 'Fast Food'
  },
  {
    id: 3,
    name: 'Waakye Special',
    description: 'Rice and beans with egg, stew and shito',
    price: 4200,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&q=80&w=800',
    category: 'Local Dishes'
  },
  {
    id: 4,
    name: 'Chicken Shawarma',
    description: 'Tender chicken, fresh salad and garlic sauce',
    price: 3800,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=800',
    category: 'Fast Food'
  }
];

const testimonials = [
  {
    id: 1,
    name: 'Ama Mensah',
    role: 'Verified customer',
    text: '"The jollof arrived hot, tasty and right on time. Foodhub is now my go-to lunch spot!"',
    rating: 5
  }
];

// Routes
app.get('/api/categories', (req, res) => {
  res.json(categories);
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/testimonials', (req, res) => {
  res.json(testimonials);
});

app.post('/api/orders', (req, res) => {
  const order = req.body;
  console.log('New Order Received:', order);
  res.status(201).json({ message: 'Order placed successfully!', orderId: Date.now() });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
