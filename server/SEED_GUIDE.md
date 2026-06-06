# 🌱 ShopSphere Database Seeding Guide

## 📋 Overview

The `seedProducts.js` file contains a comprehensive seed script that populates your MongoDB database with 45 realistic products across 8 different categories.

## 📦 What's Included

### Product Categories (45 Total Products):
- **Electronics** (10 products) - Latest tech gadgets and devices
- **Fashion** (8 products) - Clothing and apparel brands
- **Shoes** (8 products) - Footwear and sneakers
- **Books** (5 products) - Educational and self-help books
- **Grocery** (6 products) - Food and pantry items
- **Beauty** (5 products) - Beauty and personal care
- **Home & Kitchen** (3 products) - Kitchen appliances
- **Sports** (3 products) - Fitness and sports equipment

## 🚀 How to Run the Seed

### Option 1: Using npm Script (Recommended)

```bash
cd shopsphere/server
npm run seed:products
```

### Option 2: Direct Node Command

```bash
cd shopsphere/server
node seedProducts.js
```

## ✅ What the Script Does

1. **Connects to MongoDB** using your `.env` configuration
2. **Deletes all existing products** from the database
3. **Inserts 45 new products** with realistic data:
   - Product titles and descriptions
   - Valid Unsplash image URLs
   - Random prices and ratings
   - Stock quantities
   - Brand names
   - Categories

4. **Displays comprehensive statistics**:
   - Number of products by category
   - Average, minimum, and maximum prices
   - Average, minimum, and maximum ratings
   - Total inventory units

## 📊 Product Data Structure

Each product includes:

```javascript
{
  title: 'Product Name',
  description: 'Detailed description of the product',
  category: 'Electronics', // or other categories
  brand: 'Brand Name',
  image: 'https://images.unsplash.com/...', // Valid image URL
  price: 12999, // Price in rupees
  stock: 100, // Available units
  rating: 4.5, // Rating out of 5
}
```

## 🖼️ Image URLs

All product images use Unsplash URLs with the following format:
```
https://images.unsplash.com/photo-XXXXX?w=500&h=500&fit=crop
```

These images are:
- ✅ High quality
- ✅ Already optimized
- ✅ Royalty-free
- ✅ Reliable and fast-loading

## 📈 Sample Output

When you run the seed script, you'll see output like:

```
🔗 Connected to MongoDB
📊 Database: shopsphere

🗑️  Deleting old products...
✅ Deleted 0 old products

📦 Inserting new products...
✅ Successfully inserted 45 products

📊 Products by Category:
   Electronics: 10 products
   Fashion: 8 products
   Shoes: 8 products
   Books: 5 products
   Grocery: 6 products
   Beauty: 5 products
   Home & Kitchen: 3 products
   Sports: 3 products

💰 Pricing Statistics:
   Average Price: ₹23,455
   Min Price: ₹399
   Max Price: ₹259,999

⭐ Rating Statistics:
   Average Rating: 4.56/5
   Min Rating: 4.3/5
   Max Rating: 4.9/5

📦 Inventory:
   Total Stock: 9,543 units

✨ Database seeding completed successfully!
🌐 Visit http://localhost:5173 to see products on the frontend
```

## 🔄 Resetting the Database

To delete all products and start fresh:

```bash
# This will delete all existing products
npm run seed:products
```

The script automatically deletes old products before inserting new ones, so you can run it multiple times safely.

## 🛒 Viewing Products on Frontend

After running the seed script:

1. Open http://localhost:5173 in your browser
2. Navigate to the **Products** page
3. All 45 products should be visible with:
   - Product images
   - Prices and ratings
   - Filtering and search
   - Pagination

## 🔍 Product Categories

### Electronics
- Apple iPhone 15 Pro Max ($129,999)
- Samsung Galaxy S24 Ultra ($124,999)
- Sony WH-1000XM5 Headphones ($29,990)
- And 7 more...

### Fashion
- Levi's 501 Original Jeans ($4,999)
- Zara Cotton Blend Blazer ($7,999)
- H&M Black T-Shirt ($999)
- And 5 more...

### Shoes
- Nike Air Max 270 ($12,995)
- Adidas Ultraboost 22 ($16,999)
- Puma RS-X Sneakers ($7,999)
- And 5 more...

### Books
- The Alchemist ($399)
- Atomic Habits ($599)
- Sapiens ($649)
- And 2 more...

### Grocery
- Organic Quinoa ($499)
- Cold Pressed Olive Oil ($799)
- Almond Butter ($649)
- And 3 more...

### Beauty
- Face Serum Vitamin C ($1,499)
- Moisturizing Night Cream ($1,299)
- Shampoo Argan Oil ($799)
- And 2 more...

### Home & Kitchen
- Stainless Steel Cookware Set ($8,999)
- Blender Smoothie Maker ($5,999)
- Coffee Maker ($3,999)

### Sports
- Yoga Mat ($1,999)
- Dumbbells Set ($9,999)
- Resistance Bands Set ($1,499)

## 💾 Database Requirements

Make sure your `.env` file has:

```env
MONGO_URI=mongodb://localhost:27017/shopsphere
```

For MongoDB Atlas:
```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/shopsphere?retryWrites=true&w=majority
```

## ⚠️ Important Notes

1. **Deletes Existing Products**: The script will delete all existing products before inserting new ones
2. **Requires MongoDB**: Make sure MongoDB is running and accessible
3. **Network Connection**: Unsplash images are loaded from the internet
4. **First Run**: Takes 2-5 seconds depending on your connection
5. **Idempotent**: Safe to run multiple times

## 🔧 Troubleshooting

### Error: "MongoDB connection failed"
```bash
# Check if MongoDB is running
# For local MongoDB:
mongod

# Or use MongoDB Atlas connection string
```

### Error: "Cannot find module"
```bash
# Make sure you're in the server directory
cd shopsphere/server

# Install dependencies
npm install
```

### Products not showing on frontend
1. Check browser console for errors
2. Verify MongoDB connection
3. Restart the backend server
4. Clear browser cache and refresh

## 📝 Customizing Products

To add more products or modify existing ones, edit `seedProducts.js`:

```javascript
const productsData = [
  {
    title: 'Your Product Title',
    description: 'Product description',
    category: 'Electronics', // Choose from 8 categories
    brand: 'Brand Name',
    image: 'https://images.unsplash.com/photo-XXXXX?w=500&h=500&fit=crop',
    price: 10000,
    stock: 100,
    rating: 4.5,
  },
  // Add more products...
];
```

Then run:
```bash
npm run seed:products
```

## 🎯 Next Steps

After seeding:

1. ✅ View products on http://localhost:5173
2. ✅ Test search and filters
3. ✅ Try adding products to cart
4. ✅ Verify admin dashboard
5. ✅ Test checkout process

## 📞 Support

For issues or questions:
- Check MongoDB connection in `.env`
- Verify Node.js version (14+)
- Ensure npm dependencies are installed
- Check browser console for errors

## 📄 File Location

```
shopsphere/
└── server/
    ├── seedProducts.js ← Seed file
    ├── package.json    ← Contains npm script
    └── .env            ← Database configuration
```

---

**Happy Seeding! 🚀**

Your e-commerce database is now ready with realistic product data!
