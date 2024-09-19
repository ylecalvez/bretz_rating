// src/components/ImageRating.js
import React, { useState, useEffect } from 'react';
import './ImageRating.css';

const ImageRating = ({ imageSrc, altText, imageId }) => {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    // Charger la note sauvegardée depuis le localStorage
    const savedRating = localStorage.getItem(`rating-${imageId}`);
    if (savedRating) {
      setRating(parseFloat(savedRating));
    }
  }, [imageId]);

  const handleRatingChange = (e) => {
    const newRating = parseFloat(e.target.value);
    setRating(newRating);
    // Sauvegarder la note dans le localStorage
    localStorage.setItem(`rating-${imageId}`, newRating);
  };

  return (
    <div className="image-rating">
      <img src={process.env.PUBLIC_URL + imageSrc} alt={altText} className="image" />
      <div className="rating">
        <label>Note :</label>
        <input
          type="number"
          min="0"
          max="10"
          step="0.1"
          value={rating}
          onChange={handleRatingChange}
        />
      </div>
    </div>
  );
};

export default ImageRating;
