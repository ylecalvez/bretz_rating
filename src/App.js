import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mon Portfolio</h1>
        <nav>
          <ul>
            <li><a href="#about">À propos</a></li>
            <li><a href="#projects">Projets</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="about">
          <h2>À propos de moi</h2>
          <p>Je suis un ingénieur passionné par le développement web et l'innovation.</p>
        </section>
        <section id="projects">
          <h2>Mes Projets</h2>
          <ul>
            <li>Projet 1: Site E-commerce</li>
            <li>Projet 2: Application de gestion de tâches</li>
            <li>Projet 3: Blog personnel</li>
          </ul>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>Envoyez-moi un email à <a href="mailto:email@example.com">email@example.com</a>.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Mon Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
