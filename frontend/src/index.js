// Importation du module React
import React from "react";
// Importation de ReactDOM pour interagir avec le DOM
import ReactDOM from "react-dom";
// Importation du composant App, qui est le composant racine de l'application React
import App from "./App";

// Utilisation de ReactDOM pour rendre l'application dans le DOM
ReactDOM.render(
  // React.StrictMode active des avertissements supplémentaires et des vérifications pour les phases de développement
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // Cible l'élément avec l'id 'root' pour le point de montage de l'application React dans le DOM
  document.getElementById("root")
);
