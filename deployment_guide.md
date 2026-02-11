# Deployment Guide - Vercel

Yes, you can absolutely deploy this to Vercel! It's one of the best platforms for React/Vite projects and it's free for personal portfolios.

Since you've already pushed your code to GitHub, the process is very simple.

## 🚀 Step-by-Step Deployment

### 1. Create a Vercel Account
If you haven't already, go to [vercel.com](https://vercel.com) and sign up using your **GitHub account**. This is the easiest way as it links your repositories automatically.

### 2. Import Your Project
1. Once logged in, click the **"Add New..."** button and select **"Project"**.
2. You will see a list of your GitHub repositories. Find `k-revanth-reddy-portfolio` and click **"Import"**.

### 3. Configure and Deploy
Vercel is very smart—it will automatically detect that you are using **Vite**.
1. **Framework Preset**: Ensure it says "Vite".
2. **Root Directory**: Leave it as `./`.
3. **Build and Output Settings**: You don't need to change anything here (it defaults to `npm run build` and `dist/`).
4. Click **"Deploy"**.

### 4. Wait for Completion
Vercel will build your project. After a minute or two, you'll get a unique URL (like `k-revanth-reddy-portfolio.vercel.app`) where your site is live!

---

## 💡 Pro Tips
- **Automatic Updates**: Every time you `git push` new changes to your `main` branch, Vercel will automatically rebuild and update your live site.
- **Custom Domain**: You can add a custom domain (like `revanthreddy.com`) later in the project settings on Vercel.

> [!TIP]
> Make sure all your latest changes are pushed to GitHub before importing!
> ```bash
> git add .
> git commit -m "Update social links and documentation"
> git push origin main
> ```
