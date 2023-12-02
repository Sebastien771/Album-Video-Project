# Projet "Album Vidéo"
<div align="justify">
 Ce projet a été réalisé par Sébastien Luong et Islaan Muhammad dans le cadre de l'élective "Application Full Stack Data" (DSIA-5102A).
 </div> 
 <br/>
 
## Introduction
<div align="justify">
Album Vidéo est une application web conçue pour offrir une expérience enrichie dans la gestion et la visualisation de collections de vidéos personnelles. Elle permet aux utilisateurs d'organiser et partager facilement leurs vidéos, le tout au sein d'une interface utilisateur épurée et intuitive.
</div>
<br/>
 <img width="1435" alt="image" src="https://github.com/Sebastien771/Album-Video-Project/assets/124042574/d56fe1c2-1a26-4aac-9dba-2ba005ba51ac">
 <br/>

## Objectif
<div align="justify">
L'objectif principal d'Album Vidéo est de résoudre les problèmes courants liés à l'organisation et l'accessibilité des vidéos numériques. En centralisant la gestion des vidéos dans une application dédiée, Album Vidéo simplifie la vie de ceux qui cherchent à maintenir leur contenu multimédia organisé et facilement accessible.
</div>
<br/>

## Problématiques résolues
<div align="justify">
Album Vidéo est la quintessence de la centralisation pour le stockage vidéo, éliminant le besoin de jongler entre multiples plateformes et offrant un accès à votre collection personnelle de vidéos à tout moment et de n'importe où. Conçu pour simplifier le partage et enrichir l'expérience de visualisation, notre application facilite la gestion de vos souvenirs numériques grâce à des fonctionnalités intuitives d'organisation en albums, d'édition, et de recherche avancée, le tout enveloppé dans un design réactif qui s'adapte à tous vos appareils. Au cœur de cette solution, React.js anime le frontend, Python dynamise le backend, PostgreSQL sécurise vos données, tandis que Docker et Docker Compose orchestrent le déploiement et la maintenance, formant ainsi une synergie technologique qui redéfinit l'interaction avec vos contenus vidéos.
</div>
<br/>

## Lecture du projet
Pour lancer le projet, veuillez suivre les étapes suivantes :
- <div align="justify"> Cloner le GitHub en local </div>
- <div align="justify"> Lancer Docker (via le terminal ou via Docker Desktop) </div>
- <div align="justify"> À partir du terminal, aller à la racine du projet </div>
- <div align="justify"> Exécuter la commande "docker-compose up" </div>
- <div align="justify"> Dans un navigateur Internet, accéder à l'adresse "http://localhost:3000/" pour visualiser l'application </div>

## Chargement de la base données
<div align="justify">
Si vous ne voyez aucune vidéo, ne vous inquietez ! Vous pouvez charger des vidéos de test accessibles à tous (ou directement vos propores vidéos) pour essayer l'application. Pour cela, suivez les étapes suivantes :
</div>

- Une fois avoir exécuté la commande "docker-compose up", accéder à l'adresse "http://localhost:8080/"

- Connectez-vous à la base de données PostgreSQL grâce aux identifiants fournis (mdp = "docker")
 
<p align="center"> <img width="262" alt="PostgreSQL" src="https://github.com/Sebastien771/Album-Video-Project/assets/124042574/8daca2fd-821e-437a-acce-94cedbbbe205"> </p>

- Dans la section "Create table", créez la table "video" avec les colonnes suivantes et appuyez sur "Save"
  
<p align="center"> <img width="500" alt="Capture d’écran 2023-12-02 à 00 56 06" src="https://github.com/Sebastien771/Album-Video-Project/assets/124042574/56409794-5707-4372-9552-a8ad234d114c"> </p>

- Dans la section "SQL Command", exécutez la commande suivante :
<p align="center">
INSERT INTO video (id, video_title, video_url) VALUES <br/>
(1,'video1.mp4','https://application-full-stack-storage.s3.eu-west-3.amazonaws.com/video1.mp4'), <br/>
(2,'video2.mp4','https://application-full-stack-storage.s3.eu-west-3.amazonaws.com/video2.mp4'), <br/>
(3,'video3.mp4','https://application-full-stack-storage.s3.eu-west-3.amazonaws.com/video3.mp4'), <br/>
(4,'video4.mp4','https://application-full-stack-storage.s3.eu-west-3.amazonaws.com/video4.mp4'), <br/>
(5,'video5.mp4','https://application-full-stack-storage.s3.eu-west-3.amazonaws.com/video5.mp4'), <br/>
(6,'video6.mp4','https://application-full-stack-storage.s3.eu-west-3.amazonaws.com/video6.mp4'), <br/>
(7,'video7.mp4','https://application-full-stack-storage.s3.eu-west-3.amazonaws.com/video7.mp4'), <br/>
(8,'video8.mp4','https://application-full-stack-storage.s3.eu-west-3.amazonaws.com/video8.mp4'), <br/>
(9,'video9.mp4','https://application-full-stack-storage.s3.eu-west-3.amazonaws.com/video9.mp4') <br/>
</p>
  
<p align="center"> <img width="686" alt="SQL_INSERT_INTO" src="https://github.com/Sebastien771/Album-Video-Project/assets/124042574/7254a0f6-40bc-4ad4-b692-6f593c47b1ff"> </p>

- Ainsi, votre base de données doit ressembler à :
  
<p align="center"> <img width="744" alt="POSTGRESQL_DB" src="https://github.com/Sebastien771/Album-Video-Project/assets/124042574/34a358c8-bf3a-4b1d-b8c3-e2e4e909f67e"> </p>

- Finalement, rechargez la page "http://localhost:3000/" pour voir les différentes vidéos

## Docker
<div align="justify">
Docker est utilisé dans ce projet pour conteneuriser et orchestrer tous les composants de l'application Album Vidéo, garantissant une homogénéité entre les environnements de développement, de test et de production. En encapsulant chaque service de l'application, le backend, le frontend, la base de données, et l'outil d'administration de la base de données dans des conteneurs Docker séparés, nous garantissons que chaque partie de l'application s'exécute dans un environnement uniforme et contrôlé. Les services sont définis dans un fichier "docker-compose.yaml" pour une gestion facile des conteneurs, tandis que les fichiers Dockerfile pour le frontend et le backend standardisent les processus de construction et de déploiement du code. En utilisant Docker, nous pouvons lancer toute l'application de manière prévisible et rapide, sans se soucier des différences de configuration entre les environnements ou des installations logicielles manuelles, tout en assurant que l'application fonctionne de manière isolée et sécurisée.
</div>

<br/>

<div align="justify">
Plus précisement, le fichier "docker-compose.yaml" agit comme chef d'orchestre pour nos conteneurs, simplifiant la gestion et le déploiement des services nécessaires à l'application. Avec ce fichier, nous définissons quatre services clés : database, adminer, frontend et backend. Pour le service de base de données, il utilise l'image officielle PostgreSQL et expose le port 5432 tout en fixant les variables d'environnement pour les paramètres de connexion et en utilisant un volume pour la persistance des données. Le service adminer permet la gestion de la base de données via une interface web et est configuré pour dépendre de la disponibilité de la base de données. Pour le frontend, Docker Compose construit une image à partir du répertoire local et relie le port 3000 de l'hôte au port 80 du conteneur, où nginx sert le contenu statique. Le backend est également construit localement, avec le port 8001 exposé pour les communications avec le frontend. Ce fichier spécifie comment ces services interagissent, gèrent les dépendances, partagent des volumes et exposent des ports, créant un écosystème intégré pour le développement et le déploiement de l'application.
</div>

<br/>

<div align="justify">
Par ailleurs, les Dockerfile pour le frontend et le backend dictent comment les images Docker de chaque service doivent être construites. Dans le Dockerfile du backend, à partir d'une image de base Python, il crée un environnement de travail, installe les dépendances listées dans "requirements.txt" et définit comment l'application FastAPI doit être exécutée via Uvicorn. Il expose également le port 8001, correspondant au port sur lequel le service backend est à l'écoute. Pour le frontend, le Dockerfile commence par construire l'application React avec une image Node.js, en installant les dépendances et en exécutant le script de construction. La seconde étape utilise Nginx pour servir le contenu statique de l'application, copiant les fichiers construits dans le répertoire de nginx et exposant le port 80. Ce processus assure que l'application frontend est empaquetée avec tout le nécessaire pour fonctionner en tant que serveur web léger, rapide et efficace.
</div>
 
<br/>

<p align="center"> <img width="638" alt="Capture d’écran 2023-12-02 à 21 29 57" src="https://github.com/Sebastien771/Album-Video-Project/assets/124042574/73ef9800-2444-4e74-8a86-a58578d96e02"> </p>

<br/>

<p align="center"> <img width="670" alt="Capture d’écran 2023-12-02 à 21 30 09" src="https://github.com/Sebastien771/Album-Video-Project/assets/124042574/32aafea6-6d3c-4d2f-b6b2-a5b77ddc0c4b"> </p>


## Frontend
<div align="justify">
Le frontend de l'application Album Vidéo constitue l'interface utilisateur à travers laquelle l'utilisateur peut intéragir avec l'application. Développé en React et stylisé avec Chakra UI, il offre une expérience utilisateur esthétique et réactive. Le frontend fait des appels API au backend pour récupérer les vidéos stockées dans PostgreSQL et les affiche dans une galerie accessible par l'utilisateur. Il gère également la logique côté client, comme la lecture des vidéos, la mise en page responsive et l'interaction utilisateur, créant ainsi une interface conviviale qui rend la navigation et la visualisation des vidéos facile et agréable.
</div>

<br/>

En particulier, nous avons les fichiers suivants : 

- <div align="justify"> "App.js" est le composant React principal qui orchestre la mise en page de l'application utilisant les hooks de React pour gérer l'état local (stockage des données vidéos) et les effets (pour récupérer les données depuis le backend). Le code utilise également Chakra UI pour créer une grille de vidéos et un composant vidéo HTML pour la lecture. </div> <br/>

- <div align="justify"> "index.js" est le point d'entrée de l'application React en s'occupant de rendre le composant app dans le DOM. Il utilise aussi "React.StrictMode" pour une meilleure détection des problèmes potentiels en développement. </div> <br/>
  
- <div align="justify"> "index.html" est le conteneur de notre application React utilisé par "index.js" pour injecter le composant React. </div> <br/>

- <div align="justify"> "env." contient les variables d'environnement pour le frontend, notamment "REACT_APP_API_URL" qui indique l'URL du backend pour les requêtes API. </div> <br/>
  
- <div align="justify"> Dockerfile est est le script qui définit comment construire l'image Docker du frontend en deux étapes : la construction avec "Node.js" et le déploiement avec "nginx", où le contenu statique généré est servi. </div> <br/>
  
- <div align="justify"> "package.json" et "package-lock.json" sont les fichiers définissant les dépendances de projet npm et verrouillent leurs versions pour assurer la cohérence entre les environnements de développement. </div> <br/>

<p align="center"> <img width="170" alt="Capture d’écran 2023-12-02 à 21 36 39" src="https://github.com/Sebastien771/Album-Video-Project/assets/124042574/b56f0e72-3508-4913-b8aa-0dbeb38e7d56"> </p>

## Backend
<div align="justify">
Le backend de l'application Album Vidéo joue le rôle essentiel de moteur de traitement des données. Il s'agit d'une API développée avec FastAPI en Python, qui interagit avec une base de données PostgreSQL pour gérer les informations relatives aux vidéos. Le backend est responsable de la réception des requêtes HTTP du frontend, de l'exécution des opérations de base de données (comme récupérer les métadonnées des vidéos), et de l'envoi des réponses correspondantes. Il sert également de passerelle pour les interactions avec le stockage AWS S3, permettant ainsi le téléchargement et la récupération des vidéos. Avec ses capacités asynchrones, FastAPI offre des performances élevées, ce qui est crucial pour une application réactive qui gère les contenus multimédias.
</div>

<br/>

En particulier, nous avons les fichiers suivants : 

- <div align="justify"> "server.py" est le cœur du backend de votre application Album Vidéo. Il utilise FastAPI, un framework web moderne et rapide pour Python, pour créer et gérer les API. Le fichier commence par importer les bibliothèques nécessaires, y compris boto3 pour l'interaction avec les services AWS (comme S3 pour le stockage de vidéos), psycopg2 pour la connexion à PostgreSQL, et FastAPI pour la création de l'API web. Ensuite, un modèle de données pour les vidéos est défini en utilisant Pydantic, ce qui facilite la validation et la sérialisation des données. L'application FastAPI est configurée avec CORS pour permettre les requêtes cross-origin, ce qui est crucial pour les applications front-end qui communiquent avec le backend depuis un domaine différent. Puis, le backend définit deux routes principales : une pour vérifier le statut du serveur (/status) et une autre pour récupérer la liste des vidéos (/videos). La route /videos se connecte à la base de données PostgreSQL, récupère les enregistrements de vidéos, les formate en utilisant le modèle Pydantic, puis renvoie les données formatées au client. Cette conception modulaire et la clarté du code facilitent la maintenance, l'extension, et l'optimisation de l'application backend. </div> <br/>

- <div align="justify"> Dockerfile définit comment construire l'image Docker pour le backend. Il part d'une image Python slim, installe les dépendances requises, expose le port sur lequel le serveur va écouter et spécifie la commande pour lancer l'application avec Uvicorn. </div> <br/>
  
- <div align="justify"> "requirements.txt" liste toutes les dépendances Python nécessaires pour le backend, telles que FastAPI, Uvicorn, psycopg2-binary pour la connexion PostgreSQL, et boto3 pour la communication avec AWS S3. </div> <br/>

<p align="center"> <img width="158" alt="Capture d’écran 2023-12-02 à 21 33 54" src="https://github.com/Sebastien771/Album-Video-Project/assets/124042574/2817a3a9-4436-43c5-8b5c-e7ec3bf64550"> </p>

## Bases de données
<div align="justify">
La base de données PostgreSQL est un élément central de l'application Album Vidéo, stockant les informations cruciales telles que les détails des vidéos. Dans cette configuration, PostgreSQL sert de base de données relationnelle robuste et performante. Elle est configurée pour être accessible via le port 5432 et peut être gérée par le biais d'Adminer, un outil d'administration de base de données basé sur le Web. Pour accéder à l'interface d'Adminer, les utilisateurs peuvent naviguer vers "http://localhost:8080/" dans leur navigateur Internet. Une fois connectés, ils peuvent visualiser, modifier, ajouter ou supprimer des données dans la base de données PostgreSQL. Cette interface rend la gestion de la base de données pratique et accessible, même pour ceux qui ne sont pas familiers avec les lignes de commande SQL. En particulier, les éléments de la colonne "video_url" mènent aux vidéos stockées dans Amazon AWS. </div> <br/>

<p align="center"> <img width="740" alt="Capture d’écran 2023-12-02 à 21 38 13" src="https://github.com/Sebastien771/Album-Video-Project/assets/124042574/8220bdc7-1ec2-4ff5-82cd-ce7c055b053c"> </p>

<br/>

<div align="justify">
En effet, Amazon AWS S3 est utilisé dans l'application Album Vidéo pour le stockage des fichiers vidéo eux-mêmes. S3 est un service de stockage d'objets offert par Amazon Web Services, connu pour sa durabilité, sa disponibilité et sa facilité d'utilisation. Dans le contexte de Album Vidéo, S3 sert de dépôt pour les fichiers vidéo, où chaque vidéo est stockée comme un objet distinct. L'utilisation d'AWS S3 offre plusieurs avantages, comme la scalabilité, la sécurité des données, et l'accès global. </div> <br/>

<p align="center"> <img width="1060" alt="Capture d’écran 2023-12-02 à 19 55 24" src="https://github.com/Sebastien771/Album-Video-Project/assets/124042574/0c4a706b-7193-4fd1-a1b1-1fe039a86c77"> </p>

<p align="center"> <img width="1038" alt="Capture d’écran 2023-11-28 à 22 03 46" src="https://github.com/Sebastien771/Album-Video-Project/assets/124042574/02599956-3c81-4873-a865-c5997eb4ad60"> </p>

## Axes d'amélioration
<div align="justify">
Finalement, certains points de l'application "Album Vidéos" pourraient être améliorés, notamment :
</div> <br/>
 
- <div align="justify"> la mise en place d'un service permettant que l'utilisateur télécharge directement une ou plusieurs vidéos à partir du frontend et que celles-ci soient directement stockés dans la base de données PostgreSQL </div> <br/>
  
- <div align="justify"> la mise en place d'un système d'authentification du frontend afin de permettre une meilleure sécurité des données </div> <br/>

- <div align="justify"> une interface graphique plus développée </div> <br/>

## Références
- <div align="justify"> Python : https://docs.python.org/3/ </div> <br/>
- <div align="justify"> JavaScript : https://devdocs.io/javascript/ </div> <br/>
- <div align="justify"> node.js : https://nodejs.org/en/docs </div> <br/>
- <div align="justify"> npm : https://docs.npmjs.com/ </div> <br/>
- <div align="justify"> SQL : https://dev.mysql.com/doc/ </div> <br/>
- <div align="justify"> Nginx : https://nginx.org/en/docs/ </div> <br/>
- <div align="justify"> Docker : https://docs.docker.com/reference/ </div> <br/>
- <div align="justify"> PostgreSQL : https://www.postgresql.org/docs/ </div> <br/>
- <div align="justify"> Amazon AWS S3 : https://docs.aws.amazon.com/s3/ </div> <br/>






















 

