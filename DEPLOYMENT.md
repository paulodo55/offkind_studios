# 🚀 Deployment Guide - Off Kind Studios

## Quick Deploy to Vercel (Recommended)

### 1. Prerequisites
- GitHub account with the repository
- Vercel account (free tier available)

### 2. Deploy Steps

1. **Push to GitHub** (if not done already):
```bash
git remote add origin https://github.com/YOUR_USERNAME/offkind_studios.git
git branch -M main
git push -u origin main
```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your `offkind_studios` repository
   - Vercel will auto-detect Next.js settings

3. **Environment Variables**:
   Add these in Vercel dashboard → Settings → Environment Variables:
```env
DATABASE_URL=your-production-database-url
NEXTAUTH_URL=https://your-domain.vercel.app
NEXTAUTH_SECRET=your-secure-secret-key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
MAILCHIMP_API_KEY=your-mailchimp-key
MAILCHIMP_LIST_ID=your-list-id
```

4. **Database Setup**:
   - For production, use PostgreSQL (recommended: Railway, Supabase, or Vercel Postgres)
   - Update `DATABASE_URL` with your production database
   - Run: `npx prisma db push` to create tables

## Alternative Deployment Options

### Docker Deployment

1. **Create Dockerfile** (already in project):
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

2. **Build and Run**:
```bash
docker build -t offkind-studios .
docker run -p 3000:3000 offkind-studios
```

### Railway Deployment

1. Connect GitHub repository to Railway
2. Set environment variables
3. Deploy automatically on git push

### Netlify Deployment

1. Build command: `npm run build`
2. Publish directory: `.next`
3. Set environment variables

## Production Checklist

### Security
- [ ] Generate secure `NEXTAUTH_SECRET`
- [ ] Use production Stripe keys
- [ ] Set up proper CORS policies
- [ ] Enable HTTPS only
- [ ] Configure CSP headers

### Database
- [ ] Migrate to PostgreSQL for production
- [ ] Set up database backups
- [ ] Configure connection pooling
- [ ] Run database migrations

### Performance
- [ ] Enable Next.js Image Optimization
- [ ] Configure CDN for static assets
- [ ] Set up monitoring (Vercel Analytics)
- [ ] Enable compression

### Email & Services
- [ ] Configure Mailchimp or alternative
- [ ] Set up Stripe webhooks
- [ ] Configure error tracking (Sentry)
- [ ] Set up uptime monitoring

## Environment Variables Reference

```env
# Database
DATABASE_URL="postgresql://user:password@host:port/database"

# Authentication
NEXTAUTH_URL="https://yourdomain.com"
NEXTAUTH_SECRET="your-32-character-secret"

# Payments
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_live_..."
STRIPE_SECRET_KEY="sk_live_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# Email Marketing
MAILCHIMP_API_KEY="your-api-key"
MAILCHIMP_LIST_ID="your-list-id"
MAILCHIMP_SERVER_PREFIX="us1"

# Optional: Error Tracking
SENTRY_DSN="your-sentry-dsn"

# Optional: Analytics
NEXT_PUBLIC_GA_ID="GA-XXXXXXXXX"
```

## Custom Domain Setup

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS records as shown
4. SSL certificate auto-generated

### Cloudflare (Optional)
1. Add site to Cloudflare
2. Update nameservers
3. Enable proxy for better performance
4. Configure SSL/TLS settings

## Monitoring & Analytics

### Recommended Tools
- **Vercel Analytics**: Built-in performance monitoring
- **Sentry**: Error tracking and performance monitoring
- **Google Analytics**: User behavior tracking
- **Uptime Robot**: Uptime monitoring

## Backup Strategy

### Database Backups
- Set up automated daily backups
- Test restore procedures
- Store backups in secure location

### Code Backups
- GitHub repository serves as code backup
- Tag releases for easy rollback
- Document deployment procedures

## Support & Maintenance

### Regular Updates
- Keep dependencies updated
- Monitor security advisories
- Update Node.js version regularly

### Performance Monitoring
- Monitor Core Web Vitals
- Check database performance
- Monitor API response times

---

🌙 **Off Kind Studios** - Ready for the digital realm!
