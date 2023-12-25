import { Box, styled } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

export const StyledSlider = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  overflow: "hidden",
}));

export const StyledSlide = styled("div", {
  shouldForwardProp: (prop) => prop !== "height",
})<{ height: string }>(({ theme, height }) => ({
  background: "grey",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "50px",
  color: "#fff",
  fontWeight: 500,
  height: height,
  maxHeight: "100vh",
}));

export const StyledNumberSlide = styled(StyledSlide)({
  background: `linear-gradient(128deg, rgba(64, 175, 255, 1) 0%, rgba(63, 97, 255, 1) 100%)`,
});

export const StyledNavigationWrapper = styled(Box)({
  position: "relative",
  width: "100%",
});

export const StyledDots = styled("div")<{ isCarousel: boolean }>(
  ({ theme, isCarousel }) => ({
    ...(!isCarousel && {
      position: "absolute",
      bottom: "5px",
      left: "50%",
      transform: "translateX(-50%)",
    }),
    width: "100%",
    display: "flex",
    padding: "10px 0",
    justifyContent: "center",
  })
);

export const StyledDot = styled("button")(({ theme }) => ({
  border: "none",
  width: "10px",
  height: "10px",
  background: theme.palette.text.primary,
  borderRadius: "50%",
  margin: "0 5px",
  padding: "5px",
  cursor: "pointer",
  "&:focus": {
    outline: "none",
  },
  "&.active": {
    background: theme.palette.text.secondary,
  },
}));

export const StyledArrow = styled(ChevronRightIcon)(({ theme }) => ({
  width: "30px",
  height: "30px",
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  WebkitTransform: "translateY(-50%)",
  fill: theme.palette.text.primary,
  cursor: "pointer",
  color: "white",
  zIndex: 10,
}));

export const StyledArrowLeft = styled(StyledArrow)<{
  isDisabled: boolean;
  isCarousel: boolean;
}>(({ theme, isDisabled = false, isCarousel = false }) => ({
  left: isCarousel ? "5px" : "5px",
  fill: isDisabled ? "rgba(255,255,255,0.5)" : "",
}));

export const StyledArrowRight = styled(StyledArrow)<{
  isDisabled: boolean;
  isCarousel: boolean;
}>(({ theme, isDisabled = false, isCarousel = false }) => ({
  left: "auto",
  right: isCarousel ? "5px" : "5px",
  fill: isDisabled ? "rgba(255,255,255,0.5)" : "",
}));
