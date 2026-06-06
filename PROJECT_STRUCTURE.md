# 📁 ShopSphere Project Structure

Complete folder and file structure of the ShopSphere E-Commerce application.

```
shopsphere/
│
├── 📄 README.md                        # Project documentation
├── 📄 DEPLOYMENT.md                    # Deployment guide
├── 📄 PROJECT_STRUCTURE.md            # This file
│
├── 📁 server/                         # Backend Node.js/Express Application
│   ├── 📁 config/                     # Configuration files
│   │   └── db.js                      # MongoDB connection setup
│   │
│   ├── 📁 controllers/                # Business logic
│   │   ├── adminController.js         # Admin dashboard & analytics
│   │   ├── authController.js          # User authentication
│   │   ├── cartController.js          # Shopping cart operations
│   │   ├── orderController.js         # Order management
│   │   ├── productController.js       # Product CRUD operations
│   │   └── wishlistController.js      # Wishlist management
│   │
│   ├── 📁 middleware/                 # Custom middleware
│   │   ├── auth.js                    # JWT verification & authorization
│   │   ├── errorHandler.js            # Error handling middleware
│   │   ├── upload.js                  # File upload (Multer)
│   │   └── validator.js               # Input validation
│   │
│   ├── 📁 models/                     # Mongoose schemas
│   │   ├── User.js                    # User model
│   │   ├── Product.js                 # Product model
│   │   ├── Cart.js                    # Cart model
│   │   ├── Order.js                   # Order model
│   │   └── Wishlist.js                # Wishlist model
│   │
│   ├── 📁 routes/                     # API endpoints
│   │   ├── adminRoutes.js             # /api/admin routes
│   │   ├── authRoutes.js              # /api/auth routes
│   │   ├── cartRoutes.js              # /api/cart routes
│   │   ├── orderRoutes.js             # /api/orders routes
│   │   ├── productRoutes.js           # /api/products routes
│   │   └── wishlistRoutes.js          # /api/wishlist routes
│   │
│   ├── 📁 utils/                      # Utility functions
│   │   └── seedData.js                # Database seeding script
│   │
│   ├── 📁 uploads/                    # Uploaded files (images)
│   │
│   ├── 📄 server.js                   # Express server entry point
│   ├── 📄 package.json                # Backend dependencies
│   ├── 📄 .env.example                # Environment variables template
│   └── 📄 .gitignore                  # Git ignore rules
│
├── 📁 client/                         # Frontend React Application
│   ├── 📁 public/                     # Static files
│   │   └── vite.svg                   # Favicon
│   │
│   ├── 📁 src/                        # Source code
│   │   │
│   │   ├── 📁 assets/                 # Static assets
│   │   │   └── logo.png               # Application logo
│   │   │
│   │   ├── 📁 components/             # React components
│   │   │   │
│   │   │   ├── 📁 common/             # Reusable components
│   │   │   │   ├── Navbar.jsx         # Navigation bar
│   │   │   │   ├── Footer.jsx         # Footer component
│   │   │   │   ├── Loading.jsx        # Loading spinner
│   │   │   │   ├── ProductCard.jsx    # Product card component
│   │   │   │   └── ProtectedRoute.jsx # Route protection HOC
│   │   │   │
│   │   │   ├── 📁 admin/              # Admin-specific components
│   │   │   │   ├── DashboardStats.jsx # Statistics cards
│   │   │   │   ├── SalesChart.jsx     # Sales analytics chart
│   │   │   │   ├── ProductForm.jsx    # Add/Edit product form
│   │   │   │   ├── OrderTable.jsx     # Orders management table
│   │   │   │   └── UserTable.jsx      # Users management table
│   │   │   │
│   │   │   └── 📁 user/               # User-specific components
│   │   │       ├── OrderCard.jsx      # Order history card
│   │   │       ├── ReviewForm.jsx     # Product review form
│   │   │       └── AddressForm.jsx    # Shipping address form
│   │   │
│   │   ├── 📁 context/                # Context API providers
│   │   │   ├── AuthContext.jsx        # Authentication state
│   │   │   ├── CartContext.jsx        # Shopping cart state
│   │   │   └── ThemeContext.jsx       # Dark mode state
│   │   │
│   │   ├── 📁 pages/                  # Page components
│   │   │   ├── Home.jsx               # Home page
│   │   │   ├── Products.jsx           # Products listing with filters
│   │   │   ├── ProductDetail.jsx      # Single product page
│   │   │   ├── Login.jsx              # Login page
│   │   │   ├── Register.jsx           # Registration page
│   │   │   ├── Cart.jsx               # Shopping cart page
│   │   │   ├── Checkout.jsx           # Checkout page
│   │   │   ├── Profile.jsx            # User profile page
│   │   │   ├── Orders.jsx             # Order history page
│   │   │   ├── OrderDetail.jsx        # Single order details
│   │   │   ├── Wishlist.jsx           # Wishlist page
│   │   │   └── AdminDashboard.jsx     # Admin dashboard
│   │   │
│   │   ├── 📁 services/               # API services
│   │   │   └── api.js                 # Axios configuration
│   │   │
│   │   ├── 📁 utils/                  # Utility functions
│   │   │   ├── formatters.js          # Date/currency formatters
│   │   │   └── validators.js          # Form validators
│   │   │
│   │   ├── 📄 App.jsx                 # Main App component
│   │   ├── 📄 main.jsx                # React entry point
│   │   └── 📄 index.css               # Global styles
│   │
│   ├── 📄 index.html                  # HTML template
│   ├── 📄 package.json                # Frontend dependencies
│   ├── 📄 vite.config.js              # Vite configuration
│   ├── 📄 tailwind.config.js          # Tailwind CSS config
│   ├── 📄 postcss.config.js           # PostCSS config
│   ├── 📄 .env.example                # Environment variables template
│   └── 📄 .gitignore                  # Git ignore rules
│
└── 📄 .gitignore                      # Root git ignore

```

## 📊 File Count Summary

- **Backend Files:** 25+
- **Frontend Files:** 30+
- **Total Files:** 55+

## 🗃️ Database Collections

### MongoDB Collections:
1. **users** - User accounts and profiles
2. **products** - Product catalog
3. **carts** - Shopping cart data
4. **orders** - Order history
5. **wishlists** - User wishlists

## 🔗 Key Dependencies

### Backend:
- express - Web framework
- mongoose - MongoDB ODM
- jsonwebtoken - JWT authentication
- bcryptjs - Password hashing
- helmet - Security headers
- cors - Cross-origin resource sharing
- express-validator - Input validation
- express-rate-limit - Rate limiting
- multer - File uploads

### Frontend:
- react - UI library
- react-router-dom - Routing
- axios - HTTP client
- react-toastify - Notifications
- tailwindcss - Styling
- chart.js - Charts
- react-chartjs-2 - React Chart.js wrapper
- react-icons - Icon library

## 🎯 Component Hierarchy

```
App
├── ThemeProvider
│   ├── AuthProvider
│   │   └── CartProvider
│   │       ├── Navbar
│   │       ├── Routes
│   │       │   ├── Home
│   │       │   ├── Products
│   │       │   ├── ProductDetail
│   │       │   ├── Cart
│   │       │   ├── Checkout
│   │       │   ├── Orders
│   │       │   ├── Profile
│   │       │   ├── Wishlist
│   │       │   └── AdminDashboard
│   │       └── Footer
│   └── ToastContainer
```

## 🌐 API Routes Structure

```
/api
├── /auth
│   ├── POST   /register
│   ├── POST   /login
│   ├── GET    /profile
│   └── PUT    /profile
│
├── /products
│   ├── GET    /
│   ├── GET    /:id
│   ├── GET    /:id/related
│   ├── POST   /
│   ├── PUT    /:id
│   ├── DELETE /:id
│   └── POST   /:id/reviews
│
├── /cart
│   ├── GET    /
│   ├── POST   /add
│   ├── PUT    /update
│   ├── DELETE /remove
│   └── DELETE /clear
│
├── /orders
│   ├── POST   /
│   ├── GET    /
│   ├── GET    /:id
│   ├── GET    /admin/all
│   └── PUT    /:id/status
│
├── /wishlist
│   ├── GET    /
│   ├── POST   /:productId
│   └── DELETE /:productId
│
└── /admin
    ├── GET    /dashboard
    └── GET    /users
```

## 📦 Package.json Scripts

### Backend (server/package.json):
```json
{
  "start": "node server.js",
  "dev": "nodemon server.js",
  "seed": "node utils/seedData.js"
}
```

### Frontend (client/package.json):
```json
{
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

## 🎨 Design System

### Colors:
- Primary: Blue (#3B82F6)
- Secondary: Purple (#8B5CF6)
- Success: Green (#10B981)
- Warning: Yellow (#F59E0B)
- Error: Red (#EF4444)
- Dark: Gray (#1F2937)

### Typography:
- Font Family: Inter (Google Fonts)
- Sizes: text-xs to text-6xl (Tailwind)

### Spacing:
- Tailwind utility classes (p-4, m-8, etc.)

---

This structure follows industry best practices for scalable MERN stack applications.
