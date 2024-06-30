/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import data from "../../data/dataGlasses.json";

const GlassesShop = () => {
  const [selectedGlasses, setSelectedGlasses] = useState(null);

  const handleSelectGlasses = (glasses) => {
    setSelectedGlasses(glasses);
  };

  return (
    <div className="glasses-shop background-image">
      <h1 className="glasses-h1">TRY GLASSES APP ONLINE</h1>
      <div className="models-container">
        <div className="model">
          <img
            src="./glassesImage/model.jpg"
            alt="Model"
            className="model-image"
          />
          {selectedGlasses && (
            <img
              src={selectedGlasses.url}
              alt={selectedGlasses.name}
              className="glasses-overlay"
            />
          )}
        </div>
        <div className="model">
          <img
            src="./glassesImage/model.jpg"
            alt="Model"
            className="model-image"
          />
        </div>
      </div>
      {selectedGlasses && (
        <div className="glasses-info">
          <h2>{selectedGlasses.name}</h2>
          <p>Price: ${selectedGlasses.price}</p>
          <p>{selectedGlasses.desc}</p>
        </div>
      )}
      <div className="glasses-list">
        {data.map((glasses) => (
          <img
            key={glasses.id}
            src={glasses.url}
            alt={glasses.name}
            onClick={() => handleSelectGlasses(glasses)}
          />
        ))}
      </div>
    </div>
  );
};

export default GlassesShop;
