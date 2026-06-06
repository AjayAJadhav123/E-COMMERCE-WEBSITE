# 🖥️ Terminal Commands Step-by-Step

## Complete Terminal Setup Guide with Screenshots

---

## 📌 Prerequisites Check

Before starting, verify these are installed:

```bash
node --version
# Output should be: v16.0.0 or higher

npm --version
# Output should be: 8.0.0 or higher

git --version
# Output should be: 2.30.0 or higher
```

---

## 🔄 Step 1: Clone Repository

```bash
git clone https://github.com/AjayAJadhav123/E-COMMERCE-WEBSITE.git
cd E-COMMERCE-WEBSITE
cd shopsphere
```

**Expected Output:**
```
Cloning into 'E-COMMERCE-WEBSITE'...
remote: Enumerating objects: 86, done.
remote: Counting objects: 100% (86/86), done.
...
cd shopsphere
```

---

## 🗄️ Step 2: MongoDB Setup

### For Local MongoDB

**Windows:**
```bash
net start MongoDB
```

**Output:**
```
The MongoDB service was started successfully.
```

**Mac:**
```bash
brew services start mongodb-community
```

**Output:**
```
==> Successfully started `mongodb-community` (label: homebrew.mxcl.mongodb-community)
```

**Linux:**
```bash
sudo systemctl start mongod
```

---

## 🖥️ Terminal 1: Backend Server

### Step 3: Navigate to Backend

```bash
cd server
```

**Output:**
```
C:\Users\YourName\Desktop\E-COMMERCE\shopsphere\server>
```

### Step 4: Install Dependencies

```bash
npm install
```

**Expected Output:**
```
npm warn deprecated ...
added 247 packages in 45s

up to date, audited 247 packages in 2s
found 0 vulnerabilities
```

### Step 5: Create .env File

**Using PowerShell (Windows):**
```bash
@'
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/shopsphere
JWT_SECRET=your_super_secret_key_12345
JWT_EXPIRE=30d
CLIENT_URL=http://localhost:5173
'@ | Out-File .env
```

**Using Command Prompt (Windows):**
```bash
echo PORT=5000 > .env
echo NODE_ENV=development >> .env
echo MONGO_URI=mongodb://localhost:27017/shopsphere >> .env
echo JWT_SECRET=your_super_secret_key_12345 >> .env
echo JWT_EXPIRE=30d >> .env
echo CLIENT_URL=http://localhost:5173 >> .env
```

**Using Mac/Linux (Terminal):**
```bash
cat > .env << EOF
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/shopsphere
JWT_SECRET=your_super_secret_key_12345
JWT_EXPIRE=30d
CLIENT_URL=http://localhost:5173
EOF
```

### Step 6: Verify .env File

```bash
cat .env
```

**Expected Output:**
```
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/shopsphere
JWT_SECRET=your_super_secret_key_12345
JWT_EXPIRE=30d
CLIENT_URL=http://localhost:5173
```

### Step 7: Seed Database (Optional)

```bash
npm run seed:products
```

**Expected Output:**
```
✅ Database seeded successfully!
📊 Total products: 57
💰 Product categories: 8
📈 Average price: ₹29,063
⭐ Average rating: 4.59/5
```

### Step 8: Start Backend Server

```bash
npm run dev
```

**Expected Output:**
```
[nodemon] 3.1.14
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node server.js`

🚀 Server running on port 5000
📍 Environment: development
🌐 API URL: http://localhost:5000
✅ MongoDB Connected: localhost
📊 Database Name: shopsphere
```

**✅ BACKEND IS NOW RUNNING!**

**⚠️ Keep this terminal open!**

---

## 🎨 Terminal 2: Frontend Application

### Open New Terminal Window

**Windows PowerShell:**
- Press `Ctrl + Shift + T`
- Or right-click → Open PowerShell window here

**Mac Terminal:**
- Press `Cmd + T`

**Linux Terminal:**
- Press `Ctrl + Alt + T`

### Step 9: Navigate to Frontend

```bash
cd E-COMMERCE-WEBSITE/shopsphere/client
```

**Or if you're in shopsphere folder:**
```bash
cd ../client
```

**Output:**
```
C:\Users\YourName\Desktop\E-COMMERCE\shopsphere\client>
```

### Step 10: Install Frontend Dependencies

```bash
npm install
```

**Expected Output:**
```
npm warn deprecated ...
added 156 packages in 38s

up to date, audited 156 packages in 1s
found 0 vulnerabilities
```

### Step 11: Create Frontend .env

**Windows PowerShell:**
```bash
"VITE_API_URL=http://localhost:5000/api" | Out-File .env
```

**Windows Command Prompt:**
```bash
echo VITE_API_URL=http://localhost:5000/api > .env
```

**Mac/Linux:**
```bash
echo "VITE_API_URL=http://localhost:5000/api" > .env
```

### Step 12: Verify Frontend .env

```bash
cat .env
```

**Expected Output:**
```
VITE_API_URL=http://localhost:5000/api
```

### Step 13: Start Frontend Server

```bash
npm run dev
```

**Expected Output:**
```
  VITE v5.4.21  ready in 1839 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

**✅ FRONTEND IS NOW RUNNING!**

**⚠️ Keep this terminal open!**

---

## 🌐 Step 14: Open Application in Browser

Copy this URL and paste in your browser:

```
http://localhost:5173
```

**You should see:**
- ShopSphere logo
- Navigation bar
- Featured products
- Home page content

---

## 🧪 Step 15: Test the Application

### Test 1: Login
1. Click "Login" in navbar
2. Enter: `admin@shopsphere.com` / `admin123`
3. Click Login
4. Should redirect to home page

### Test 2: View Products
1. Click "Products" or "Shop Now"
2. Should see all 57 products
3. Try filters (category, price range)

### Test 3: Add to Cart
1. Click on any product
2. Click "Add to Cart"
3. Go to Cart page
4. Verify product is there

### Test 4: Checkout
1. Go to Cart
2. Fill shipping details
3. Click "Place Order"
4. Order confirmation

### Test 5: Admin Dashboard
1. Login with `admin@shopsphere.com`
2. Click "Admin Dashboard" (if visible)
3. View sales stats and charts

---

## 📊 Terminal Output Summary

### Backend Terminal Should Show:
```
🚀 Server running on port 5000
✅ MongoDB Connected: localhost
📊 Database Name: shopsphere
```

### Frontend Terminal Should Show:
```
VITE v5.4.21  ready in 1839 ms
➜  Local:   http://localhost:5173/
```

### Browser Should Show:
```
ShopSphere E-Commerce Platform
✅ All products loaded
✅ Navigation working
✅ No console errors (F12)
```

---

## 🛑 Stopping the Servers

### Stop Backend (Terminal 1)
```bash
Ctrl + C
```

### Stop Frontend (Terminal 2)
```bash
Ctrl + C
```

---

## 🔄 Restarting

After making changes to code:

### Restart Backend
```bash
npm run dev
```

### Restart Frontend
```bash
npm run dev
```

*(Frontend auto-reloads, backend with nodemon auto-reloads too)*

---

## ✅ Complete Checklist

- [ ] MongoDB is running
- [ ] Backend `npm install` done
- [ ] Backend `.env` created with correct values
- [ ] Backend running on port 5000
- [ ] Frontend `npm install` done
- [ ] Frontend `.env` created
- [ ] Frontend running on port 5173
- [ ] Browser shows http://localhost:5173
- [ ] Can login with demo account
- [ ] Can see products list
- [ ] No console errors (F12)

---

## 🚨 Error & Fixes

### Error: "Cannot find module 'express'"
```bash
npm install
```

### Error: "EADDRINUSE: address already in use :::5000"
```bash
# Port 5000 is taken, change in server/.env
PORT=5001
npm run dev
```

### Error: "connect ECONNREFUSED 127.0.0.1:27017"
```bash
# MongoDB not running
net start MongoDB
```

### Error: "MongooseError: Cannot connect to mongodb"
```bash
# Check MONGO_URI in .env
# Should be: mongodb://localhost:27017/shopsphere
cat .env | grep MONGO_URI
```

### Error: "Cannot GET /products"
```bash
# Backend not running
# Go to Terminal 1 and run: npm run dev
```

---

## 💡 Pro Tips

1. **Use VS Code Terminal:**
   - Open VS Code
   - Terminal → New Terminal
   - Automatically opens in project folder

2. **Split Terminal View:**
   - Keep both backends and frontend terminals visible
   - VS Code: Click the split terminal icon

3. **Auto-reload:**
   - Backend auto-reloads (nodemon)
   - Frontend auto-reloads (Vite)
   - Just save files (Ctrl + S)

4. **Debug Mode:**
   - Press F12 in browser
   - Go to Console tab
   - See any errors in red

---

## 🎉 All Done!

Your ShopSphere application is now running on:

**Frontend:** http://localhost:5173
**Backend API:** http://localhost:5000
**Database:** MongoDB (localhost)

### Test Accounts:
- Admin: `admin@shopsphere.com` / `admin123`
- User: `john@example.com` / `password123`

**Happy Coding!** 🚀

