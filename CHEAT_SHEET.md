# ⚡ ShopSphere Cheat Sheet - Quick Reference

## 🚀 Commands at a Glance

### Backend (server/)
```bash
npm install          # Install dependencies
npm run dev          # Start development server
npm run seed:products   # Seed 57 products
npm start            # Start production server
npm run lint         # Check code style
```

### Frontend (client/)
```bash
npm install      # Install dependencies
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Check code style
```

---

## 📁 Important File Locations

| What | Where |
|-----|-------|
| Backend entry | `server/server.js` |
| Frontend entry | `client/src/main.jsx` |
| Routes | `server/routes/` |
| Controllers | `server/controllers/` |
| Models | `server/models/` |
| Components | `client/src/components/` |
| Pages | `client/src/pages/` |
| Context | `client/src/context/` |
| Environment Config | `.env` (server & client) |
| Database Config | `server/config/db.js` |
| Seed Data | `server/seedProducts.js` |

---

## 🔧 Environment Variables

### Backend (.env)
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/shopsphere
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:5173
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000/api
```

---

## 🌐 URLs

| Service | URL |
|---------|-----|
| Frontend | http://localhost:5173 |
| Backend | http://localhost:5000 |
| Health Check | http://localhost:5000/api/health |
| MongoDB | localhost:27017 |

---

## 👤 Demo Accounts

| Type | Email | Password |
|------|-------|----------|
| Admin | admin@shopsphere.com | admin123 |
| User | john@example.com | password123 |

---

## 🔑 Key API Endpoints

### Auth
```
POST   /api/auth/register
POST   /api/auth/login
GET    /api/auth/profile (Protected)
```

### Products
```
GET    /api/products
GET    /api/products/:id
POST   /api/products (Admin)
PUT    /api/products/:id (Admin)
DELETE /api/products/:id (Admin)
```

### Cart
```
GET    /api/cart (Protected)
POST   /api/cart/add (Protected)
PUT    /api/cart/update (Protected)
DELETE /api/cart/remove (Protected)
```

### Orders
```
POST   /api/orders (Protected)
GET    /api/orders (Protected)
GET    /api/orders/:id (Protected)
GET    /api/admin/orders (Admin)
```

### Wishlist
```
GET    /api/wishlist (Protected)
POST   /api/wishlist/:productId (Protected)
DELETE /api/wishlist/:productId (Protected)
```

---

## 🆘 Quick Fixes

### Port Already in Use
```bash
# Change port in .env
PORT=5001
npm run dev
```

### Module Not Found
```bash
rm -r node_modules
npm install
```

### MongoDB Won't Connect
```bash
# Windows
net start MongoDB

# Mac
brew services start mongodb-community
```

### Blank Page / 404
```bash
# Hard refresh in browser
Ctrl + Shift + R

# Check browser console (F12)
```

### Clear Database & Reseed
```bash
cd server
npm run seed:products
```

---

## 📊 Database Collections

| Collection | Purpose |
|-----------|---------|
| users | User accounts |
| products | Product catalog |
| carts | Shopping carts |
| orders | Customer orders |
| wishlists | Wishlist items |

---

## 🎨 Frontend Technologies

- React.js (Vite)
- Tailwind CSS
- Context API
- React Router
- Axios
- React Toastify

---

## 🔧 Backend Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- Helmet
- CORS

---

## 📦 Project Metrics

| Metric | Value |
|--------|-------|
| Backend Routes | 6 |
| Controllers | 6 |
| Models | 5 |
| Middleware | 4 |
| Frontend Pages | 12+ |
| API Endpoints | 40+ |
| Seeded Products | 57 |
| Categories | 8 |

---

## ⌨️ Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Browser DevTools | F12 |
| Hard Refresh | Ctrl + Shift + R |
| Save File | Ctrl + S |
| Find | Ctrl + F |
| Terminal | Ctrl + ` (in VS Code) |
| Stop Server | Ctrl + C |

---

## 📖 Documentation Files

| File | Time | Purpose |
|------|------|---------|
| START_HERE.md | 2 min | Choose your path |
| QUICK_START.md | 5 min | Quick setup |
| SETUP_SUMMARY.md | 15 min | Visual guide |
| TERMINAL_SETUP.md | 30 min | Step-by-step |
| README.md | 10 min | Full overview |
| PROJECT_STRUCTURE.md | 5 min | Code organization |
| DOCUMENTATION_INDEX.md | 5 min | Navigate all docs |

---

## 🔐 Security Features

- ✅ Password hashing (bcrypt)
- ✅ JWT authentication
- ✅ Protected routes
- ✅ Input validation
- ✅ CORS enabled
- ✅ Rate limiting
- ✅ Helmet headers
- ✅ Admin role check

---

## 🚀 Deployment

### Frontend (Vercel)
1. Push to GitHub
2. Connect Vercel
3. Build: `npm run build`
4. Output: `client/dist`

### Backend (Render)
1. Push to GitHub
2. Create Web Service on Render
3. Build: `npm install`
4. Start: `npm start`

### Database (MongoDB Atlas)
1. Create cluster
2. Get connection string
3. Update MONGO_URI

---

## 🧪 Testing Features

- [ ] User registration
- [ ] User login
- [ ] Browse products
- [ ] Filter products
- [ ] Add to cart
- [ ] Update cart
- [ ] Checkout
- [ ] Place order
- [ ] View orders
- [ ] Admin dashboard
- [ ] Add product (admin)
- [ ] Edit product (admin)
- [ ] Delete product (admin)
- [ ] Dark mode
- [ ] Wishlist
- [ ] Product reviews

---

## 🐛 Debug Tips

1. **Browser Console** → F12 to see errors
2. **Terminal Output** → Check backend/frontend terminals
3. **Network Tab** → See API calls (F12)
4. **MongoDB** → Check collections with `mongosh`
5. **VS Code** → View error squiggles in editor

---

## 📝 File Naming Conventions

- Components: `PascalCase.jsx` → `ProductCard.jsx`
- Utilities: `camelCase.js` → `formatPrice.js`
- Routes: `camelCase.js` → `productRoutes.js`
- Variables: `camelCase` → `productId`
- Constants: `UPPER_SNAKE_CASE` → `MAX_QUANTITY`

---

## 🎯 Common Workflows

### Adding a Product (Admin)
1. Login as admin
2. Go to Admin Dashboard
3. Click "Add Product"
4. Fill details
5. Upload image
6. Save

### Checking Orders
1. Login as user
2. Go to Profile
3. Click "Orders"
4. View order history

### Modifying Code
1. Edit file
2. Save (Ctrl + S)
3. Server auto-reloads
4. Browser auto-reloads

### Deploying
1. Make changes locally
2. Test thoroughly
3. Commit to GitHub
4. Deploy (Vercel/Render)
5. Verify live site

---

## 🔗 Quick Links

| What | Link |
|-----|------|
| GitHub | https://github.com/AjayAJadhav123/E-COMMERCE-WEBSITE |
| Documentation | See DOCUMENTATION_INDEX.md |
| React Docs | https://react.dev |
| MongoDB Docs | https://docs.mongodb.com |
| Express Docs | https://expressjs.com |

---

## ✅ Setup Checklist

- [ ] Node.js installed (v16+)
- [ ] MongoDB running
- [ ] Repository cloned
- [ ] Backend `.env` created
- [ ] Frontend `.env` created
- [ ] `npm install` completed
- [ ] Backend running (port 5000)
- [ ] Frontend running (port 5173)
- [ ] Can access http://localhost:5173
- [ ] Can login with demo account

---

## 💾 Keyboard Commands

### VS Code
```
Ctrl + S → Save
Ctrl + Shift + P → Command Palette
Ctrl + F → Find
Ctrl + H → Find & Replace
Ctrl + G → Go to Line
Ctrl + / → Comment
```

### Browser
```
F12 → DevTools
Ctrl + Shift + R → Hard Refresh
Ctrl + Shift + C → Inspect Element
Ctrl + Shift + K → Delete Line
```

### Terminal
```
Ctrl + C → Stop Process
Ctrl + L → Clear Screen
npm run dev → Start Dev Server
Ctrl + D → Exit
```

---

## 🎯 Performance Tips

1. Use dark mode to reduce eye strain
2. Keep DevTools closed for faster performance
3. Clear browser cache regularly
4. Restart servers after big changes
5. Check console for warnings

---

## 📱 Responsive Breakpoints

- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

Test with: F12 → Toggle device toolbar (Ctrl + Shift + M)

---

## 🎉 Common Success Indicators

- ✅ Homepage loads without errors
- ✅ Products display in grid
- ✅ Can login successfully
- ✅ Cart updates in real-time
- ✅ Orders appear in profile
- ✅ Dark mode toggles
- ✅ Admin dashboard shows stats
- ✅ No console errors

---

## 🚨 Red Flags

- ❌ Blank page → Check console (F12)
- ❌ 404 error → Check API URL
- ❌ Database error → Check MongoDB running
- ❌ Port error → Check if port already in use
- ❌ Module error → Run `npm install`

---

**Print this out for quick reference!**

Last Updated: June 6, 2026
ShopSphere v1.0.0 ✅

