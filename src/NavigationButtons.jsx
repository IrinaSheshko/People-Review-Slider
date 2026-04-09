import React from "react";

function NavigationButtons({ onPrevious, onNext }) {
  return (
    <div className="btn-container">
      <button className="nav-btn" onClick={onPrevious}>Previous</button>
      <button className="nav-btn" onClick={onNext}>Next</button>
    </div>
  );
}

export default NavigationButtons;