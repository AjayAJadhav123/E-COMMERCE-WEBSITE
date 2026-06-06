# 🛍️ ShopSphere - Full Stack E-Commerce Platform

A modern, production-ready e-commerce web application built with the MERN stack.

## 🚀 Features

### User Features
- ✅ User Authentication (Register/Login with JWT)
- 🛒 Shopping Cart Management
- ❤️ Wishlist
- 🔍 Advanced Product Search & Filtering
- ⭐ Product Reviews & Ratings
- 📦 Order Management
- 👤 User Profile Management
- 🌓 Dark Mode Support
- 📱 Fully Responsive Design

### Admin Features
- 📊 Admin Dashboard with Analytics
- 📈 Sales Statistics & Charts
- 👥 User Management
- 📦 Product Management (CRUD)
- 🛍️ Order Management
- 📉 Revenue Tracking

## 🛠️ Tech Stack

### Frontend
- **React.js** (Vite) - UI Framework
- **React Router DOM** - Routing
- **Context API** - State Management
- **Tailwind CSS** - Styling
- **Axios** - HTTP Client
- **React Toastify** - Notifications
- **Chart.js** - Charts & Graphs
- **React Icons** - Icons

### Backend
- **Node.js** - Runtime Environment
- **Express.js** - Web Framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password Hashing
- **Express Validator** - Validation
- **Helmet** - Security
- **CORS** - Cross-Origin Resource Sharing
- **Rate Limiter** - API Rate Limiting
- **Multer** - File Upload

## 📁 Project Structure

```
shopsphere/
├── client/                  # Frontend React Application
│   ├── public/
│   ├── src/
│   │   ├── assets/         # Images, fonts, etc.
│   │   ├── components/     # Reusable components
│   │   │   ├── common/    # Common components
│   │   │   ├── admin/     # Admin components
│   │   │   └── user/      # User components
│   │   ├── context/       # Context API providers
│   │   ├── pages/         # Page components
│   │   ├── services/      # API services
│   │   ├── utils/         # Utility functions
│   │   ├── App.jsx        # Main App component
│   │   ├── main.jsx       # Entry point
│   │   └── index.css      # Global styles
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
├── server/                 # Backend Node.js Application
│   ├── config/            # Configuration files
│   │   └── db.js         # Database connection
│   ├── controllers/       # Route controllers
│   │   ├── authController.js
│   │   ├── productController.js
│   │   ├── cartController.js
│   │   ├── orderController.js
│   │   ├── wishlistController.js
│   │   └── adminController.js
│   ├── middleware/        # Custom middleware
│   │   ├── auth.js       # Authentication
│   │   ├── errorHandler.js
│   │   ├── validator.js
│   │   └── upload.js
│   ├── models/            # Mongoose models
│   │   ├── User.js
│   │   ├── Product.js
│   │   ├── Cart.js
│   │   ├── Order.js
│   │   └── Wishlist.js
│   ├── routes/            # API routes
│   │   ├── authRoutes.js
│   │   ├── productRoutes.js
│   │   ├── cartRoutes.js
│   │   ├── orderRoutes.js
│   │   ├── wishlistRoutes.js
│   │   └── adminRoutes.js
│   ├── utils/             # Utility functions
│   │   └── seedData.js   # Database seeding
│   ├── uploads/           # Uploaded files
│   ├── server.js          # Entry point
│   ├── package.json
│   └── .env.example       # Environment variables template
│
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account or local MongoDB
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd shopsphere
```

2. **Backend Setup**
```bash
cd server
npm install
```

Create `.env` file in server directory:
```env
PORT=5000
NODE_ENV=development
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRE=30d
CLIENT_URL=http://localhost:5173
```

3. **Frontend Setup**
```bash
cd client
npm install
```

Create `.env` file in client directory:
```env
VITE_API_URL=http://localhost:5000/api
```

4. **Seed Database (Optional)**
```bash
cd server
npm run seed
```

5. **Run the Application**

Start backend server:
```bash
cd server
npm run dev
```

Start frontend:
```bash
cd client
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## 👤 Demo Credentials

### Admin Account
- Email: admin@shopsphere.com
- Password: admin123

### Test User Account
- Email: john@example.com
- Password: password123

## 📡 API Endpoints

### Authentication
- POST `/api/auth/register` - Register new user
- POST `/api/auth/login` - Login user
- GET `/api/auth/profile` - Get user profile (Protected)
- PUT `/api/auth/profile` - Update profile (Protected)

### Products
- GET `/api/products` - Get all products (with filters)
- GET `/api/products/:id` - Get single product
- GET `/api/products/:id/related` - Get related products
- POST `/api/products` - Create product (Admin)
- PUT `/api/products/:id` - Update product (Admin)
- DELETE `/api/products/:id` - Delete product (Admin)
- POST `/api/products/:id/reviews` - Add review (Protected)

### Cart
- GET `/api/cart` - Get user cart (Protected)
- POST `/api/cart/add` - Add to cart (Protected)
- PUT `/api/cart/update` - Update cart item (Protected)
- DELETE `/api/cart/remove` - Remove from cart (Protected)
- DELETE `/api/cart/clear` - Clear cart (Protected)

### Orders
- POST `/api/orders` - Create order (Protected)
- GET `/api/orders` - Get user orders (Protected)
- GET `/api/orders/:id` - Get order details (Protected)
- GET `/api/orders/admin/all` - Get all orders (Admin)
- PUT `/api/orders/:id/status` - Update order status (Admin)

### Wishlist
- GET `/api/wishlist` - Get wishlist (Protected)
- POST `/api/wishlist/:productId` - Add to wishlist (Protected)
- DELETE `/api/wishlist/:productId` - Remove from wishlist (Protected)

### Admin
- GET `/api/admin/dashboard` - Get dashboard stats (Admin)
- GET `/api/admin/users` - Get all users (Admin)

## 🔒 Security Features
- JWT Authentication
- Password Hashing with bcrypt
- Helmet.js for HTTP headers security
- CORS configuration
- Rate Limiting
- Input validation
- Protected routes
- Admin role authorization

## 🎨 UI Features
- Modern and clean design
- Dark mode support
- Responsive layout
- Loading states
- Toast notifications
- Skeleton loading
- Smooth transitions
- Animated components

## 📦 Deployment

### Frontend (Vercel)
1. Create a Vercel account
2. Import your GitHub repository
3. Configure build settings:
   - Build Command: `cd client && npm run build`
   - Output Directory: `client/dist`
4. Add environment variables
5. Deploy

### Backend (Render)
1. Create a Render account
2. Create a new Web Service
3. Connect your GitHub repository
4. Configure:
   - Build Command: `cd server && npm install`
   - Start Command: `cd server && npm start`
5. Add environment variables
6. Deploy

### Database (MongoDB Atlas)
1. Create MongoDB Atlas account
2. Create a new cluster
3. Set up database user
4. Configure network access
5. Get connection string
6. Update MONGO_URI in environment variables

## 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License
This project is licensed under the MIT License.

## 👨‍💻 Author
ShopSphere Team

## 🙏 Acknowledgments
- React.js Documentation
- MongoDB Documentation
- Tailwind CSS
- Unsplash for images
- React Icons

## 📞 Support
For support, email support@shopsphere.com or create an issue in the repository.

---

Made with ❤️ by ShopSphere Team
