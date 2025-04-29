import React, { useState } from "react";

function PlantCard({ plant, onUpdatePlant }) {
  const [soldOut, setSoldOut] = useState(plant.soldOut);

  function handleToggleSoldOut() {
    const updatedSoldOut = !soldOut;
    setSoldOut(updatedSoldOut);

    const updatedPlant = { ...plant, soldOut: updatedSoldOut };
    onUpdatePlant(updatedPlant);
  }
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <button onClick={handleToggleSoldOut}>
        {soldOut ? "Out of Stock" : "In Stock"}
      </button>
    </li>
  );
}

export default PlantCard;
