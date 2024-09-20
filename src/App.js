import React, { useState, useEffect } from 'react';
import './App.css';
import ImageRating from './components/ImageRating';

// Base de donnée contenant les images et leurs notes
const App = () => {
  const [images, setImages] = useState([
    { src: '/bretz_rating/imgs/chevre_piment.png', alt: 'Chèvre Piment d\'Espelette', id: 'chevre_piment', rating: 0 },
    { src: '/bretz_rating/imgs/sel_vinaigre.png', alt: 'Sel et Vinaigre', id: 'sel_vinaigre', rating: 0 },
    { src: '/bretz_rating/imgs/fromage_du_jura.png', alt: 'Fromage du Jura', id: 'fromage_du_jura', rating: 0 },
    { src: '/bretz_rating/imgs/cheddar_jalapenos.png', alt: 'Cheddar Jalapenos', id: 'cheddar_jalapenos', rating: 0 },
    { src: '/bretz_rating/imgs/confit_oignon.png', alt: 'Confit d\'oignon', id: 'confit_oignon', rating: 0 },
    { src: '/bretz_rating/imgs/cheddar_oignon.png', alt: 'Cheddar Oignon de Roscoff', id: 'cheddar_oignon', rating: 0 },
    { src: '/bretz_rating/imgs/bleu_pancetta.png', alt: 'Bleu Pancetta', id: 'bleu_pancetta', rating: 0 },
    { src: '/bretz_rating/imgs/poulet_braise.png', alt: 'Poulet braisé', id: 'poulet_braise', rating: 0 },
    { src: '/bretz_rating/imgs/fromage_frais.png', alt: 'Fromage Frais', id: 'fromage_frais', rating: 0 },
    { src: '/bretz_rating/imgs/sauce_pomme_frite.png', alt: 'Sauce Pomme Frite', id: 'sauce_pomme_frite', rating: 0 },
    { src: '/bretz_rating/imgs/yakitori.png', alt: 'Yakitori', id: 'yakitori', rating: 0 },
    { src: '/bretz_rating/imgs/tomate_sechee.png', alt: 'Tomates séchées', id: 'tomate_sechee', rating: 0 },
    { src: '/bretz_rating/imgs/chili.png', alt: 'Chili', id: 'chili', rating: 0 },
    { src: '/bretz_rating/imgs/mozza_pesto.png', alt: 'Mozza Pesto', id: 'mozza_pesto', rating: 0 },
    { src: '/bretz_rating/imgs/camembert.png', alt: 'Camembert', id: 'camembert', rating: 0 },
    { src: '/bretz_rating/imgs/pastis.png', alt: 'Pastis', id: 'pastis', rating: 0 },
    { src: '/bretz_rating/imgs/tartiflette.png', alt: 'Tartiflette', id: 'tartiflette', rating: 0 },
    { src: '/bretz_rating/imgs/miel_moutarde.png', alt: 'Miel Moutarde', id: 'miel_moutarde', rating: 0 },
    { src: '/bretz_rating/imgs/aioli.png', alt: 'Aioli', id: 'aioli', rating: 0 },
    { src: '/bretz_rating/imgs/bretonne.png', alt: 'Bretonne', id: 'bretonne', rating: 0 },
    { src: '/bretz_rating/imgs/barbecue.png', alt: 'Sauce Barbecue', id: 'barbecue', rating: 0 },
    { src: '/bretz_rating/imgs/poivron_chorizo.png', alt: 'Poivrons Grillés Chorizo', id: 'poivron_chorizo', rating: 0 },
    { src: '/bretz_rating/imgs/original.png', alt: 'Original', id: 'original', rating: 0 },
    { src: '/bretz_rating/imgs/bleu.png', alt: 'Bleu d\'Auvergne AOP', id: 'bleu', rating: 0 },
    { src: '/bretz_rating/imgs/pizza.png', alt: 'Pizza Feu de Bois', id: 'pizza', rating: 0 },
    { src: '/bretz_rating/imgs/petit_oignon.png', alt: 'Petit Oignon', id: 'petit_oignon', rating: 0 },
    { src: '/bretz_rating/imgs/pili_pili.png', alt: 'Pili Pili', id: 'pili_pili', rating: 0 },
    { src: '/bretz_rating/imgs/paysanne.png', alt: 'Paysanne', id: 'paysanne', rating: 0 },
    { src: '/bretz_rating/imgs/bacon_grillé.png', alt: 'Bacon Grillé', id: 'bacon_grillé', rating: 0 },
    { src: '/bretz_rating/imgs/curry.png', alt: 'Sauce Curry', id: 'curry', rating: 0 },
    { src: '/bretz_rating/imgs/cèpes.png', alt: 'Cèpes', id: 'cèpes', rating: 0 },
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
