import { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { Button } from "@mui/material";

const HomeSectionCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);

  const syncActiveIndex = (item) => setActiveIndex(item);

  const responsive = {
    0: { items: 1 },
    668: { items: 2.5 },
    1024: { items: 5.5 },
  };

  const items = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item) => (
    <HomeSectionCard />
  ));

  return (
    <div className="">
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChange={syncActiveIndex}
        />
        {activeIndex !== items.length - 5 && (
          <Button
            onClick={slideNext}
            variant="contained"
            className="z-50"
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="next"
          >
            <NavigateBeforeIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}

        <Button
          onClick={slidePrev}
          variant="contained"
          className="z-50"
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translateX(-50%) rotate(90deg)",
            bgcolor: "white",
          }}
          aria-label="prev"
        >
          <NavigateBeforeIcon
            sx={{ transform: "rotate(-90deg)", color: "black" }}
          />
        </Button>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
