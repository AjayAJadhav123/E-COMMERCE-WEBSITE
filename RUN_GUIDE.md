# 🚀 Complete Step-by-Step Guide to Run ShopSphere Project

## ✅ Prerequisites
Before starting, make sure you have:
- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (Local or MongoDB Atlas account) - [Download](https://www.mongodb.com/try/download/community)
- **Git** - [Download](https://git-scm.com/)
- **Code Editor** (VS Code recommended) - [Download](https://code.visualstudio.com/)

Check installed versions:
```bash
node --version
npm --version
git --version
```

---

## 📥 Step 1: Clone the Repository

Open your terminal/command prompt and run:

```bash
git clone https://github.com/AjayAJadhav123/E-COMMERCE-WEBSITE.git
cd E-COMMERCE-WEBSITE/shopsphere
```

---

## 🔧 Step 2: Backend Setup

### 2.1 Navigate to Server Directory
```bash
cd server
```

### 2.2 Install Dependencies
```bash
npm install
```
*(This may take 2-3 minutes)*

### 2.3 Create `.env` File
Create a new file named `.env` in the `server` directory with the following content:

**For Local MongoDB:**
```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/shopsphere
JWT_SECRET=your_super_secret_jwt_key_12345
JWT_EXPIRE=30d
CLIENT_URL=http://localhost:5173
RATE_LIMIT_WINDOW=15
RATE_LIMIT_MAX_REQUESTS=100
```

**OR For MongoDB Atlas:**
```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/shopsphere
JWT_SECRET=your_super_secret_jwt_key_12345
JWT_EXPIRE=30d
CLIENT_URL=http://localhost:5173
RATE_LIMIT_WINDOW=15
RATE_LIMIT_MAX_REQUESTS=100
```

Replace:
- `username` and `password` with your MongoDB Atlas credentials
- `cluster` with your MongoDB Atlas cluster name

### 2.4 Verify `.env` File
Check that `.env` file is created correctly:
```bash
cat .env
```

---

## 🗄️ Step 3: Start MongoDB

### Option A: Local MongoDB (Windows)
1. Open Task Manager → Services → Check if `MongoDB` is running
2. If not running, open Command Prompt as Administrator:
```bash
net start MongoDB
```

### Option B: MongoDB Atlas (Cloud)
- No action needed, your connection string is in `.env`

### Option C: Check MongoDB Connection
Run this in a new terminal:
```bash
mongosh
```
If connected, you'll see `>` prompt. Type `exit` to close.

---

## 🌱 Step 4: Seed Database (Optional but Recommended)

In the `server` directory, run:

```bash
npm run seed:products
```

This will:
- Create collections in MongoDB
- Insert 57 realistic products
- Clear old products before seeding

Expected output:
```
✅ Database seeded successfully!
📊 Total products: 57
💰 Categories: 8
```

---

## ▶️ Step 5: Start Backend Server

In the `server` directory, run:

```bash
npm run dev
```

**Expected output:**
```
🚀 Server running on port 5000
📍 Environment: development
🌐 API URL: http://localhost:5000
✅ MongoDB Connected: localhost
📊 Database Name: shopsphere
```

**Keep this terminal open!** The server must stay running.

---

## 🎨 Step 6: Frontend Setup

### 6.1 Open New Terminal Window

**In Windows:**
- Press `Ctrl + Shift + T` in Command Prompt
- Or right-click in empty space → Open PowerShell window here
- Then navigate: `cd shopsphere/client`

**In Mac/Linux:**
- Press `Cmd + T` in Terminal
- Then navigate: `cd shopsphere/client`

### 6.2 Navigate to Client Directory
```bash
cd ../client
```

*(If you're already in server folder)*

### 6.3 Install Dependencies
```bash
npm install
```
*(This may take 2-3 minutes)*

### 6.4 Create `.env` File
Create a new file named `.env` in the `client` directory:

```env
VITE_API_URL=http://localhost:5000/api
```

---

## ▶️ Step 7: Start Frontend Server

In the `client` directory, run:

```bash
npm run dev
```

**Expected output:**
```
  VITE v5.4.21  ready in 1839 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

**Keep this terminal open!** The frontend must stay running.

---

## 🌐 Step 8: Access the Application

Open your browser and navigate to:

```
http://localhost:5173/
```

You should see the ShopSphere home page!

---

## 👤 Step 9: Test with Demo Accounts

### Admin Account (Full Access)
- **Email:** admin@shopsphere.com
- **Password:** admin123

### Regular User Account
- **Email:** john@example.com
- **Password:** password123

### Steps to Login:
1. Click "Login" in top navigation
2. Enter email and password
3. Click "Login" button
4. You'll be redirected to home page (logged in)

---

## ✅ Testing the Features

### 1. Browse Products
- Go to `/products` page
- See all 57 seeded products
- Try filtering by category or price

### 2. Add to Cart
- Click on a product
- Click "Add to Cart"
- Check cart page

### 3. Checkout
- Go to cart
- Fill shipping details
- Click "Place Order"

### 4. View Orders
- Go to Profile → Orders
- See your order history

### 5. Admin Dashboard (Login as admin@shopsphere.com)
- Click "Admin Dashboard"
- View sales stats
- Manage products
- View orders

### 6. Wishlist
- Click heart icon on any product
- Go to Wishlist page

---

## 🛠️ Useful Commands

### Backend Commands
```bash
# Start development server with auto-reload
npm run dev

# Start production server
npm start

# Seed database with 57 products
npm run seed:products

# Check for linting issues
npm run lint
```

### Frontend Commands
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint and fix code
npm run lint
```

---

## 🔧 Troubleshooting

### 1. "Cannot find module" Error
**Solution:**
```bash
# Clear node_modules and reinstall
rm -r node_modules
npm install
```

### 2. MongoDB Connection Error
**Check:**
- MongoDB is running: `net start MongoDB` (Windows)
- MONGO_URI in `.env` is correct
- If using MongoDB Atlas, check IP whitelist

**Solution:**
```bash
# Test connection
mongosh
```

### 3. Port Already in Use (5000 or 5173)
**If Port 5000 is in use:**
```bash
# Windows - Find process using port 5000
netstat -ano | findstr :5000
# Kill the process
taskkill /PID <PID> /F

# Change port in server/.env
PORT=5001
```

**If Port 5173 is in use:**
```bash
# Change port in client/vite.config.js
export default {
  server: {
    port: 5174
  }
}
```

### 4. CORS Error
**Solution:**
- Ensure backend `.env` has correct CLIENT_URL: `http://localhost:5173`
- Restart backend server

### 5. "node_modules not found" after git clone
**Solution:**
```bash
# In both server and client directories
npm install
```

---

## 📊 Project Structure Verification

After setup, verify the structure:

```
shopsphere/
├── server/
│   ├── .env (Created by you)
│   ├── node_modules/ (Created by npm install)
│   ├── package.json
│   ├── server.js
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   └── middleware/
│
├── client/
│   ├── .env (Created by you)
│   ├── node_modules/ (Created by npm install)
│   ├── package.json
│   ├── vite.config.js
│   ├── src/
│   ├── index.html
│   └── tailwind.config.js
│
└── README.md
```

---

## 🎯 Quick Start Summary

```bash
# Terminal 1: Backend
cd shopsphere/server
npm install
# Create .env file (see Step 2.3)
npm run seed:products  # Optional
npm run dev

# Terminal 2: Frontend
cd shopsphere/client
npm install
# Create .env file (see Step 6.4)
npm run dev

# Open Browser
http://localhost:5173
```

---

## 📱 Browser DevTools

### View Console Errors
1. Press `F12` or `Ctrl + Shift + I` in browser
2. Go to "Console" tab
3. Check for any red errors

### Check Network Requests
1. Go to "Network" tab
2. Perform an action (login, add to cart, etc.)
3. See API calls and responses

---

## 🚀 Next Steps

After successful setup:

1. **Explore the code** - Understand the architecture
2. **Make changes** - Customize colors, add features
3. **Deploy** - Deploy to Vercel (frontend) and Render (backend)
4. **Database** - Switch to MongoDB Atlas for production

---

## 📞 Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| MongoDB not connecting | Start MongoDB service or check MONGO_URI |
| Port 5000/5173 in use | Kill the process or change port in .env |
| Blank page loading | Check browser console (F12) for errors |
| API calls failing | Ensure backend is running on port 5000 |
| Products not showing | Run `npm run seed:products` |

---

## ✨ Features to Test

- ✅ User Registration & Login
- ✅ Browse Products & Filter
- ✅ Add to Cart & Checkout
- ✅ Place Orders
- ✅ Wishlist
- ✅ Product Reviews
- ✅ Dark Mode Toggle
- ✅ Admin Dashboard (Products, Orders, Stats)
- ✅ Search Products

---

## 💡 Tips

- Use VS Code for better debugging
- Keep both terminals open while developing
- Use Chrome DevTools for troubleshooting
- Check `.env` files if things aren't working
- Restart servers if you change `.env` values

---

## 🎉 You're All Set!

Your ShopSphere e-commerce platform is now running. Start building and customizing it!

For more help, check the main README.md or troubleshoot in the browser console.

Happy coding! 🚀

