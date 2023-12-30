import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import {
  StyledArrowLeft,
  StyledArrowRight,
  StyledDot,
  StyledDots,
  StyledNavigationWrapper,
  StyledSlider,
} from "./styles";
import { Box } from "@mui/material";

interface SliderProps {
  components?: React.ReactNode[];
  isLoading?: boolean;
  isCarousel?: boolean;
  slidePerPage?: number;
  spacing?: number;
  isSliderControllersVisible?: boolean;
}

const Slider: React.FC<SliderProps> = ({
  components = [],
  isCarousel = false,
  slidePerPage = 1,
  spacing = 15,
  isSliderControllersVisible = true,
}) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = React.useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    loop: true,

    created() {
      setLoaded(true);
    },
    selector: isCarousel ? ".keen-slider__carousel" : ".keen-slider__card",
    slides: {
      perView: slidePerPage,
      spacing: spacing,
    },
    ...(isCarousel && {
      breakpoints: {
        "(max-width: 1000px)": {
          slides: {
            perView: 2,
            spacing: 10,
          },
        },
        "(max-width: 500px)": {
          slides: {
            perView: 1,
            spacing: 10,
          },
        },
      },
    }),
  });

  const perView = (instanceRef.current?.options.slides as { perView?: number })
    ?.perView;

  return (
    <>
      <Box position={"relative"} width={"100%"}>
        <StyledNavigationWrapper>
          <StyledSlider ref={sliderRef}>
            {components?.map((component) => {
              return (
                <Box
                  height={"100%"}
                  width={"100%"}
                  className={
                    isCarousel ? "keen-slider__carousel" : "keen-slider__card"
                  }>
                  {component}
                </Box>
              );
            })}
          </StyledSlider>
          {loaded &&
            isSliderControllersVisible &&
            instanceRef.current &&
            instanceRef.current.track.details?.slides &&
            instanceRef.current.track.details.slides.length / slidePerPage >
              1 &&
            perView && (
              <>
                <StyledArrowLeft
                  onClick={(e: any) =>
                    e.stopPropagation() || instanceRef.current?.prev()
                  }
                  isDisabled={currentSlide === 0}
                  isCarousel={isCarousel}
                />
                <StyledArrowRight
                  onClick={(e: any) =>
                    e.stopPropagation() || instanceRef.current?.next()
                  }
                  isDisabled={
                    currentSlide ===
                    instanceRef.current.track.details.slides.length
                  }
                  isCarousel={isCarousel}
                />
              </>
            )}
        </StyledNavigationWrapper>
        {loaded &&
          isSliderControllersVisible &&
          instanceRef.current &&
          instanceRef.current.options.slides &&
          instanceRef.current.track.details.slides.length / slidePerPage > 1 &&
          perView && (
            <StyledDots isCarousel={isCarousel}>
              {Array.from(
                {
                  length: Math.ceil(
                    instanceRef.current.track.details.slides.length / perView
                  ),
                },
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
      </Box>
    </>
  );
};

export default Slider;
