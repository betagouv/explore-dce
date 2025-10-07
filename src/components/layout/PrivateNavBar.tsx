/*
DCE - Front
==================================
Composant générique pour la barre de navigation privée.
Celui-ci vérifie si l'utilisateur est connecté pour retourner la barre de navigation.
*/

import { NavBar }        from '@src/components/layout/NavBar';


// Composant PrivateNavBar pour afficher la barre de navigation privée
export const PrivateNavBar = () => {

  // Afficher la barre de navigation avec l'état d'authentification
  return <NavBar />;
};
