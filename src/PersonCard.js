import React from "react";

function PersonCard({ person }) {
  const { id, name, description, age, image } = person;

  return (
    <div className="person-card">
      <img src={image} alt={name} className="person-image" />
      <h2 className="fade-text">{id} - {name}</h2>
      <p className="description fade-text">{description}</p>
      <p className="age fade-text">{age} years old</p>
    </div>
  );
}

export default PersonCard;