/**
 * Memed.fun Specific API Hooks
 * Domain-specific API hooks for Memed.fun Platform
 * 
 * This module provides specialized React hooks for all Memed.fun platform features:
 * 
 * **Token Operations**:
 *   - Create, fetch, and manage meme tokens
 *   - Bonding curve data and pricing information
 *   - Token analytics and performance metrics
 * 
 * **Battle System**:
 *   - Create and manage token battles
 *   - Battle analytics and results
 *   - Real-time battle state updates
 * 
 * **Staking & Rewards**:
 *   - Staking position management
 *   - Reward claiming and distribution
 *   - Staking analytics and APY calculations
 * 
 * **Lens Protocol Integration**:
 *   - Social engagement metrics
 *   - Lens post interaction tracking
 *   - Social influence scoring
 * 
 * **Analytics & Leaderboards**:
 *   - Platform-wide statistics
 *   - User and token leaderboards
 *   - Performance analytics
 * 
 * All hooks are built on top of the generic useApi system, providing:
 * - Type safety with Memed.fun specific interfaces
 * - Automatic caching and error handling
 * - Optimistic updates for better UX
 * - Request deduplication and cancellation
 * 
 * @example Token Operations:
 * ```tsx
 * const { data: tokens } = useMemeTokens();
 * const { mutate: createToken } = useCreateMemeToken();
 * ```
 * 
 * @example Battle System:
 * ```tsx
 * const { data: battles } = useTokenBattles();
 * const { mutate: createBattle } = useCreateBattle();
 * ```
 */

import { useApi, useApiMutation, type UseApiOptions } from "../useApi";

// Types for Memed.fun API responses
export interface MemeToken {
  id: string;
  name: string;
  symbol: string;
  description: string;
  imageUrl: string;
  creatorAddress: string;
  totalSupply: string;
  currentPrice: string;
  marketCap: string;
  holders: number;
  createdAt: string;
  lensPostId?: string;
  engagementScore: number;
}

export interface TokenBattle {
  id: string;
  token1: MemeToken;
  token2: MemeToken;
  startTime: string;
  endTime: string;
  status: "pending" | "active" | "completed";
  winner?: string;
  totalStaked1: string;
  totalStaked2: string;
  engagementScore1: number;
  engagementScore2: number;
}

export interface StakingPosition {
  id: string;
  tokenId: string;
  userAddress: string;
  amount: string;
  rewardsClaimed: string;
  createdAt: string;
  lastClaimAt?: string;
}

export interface BondingCurveData {
  tokenId: string;
  basePrice: string;
  currentSupply: string;
  k: number; // Quadratic coefficient
  reserveBalance: string;
  priceHistory: Array<{
    timestamp: string;
    price: string;
    supply: string;
  }>;
}

export interface LensEngagement {
  postId: string;
  likes: number;
  comments: number;
  mirrors: number;
  collects: number;
  score: number;
  lastUpdated: string;
}

// Meme Token Hooks
export function useMemeTokens(options?: UseApiOptions) {
  return useApi<MemeToken[]>("/tokens", {
    cacheKey: "meme-tokens",
    cacheDuration: 2 * 60 * 1000, // 2 minutes
    immediate: true,
    ...options,
  });
}

export function useMemeToken(tokenId: string, options?: UseApiOptions) {
  return useApi<MemeToken>(`/tokens/${tokenId}`, {
    cacheKey: `meme-token-${tokenId}`,
    cacheDuration: 1 * 60 * 1000, // 1 minute
    immediate: !!tokenId,
    deps: [tokenId],
    ...options,
  });
}

export function useCreateMemeToken() {
  return useApiMutation<
    MemeToken,
    {
      name: string;
      symbol: string;
      description: string;
      imageFile: File;
      lensPostId?: string;
    }
  >("/tokens/create");
}

// Bonding Curve Hooks
export function useBondingCurve(tokenId: string, options?: UseApiOptions) {
  return useApi<BondingCurveData>(`/tokens/${tokenId}/bonding-curve`, {
    cacheKey: `bonding-curve-${tokenId}`,
    cacheDuration: 30 * 1000, // 30 seconds
    immediate: !!tokenId,
    deps: [tokenId],
    ...options,
  });
}

// Battle Hooks
export function useTokenBattles(options?: UseApiOptions) {
  return useApi<TokenBattle[]>("/battles", {
    cacheKey: "token-battles",
    cacheDuration: 1 * 60 * 1000, // 1 minute
    immediate: true,
    ...options,
  });
}

export function useTokenBattle(battleId: string, options?: UseApiOptions) {
  return useApi<TokenBattle>(`/battles/${battleId}`, {
    cacheKey: `token-battle-${battleId}`,
    cacheDuration: 30 * 1000, // 30 seconds
    immediate: !!battleId,
    deps: [battleId],
    ...options,
  });
}

export function useCreateBattle() {
  return useApiMutation<
    TokenBattle,
    {
      token1Id: string;
      token2Id: string;
      duration: number; // in hours
    }
  >("/battles/create");
}

// Staking Hooks
export function useStakingPositions(
  userAddress?: string,
  options?: UseApiOptions
) {
  return useApi<StakingPosition[]>(
    `/staking/positions${userAddress ? `?user=${userAddress}` : ""}`,
    {
      cacheKey: `staking-positions-${userAddress || "all"}`,
      cacheDuration: 1 * 60 * 1000, // 1 minute
      immediate: !!userAddress,
      deps: [userAddress],
      ...options,
    }
  );
}

export function useClaimRewards() {
  return useApiMutation<
    { txHash: string; amount: string },
    {
      positionId: string;
    }
  >("/staking/claim");
}

// Lens Integration Hooks
export function useLensEngagement(postId: string, options?: UseApiOptions) {
  return useApi<LensEngagement>(`/lens/engagement/${postId}`, {
    cacheKey: `lens-engagement-${postId}`,
    cacheDuration: 5 * 60 * 1000, // 5 minutes
    immediate: !!postId,
    deps: [postId],
    ...options,
  });
}

export function useUpdateLensEngagement() {
  return useApiMutation<
    LensEngagement,
    {
      postId: string;
    }
  >("/lens/engagement/update");
}

// Analytics Hooks
export function useTokenAnalytics(
  tokenId: string,
  timeframe: "1h" | "24h" | "7d" | "30d" = "24h",
  options?: UseApiOptions
) {
  return useApi<{
    priceChange: string;
    volumeChange: string;
    holderChange: number;
    engagementChange: number;
    chartData: Array<{
      timestamp: string;
      price: string;
      volume: string;
      engagement: number;
    }>;
  }>(`/analytics/token/${tokenId}?timeframe=${timeframe}`, {
    cacheKey: `token-analytics-${tokenId}-${timeframe}`,
    cacheDuration: 2 * 60 * 1000, // 2 minutes
    immediate: !!tokenId,
    deps: [tokenId, timeframe],
    ...options,
  });
}

export function usePlatformStats(options?: UseApiOptions) {
  return useApi<{
    totalTokens: number;
    totalVolume: string;
    totalUsers: number;
    activeBattles: number;
    totalStaked: string;
  }>("/analytics/platform", {
    cacheKey: "platform-stats",
    cacheDuration: 5 * 60 * 1000, // 5 minutes
    immediate: true,
    ...options,
  });
}

// User Profile Hooks
export function useUserProfile(address: string, options?: UseApiOptions) {
  return useApi<{
    address: string;
    lensHandle?: string;
    tokensCreated: number;
    tokensOwned: number;
    battlesWon: number;
    totalStaked: string;
    totalRewards: string;
    joinedAt: string;
  }>(`/users/${address}`, {
    cacheKey: `user-profile-${address}`,
    cacheDuration: 2 * 60 * 1000, // 2 minutes
    immediate: !!address,
    deps: [address],
    ...options,
  });
}

// Leaderboard Hooks
export function useLeaderboard(
  type: "creators" | "holders" | "battlers" = "creators",
  options?: UseApiOptions
) {
  return useApi<
    Array<{
      rank: number;
      address: string;
      lensHandle?: string;
      score: string;
      change: number;
    }>
  >(`/leaderboard/${type}`, {
    cacheKey: `leaderboard-${type}`,
    cacheDuration: 5 * 60 * 1000, // 5 minutes
    immediate: true,
    deps: [type],
    ...options,
  });
}
