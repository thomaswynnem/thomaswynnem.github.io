# 🚀 GitHub Pages Deployment Guide

This guide will walk you through deploying your React project showcase to GitHub Pages.

## 📋 **Prerequisites**

- GitHub account
- Git installed on your computer
- Your project code ready

## 🔧 **Step-by-Step Deployment**

### **1. Create GitHub Repository**

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon → "New repository"
3. Name it `projects-showcase` (or whatever you prefer)
4. Make it **Public** (required for free GitHub Pages)
5. Don't initialize with README (we already have one)
6. Click "Create repository"

### **2. Push Your Code to GitHub**

```bash
# Initialize git (if not already done)
git init

# Add your GitHub repo as remote
git remote add origin https://github.com/thomaswynnem/projects-showcase.git

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Project showcase website"

# Push to main branch
git push -u origin main
```

### **3. Deploy to GitHub Pages**

```bash
# Deploy with one command!
npm run deploy
```

This will:
- Build your project (`npm run build`)
- Deploy to `gh-pages` branch
- Make it available at `https://thomaswynnem.github.io/projects-showcase`

### **4. Configure GitHub Pages**

1. Go to your repository → **Settings**
2. Scroll down to **Pages** section
3. Under **Source**, select **Deploy from a branch**
4. Choose **gh-pages** branch
5. Click **Save**

### **5. Wait for Deployment**

- GitHub will build and deploy your site
- This usually takes 2-5 minutes
- You'll see a green checkmark when it's ready

## 🌐 **Your Live Site**

Once deployed, your project showcase will be available at:
**`https://thomaswynnem.github.io/projects-showcase`**

## 🔄 **Updating Your Site**

To update your live site after making changes:

```bash
# Make your changes
# Then commit and push
git add .
git commit -m "Update project showcase"
git push origin main

# Deploy the updates
npm run deploy
```

## 🎯 **Custom Domain (Optional)**

Want to use `thomaswynnem.github.io` instead?

1. Create a repository named exactly `thomaswynnem.github.io`
2. Deploy your project there
3. Your site will be available at `https://thomaswynnem.github.io`

## ✅ **What Happens During Deployment**

1. **Build Process**: React creates optimized production files
2. **gh-pages Branch**: Creates/updates a special branch for hosting
3. **GitHub Pages**: Serves your static files from this branch
4. **CDN**: Distributes your site globally for fast loading

## 🚨 **Troubleshooting**

**Site not loading?**
- Check if `gh-pages` branch was created
- Verify GitHub Pages is enabled in repository settings
- Wait a few minutes for deployment to complete

**Build errors?**
- Run `npm run build` locally to test
- Check for TypeScript errors
- Ensure all dependencies are installed

**Styling issues?**
- Verify all CSS files are included
- Check browser console for errors
- Test locally with `npm start` first

## 🎉 **Success!**

Your project showcase is now live and accessible to anyone on the internet! Share the link with potential employers, clients, or collaborators.

---

**Need help?** Check the [GitHub Pages documentation](https://pages.github.com/) or create an issue in your repository.
