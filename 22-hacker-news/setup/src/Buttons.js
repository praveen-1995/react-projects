import React from "react";
import { useGlobalContext } from "./context";

const Buttons = () => {
  const { isLoading, page, nbPages, handlePage } = useGlobalContext();
  return (
    <div className="btn-container">
      <button
        disabled={isLoading}
        className="btn"
        onClick={() => {
          handlePage("dec");
        }}
      >
        prev
      </button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button
        disabled={isLoading}
        className="btn"
        onClick={() => {
          handlePage("inc");
        }}
      >
        next
      </button>
    </div>
  );
};

export default Buttons;
