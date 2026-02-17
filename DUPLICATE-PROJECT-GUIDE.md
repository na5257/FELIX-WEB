# How to Duplicate This Project (Git + Vercel)

## Quick Method: Copy Everything to New Project

### Step 1: Copy the project files
```bash
# Copy entire project to a new folder
cp -r /Users/nikolasaasheim/Development/clara-web /Users/nikolasaasheim/Development/my-new-project

# Go to the new project
cd /Users/nikolasaasheim/Development/my-new-project

# Remove old git history
rm -rf .git

# Remove Vercel config
rm -rf .vercel

# Remove node_modules (we'll reinstall)
rm -rf node_modules
```

### Step 2: Initialize new Git repository
```bash
# Initialize new git repo
git init

# Add all files
git add .

# Make first commit
git commit -m "Initial commit: Duplicated from CLARA project"
```

### Step 3: Create GitHub repository
1. Go to https://github.com/new
2. Create a new repository (e.g., "my-new-project")
3. Don't initialize with README (we already have files)
4. Copy the repository URL

### Step 4: Connect to GitHub
```bash
# Add remote (replace with your new repo URL)
git remote add origin https://github.com/YOUR-USERNAME/my-new-project.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 5: Deploy to Vercel
```bash
# Deploy to Vercel (will prompt for login if needed)
npx vercel

# For production
npx vercel --prod
```

Or via Vercel Dashboard:
1. Go to https://vercel.com/new
2. Import your new GitHub repository
3. Click Deploy

---

## Alternative: Use as Template on GitHub

### Method A: GitHub Template Repository

1. Go to your CLARA-WEB repo on GitHub
2. Click "Settings"
3. Check "Template repository"
4. Now you can use "Use this template" button to create new projects

### Method B: Fork and Modify

1. Go to https://github.com/na5257/CLARA-WEB
2. Click "Fork"
3. Rename the fork
4. Clone locally
5. Import to Vercel from your fork

---

## What to Update After Duplicating

After copying, update these files:

### 1. package.json
```json
{
  "name": "my-new-project",  // Change this
  "version": "0.1.0",
  // ... rest stays the same
}
```

### 2. README.md
- Update project name
- Update description
- Update any project-specific info

### 3. Metadata (if applicable)
In `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "Your New Project Title",
  description: "Your new project description",
  // ...
}
```

### 4. Environment Variables (if any)
Copy `.env.local` and update values for new project

---

## Quick Commands Summary

```bash
# Full duplication in one go
NEW_PROJECT="my-new-project"
cp -r clara-web $NEW_PROJECT
cd $NEW_PROJECT
rm -rf .git .vercel node_modules
git init
git add .
git commit -m "Initial commit"
# Then create GitHub repo and connect
# Then deploy with: npx vercel --prod
```

---

## Need Help?
If you run into issues, just ask! The main steps are:
1. Copy files ✅
2. New Git repo ✅
3. New GitHub repo ✅
4. New Vercel deployment ✅
