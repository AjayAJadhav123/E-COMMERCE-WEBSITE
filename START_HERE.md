# 🚀 START HERE - ShopSphere Setup Guide

## 📚 Pick Your Learning Style

Choose the guide that works best for you:

### ⚡ Quick Start (5 minutes)
**File:** `QUICK_START.md`
- TL;DR version
- Copy & paste commands
- Minimal explanations
- **Best for:** Experienced developers

### 📖 Complete Step-by-Step (30 minutes)
**File:** `RUN_GUIDE.md`
- Detailed explanations
- Troubleshooting section
- Screenshots descriptions
- Prerequisites checklist
- **Best for:** Beginners & learning

### 🖥️ Terminal Commands Reference
**File:** `TERMINAL_SETUP.md`
- Exact terminal commands
- Expected outputs shown
- All platforms (Windows/Mac/Linux)
- Command-by-command breakdown
- **Best for:** Following along step-by-step

---

## 🎯 Super Quick Start (Copy & Paste)

### What You Need First:
1. Install Node.js: https://nodejs.org/ (v16+)
2. Install MongoDB: https://www.mongodb.com/try/download/community
3. Install Git: https://git-scm.com/

### Terminal 1 - Backend:
```bash
cd shopsphere/server
npm install
npm run dev
```

Wait for: `✅ MongoDB Connected: localhost`

### Terminal 2 - Frontend:
```bash
cd shopsphere/client
npm install
npm run dev
```

Wait for: `VITE v5.4.21  ready in ...ms`

### Browser:
```
http://localhost:5173
```

**Login with:**
- Email: `admin@shopsphere.com`
- Password: `admin123`

---

## ⚙️ Required Configuration

### Backend Setup (One-time only)

**Create file:** `shopsphere/server/.env`

```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/shopsphere
JWT_SECRET=my_secret_key_change_this
JWT_EXPIRE=30d
CLIENT_URL=http://localhost:5173
```

### Frontend Setup (One-time only)

**Create file:** `shopsphere/client/.env`

```env
VITE_API_URL=http://localhost:5000/api
```

---

## ✅ Verification Checklist

After setup, verify everything:

- [ ] Backend running on `http://localhost:5000`
- [ ] Frontend running on `http://localhost:5173`
- [ ] Can access home page in browser
- [ ] Can login with demo account
- [ ] Can see products list
- [ ] No errors in browser console (F12)

---

## 🆘 Quick Troubleshooting

| Problem | Quick Fix |
|---------|-----------|
| Port 5000 in use | Change PORT in `.env` |
| MongoDB not connecting | Start MongoDB: `net start MongoDB` |
| Blank page | Press `Ctrl+Shift+R` (hard refresh) |
| Modules missing | Run `npm install` again |
| Can't find `.env` file | Make sure it's in server/ and client/ folders |

---

## 📁 Project Overview

```
ShopSphere E-Commerce Platform
├── 🎨 Frontend (React + Vite)
│   ├── 12+ Pages
│   ├── Dark Mode
│   ├── Responsive Design
│   └── Shopping Cart, Orders, Wishlist
│
├── 🔧 Backend (Node.js + Express)
│   ├── REST API
│   ├── JWT Authentication
│   ├── 6 Controllers
│   └── Database: MongoDB
│
└── 📦 Features
    ├── User Auth & Login
    ├── 57 Products Seeded
    ├── Shopping Cart
    ├── Order Management
    ├── Admin Dashboard
    ├── Product Reviews
    └── Wishlist
```

---

## 🎮 What to Try First

After login:

1. **Browse Products** → `/products`
2. **Add to Cart** → Click any product → Add to Cart
3. **Checkout** → Go to Cart → Place Order
4. **View Orders** → Profile → Orders
5. **Admin Panel** → (if logged as admin) Admin Dashboard

---

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| `README.md` | Project overview & features |
| `QUICK_START.md` | 5-minute quick reference |
| `RUN_GUIDE.md` | Detailed step-by-step guide |
| `TERMINAL_SETUP.md` | Terminal commands reference |
| `SETUP_GUIDE.md` | Initial project setup |
| `DEPLOYMENT.md` | Deploy to production |
| `PROJECT_STRUCTURE.md` | Code organization |

---

## 🚀 Development Workflow

### Making Changes

1. Edit code in VS Code
2. Save file (`Ctrl + S`)
3. Frontend auto-reloads (you'll see in browser)
4. Backend auto-reloads (check terminal)

### Terminal Always Shows

**Backend Terminal:**
```
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
```

**Frontend Terminal:**
```
[vite] ✨ hot updated: ...
```

---

## 🔐 Demo Accounts (Pre-created)

### Admin Account
```
Email:    admin@shopsphere.com
Password: admin123
Access:   Everything + Admin Dashboard
```

### Regular User
```
Email:    john@example.com
Password: password123
Access:   Shopping features only
```

---

## 📱 Responsive Design

Works on:
- ✅ Desktop (1920px+)
- ✅ Tablet (768px+)
- ✅ Mobile (320px+)

---

## 🌓 Dark Mode

Toggle in top navigation with sun/moon icon

---

## 🗄️ Database

### MongoDB
- **Running on:** `localhost:27017`
- **Database:** `shopsphere`
- **Collections:** Users, Products, Orders, Carts, Wishlist

### Seeded Data
- **57 Products** across 8 categories
- **Average Price:** ₹29,063
- **Average Rating:** 4.59/5

---

## 📊 Project Statistics

```
Frontend Files:   40+
Backend Files:    30+
Total Lines:      ~10,000+
Controllers:      6
Routes:           6
Models:           5
Middleware:       4
API Endpoints:    40+
```

---

## 🎓 Learning Path

1. **Understand the structure** → Read `PROJECT_STRUCTURE.md`
2. **Follow the code** → Start with `App.jsx` (frontend)
3. **Trace an action** → Add product to cart (both frontend & backend)
4. **Explore features** → Check each page
5. **Deploy** → Follow `DEPLOYMENT.md`

---

## 💬 Common Questions

**Q: Where are the CSS styles?**
A: Using Tailwind CSS. Check `client/tailwind.config.js`

**Q: How do I add new products?**
A: Login as admin → Admin Dashboard → Add Product

**Q: Can I change the database URL?**
A: Yes! Edit `MONGO_URI` in `server/.env`

**Q: How do I deploy?**
A: See `DEPLOYMENT.md` for Vercel (frontend) & Render (backend)

**Q: Where are uploaded images stored?**
A: `server/uploads/` folder

---

## 🎯 Next Steps

1. ✅ Follow one of the guides above
2. ✅ Get both servers running
3. ✅ Test with demo accounts
4. ✅ Explore the code
5. ✅ Make customizations
6. ✅ Deploy to production

---

## 📞 Support Resources

- **Code Issues:** Check browser console (F12)
- **API Issues:** Check terminal output
- **MongoDB Issues:** Verify connection string
- **Build Issues:** Delete `node_modules`, run `npm install`

---

## 🎉 You're Ready!

Pick a guide above and get started:

- 👉 **NEW USER?** Start with `RUN_GUIDE.md`
- 👉 **EXPERIENCED?** Jump to `QUICK_START.md`
- 👉 **VISUAL LEARNER?** Use `TERMINAL_SETUP.md`

---

**Made with ❤️ by ShopSphere Team**

Happy coding! 🚀

