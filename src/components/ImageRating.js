import React, { useState, useEffect } from 'react';
import './ImageRating.css'; // Assure-toi d'utiliser le bon fichier CSS pour appliquer le style

const ImageRating = ({ imageSrc, altText, imageId, rating, onRatingChange }) => {
  const [currentRating, setCurrentRating] = useState(rating);

  useEffect(() => {
    const savedRating = localStorage.getItem(`rating-${imageId}`);
    if (savedRating) {
      setCurrentRating(parseFloat(savedRating));
    }
  }, [imageId]);

  const handleRatingChange = (e) => {
    const newRating = parseFloat(e.target.value);
    setCurrentRating(newRating);
    localStorage.setItem(`rating-${imageId}`, newRating);
    onRatingChange(imageId, newRating);
  };

  return (
    <div className="image-rating">
      <img src={imageSrc} alt={altText} className="image" />
      <div className="rating">
        <label>Note :</label>
        <div className="input-wrapper">
          <input
            type="number"
            min="0"
            max="10"
            step="0.1"
            value={currentRating}
            onChange={handleRatingChange}
            className="rating-input"
          />
          <span>/10</span>
        </div>
      </div>
    </div>
  );
};

export default ImageRating;
