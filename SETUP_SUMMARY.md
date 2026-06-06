# 📋 ShopSphere Setup Summary - Step-by-Step Guide

## 🎯 Complete Setup in 4 Simple Steps

---

## ✅ STEP 1: Prerequisites (5 minutes)

### Install Required Software

**Option 1: Windows**
1. Download Node.js: https://nodejs.org/ → Install LTS version
2. Download MongoDB: https://www.mongodb.com/try/download/community → Install
3. Restart computer (recommended)

**Option 2: Mac**
```bash
# Install Homebrew first
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Then install Node & MongoDB
brew install node
brew install mongodb-community
brew services start mongodb-community
```

**Option 3: Linux**
```bash
# Ubuntu/Debian
sudo apt-get update
sudo apt-get install nodejs npm mongodb
sudo systemctl start mongod
```

### Verify Installation
```bash
node --version    # Should show v16 or higher
npm --version     # Should show 8 or higher
mongosh          # Should connect to MongoDB
```

---

## ✅ STEP 2: Clone & Prepare (5 minutes)

### Clone Repository
```bash
git clone https://github.com/AjayAJadhav123/E-COMMERCE-WEBSITE.git
cd E-COMMERCE-WEBSITE/shopsphere
```

### Create Environment Files

**Backend .env** → Create file `server/.env`
```
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/shopsphere
JWT_SECRET=my_secret_key_12345
JWT_EXPIRE=30d
CLIENT_URL=http://localhost:5173
RATE_LIMIT_WINDOW=15
RATE_LIMIT_MAX_REQUESTS=100
```

**Frontend .env** → Create file `client/.env`
```
VITE_API_URL=http://localhost:5000/api
```

---

## ✅ STEP 3: Install Dependencies (10 minutes)

### Terminal 1: Backend Setup
```bash
cd server
npm install

# Seed products (optional but recommended)
npm run seed:products
```

### Terminal 2: Frontend Setup (Open new terminal window)
```bash
cd client
npm install
```

---

## ✅ STEP 4: Run Servers (Final Step!)

### Terminal 1: Start Backend
```bash
npm run dev
```

**Wait for this message:**
```
✅ MongoDB Connected: localhost
🚀 Server running on port 5000
```

### Terminal 2: Start Frontend
```bash
npm run dev
```

**Wait for this message:**
```
VITE v5.4.21  ready in XXX ms
Local: http://localhost:5173/
```

### Browser: Open Application
```
http://localhost:5173
```

---

## 🎉 You're Done!

Your ShopSphere application is now running!

---

## 👤 Test with Demo Accounts

### Admin Account (Full Access)
```
Email:    admin@shopsphere.com
Password: admin123
```

### Regular User Account
```
Email:    john@example.com
Password: password123
```

---

## 🧪 Quick Tests

1. **Homepage** → Should show featured products
2. **Products Page** → Should show 57 products
3. **Login** → Try admin account
4. **Add to Cart** → Add a product
5. **Checkout** → Complete order

---

## 📊 Project URLs

| Component | URL |
|-----------|-----|
| Frontend | http://localhost:5173 |
| Backend API | http://localhost:5000 |
| API Health Check | http://localhost:5000/api/health |
| MongoDB | localhost:27017 |

---

## 🆘 Troubleshooting Quick Fixes

### Issue: "Port 5000 already in use"
**Fix:**
```bash
# Change PORT in server/.env
PORT=5001
npm run dev
```

### Issue: "Cannot connect to MongoDB"
**Fix:**
```bash
# Windows
net start MongoDB

# Mac
brew services start mongodb-community

# Linux
sudo systemctl start mongod
```

### Issue: "Blank page in browser"
**Fix:**
1. Hard refresh: `Ctrl + Shift + R`
2. Check console: Press `F12`
3. Restart servers: `Ctrl + C` then `npm run dev`

### Issue: "Cannot find module"
**Fix:**
```bash
# In both server and client folders
npm install
```

### Issue: "MongooseError: Cannot connect"
**Fix:**
```bash
# Check MONGO_URI in server/.env
cat server/.env | grep MONGO_URI

# Should be:
# MONGO_URI=mongodb://localhost:27017/shopsphere
```

---

## 📝 Understanding the Structure

### Frontend (React)
```
client/
├── src/
│   ├── pages/       (Login, Products, Cart, etc.)
│   ├── components/  (Navbar, ProductCard, etc.)
│   ├── context/     (AuthContext, CartContext)
│   └── services/    (API calls)
└── public/
```

### Backend (Node.js)
```
server/
├── routes/      (API endpoints)
├── controllers/ (Business logic)
├── models/      (Database schemas)
├── middleware/  (Auth, validation)
└── config/      (Database connection)
```

---

## 🚀 Commands Reference

### Backend Commands
```bash
npm run dev              # Start with auto-reload
npm run seed:products   # Seed 57 products
npm start               # Start production
```

### Frontend Commands
```bash
npm run dev     # Start development server
npm run build   # Build for production
npm run preview # Preview production build
```

---

## 📚 Documentation Files

| File | What's Inside |
|------|---------------|
| `START_HERE.md` | Entry point with guide options |
| `QUICK_START.md` | Copy-paste quick start |
| `TERMINAL_SETUP.md` | Detailed terminal commands |
| `README.md` | Full project documentation |
| `DEPLOYMENT.md` | Deploy to production |

---

## 🎓 Learning Resources

1. **Code Structure** → See `PROJECT_STRUCTURE.md`
2. **API Endpoints** → See `README.md` (API Endpoints section)
3. **Database Schema** → Check `server/models/` folder
4. **Frontend Components** → Check `client/src/components/`

---

## 📱 Features You Can Test

✅ User Registration & Login
✅ Browse 57 Products
✅ Filter by Category & Price
✅ Add to Cart
✅ Checkout & Orders
✅ Wishlist
✅ Product Reviews
✅ Dark Mode Toggle
✅ Admin Dashboard (as admin)
✅ Responsive Mobile View

---

## ✨ What's Included

- **57 Pre-seeded Products** ready to display
- **JWT Authentication** for secure login
- **Admin Dashboard** with analytics
- **Shopping Cart** management
- **Order System** with status tracking
- **Wishlist** functionality
- **Product Reviews & Ratings**
- **Dark Mode** support
- **Fully Responsive** design
- **Production-ready** security

---

## 🔐 Security Features

- Password hashing with bcrypt
- JWT token authentication
- Protected API routes
- Input validation
- CORS configuration
- Rate limiting
- Helmet security headers

---

## 💡 Pro Tips

1. **Keep terminals open** - Both servers must run simultaneously
2. **Auto-reload** - Just save files, servers reload automatically
3. **Browser DevTools** - Press `F12` to debug issues
4. **Check console** - Look for errors in browser console or terminal
5. **Use `.env` files** - Never commit `.env`, add to `.gitignore`

---

## 🎯 Next Steps After Setup

1. ✅ Explore the code
2. ✅ Try all features
3. ✅ Make customizations
4. ✅ Add your own products
5. ✅ Deploy to production

---

## 📞 Still Stuck?

1. **Check the detailed guide:** `TERMINAL_SETUP.md`
2. **Read full documentation:** `README.md`
3. **Check error messages:** Look in terminal or browser console
4. **Verify setup:** All 4 steps completed correctly?

---

## 🎉 Congratulations!

You now have a fully functional e-commerce platform running locally!

**Next:** Try the demo accounts and explore the features.

---

**Need more help?** Check `START_HERE.md` for guide options.

**Happy Coding!** 🚀

