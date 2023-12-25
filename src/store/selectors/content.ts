import { RootState } from "@store/store";

export const selectFeaturedDeals = (state: RootState) => state.content.content.featuredDeals;

