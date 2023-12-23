import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { styled, Box } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const StyledSlider = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  overflow: "hidden",
}));

const StyledSlide = styled("div")(({ theme }) => ({
  background: "grey",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "50px",
  color: "#fff",
  fontWeight: 500,
  height: "300px",
  maxHeight: "100vh",
}));

const StyledNumberSlide1 = styled(StyledSlide)({
  background: `linear-gradient(128deg, rgba(64, 175, 255, 1) 0%, rgba(63, 97, 255, 1) 100%)`,
});

const StyledNumberSlide2 = styled(StyledSlide)({
  background: `linear-gradient(128deg, rgba(255, 154, 63, 1) 0%, rgba(255, 75, 64, 1) 100%)`,
});

const StyledNavigationWrapper = styled(Box)({
  position: "relative",
  width: "100%",
});

const StyledDots = styled("div")({
  width: "100%",
  display: "flex",
  padding: "10px 0",
  justifyContent: "center",
});

const StyledDot = styled("button")(({ theme }) => ({
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

const StyledArrow = styled(ChevronRightIcon)(({ theme }) => ({
  width: "30px",
  height: "30px",
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  WebkitTransform: "translateY(-50%)",
  fill: "#fff",
  cursor: "pointer",
  color: "white",
  zIndex: 10,
}));

const StyledArrowLeft = styled(StyledArrow, {
  shouldForwardProp: (prop) => prop !== "disabled",
})<{ disabled: boolean }>(({ theme, disabled = false }) => ({
  left: "5px",
  transform: "rotate(180deg)",
  fill: disabled ? "rgba(255, 255, 255, 0.5)" : "",
}));

const StyledArrowRight = styled(StyledArrow, {
  shouldForwardProp: (prop) => prop !== "disabled",
})<{ disabled: boolean }>(({ theme, disabled = false }) => ({
  left: "auto",
  right: "5px",

  fill: disabled ? "rgba(255, 255, 255, 0.5)" : "",
}));

interface SliderProps {}

const Slider: React.FC<SliderProps> = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = React.useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  console.log(instanceRef.current);

  return (
    <>
      <StyledNavigationWrapper>
        <StyledSlider ref={sliderRef}>
          <StyledNumberSlide1 className="keen-slider__slide number-slide1">
            1
          </StyledNumberSlide1>
          <StyledNumberSlide2 className="keen-slider__slide number-slide2">
            2
          </StyledNumberSlide2>
          <StyledNumberSlide2 className="keen-slider__slide number-slide3">
            3
          </StyledNumberSlide2>
          <StyledNumberSlide2 className="keen-slider__slide number-slide4">
            4
          </StyledNumberSlide2>
        </StyledSlider>
        {loaded &&
          instanceRef.current &&
          instanceRef.current.track.details?.slides && (
            <>
              <StyledArrowLeft
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />
              <StyledArrowRight
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              />
            </>
          )}
      </StyledNavigationWrapper>
      {loaded && instanceRef.current && (
        <StyledDots>
          {Array.from(
            { length: instanceRef.current.track.details.slides.length },
            (_, idx) => (
              <StyledDot
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={
                  "dot" + (currentSlide === idx ? " active" : "")
                }></StyledDot>
            )
          )}
        </StyledDots>
      )}
    </>
  );
};

export default Slider;
