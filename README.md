# Off Kind Studios - Creative Sanctum for Unorthodox Artists

A full-stack web application for Off Kind Studios, featuring a gothic/alchemic aesthetic inspired by hermetic art. Built with Next.js 14, TypeScript, Tailwind CSS, and Prisma.

![Off Kind Studios](https://img.shields.io/badge/Off%20Kind-Studios-gold?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiIHN0cm9rZT0iI0Q0QUYzNyIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPg==)

## 🌙 Overview

Off Kind Studios is a creative hub for artists who don't fit into typical genres or orthodox entertainment lanes. This platform offers:

- 🎵 Complete recording studio services
- 🎨 Branding & visual identity
- 📹 Music video production
- 📱 Social media content creation
- 🎪 Event coordination & management
- 🎭 Art direction consulting

## ✨ Features

- **Gothic/Alchemic Design**: Old English typography with mystical aesthetics
- **Spinning Landing Graphic**: Interactive animated centerpiece
- **Newsletter Modal**: Automatic popup for visitor engagement
- **Full Authentication**: Secure user accounts with NextAuth
- **E-commerce Shop**: Integrated merchandise store
- **Artist Showcase**: Portfolio and roster management
- **Community Platform**: Forums and social features
- **Responsive Design**: Mobile-first approach
- **Database Integration**: Prisma ORM with SQLite (easily switchable to PostgreSQL)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
```bash
cd "/Users/paulodo/Desktop/offkind landing/offkind-studios"
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:
```bash
cp env.example .env.local
```

Update `.env.local` with your actual credentials:
```env
# Database
DATABASE_URL="file:./dev.db"

# NextAuth (generate a secret with: openssl rand -base64 32)
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-generated-secret-here

# Stripe (optional for payment processing)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Email Service (optional for newsletter)
MAILCHIMP_API_KEY=your-api-key
MAILCHIMP_LIST_ID=your-list-id
MAILCHIMP_SERVER_PREFIX=us1
```

4. **Set up the database**
```bash
npx prisma generate
npx prisma db push
```

5. **Run the development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
offkind-studios/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── artists/           # Artists showcase page
│   ├── community/         # Community platform
│   ├── contact/           # Contact page
│   ├── services/          # Services listing
│   ├── shop/              # E-commerce store
│   └── page.tsx           # Landing page
├── components/            # React components
│   ├── spinning-graphic.tsx
│   ├── newsletter-modal.tsx
│   ├── navigation.tsx
│   └── footer.tsx
├── lib/                   # Utility functions and configs
│   ├── auth.ts           # NextAuth configuration
│   ├── prisma.ts         # Prisma client
│   └── utils.ts          # Helper functions
├── prisma/                # Database schema
│   └── schema.prisma
├── public/                # Static assets
└── styles/               # Global styles
```

## 🎨 Design System

### Typography
- **Primary Font**: UnifrakturCook (Gothic/Blackletter)
- **Secondary Font**: Grenze Gotisch
- **Body Font**: Inter

### Color Palette
- **Primary**: #8B0000 (Dark Red)
- **Accent**: #D4AF37 (Gold)
- **Background**: #0A0A0A (Near Black)
- **Secondary**: #1A1A1A (Dark Gray)

## 🔧 Configuration

### Database

The application uses SQLite by default for development. To switch to PostgreSQL for production:

1. Update `.env.local`:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/offkind"
```

2. Update `prisma/schema.prisma`:
```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

3. Run migrations:
```bash
npx prisma migrate dev
```

### Authentication

NextAuth is configured with email/password authentication. To add social providers:

1. Update `lib/auth.ts`
2. Add provider credentials to `.env.local`
3. Configure OAuth apps with providers

## 📦 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Manual Deployment

1. **Build the application**
```bash
npm run build
```

2. **Start the production server**
```bash
npm start
```

### Docker

Create a `Dockerfile`:
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

Build and run:
```bash
docker build -t offkind-studios .
docker run -p 3000:3000 offkind-studios
```

## 🔒 Security

- All user passwords are hashed with bcrypt
- Authentication handled by NextAuth with JWT sessions
- Environment variables for sensitive data
- CSRF protection enabled
- Input validation on all forms
- SQL injection prevention via Prisma ORM

## 📊 Database Schema

Key models include:
- **User**: Authentication and profiles
- **Artist**: Artist profiles and portfolios
- **Product**: E-commerce items
- **Service**: Studio services
- **Booking**: Service bookings
- **Newsletter**: Email subscriptions
- **Post/Comment**: Community content

## 🛠 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npx prisma studio` - Open Prisma Studio (database GUI)

### Adding New Features

1. Create new pages in `app/` directory
2. Add components to `components/`
3. Update database schema in `prisma/schema.prisma`
4. Run `npx prisma generate` after schema changes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software for Off Kind Studios.

## 💬 Support

For support, email contact@offkindstudios.com

## 🙏 Acknowledgments

- Design inspired by Atlantic Records, OWSLA, and Fool's Gold Records
- Gothic typography and alchemic symbolism
- Built for artists who refuse to conform

---

**Off Kind Studios** - *A creative sanctum for unorthodox artists seeking genuine expression*

🌙 ✦ 🔮 ✦ 🌙