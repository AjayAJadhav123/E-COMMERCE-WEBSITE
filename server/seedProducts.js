import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Product from './models/Product.js';

dotenv.config();

// 49 Realistic Products across 8 categories
// Valid categories: Electronics, Fashion, Home, Books, Sports, Beauty, Toys, Grocery
const productsData = [
  // Electronics (12 products)
  {
    title: 'Apple iPhone 15 Pro Max',
    description: 'Latest iPhone with A17 Pro chip, titanium design, and advanced camera system.',
    category: 'Electronics',
    brand: 'Apple',
    image: 'https://images.unsplash.com/photo-1696446702274-242d0f29f384?w=500&h=500&fit=crop',
    price: 129999,
    stock: 45,
    rating: 4.8,
  },
  {
    title: 'Samsung Galaxy S24 Ultra',
    description: 'Premium Android flagship with S Pen and 200MP camera. Snapdragon 8 Gen 3.',
    category: 'Electronics',
    brand: 'Samsung',
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&h=500&fit=crop',
    price: 124999,
    stock: 38,
    rating: 4.7,
  },
  {
    title: 'Sony WH-1000XM5 Headphones',
    description: 'Industry-leading noise cancellation with premium sound quality and 30-hour battery.',
    category: 'Electronics',
    brand: 'Sony',
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&h=500&fit=crop',
    price: 29990,
    stock: 120,
    rating: 4.9,
  },
  {
    title: 'MacBook Pro 14" M3',
    description: 'Powerful laptop with M3 chip and Liquid Retina XDR display. All-day battery.',
    category: 'Electronics',
    brand: 'Apple',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop',
    price: 169900,
    stock: 25,
    rating: 4.9,
  },
  {
    title: 'Dell XPS 15 Laptop',
    description: 'High-performance laptop with Intel Core i7, RTX 4060, and 4K OLED display.',
    category: 'Electronics',
    brand: 'Dell',
    image: 'https://images.unsplash.com/photo-1588872657840-790ff3f34cda?w=500&h=500&fit=crop',
    price: 139999,
    stock: 32,
    rating: 4.6,
  },
  {
    title: 'iPad Pro 12.9"',
    description: 'Powerful tablet with M2 chip, Liquid Retina display, and Apple Pencil support.',
    category: 'Electronics',
    brand: 'Apple',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop',
    price: 79999,
    stock: 50,
    rating: 4.7,
  },
  {
    title: 'Samsung 65" 4K Smart TV',
    description: 'Crystal clear 4K resolution with HDR support and smart features.',
    category: 'Electronics',
    brand: 'Samsung',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&h=500&fit=crop',
    price: 89999,
    stock: 20,
    rating: 4.6,
  },
  {
    title: 'GoPro HERO 12 Black',
    description: 'Compact action camera with 5.3K video and advanced stabilization.',
    category: 'Electronics',
    brand: 'GoPro',
    image: 'https://images.unsplash.com/photo-1600933518497-4a145e90e3b1?w=500&h=500&fit=crop',
    price: 44999,
    stock: 60,
    rating: 4.5,
  },
  {
    title: 'Canon EOS R6 Camera',
    description: 'Professional mirrorless camera with 20MP sensor and 4K video.',
    category: 'Electronics',
    brand: 'Canon',
    image: 'https://images.unsplash.com/photo-1606986628025-35d57e735ae0?w=500&h=500&fit=crop',
    price: 259999,
    stock: 15,
    rating: 4.8,
  },
  {
    title: 'Wireless Charging Pad',
    description: 'Fast wireless charging pad compatible with all Qi-enabled devices.',
    category: 'Electronics',
    brand: 'Anker',
    image: 'https://images.unsplash.com/photo-1591290619735-dd3ee96f5cba?w=500&h=500&fit=crop',
    price: 1999,
    stock: 200,
    rating: 4.4,
  },
  {
    title: 'Samsung Galaxy Watch 6',
    description: 'Advanced smartwatch with health tracking and AMOLED display.',
    category: 'Electronics',
    brand: 'Samsung',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
    price: 24999,
    stock: 80,
    rating: 4.5,
  },
  {
    title: 'AirPods Pro Max',
    description: 'Premium over-ear headphones with spatial audio and active noise cancellation.',
    category: 'Electronics',
    brand: 'Apple',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    price: 59900,
    stock: 40,
    rating: 4.7,
  },

  // Fashion (14 products including shoes and clothing)
  {
    title: "Levi's 501 Original Jeans",
    description: 'Classic straight-fit jeans with button fly and premium denim.',
    category: 'Fashion',
    brand: "Levi's",
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop',
    price: 4999,
    stock: 150,
    rating: 4.4,
  },
  {
    title: 'Zara Cotton Blend Blazer',
    description: 'Professional blazer with modern fit for business occasions.',
    category: 'Fashion',
    brand: 'Zara',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&h=500&fit=crop',
    price: 7999,
    stock: 80,
    rating: 4.3,
  },
  {
    title: 'H&M Black T-Shirt',
    description: 'Essential basic black t-shirt made from 100% cotton.',
    category: 'Fashion',
    brand: 'H&M',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
    price: 999,
    stock: 300,
    rating: 4.2,
  },
  {
    title: 'Nike Air Max 270 Shoes',
    description: 'Comfortable lifestyle sneakers with Max Air cushioning.',
    category: 'Fashion',
    brand: 'Nike',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
    price: 12995,
    stock: 200,
    rating: 4.5,
  },
  {
    title: 'Adidas Ultraboost 22',
    description: 'Premium running shoes with Boost cushioning and Primeknit upper.',
    category: 'Fashion',
    brand: 'Adidas',
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&h=500&fit=crop',
    price: 16999,
    stock: 150,
    rating: 4.6,
  },
  {
    title: 'Converse Chuck Taylor High Top',
    description: 'Classic canvas high-top sneaker with iconic design.',
    category: 'Fashion',
    brand: 'Converse',
    image: 'https://images.unsplash.com/photo-1545291730-faeb380ebec2?w=500&h=500&fit=crop',
    price: 5499,
    stock: 250,
    rating: 4.3,
  },
  {
    title: 'New Balance 990v6',
    description: 'Classic running shoe with premium cushioning and stability.',
    category: 'Fashion',
    brand: 'New Balance',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
    price: 18999,
    stock: 120,
    rating: 4.7,
  },
  {
    title: 'Dr. Martens 1460 Boots',
    description: 'Iconic lace-up boots with air-cushioned sole.',
    category: 'Fashion',
    brand: 'Dr. Martens',
    image: 'https://images.unsplash.com/photo-1543163521-9be0c27dd4f5?w=500&h=500&fit=crop',
    price: 14999,
    stock: 80,
    rating: 4.6,
  },
  {
    title: 'Gucci Luxury Handbag',
    description: 'Premium leather handbag with iconic Gucci design.',
    category: 'Fashion',
    brand: 'Gucci',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&h=500&fit=crop',
    price: 199999,
    stock: 10,
    rating: 4.9,
  },
  {
    title: 'Calvin Klein Polo Shirt',
    description: 'Classic polo shirt from Calvin Klein with premium fabric.',
    category: 'Fashion',
    brand: 'Calvin Klein',
    image: 'https://images.unsplash.com/photo-1560294390-3b8b3d0f7d3b?w=500&h=500&fit=crop',
    price: 3999,
    stock: 100,
    rating: 4.4,
  },
  {
    title: 'Tommy Hilfiger Jacket',
    description: 'Classic Tommy Hilfiger jacket with iconic flag logo.',
    category: 'Fashion',
    brand: 'Tommy Hilfiger',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=500&h=500&fit=crop',
    price: 12999,
    stock: 45,
    rating: 4.5,
  },
  {
    title: 'Nike Sports Windbreaker',
    description: 'Lightweight windbreaker for active wear and sports activities.',
    category: 'Fashion',
    brand: 'Nike',
    image: 'https://images.unsplash.com/photo-1546181995-1d91fd2a0d00?w=500&h=500&fit=crop',
    price: 5999,
    stock: 90,
    rating: 4.6,
  },
  {
    title: 'ASICS Gel-Kayano 30',
    description: 'Professional running shoe with advanced gel cushioning technology.',
    category: 'Fashion',
    brand: 'ASICS',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
    price: 17999,
    stock: 100,
    rating: 4.7,
  },
  {
    title: 'Puma RS-X Sneakers',
    description: 'Retro-inspired sneakers with modern comfort.',
    category: 'Fashion',
    brand: 'Puma',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
    price: 7999,
    stock: 180,
    rating: 4.4,
  },

  // Books (6 products)
  {
    title: 'The Alchemist - Paulo Coelho',
    description: 'International bestseller about following your dreams.',
    category: 'Books',
    brand: 'HarperCollins',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&h=500&fit=crop',
    price: 399,
    stock: 500,
    rating: 4.8,
  },
  {
    title: 'Atomic Habits - James Clear',
    description: 'Guide to building good habits and breaking bad ones.',
    category: 'Books',
    brand: 'Penguin Random House',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=500&h=500&fit=crop',
    price: 599,
    stock: 400,
    rating: 4.9,
  },
  {
    title: 'Sapiens - Yuval Noah Harari',
    description: 'Fascinating history of humankind from Stone Age to modern times.',
    category: 'Books',
    brand: 'Harper',
    image: 'https://images.unsplash.com/photo-1507842217343-583f20270319?w=500&h=500&fit=crop',
    price: 649,
    stock: 350,
    rating: 4.7,
  },
  {
    title: 'Think and Grow Rich - Napoleon Hill',
    description: 'Classic self-help book on achieving success and wealth.',
    category: 'Books',
    brand: 'Penguin',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=500&fit=crop',
    price: 449,
    stock: 300,
    rating: 4.6,
  },
  {
    title: 'The 7 Habits of Highly Effective People',
    description: 'Influential book on personal and professional development.',
    category: 'Books',
    brand: 'Free Press',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&h=500&fit=crop',
    price: 549,
    stock: 280,
    rating: 4.7,
  },
  {
    title: 'Rich Dad Poor Dad',
    description: 'Personal finance book about investing and wealth building.',
    category: 'Books',
    brand: 'Plata Publishing',
    image: 'https://images.unsplash.com/photo-1507842217343-583f20270319?w=500&h=500&fit=crop',
    price: 449,
    stock: 250,
    rating: 4.6,
  },

  // Grocery (7 products)
  {
    title: 'Organic Quinoa 1kg',
    description: 'Premium quality organic quinoa, rich in protein and nutrients.',
    category: 'Grocery',
    brand: 'Organic India',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&h=500&fit=crop',
    price: 499,
    stock: 1000,
    rating: 4.5,
  },
  {
    title: 'Cold Pressed Olive Oil 500ml',
    description: 'Extra virgin cold pressed olive oil with antioxidants.',
    category: 'Grocery',
    brand: 'Figaro',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&h=500&fit=crop',
    price: 799,
    stock: 800,
    rating: 4.6,
  },
  {
    title: 'Almond Butter 500g',
    description: 'Natural almond butter made from roasted almonds without added sugar.',
    category: 'Grocery',
    brand: 'Nature Valley',
    image: 'https://images.unsplash.com/photo-1585502694655-c67564b646e1?w=500&h=500&fit=crop',
    price: 649,
    stock: 600,
    rating: 4.7,
  },
  {
    title: 'Green Tea Assortment 50 bags',
    description: 'Premium green tea bags with various flavors.',
    category: 'Grocery',
    brand: 'Lipton',
    image: 'https://images.unsplash.com/photo-1597318131022-93d66fbba5fa?w=500&h=500&fit=crop',
    price: 399,
    stock: 1200,
    rating: 4.4,
  },
  {
    title: 'Brown Rice 2kg',
    description: 'Organic brown rice high in fiber and nutrients.',
    category: 'Grocery',
    brand: 'Amar',
    image: 'https://images.unsplash.com/photo-1586298407-112ffc5db988?w=500&h=500&fit=crop',
    price: 349,
    stock: 1500,
    rating: 4.5,
  },
  {
    title: 'Honey Raw 500ml',
    description: 'Pure raw honey with all natural enzymes and nutrients.',
    category: 'Grocery',
    brand: 'BeeMade',
    image: 'https://images.unsplash.com/photo-1585518419759-13ba54c52dbe?w=500&h=500&fit=crop',
    price: 599,
    stock: 400,
    rating: 4.8,
  },
  {
    title: 'Dark Chocolate 85% Cocoa 200g',
    description: 'Premium dark chocolate with 85% cocoa solids.',
    category: 'Grocery',
    brand: 'Lindt',
    image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd64b73?w=500&h=500&fit=crop',
    price: 349,
    stock: 800,
    rating: 4.6,
  },

  // Beauty (6 products)
  {
    title: 'Face Serum Vitamin C',
    description: 'Brightening face serum with Vitamin C for glowing skin.',
    category: 'Beauty',
    brand: 'Olay',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&h=500&fit=crop',
    price: 1499,
    stock: 200,
    rating: 4.6,
  },
  {
    title: 'Moisturizing Night Cream',
    description: 'Deep moisturizing night cream with hyaluronic acid.',
    category: 'Beauty',
    brand: 'Neutrogena',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&h=500&fit=crop',
    price: 1299,
    stock: 250,
    rating: 4.5,
  },
  {
    title: 'Shampoo Argan Oil 500ml',
    description: 'Nourishing shampoo with argan oil for silky hair.',
    category: 'Beauty',
    brand: "L'Oreal",
    image: 'https://images.unsplash.com/photo-1596277953566-9b53c328a06b?w=500&h=500&fit=crop',
    price: 799,
    stock: 350,
    rating: 4.4,
  },
  {
    title: 'Sunscreen SPF 50',
    description: 'High SPF sunscreen protection against UV rays.',
    category: 'Beauty',
    brand: 'Neutrogena',
    image: 'https://images.unsplash.com/photo-1556228741-4575c9fbe0bd?w=500&h=500&fit=crop',
    price: 599,
    stock: 400,
    rating: 4.7,
  },
  {
    title: 'Lipstick Collection Set',
    description: 'Multi-color lipstick collection with smooth application.',
    category: 'Beauty',
    brand: 'MAC',
    image: 'https://images.unsplash.com/photo-1596327985183-c3400ca199e7?w=500&h=500&fit=crop',
    price: 2999,
    stock: 150,
    rating: 4.8,
  },
  {
    title: 'Face Mask Sheet 10 Pack',
    description: 'Hydrating sheet masks for instant skin refreshment.',
    category: 'Beauty',
    brand: 'Mediheal',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&h=500&fit=crop',
    price: 899,
    stock: 300,
    rating: 4.5,
  },

  // Home (4 products)
  {
    title: 'Stainless Steel Cookware Set',
    description: 'Complete cookware set with non-stick coating.',
    category: 'Home',
    brand: 'Prestige',
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=500&h=500&fit=crop',
    price: 8999,
    stock: 80,
    rating: 4.6,
  },
  {
    title: 'Blender Smoothie Maker 1500W',
    description: 'Powerful blender with multiple speed settings.',
    category: 'Home',
    brand: 'Philips',
    image: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=500&h=500&fit=crop',
    price: 5999,
    stock: 120,
    rating: 4.5,
  },
  {
    title: 'Coffee Maker Drip 12 Cup',
    description: 'Programmable coffee maker with thermal carafe.',
    category: 'Home',
    brand: 'Black+Decker',
    image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd64b73?w=500&h=500&fit=crop',
    price: 3999,
    stock: 150,
    rating: 4.4,
  },
  {
    title: 'Microwave Oven 30L',
    description: 'Digital microwave with multiple cooking modes.',
    category: 'Home',
    brand: 'Samsung',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&h=500&fit=crop',
    price: 12999,
    stock: 60,
    rating: 4.5,
  },

  // Sports (4 products)
  {
    title: 'Yoga Mat Premium 6mm',
    description: 'Non-slip yoga mat with extra cushioning.',
    category: 'Sports',
    brand: 'Fitness First',
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&h=500&fit=crop',
    price: 1999,
    stock: 150,
    rating: 4.5,
  },
  {
    title: 'Dumbbells Set 20kg',
    description: 'Complete dumbbell set with stand for strength training.',
    category: 'Sports',
    brand: 'PowerGym',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&h=500&fit=crop',
    price: 9999,
    stock: 60,
    rating: 4.6,
  },
  {
    title: 'Resistance Bands Set',
    description: 'Multi-level resistance bands for full-body workouts.',
    category: 'Sports',
    brand: 'FitBand',
    image: 'https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=500&h=500&fit=crop',
    price: 1499,
    stock: 200,
    rating: 4.4,
  },
  {
    title: 'Treadmill Folding Electric',
    description: 'Compact electric treadmill with digital display.',
    category: 'Sports',
    brand: 'Fitking',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&h=500&fit=crop',
    price: 29999,
    stock: 30,
    rating: 4.7,
  },

  // Toys (4 products)
  {
    title: 'LEGO Technic Ferrari 488',
    description: 'Detailed LEGO Technic model with realistic design.',
    category: 'Toys',
    brand: 'LEGO',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop',
    price: 12999,
    stock: 80,
    rating: 4.7,
  },
  {
    title: 'Drone 4K Camera FPV',
    description: '4K camera drone with FPV control.',
    category: 'Toys',
    brand: 'DJI',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
    price: 49999,
    stock: 40,
    rating: 4.8,
  },
  {
    title: 'RC Car High Speed',
    description: 'Fast remote-controlled car with all-terrain capability.',
    category: 'Toys',
    brand: 'Traxxas',
    image: 'https://images.unsplash.com/photo-1552062407-291826c9621f?w=500&h=500&fit=crop',
    price: 8999,
    stock: 70,
    rating: 4.5,
  },
  {
    title: 'Board Game Collection Deluxe',
    description: 'Premium collection of classic and modern board games.',
    category: 'Toys',
    brand: 'Hasbro',
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=500&h=500&fit=crop',
    price: 4999,
    stock: 100,
    rating: 4.6,
  },
];

// Connect to MongoDB and seed products
const seedProducts = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);

    console.log('🔗 Connected to MongoDB');
    console.log(`📊 Database: ${mongoose.connection.name}`);

    // Delete all existing products
    console.log('\n🗑️  Deleting old products...');
    const deleteResult = await Product.deleteMany({});
    console.log(`✅ Deleted ${deleteResult.deletedCount} old products`);

    // Insert new products
    console.log('\n📦 Inserting new products...');
    const insertedProducts = await Product.insertMany(productsData);
    console.log(`✅ Successfully inserted ${insertedProducts.length} products`);

    // Show summary by category
    console.log('\n📊 Products by Category:');
    const categories = await Product.aggregate([
      {
        $group: {
          _id: '$category',
          count: { $sum: 1 },
        },
      },
      {
        $sort: { count: -1 },
      },
    ]);

    categories.forEach((cat) => {
      console.log(`   ${cat._id}: ${cat.count} products`);
    });

    // Show pricing statistics
    console.log('\n💰 Pricing Statistics:');
    const priceStats = await Product.aggregate([
      {
        $group: {
          _id: null,
          avgPrice: { $avg: '$price' },
          minPrice: { $min: '$price' },
          maxPrice: { $max: '$price' },
        },
      },
    ]);

    if (priceStats.length > 0) {
      const stats = priceStats[0];
      console.log(`   Average Price: ₹${Math.round(stats.avgPrice).toLocaleString()}`);
      console.log(`   Min Price: ₹${stats.minPrice.toLocaleString()}`);
      console.log(`   Max Price: ₹${stats.maxPrice.toLocaleString()}`);
    }

    // Show rating statistics
    console.log('\n⭐ Rating Statistics:');
    const ratingStats = await Product.aggregate([
      {
        $group: {
          _id: null,
          avgRating: { $avg: '$rating' },
          minRating: { $min: '$rating' },
          maxRating: { $max: '$rating' },
        },
      },
    ]);

    if (ratingStats.length > 0) {
      const stats = ratingStats[0];
      console.log(`   Average Rating: ${stats.avgRating.toFixed(2)}/5`);
      console.log(`   Min Rating: ${stats.minRating}/5`);
      console.log(`   Max Rating: ${stats.maxRating}/5`);
    }

    // Show total stock
    console.log('\n📦 Inventory:');
    const stockStats = await Product.aggregate([
      {
        $group: {
          _id: null,
          totalStock: { $sum: '$stock' },
        },
      },
    ]);

    if (stockStats.length > 0) {
      console.log(`   Total Stock: ${stockStats[0].totalStock} units`);
    }

    console.log('\n✨ Database seeding completed successfully!');
    console.log('🌐 Visit http://localhost:5173 to see products on the frontend');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error.message);
    process.exit(1);
  }
};

// Run the seed function
seedProducts();
