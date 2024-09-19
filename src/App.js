// src/App.js
import React from 'react';
import ImageRating from './components/ImageRating';

const App = () => {
  const images = [
    { src: '/imgs/chevre_piment.jpg', alt: 'Chèvre Piment d\'Espelette', id: 'chevre_piment' },
    { src: '/imgs/sel_vinaigre.jpg', alt: 'Sel et Vinaigre', id: 'sel_vinaigre' },
    { src: '/imgs/fromage_du_jura.jpg', alt: 'Fromage du Jura', id: 'fromage_du_jura' }
  ];

  return (
    <div className="app">
      <h1>Chips Brets</h1>
      <div className="image-list">
        {images.map((image) => (
          <ImageRating
            key={image.id}
            imageSrc={image.src}
            altText={image.alt}
            imageId={image.id}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
