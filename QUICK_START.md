# ⚡ Quick Start (5 Minutes)

## 🎯 TL;DR - Just Copy & Paste

### Terminal 1: Backend Setup & Run
```bash
cd shopsphere/server
npm install
npm run dev
```

### Terminal 2: Frontend Setup & Run
```bash
cd shopsphere/client
npm install
npm run dev
```

### Open Browser
```
http://localhost:5173
```

---

## 🔑 Before You Start - Important!

### Step 1: Create Backend `.env`
**File:** `shopsphere/server/.env`

```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/shopsphere
JWT_SECRET=my_secret_key_12345
JWT_EXPIRE=30d
CLIENT_URL=http://localhost:5173
RATE_LIMIT_WINDOW=15
RATE_LIMIT_MAX_REQUESTS=100
```

### Step 2: Create Frontend `.env`
**File:** `shopsphere/client/.env`

```env
VITE_API_URL=http://localhost:5000/api
```

### Step 3: Start MongoDB (if using local)
**Windows:**
```bash
net start MongoDB
```

**Mac/Linux:**
```bash
brew services start mongodb-community
```

---

## 🚀 Full Commands (Copy & Paste)

### Setup Backend
```bash
cd shopsphere/server
npm install
npm run seed:products
npm run dev
```

### Setup Frontend (New Terminal Window)
```bash
cd shopsphere/client
npm install
npm run dev
```

### Access Application
```
Frontend: http://localhost:5173
API: http://localhost:5000
```

---

## 👤 Demo Login

### Admin
```
Email: admin@shopsphere.com
Password: admin123
```

### User
```
Email: john@example.com
Password: password123
```

---

## 🔍 Verify Everything Works

### Check Backend ✅
```
http://localhost:5000/api/health
```
Should show API running

### Check Frontend ✅
```
http://localhost:5173
```
Should see ShopSphere homepage

### Check Database ✅
Open browser DevTools (F12) → Network tab → Refresh → See API calls

---

## ⚠️ Troubleshooting Quick Fixes

### "Cannot find module"
```bash
npm install
```

### "MongoDB connection failed"
```bash
# Start MongoDB
net start MongoDB

# Or check connection
mongosh
```

### "Port 5000 already in use"
```bash
# Change in server/.env
PORT=5001
```

### "Blank page / 404 error"
```bash
# Restart frontend
npm run dev

# Check console (F12)
```

---

## 📋 Checklist

- [ ] Node.js & npm installed
- [ ] MongoDB installed/running
- [ ] `.env` files created (server & client)
- [ ] `npm install` completed for both
- [ ] Backend running on port 5000
- [ ] Frontend running on port 5173
- [ ] Can access http://localhost:5173
- [ ] Can login with demo account
- [ ] Can see products list

---

## 📞 If Something Goes Wrong

1. **Read the full guide:** `RUN_GUIDE.md`
2. **Check browser console:** Press `F12`
3. **Check terminal errors:** Look for red text
4. **Verify `.env` files:** Check paths and values
5. **Restart servers:** Stop and run again with `npm run dev`

---

## 🎉 Ready?

```bash
# Copy the exact commands below:

# Terminal 1:
cd shopsphere/server && npm install && npm run dev

# Terminal 2 (new window):
cd shopsphere/client && npm install && npm run dev

# Browser:
http://localhost:5173
```

That's it! 🚀

