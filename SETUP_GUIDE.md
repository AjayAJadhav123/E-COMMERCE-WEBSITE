# 🚀 ShopSphere - Complete Setup Guide

## 📋 Quick Start

### Step 1: Install Dependencies

**Backend:**
```bash
cd shopsphere/server
npm install
```

**Frontend:**
```bash
cd shopsphere/client
npm install
```

### Step 2: Configure Environment Variables

**Backend (.env):**
```bash
cd server
cp .env.example .env
```

Edit `.env` file:
```env
PORT=5000
NODE_ENV=development
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
JWT_EXPIRE=30d
CLIENT_URL=http://localhost:5173
```

**Frontend (.env):**
```bash
cd client
cp .env.example .env
```

Edit `.env` file:
```env
VITE_API_URL=http://localhost:5000/api
```

### Step 3: Seed Database

```bash
cd server
npm run seed
```

### Step 4: Run Application

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd client
npm run dev
```

### Step 5: Access Application

- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:5000
- **API Health:** http://localhost:5000/api/health

## 🔑 Demo Credentials

### Admin Account
- Email: admin@shopsphere.com
- Password: admin123

### Test User Account
- Email: john@example.com
- Password: password123

## 📦 Features Implemented

### ✅ User Features
- [x] User Registration & Login
- [x] JWT Authentication
- [x] Profile Management
- [x] Password Update
- [x] Protected Routes
- [x] Remember Me Functionality

### ✅ Product Features
- [x] Product Listing with Pagination
- [x] Advanced Product Search
- [x] Category Filtering
- [x] Price Range Filtering
- [x] Sort by Price/Rating/Date
- [x] Product Details Page
- [x] Product Reviews & Ratings
- [x] Related Products
- [x] Stock Management

### ✅ Shopping Cart
- [x] Add to Cart
- [x] Update Quantity
- [x] Remove Items
- [x] Clear Cart
- [x] Cart Total Calculation
- [x] Tax Calculation (18%)
- [x] Stock Validation

### ✅ Wishlist
- [x] Add to Wishlist
- [x] Remove from Wishlist
- [x] Move to Cart
- [x] Wishlist Count

### ✅ Checkout & Orders
- [x] Checkout Form with Validation
- [x] Order Creation
- [x] Order History
- [x] Order Details
- [x] Order Status Tracking
- [x] Shipping Address Management

### ✅ Admin Panel
- [x] Admin Dashboard
- [x] Sales Analytics
- [x] Monthly Sales Chart
- [x] Top Selling Products Chart
- [x] User Management
- [x] Product Management (CRUD)
- [x] Order Management
- [x] Order Status Update
- [x] Revenue Tracking

### ✅ UI/UX Features
- [x] Dark Mode
- [x] Responsive Design
- [x] Mobile-Friendly
- [x] Loading States
- [x] Toast Notifications
- [x] Smooth Animations
- [x] Modern Design
- [x] Professional Layout

### ✅ Security
- [x] JWT Authentication
- [x] Password Hashing (bcrypt)
- [x] Protected API Routes
- [x] Admin Authorization
- [x] Input Validation
- [x] Error Handling
- [x] Rate Limiting
- [x] CORS Configuration
- [x] Helmet Security

## 📁 Project Files Created

### Backend (25+ files):
- server.js
- config/db.js
- models/ (5 files)
- controllers/ (6 files)
- routes/ (6 files)
- middleware/ (4 files)
- utils/seedData.js
- package.json
- .env.example

### Frontend (20+ files):
- App.jsx, main.jsx, index.css
- pages/ (10 files)
- components/common/ (5 files)
- context/ (3 files)
- services/api.js
- package.json
- vite.config.js
- tailwind.config.js

### Documentation (4 files):
- README.md
- DEPLOYMENT.md
- PROJECT_STRUCTURE.md
- SETUP_GUIDE.md

## 🛠️ Tech Stack

### Frontend
- React 18.2.0
- Vite 5.0.8
- React Router DOM 6.21.1
- Tailwind CSS 3.4.0
- Axios 1.6.3
- React Toastify 9.1.3
- Chart.js 4.4.1
- React Icons 5.0.1

### Backend
- Node.js
- Express 4.18.2
- MongoDB (Mongoose 8.0.3)
- JWT (jsonwebtoken 9.0.2)
- bcryptjs 2.4.3
- Helmet 7.1.0
- CORS 2.8.5
- Express Validator 7.0.1
- Rate Limiter 7.1.5
- Multer 1.4.5

## 🔧 Troubleshooting

### Issue: MongoDB Connection Failed
**Solution:**
- Check MONGO_URI in .env
- Ensure MongoDB Atlas network access allows your IP
- Verify database user credentials

### Issue: Port Already in Use
**Solution:**
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:5000 | xargs kill -9
```

### Issue: CORS Errors
**Solution:**
- Verify CLIENT_URL in backend .env
- Check CORS configuration in server.js
- Ensure frontend is running on correct port

### Issue: JWT Token Expired
**Solution:**
- Clear localStorage
- Login again
- Check JWT_EXPIRE in .env

### Issue: Dark Mode Not Working
**Solution:**
- Clear browser cache
- Check ThemeContext implementation
- Verify Tailwind dark mode class

## 📚 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication Endpoints
```
POST   /auth/register    - Register new user
POST   /auth/login       - Login user
GET    /auth/profile     - Get user profile (Protected)
PUT    /auth/profile     - Update profile (Protected)
```

### Product Endpoints
```
GET    /products         - Get all products
GET    /products/:id     - Get single product
GET    /products/:id/related - Get related products
POST   /products         - Create product (Admin)
PUT    /products/:id     - Update product (Admin)
DELETE /products/:id     - Delete product (Admin)
POST   /products/:id/reviews - Add review (Protected)
```

### Cart Endpoints
```
GET    /cart            - Get user cart (Protected)
POST   /cart/add        - Add to cart (Protected)
PUT    /cart/update     - Update cart item (Protected)
DELETE /cart/remove     - Remove from cart (Protected)
DELETE /cart/clear      - Clear cart (Protected)
```

### Order Endpoints
```
POST   /orders          - Create order (Protected)
GET    /orders          - Get user orders (Protected)
GET    /orders/:id      - Get order details (Protected)
GET    /orders/admin/all - Get all orders (Admin)
PUT    /orders/:id/status - Update order status (Admin)
```

### Wishlist Endpoints
```
GET    /wishlist             - Get wishlist (Protected)
POST   /wishlist/:productId  - Add to wishlist (Protected)
DELETE /wishlist/:productId  - Remove from wishlist (Protected)
```

### Admin Endpoints
```
GET    /admin/dashboard - Get dashboard stats (Admin)
GET    /admin/users     - Get all users (Admin)
```

## 🎯 Next Steps

1. **Customize Branding**
   - Update logo and colors
   - Modify content and images
   - Add your business information

2. **Add More Features**
   - Payment Gateway Integration
   - Email Notifications
   - SMS Alerts
   - Advanced Search
   - Product Filters
   - User Reviews Moderation

3. **Optimize Performance**
   - Image Optimization
   - Code Splitting
   - Lazy Loading
   - Caching Strategy
   - Database Indexing

4. **Deploy to Production**
   - Follow DEPLOYMENT.md
   - Set up MongoDB Atlas
   - Deploy to Vercel & Render
   - Configure custom domain
   - Enable SSL

## 📞 Support

For issues or questions:
- Check DEPLOYMENT.md
- Review PROJECT_STRUCTURE.md
- Create GitHub issue
- Contact: support@shopsphere.com

## 📄 License

MIT License - Feel free to use for personal or commercial projects

---

Happy Coding! 🎉
