import React from "react";
import SliderCard from "components/SliderCard";
import Carousel from "react-multi-carousel";
import { isDesktop, isMobileOnly } from "react-device-detect";
const FullSlider = () => {
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 3,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: 640,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 640,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };

  const CustomDot = ({ onMove, index, onClick, active }) => {
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    return (
      <li className={active ? "active " : "inactive"} onClick={() => onClick()}>
        <span
          className={`${
            active ? "w-6" : "w-3"
          } h-1 bg-secondary block rounded-lg transition-all duration-700`}
        ></span>
      </li>
    );
  };
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={isDesktop ? true : false}
      customDot={<CustomDot />}
      autoPlaySpeed={3000}
      centerMode={isMobileOnly ? false : true}
      className=""
      containerClass="p-4 sm:p-0 select-none"
      dotListClass="relative gap-2 justify-start mt-6 pl-4 lg:hidden"
      draggable={isDesktop ? false : true}
      focusOnSelect={false}
      infinite={true}
      itemClass="pr-4"
      keyBoardControl
      minimumTouchDrag={80}
      partialVisible={isMobileOnly && true}
      renderButtonGroupOutside={false}
      renderDotsOutside={true}
      responsive={responsive}
      showDots={true}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      <SliderCard />
      <SliderCard />
      <SliderCard />
      <SliderCard />
      <SliderCard />
      <SliderCard />
      <SliderCard />
    </Carousel>
  );
};

export default FullSlider;
