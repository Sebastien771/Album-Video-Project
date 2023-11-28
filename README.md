# Projet "Album Vidéo"
 Ce projet a été réalisé par Sébastien Luong et Islaan Muhammad dans le cadre de l'élective "Application Full Stack Data" (DSIA-5102A).

## Présentation du projet

### Introduction
Album Vidéo est une application web conçue pour offrir une expérience enrichie dans la gestion et la visualisation de collections de vidéos personnelles. Elle permet aux utilisateurs d'organiser et partager facilement leurs vidéos, le tout au sein d'une interface utilisateur épurée et intuitive.

### Objectif
L'objectif principal d'Album Vidéo est de résoudre les problèmes courants liés à l'organisation et l'accessibilité des vidéos numériques. En centralisant la gestion des vidéos dans une application dédiée, Album Vidéo simplifie la vie de ceux qui cherchent à maintenir leur contenu multimédia organisé et facilement accessible.

### Problématiques Résolues

Album Vidéo est la quintessence de la centralisation pour le stockage vidéo, éliminant le besoin de jongler entre multiples plateformes et offrant un accès à votre collection personnelle de vidéos à tout moment et de n'importe où. Conçu pour simplifier le partage et enrichir l'expérience de visualisation, notre application facilite la gestion de vos souvenirs numériques grâce à des fonctionnalités intuitives d'organisation en albums, d'édition, et de recherche avancée, le tout enveloppé dans un design réactif qui s'adapte à tous vos appareils. Au cœur de cette solution, React.js anime le frontend, Python dynamise le backend, PostgreSQL sécurise vos données, tandis que Docker et Docker Compose orchestrent le déploiement et la maintenance, formant ainsi une synergie technologique qui redéfinit l'interaction avec vos contenus vidéos.

## Lecture du projet
Pour lancer le projet :
- Cloner le GitHub en local
- Lancer Docker (via le terminal ou via Docker Desktop)
- À partir du terminal, aller à la racine du projet
- Exécuter la commande "docker-compose up"
- Exécuter le fichier Python "server.py", par exemple via le terminal en se plaçant dans le dossier "backend" et en exécutant la commande "python3 server.py"
- Dans un navigateur Internet, accéder à l'adresse "http://localhost:3000/" pour visualiser l'application

## Docker
Docker est utilisé dans ce projet pour conteneuriser et orchestrer tous les composants de l'application Album Vidéo, garantissant une homogénéité entre les environnements de développement, de test et de production. Les services sont définis dans un fichier docker-compose.yaml pour une gestion facile des conteneurs, tandis que le Dockerfile pour le frontend standardise le processus de construction et de déploiement du code. En utilisant Docker, l'équipe de développement peut lancer toute l'application de manière prévisible et rapide, sans se soucier des différences de configuration entre les environnements ou des installations logicielles manuelles, tout en assurant que l'application fonctionne de manière isolée et sécurisée.

Plus précisement, le fichier docker-compose.yaml agit comme chef d'orchestre pour nos conteneurs, simplifiant la gestion et le déploiement des services nécessaires à l'application. Avec ce fichier, nous définissons un conteneur pour la base de données PostgreSQL, configuré pour stocker les données de manière persistante et sécurisée, accessible via le port standard 5432. Un second conteneur pour Adminer nous offre une interface web pratique pour la gestion de notre base de données, et ce, grâce à une dépendance explicite envers le service de la base de données, assurant un ordre de lancement approprié. Enfin, le service frontend construit une image à partir du répertoire contenant notre code source React, le rendant disponible via le port 3000 de l'hôte, et se connectant au backend à travers une variable d'environnement spécifiant l'URL de l'API.

Quant au Dockerfile, il se concentre sur la mise en place de notre application frontend. Il utilise Node.js pour installer les dépendances nécessaires et construire l'application grâce à npm, l'outil de gestion de paquets pour JavaScript. Une fois la construction terminée, une image nginx stable est utilisée pour servir efficacement les fichiers statiques générés, faisant de nginx notre serveur web léger et performant qui délivre le contenu au client. Ce processus de construction et de déploiement est reproduit de manière identique à chaque fois, éliminant ainsi les variables entre les environnements et renforçant la sécurité et l'isolation de l'application.

## Frontend
- Explication des fichiers et leur fonctionnement

## Backend
- Explication du fichier et son fonctionnement
- Explication de la BDD PostgreSQL (Dans un navigateur Internet, accéder à l'adresse "http://localhost:8080/" pour se connecter à la base de données PoostgreSQL)
- Explication de la BDD Amazon AWS S3

## Bibliographie
- Python
- JavaScript (Node.js, npm)
- SQL
- Nginx
- Docker
- PostgreSQL
- 
