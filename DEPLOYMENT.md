# 🚀 ShopSphere Deployment Guide

Complete guide to deploy ShopSphere E-Commerce Platform to production.

## 📋 Prerequisites

- Node.js installed locally
- MongoDB Atlas account
- Vercel account (for frontend)
- Render account (for backend)
- GitHub account

## 🗄️ Step 1: MongoDB Atlas Setup

### 1.1 Create MongoDB Cluster

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up or log in
3. Click "Build a Database"
4. Choose "Shared" (Free tier)
5. Select cloud provider and region
6. Click "Create Cluster"

### 1.2 Configure Database Access

1. Go to "Database Access" in left sidebar
2. Click "Add New Database User"
3. Choose authentication method: "Password"
4. Enter username and password (save these!)
5. Select "Read and write to any database"
6. Click "Add User"

### 1.3 Configure Network Access

1. Go to "Network Access"
2. Click "Add IP Address"
3. Click "Allow Access from Anywhere" (0.0.0.0/0)
4. Click "Confirm"

### 1.4 Get Connection String

1. Go to "Database" → Click "Connect"
2. Select "Connect your application"
3. Copy the connection string
4. Replace `<password>` with your database user password
5. Replace `myFirstDatabase` with your database name (e.g., `shopsphere`)

Example:
```
mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/shopsphere?retryWrites=true&w=majority
```

## 🖥️ Step 2: Backend Deployment (Render)

### 2.1 Push Code to GitHub

```bash
cd shopsphere
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

### 2.2 Deploy to Render

1. Go to [Render](https://render.com/)
2. Sign up or log in
3. Click "New +" → "Web Service"
4. Connect your GitHub account
5. Select your repository
6. Configure settings:

**Basic Settings:**
- Name: `shopsphere-api`
- Region: Choose closest to your users
- Branch: `main`
- Root Directory: `server`
- Runtime: `Node`

**Build & Deploy:**
- Build Command: `npm install`
- Start Command: `npm start`

**Environment Variables:**
Click "Advanced" → Add Environment Variables:
```
PORT=5000
NODE_ENV=production
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<generate-strong-secret>
JWT_EXPIRE=30d
CLIENT_URL=<will-add-after-frontend-deployment>
```

To generate a strong JWT secret:
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

7. Click "Create Web Service"
8. Wait for deployment (5-10 minutes)
9. Copy the service URL (e.g., `https://shopsphere-api.onrender.com`)

### 2.3 Test Backend

Visit: `https://your-backend-url.onrender.com/api/health`

You should see:
```json
{
  "success": true,
  "message": "Server is running"
}
```

## 🎨 Step 3: Frontend Deployment (Vercel)

### 3.1 Prepare Frontend

Update `client/.env` with your backend URL:
```env
VITE_API_URL=https://your-backend-url.onrender.com/api
```

### 3.2 Deploy to Vercel

1. Go to [Vercel](https://vercel.com/)
2. Sign up or log in with GitHub
3. Click "Add New" → "Project"
4. Import your GitHub repository
5. Configure project:

**Framework Preset:** Vite

**Root Directory:** `client`

**Build Settings:**
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

**Environment Variables:**
```
VITE_API_URL=https://your-backend-url.onrender.com/api
```

6. Click "Deploy"
7. Wait for deployment (2-5 minutes)
8. Copy the deployment URL (e.g., `https://shopsphere.vercel.app`)

### 3.3 Update Backend with Frontend URL

Go back to Render dashboard:
1. Open your backend service
2. Go to "Environment"
3. Update `CLIENT_URL` to your Vercel URL
4. Click "Save Changes"
5. Service will automatically redeploy

## 🌱 Step 4: Seed Database (Optional)

After backend is deployed, seed your database:

### Method 1: Run Locally
```bash
cd server
npm run seed
```

### Method 2: Via Render Shell
1. Go to Render dashboard
2. Open your web service
3. Click "Shell" tab
4. Run: `npm run seed`

## ✅ Step 5: Verify Deployment

### Test Checklist:
- [ ] Frontend loads at Vercel URL
- [ ] Backend API responds at Render URL
- [ ] Can register new user
- [ ] Can login
- [ ] Can view products
- [ ] Can add to cart
- [ ] Can create order
- [ ] Admin dashboard works
- [ ] Dark mode works
- [ ] Responsive on mobile

## 🔧 Troubleshooting

### Backend Issues

**Problem:** API not responding
- Check Render logs
- Verify environment variables
- Check MongoDB connection string
- Ensure IP whitelist includes 0.0.0.0/0

**Problem:** CORS errors
- Verify CLIENT_URL in backend env vars
- Check CORS configuration in server.js

### Frontend Issues

**Problem:** API calls failing
- Check VITE_API_URL in Vercel env vars
- Verify backend URL is correct
- Check network tab in browser devtools

**Problem:** Build fails
- Check Vercel build logs
- Verify all dependencies are in package.json
- Test build locally: `npm run build`

### Database Issues

**Problem:** Cannot connect to MongoDB
- Verify connection string is correct
- Check network access in MongoDB Atlas
- Ensure password doesn't contain special characters

## 🔐 Security Best Practices

1. **Environment Variables**
   - Never commit `.env` files
   - Use strong JWT secrets
   - Rotate secrets periodically

2. **MongoDB**
   - Use strong database passwords
   - Enable IP whitelisting in production (remove 0.0.0.0/0)
   - Regular backups

3. **API**
   - Keep rate limiting enabled
   - Monitor for suspicious activity
   - Use HTTPS only

## 📊 Monitoring

### Render Monitoring
- View logs: Service dashboard → "Logs" tab
- Check metrics: "Metrics" tab
- Set up alerts for errors

### Vercel Analytics
- Enable Vercel Analytics in project settings
- Monitor page load times
- Track user interactions

## 🔄 Continuous Deployment

Both Render and Vercel support automatic deployments:

1. **Push to GitHub main branch**
2. **Automatic builds trigger**
3. **Tests run (if configured)**
4. **Deploy on success**

### Disable Auto-Deploy (if needed):
- **Render:** Service Settings → Build & Deploy → Toggle auto-deploy
- **Vercel:** Project Settings → Git → Disable auto-deploy

## 💾 Backup Strategy

### Database Backups
1. MongoDB Atlas provides automatic backups
2. Configure backup schedule in Atlas
3. Test restore procedure regularly

### Code Backups
1. GitHub serves as primary backup
2. Consider additional remote backups
3. Document deployment procedures

## 📈 Performance Optimization

### Backend
- Enable MongoDB indexes
- Implement caching (Redis)
- Optimize database queries
- Compress responses

### Frontend
- Code splitting
- Lazy loading
- Image optimization
- CDN for static assets

## 🎉 Post-Deployment

1. Update README with live URLs
2. Share credentials with team
3. Set up monitoring alerts
4. Configure custom domain (optional)
5. Enable SSL certificates
6. Set up error tracking (Sentry, etc.)

## 📞 Support

For deployment issues:
- Render Documentation: https://render.com/docs
- Vercel Documentation: https://vercel.com/docs
- MongoDB Atlas Documentation: https://docs.atlas.mongodb.com

---

🎊 Congratulations! Your ShopSphere application is now live!
