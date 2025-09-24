import React, { useState } from "react";
import "./SpinningWheel.css";

const cards = [
  { id: 1, content: "Card 1" },
  { id: 2, content: "Card 2" },
  { id: 3, content: "Card 3" },
  { id: 4, content: "Card 4" },
  { id: 5, content: "Card 5" },
  { id: 6, content: "Card 6" },
];

const SpinningWheel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="spinning-wheel-container">
      <div className="spinning-wheel">
        {cards.map((card, index) => {
          const angle = (index - activeIndex) * (360 / cards.length);
          

          const isVisible = index === activeIndex || index === (activeIndex - 1 + cards.length) % cards.length || index === (activeIndex + 1) % cards.length;

          return (
            <div
              key={card.id}
              className={`card ${index === activeIndex ? "active" : ""}`}
              style={{ transform: `rotateY(${angle}deg) translateZ(300px)` }}
              onClick={() => handleCardClick(index)}
            >
              {card.content}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SpinningWheel;