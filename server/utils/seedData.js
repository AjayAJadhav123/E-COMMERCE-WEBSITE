import dotenv from 'dotenv';
import connectDB from '../config/db.js';
import User from '../models/User.js';
import Product from '../models/Product.js';
import Order from '../models/Order.js';
import Cart from '../models/Cart.js';
import Wishlist from '../models/Wishlist.js';

dotenv.config();

const users = [
  {
    name: 'Admin User',
    email: 'admin@shopsphere.com',
    password: 'admin123',
    role: 'admin',
    profileImage: 'https://i.pravatar.cc/150?img=11',
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123',
    role: 'user',
    profileImage: 'https://i.pravatar.cc/150?img=12',
  },
  {
    name: 'Jane Smith',
    email: 'jane@example.com',
    password: 'password123',
    role: 'user',
    profileImage: 'https://i.pravatar.cc/150?img=13',
  },
];

const products = [
  {
    title: 'Apple iPhone 15 Pro',
    description:
      'Latest iPhone with A17 Pro chip, titanium design, and advanced camera system. Features stunning 6.7-inch Super Retina XDR display.',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1696446702274-242d0f29f384?w=500',
    price: 129999,
    stock: 50,
    rating: 4.8,
  },
  {
    title: 'Samsung 65" 4K Smart TV',
    description:
      'Crystal clear 4K resolution with smart features. HDR support, voice control, and streaming apps built-in.',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500',
    price: 89999,
    stock: 30,
    rating: 4.6,
  },
  {
    title: 'Sony WH-1000XM5 Headphones',
    description:
      'Industry-leading noise cancellation with premium sound quality. 30-hour battery life and multipoint connection.',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500',
    price: 29990,
    stock: 100,
    rating: 4.9,
  },
  {
    title: 'MacBook Pro 14" M3',
    description:
      'Powerful laptop with M3 chip and Liquid Retina XDR display. Perfect for professionals and creators.',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500',
    price: 169900,
    stock: 25,
    rating: 4.9,
  },
  {
    title: 'Nike Air Max 270',
    description:
      'Comfortable lifestyle sneakers with Max Air cushioning. Breathable mesh upper with iconic design.',
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
    price: 12995,
    stock: 200,
    rating: 4.5,
  },
  {
    title: 'Adidas Ultraboost 22',
    description:
      'Premium running shoes with Boost cushioning. Provides exceptional energy return and comfort.',
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500',
    price: 16999,
    stock: 150,
    rating: 4.6,
  },
  {
    title: "Levi's 501 Original Jeans",
    description: 'Classic straight-fit jeans with button fly. Made from premium denim.',
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500',
    price: 4999,
    stock: 300,
    rating: 4.4,
  },
  {
    title: 'Modern Sofa Set',
    description:
      '3-seater comfortable sofa with premium fabric. Perfect for living room with contemporary design.',
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500',
    price: 45000,
    stock: 20,
    rating: 4.7,
  },
  {
    title: 'The Alchemist - Paulo Coelho',
    description:
      'International bestseller about following your dreams. A philosophical novel that has inspired millions.',
    category: 'Books',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500',
    price: 399,
    stock: 500,
    rating: 4.8,
  },
  {
    title: 'Atomic Habits - James Clear',
    description:
      'Practical guide to building good habits and breaking bad ones. Learn tiny changes for remarkable results.',
    category: 'Books',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=500',
    price: 599,
    stock: 400,
    rating: 4.9,
  },
  {
    title: 'Yoga Mat Premium',
    description:
      'Non-slip yoga mat with extra cushioning. Eco-friendly material, perfect for home workouts.',
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500',
    price: 1999,
    stock: 150,
    rating: 4.5,
  },
  {
    title: 'Face Serum Vitamin C',
    description:
      'Brightening face serum with Vitamin C. Reduces dark spots and improves skin texture.',
    category: 'Beauty',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500',
    price: 1499,
    stock: 200,
    rating: 4.6,
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    console.log('🗑️  Clearing database...');
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();
    await Cart.deleteMany();
    await Wishlist.deleteMany();

    console.log('👥 Seeding users...');
    const createdUsers = await User.insertMany(users);
    console.log(`✅ ${createdUsers.length} users created`);

    console.log('📦 Seeding products...');
    const createdProducts = await Product.insertMany(products);
    console.log(`✅ ${createdProducts.length} products created`);

    console.log('\n✨ Database seeded successfully!\n');
    console.log('🔐 Admin Credentials:');
    console.log('   Email: admin@shopsphere.com');
    console.log('   Password: admin123\n');
    console.log('🔐 Test User Credentials:');
    console.log('   Email: john@example.com');
    console.log('   Password: password123\n');

    process.exit(0);
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    process.exit(1);
  }
};

seedDatabase();
