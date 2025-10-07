# Le projet en React, TypeScript et Vite utilise Node.JS pour le build et le serveur web
FROM node:24

# serve lancera le serveur web sur le port 6920
EXPOSE 6920

# Installation de serve
RUN npm i -g npm serve

WORKDIR /app

# Copie de l'intégralité du projet dans le conteneur
COPY . /app

ENV NODE_OPTIONS="--max-old-space-size=8192"

# Installation des dépendances et build du projet
RUN npm i --force

# Build du projet
RUN npm run build

# Commande de démarrage du conteneur
# Démarrage du serveur web à partir du dossier dist (résultat du build) sur le port 6920
CMD ["serve", "-s", "dist", "-l", "6920"]
