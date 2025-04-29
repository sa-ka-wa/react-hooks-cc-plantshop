import React from "react";

function PlantList({ plants, onUpdatePlant }) {
  return (
    <div>
      {plants.map((plant) => (
        <div key={plant.id} className="plant" data-testid="plant-item">
          <img src={plant.image} alt={plant.name} />
          <h4>{plant.name}</h4>
          <p>Price: ${plant.price}</p>
        </div>
      ))}
    </div>
  );
}

export default PlantList;
