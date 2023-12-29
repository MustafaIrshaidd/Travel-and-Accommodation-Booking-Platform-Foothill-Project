import { RootState } from "@store/store";

export const selectFeaturedDeals = (state: RootState) =>
  state.common.common.common.featuredDeals;
