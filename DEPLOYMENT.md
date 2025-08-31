# Deployment Guide - Toshit Tandon Portfolio

## 🚀 GitHub Pages Deployment

### Prerequisites
- GitHub repository: `toshittandon/toshittandon`
- Node.js and npm installed locally

### Steps

1. **Install deployment dependencies**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Build the project**:
   ```bash
   npm run build
   ```

3. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages**:
   - Go to your GitHub repository settings
   - Navigate to "Pages" section
   - Select "Deploy from a branch"
   - Choose `gh-pages` branch
   - Save settings

### Live URL
Your portfolio will be available at: `https://toshittandon.github.io/toshittandon/`

---

## 🔧 Alternative Deployment Options

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy automatically on git push

### Vercel
1. Import your GitHub repository to Vercel
2. Vercel will auto-detect React and configure build settings
3. Deploy with zero configuration

### Custom Domain Setup
1. Add a `CNAME` file in the `public` folder with your domain
2. Configure DNS settings with your domain provider
3. Update `homepage` in `package.json` to your custom domain

---

## 📝 Post-Deployment Checklist

- [ ] Verify all sections load correctly
- [ ] Test dark/light mode toggle
- [ ] Check responsive design on mobile/tablet
- [ ] Validate all external links (GitHub, LinkedIn, email)
- [ ] Test contact form functionality
- [ ] Verify SEO meta tags with social media sharing
- [ ] Check site performance with Lighthouse

---

## 🔄 Continuous Deployment

For automatic deployment on every push to main branch:

1. **GitHub Actions** (recommended):
   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [ main ]
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: '18'
         - run: npm ci
         - run: npm run build
         - run: npm run deploy
   ```

2. **Manual deployment**:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push origin main
   npm run deploy
   ```

---

## 🐛 Troubleshooting

### Common Issues

**Build fails with dependency errors**:
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**GitHub Pages not updating**:
- Check if `gh-pages` branch exists
- Verify GitHub Pages settings point to `gh-pages` branch
- Clear browser cache and wait 5-10 minutes

**404 errors on refresh**:
- This is normal for SPAs on GitHub Pages
- Consider adding a 404.html that redirects to index.html

### Performance Optimization

**Image optimization**:
- Replace placeholder images with optimized project screenshots
- Use WebP format for better compression
- Implement lazy loading for images

**Bundle size reduction**:
```bash
npm install --save-dev webpack-bundle-analyzer
npm run build
npx webpack-bundle-analyzer build/static/js/*.js
```

---

## 📊 Analytics Setup

### Google Analytics
1. Create GA4 property
2. Add tracking code to `public/index.html`
3. Track page views and user interactions

### Performance Monitoring
- Use Lighthouse for performance audits
- Monitor Core Web Vitals
- Set up error tracking with Sentry (optional)

---

**Happy Deploying! 🎉**