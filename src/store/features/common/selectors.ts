import { RootState } from "@store/store";

export const selectFeaturedDeals = (state: RootState) =>
  state.common.common.common.featuredDeals;

export const selectTrendingDestinations = (state: RootState) =>
  state.common.common.common.trending;

export const selectRecentlyVisited = (state: RootState) =>
  state.common.common.common.recentlyVisited;
