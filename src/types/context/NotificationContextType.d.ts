/*
DCE - Front
==================================
Types pour le contexte Notification
*/

// Définition du type du contexte notification
export interface NotificationContextType {
    // Le contexte contient la fonction showAlert qui prend un titre, un message et un timeout optionnel
    showAlert: (title: string, message: string, timeout?: number) => void;
}
