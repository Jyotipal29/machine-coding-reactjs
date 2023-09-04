import { useState } from "react";
import "./style.css";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
const data = [
  {
    img: "https://picsum.photos/seed/img1/200/300",
  },
  {
    img: "https://picsum.photos/seed/img2/200/300",
  },
  {
    img: "https://picsum.photos/seed/img3/200/300",
  },
];
const Carausel = () => {
  const [slide, setSlide] = useState(0);
  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };
  return (
    <div className="carausel">
      <BsFillArrowLeftCircleFill
        className=" arrow arrow-left"
        onClick={prevSlide}
      />
      {data.map((item, index) => {
        return (
          <img
            src={item.img}
            key={index}
            className={slide === index ? "slide" : "slide slide-hidden"}
          />
        );
      })}
      <BsFillArrowRightCircleFill
        className=" arrow arrow-right"
        onClick={nextSlide}
      />

      <span className="indicators">
        {data.map((_, index) => {
          return (
            <button
              key={index}
              onClick={() => setSlide(index)}
              className={
                slide === index ? "indicator" : " indicator indicator-inactive"
              }
            ></button>
          );
        })}
      </span>
    </div>
  );
};

export default Carausel;
