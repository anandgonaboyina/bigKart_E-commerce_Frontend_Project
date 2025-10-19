import React, { useEffect, useState } from "react";

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemIds = ["item1", "item2", "item3", "item4"];

  const scrollToItem = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
      history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <>
      <div className="carousel w-full">
        {itemIds.map((id, index) => (
          <div key={id} id={id} className="carousel-item w-full flex justify-center">
            <img
              src={[
                "https://static.vecteezy.com/system/resources/previews/006/795/097/non_2x/sale-banner-or-poster-with-realistic-podium-in-orange-and-blue-color-business-illustration-vector.jpg",
                "https://t3.ftcdn.net/jpg/05/07/79/68/360_F_507796863_XOctjfN6VIiHa79bFj7GCg92P9TpELIe.jpg",
                "https://img.freepik.com/free-vector/vibrant-color-black-friday-festive-sale-banner-with-50-off_1017-40612.jpg?semt=ais_hybrid&w=740&q=80",
                "https://marketplace.canva.com/EAE6GJRFBO8/2/0/1600w/canva-red-and-white-modern-online-sale-and-discount-banner-EQntJWpYr4w.jpg",
              ][index]}
              className="w-full h-40 sm:h-[30vh] sm:w-[70vw] rounded-[20px] sm:rounded-[30px]"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>

      <div className="flex w-full justify-center gap-2 py-2">
        {itemIds.map((id, index) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => {
              e.preventDefault();
              setCurrentIndex(index);
              scrollToItem(id);
            }}
            className="btn btn-xs"
          >
            {index + 1}
          </a>
        ))}
      </div>
    </>
  );
}

export default Hero;