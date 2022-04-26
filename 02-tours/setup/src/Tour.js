import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [isReadMore, setIsReadMore] = useState(false);

  return (
    <article>
      <div className="single-tour">
        <img src={image} alt={name} />
        <footer>
          <div className="tour-info">
            <h4>{name}</h4>
            <h4 className="tour-price">{price}</h4>
          </div>
          <div>
            <p>
              {isReadMore ? info : `${info.substring(0, 200)}...`}
              <button
                onClick={() => {
                  setIsReadMore(!isReadMore);
                }}
              >
                {isReadMore ? `show less` : `read more`}
              </button>
            </p>
            <button
              onClick={() => {
                removeTour(id);
              }}
              className="delete-btn"
            >
              not interested
            </button>
          </div>
        </footer>
      </div>
    </article>
  );
};

export default Tour;
