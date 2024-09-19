import React, { useState, useEffect } from 'react';
import './App.css';
import ImageRating from './components/ImageRating';

// Base de donnée contenant les images et leurs notes
const App = () => {
  const [images, setImages] = useState([
    { src: '/bretz_rating/imgs/chevre_piment.jpg', alt: 'Chèvre Piment d\'Espelette', id: 'chevre_piment', rating: 0 },
    { src: '/bretz_rating/imgs/sel_vinaigre.jpg', alt: 'Sel et Vinaigre', id: 'sel_vinaigre', rating: 0 },
    { src: '/bretz_rating/imgs/fromage_du_jura.jpg', alt: 'Fromage du Jura', id: 'fromage_du_jura', rating: 0 },
    { src: '/bretz_rating/imgs/cheddar_jalapenos.jpg', alt: 'Cheddar Jalapenos', id: 'cheddar_jalapenos', rating: 0 },
  ]);

  // Met à jour les notes depuis localStorage et trie les images
  useEffect(() => {
    const updatedImages = images.map((image) => {
      const savedRating = localStorage.getItem(`rating-${image.id}`);
      return {
        ...image,
        rating: savedRating ? parseFloat(savedRating) : 0,
      };
    });
    // Trie les images par ordre décroissant de la note
    const sortedImages = updatedImages.sort((a, b) => b.rating - a.rating);
    setImages(sortedImages);
  }, []);

  // Met à jour la position si il y a changement de note
  const handleRatingChange = (id, newRating) => {
    const updatedImages = images.map((image) =>
      image.id === id ? { ...image, rating: newRating } : image
    );

    // Trie les images après chaque changement de note
    const sortedImages = updatedImages.sort((a, b) => b.rating - a.rating);
    setImages(sortedImages);
  };

  // Fonction pour déterminer la classe en fonction du classement
  const getRankClass = (index) => {
    if (index === 0) return 'gold';
    if (index === 1) return 'silver';
    if (index === 2) return 'bronze';
    return ''; // Pas de style spécial pour les autres
  };

  return (
    <div className="app">
      <h1>Chips brets</h1>
      <div className="image-list">
        {images.map((image, index) => (
          <div key={image.id} className={`image-container ${getRankClass(index)}`}>
            <ImageRating
              imageSrc={image.src}
              altText={image.alt}
              imageId={image.id}
              rating={image.rating}
              onRatingChange={handleRatingChange}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
