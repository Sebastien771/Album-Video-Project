# Étape de build pour construire l'application React avec Node.js
FROM node:14 AS build
# Répertoire de travail dans le conteneur
WORKDIR /app
# Copie des fichiers de dépendances npm
COPY package.json package-lock.json ./
# Installation des dépendances npm
RUN npm install
# Copie du code source de l'application dans le conteneur
COPY . ./
# Exécution du script de construction de l'application React
RUN npm run build

# Étape de production pour servir l'application avec nginx
FROM nginx:stable-alpine
# Copie du build de React dans le dossier de nginx
COPY --from=build /app/build /usr/share/nginx/html
# Expose le port 80 pour le trafic HTTP
EXPOSE 80
# Lance nginx pour qu'il ne s'arrête pas
CMD ["nginx", "-g", "daemon off;"]
