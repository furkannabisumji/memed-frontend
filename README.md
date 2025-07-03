# 🎭 Memed.fun

**The Lens-Powered Meme Token Platform**

A revolutionary Web3 platform where memes become tradeable tokens with quadratic bonding curves, battle mechanics, and Lens Protocol social engagement rewards.

[![Deploy](https://img.shields.io/badge/Deploy-Live-brightgreen)](https://memed.fun)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue)](https://www.typescriptlang.org/)
[![React Router](https://img.shields.io/badge/React%20Router-7.5-orange)](https://reactrouter.com/)
[![Lens Protocol](https://img.shields.io/badge/Lens-Protocol-green)](https://lens.xyz/)

## 🚀 Features

### Core Platform
- 🎯 **Meme Token Creation** with quadratic bonding curve pricing
- ⚔️ **Battle System** with winner-takes-loser mechanics
- 💰 **Dual Staking/Engagement Rewards** (350M tokens each)
- 🔗 **Lens Protocol Integration** for social engagement
- 📊 **Real-time Analytics** and leaderboards
- 🛡️ **Anti-sniper Protection** with commit-reveal + Lens verification
- 📱 **Mobile-first Design** with cross-chain readiness

### Technical Stack
- 🚀 **React Router v7** with server-side rendering
- ⚡️ **Vite** for lightning-fast development
- 🔒 **TypeScript** with strict mode
- 🎨 **Tailwind CSS** with custom design system
- 🌐 **Web3 Integration** via ConnectKit + Wagmi
- 📡 **Comprehensive API System** with caching and error handling
- 🔄 **Optimistic Updates** for seamless UX

## 🏗 Architecture

### Project Structure

```
memed/
├── app/
│   ├── components/           # Reusable UI components
│   │   ├── WalletConnection.tsx
│   │   └── Web3ErrorBoundary.tsx
│   ├── hooks/               # Custom React hooks
│   │   ├── useApi.ts        # Generic API hooks
│   │   └── api/
│   │       └── useMemedApi.ts # Domain-specific hooks
│   ├── lib/
│   │   └── api/             # API communication system
│   │       ├── client.ts    # HTTP client with retries
│   │       ├── config.ts    # Environment & constants
│   │       └── loaders.ts   # React Router loaders
│   ├── providers/
│   │   └── Web3Provider.tsx # Web3 context provider
│   ├── routes/              # Route components
│   │   ├── home.tsx
│   │   ├── $.tsx           # 404 page
│   │   └── ...
│   ├── welcome/             # Landing page components
│   ├── root.tsx            # Root layout
│   └── routes.ts           # Route configuration
├── public/                  # Static assets
└── package.json
```

## 🛠 Development Setup

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-org/memed.git
   cd memed
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Configuration:**
   
   Create a `.env` file in the project root:
   
   ```env
   # API Configuration
   VITE_API_BASE_URL=http://localhost:3001/api  # Development
   # VITE_API_BASE_URL=https://api.memed.fun    # Production
   VITE_API_TIMEOUT=10000
   VITE_API_RETRIES=3
   VITE_ENABLE_API_CACHE=true
   
   # Web3 Configuration
   VITE_WALLETCONNECT_PROJECT_ID=your_project_id_here
   VITE_ALCHEMY_API_KEY=your_alchemy_key_here
   
   # Lens Protocol Integration
   VITE_LENS_API_URL=https://api-v2.lens.dev
   
   # IPFS for metadata storage
   VITE_IPFS_GATEWAY=https://ipfs.io/ipfs/
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```
   
   Your application will be available at `http://localhost:5173`.

### Development Commands

```bash
# Development server with HMR
npm run dev

# Type checking
npm run typecheck

# Build for production
npm run build

# Start production server
npm start
```

## 🔌 API System

Comprehensive API communication system with TypeScript, caching, retries, and React Router integration.

### Key Features
- Type-safe API calls with automatic retries
- Built-in caching and error handling
- React hooks for components and React Router loaders
- Optimistic updates and request deduplication

### Quick Usage

```tsx
// Basic API hook
const { data: tokens, loading, error } = useApi<MemeToken[]>('/tokens');

// Domain-specific hooks
const { data: tokens } = useMemeTokens();
const { mutate: buyTokens } = useBuyTokens();

// React Router loader
export const loader = memeTokensLoader;
```

### Available Hooks
- **Tokens**: `useMemeTokens()`, `useCreateMemeToken()`, `useBuyTokens()`, `useSellTokens()`
- **Battles**: `useTokenBattles()`, `useCreateBattle()`, `useStakeInBattle()`
- **Staking**: `useStakingPositions()`, `useStakeTokens()`, `useClaimRewards()`
- **Analytics**: `usePlatformStats()`, `useTokenAnalytics()`, `useLeaderboard()`

## 🌐 Web3 Integration

ConnectKit + Wagmi for wallet connection with error boundaries for robust Web3 interactions.

## 🎯 Tokenomics

### Core Mechanics
- **Total Supply**: 1 billion tokens (fixed)
- **Bonding Curve**: Quadratic pricing `Price = Base × (1 + k × Supply)²`
- **Fair Launch**: 7-day protocol with early launch option
- **Reserve Allocation**: 350M tokens for bonding curve
- **Staking Rewards**: 350M tokens for staking incentives
- **Zero Pre-distribution**: All tokens must be earned

### Battle System
- **Engagement Weight**: 60% Lens engagement + 40% staked value
- **Winner Rewards**: Direct winner-takes-loser mechanism
- **Anti-sniper Protection**: Commit-reveal + Lens verification
- **Battle Duration**: Configurable (default 24-48 hours)

## 🚀 Deployment

### Production Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

### Environment Variables (Production)

```env
VITE_API_BASE_URL=https://api.memed.fun
VITE_WALLETCONNECT_PROJECT_ID=your_production_project_id
VITE_ALCHEMY_API_KEY=your_production_alchemy_key
VITE_LENS_API_URL=https://api-v2.lens.dev
VITE_IPFS_GATEWAY=https://ipfs.io/ipfs/
```

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
