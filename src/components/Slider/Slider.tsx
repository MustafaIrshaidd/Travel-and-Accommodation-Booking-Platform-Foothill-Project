import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import {
  StyledArrowLeft,
  StyledArrowRight,
  StyledDot,
  StyledDots,
  StyledNavigationWrapper,
  StyledNumberSlide,
  StyledSlider,
} from "./styles";
import { Box, Stack } from "@mui/material";
import { round } from "lodash";

interface SliderProps {
  components?: React.ReactNode[];
  isLoading?: boolean;
  height?: string;
  isCarousel?: boolean;
  slidePerPage?: number;
}

const Slider: React.FC<SliderProps> = ({
  components = [],
  height = "300px",
  isCarousel = false,
  slidePerPage = 1,
}) => {
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
    selector: isCarousel ? ".keen-slider__carousel" : ".keen-slider__card",
    slides: {
      perView: slidePerPage,
      spacing: 15,
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
            spacing: 0,
          },
        },
      },
    }),
  });

  React.useEffect(() => {
    instanceRef.current?.update(
      {
        initial: 0,
        slideChanged(slider) {
          setCurrentSlide(slider.track.details.rel);
        },
        created() {
          setLoaded(true);
        },

        selector: isCarousel ? ".keen-slider__carousel" : ".keen-slider__card",
        slides: {
          perView: slidePerPage,
          spacing: 15,
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
                spacing: 0,
              },
            },
          },
        }),
      },
      0
    );
  }, [components]);

  return (
    <>
      <Box position={"relative"} width={"100%"}>
        <StyledNavigationWrapper>
          <StyledSlider height={height} ref={sliderRef}>
            {components?.map((component) => {
              return (
                <Stack
                  direction={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  height={height}
                  className={
                    isCarousel ? "keen-slider__carousel" : "keen-slider__card"
                  }>
                  {component}
                </Stack>
              );
            })}
          </StyledSlider>
          {loaded &&
            instanceRef.current &&
            instanceRef.current.track.details?.slides && (
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
        {loaded && instanceRef.current && (
          <StyledDots isCarousel={isCarousel}>
            {Array.from(
              {
                length: Math.ceil(
                  instanceRef.current.track.details.slides.length / slidePerPage
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