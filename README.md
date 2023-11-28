# Projet "Album Vidéo"
<div align="justify">
 Ce projet a été réalisé par Sébastien Luong et Islaan Muhammad dans le cadre de l'élective "Application Full Stack Data" (DSIA-5102A).
 </div>

## Présentation du projet

### Introduction
<div align="justify">
Album Vidéo est une application web conçue pour offrir une expérience enrichie dans la gestion et la visualisation de collections de vidéos personnelles. Elle permet aux utilisateurs d'organiser et partager facilement leurs vidéos, le tout au sein d'une interface utilisateur épurée et intuitive.
</div>

### Objectif
<div align="justify">
L'objectif principal d'Album Vidéo est de résoudre les problèmes courants liés à l'organisation et l'accessibilité des vidéos numériques. En centralisant la gestion des vidéos dans une application dédiée, Album Vidéo simplifie la vie de ceux qui cherchent à maintenir leur contenu multimédia organisé et facilement accessible.
</div>

### Problématiques Résolues
<div align="justify">
Album Vidéo est la quintessence de la centralisation pour le stockage vidéo, éliminant le besoin de jongler entre multiples plateformes et offrant un accès à votre collection personnelle de vidéos à tout moment et de n'importe où. Conçu pour simplifier le partage et enrichir l'expérience de visualisation, notre application facilite la gestion de vos souvenirs numériques grâce à des fonctionnalités intuitives d'organisation en albums, d'édition, et de recherche avancée, le tout enveloppé dans un design réactif qui s'adapte à tous vos appareils. Au cœur de cette solution, React.js anime le frontend, Python dynamise le backend, PostgreSQL sécurise vos données, tandis que Docker et Docker Compose orchestrent le déploiement et la maintenance, formant ainsi une synergie technologique qui redéfinit l'interaction avec vos contenus vidéos.
</div>

## Lecture du projet
Pour lancer le projet, veuillez suivre les étapes suivantes :
- Cloner le GitHub en local
- Lancer Docker (via le terminal ou via Docker Desktop)
- À partir du terminal, aller à la racine du projet
- Exécuter la commande "docker-compose up"
- Exécuter le fichier Python "server.py", par exemple via le terminal en se plaçant dans le dossier "backend" et en exécutant la commande "python3 server.py"
- Dans un navigateur Internet, accéder à l'adresse "http://localhost:3000/" pour visualiser l'application

## Docker
<div align="justify">
Docker est utilisé dans ce projet pour conteneuriser et orchestrer tous les composants de l'application Album Vidéo, garantissant une homogénéité entre les environnements de développement, de test et de production. Les services sont définis dans un fichier docker-compose.yaml pour une gestion facile des conteneurs, tandis que le Dockerfile pour le frontend standardise le processus de construction et de déploiement du code. En utilisant Docker, l'équipe de développement peut lancer toute l'application de manière prévisible et rapide, sans se soucier des différences de configuration entre les environnements ou des installations logicielles manuelles, tout en assurant que l'application fonctionne de manière isolée et sécurisée.
</div>

Plus précisement, le fichier docker-compose.yaml agit comme chef d'orchestre pour nos conteneurs, simplifiant la gestion et le déploiement des services nécessaires à l'application. Avec ce fichier, nous définissons un conteneur pour la base de données PostgreSQL, configuré pour stocker les données de manière persistante et sécurisée, accessible via le port standard 5432. Un second conteneur pour Adminer nous offre une interface web pratique pour la gestion de notre base de données, et ce, grâce à une dépendance explicite envers le service de la base de données, assurant un ordre de lancement approprié. Enfin, le service frontend construit une image à partir du répertoire contenant notre code source React, le rendant disponible via le port 3000 de l'hôte, et se connectant au backend à travers une variable d'environnement spécifiant l'URL de l'API.

Quant au Dockerfile, il se concentre sur la mise en place de notre application frontend. Il utilise Node.js pour installer les dépendances nécessaires et construire l'application grâce à npm, l'outil de gestion de paquets pour JavaScript. Une fois la construction terminée, une image nginx stable est utilisée pour servir efficacement les fichiers statiques générés, faisant de nginx notre serveur web léger et performant qui délivre le contenu au client. Ce processus de construction et de déploiement est reproduit de manière identique à chaque fois, éliminant ainsi les variables entre les environnements et renforçant la sécurité et l'isolation de l'application.
</div>

## Frontend
<div align="justify">
Le frontend de l'application Album Vidéo joue un rôle crucial en offrant une interface interactive et conviviale aux utilisateurs, leur permettant de naviguer facilement à travers leur collection de vidéos, de les gérer et de les visualiser. Conçu avec React, un framework JavaScript moderne, il fournit une expérience utilisateur réactive et dynamique, qui s'adapte instantanément aux interactions de l'utilisateur et assure une cohérence sur tous les appareils et tailles d'écran.

Dans la structure du projet, le dossier frontend contient tous les éléments nécessaires pour le développement et la construction de l'interface utilisateur :

- Le sous-dossier src est le cœur du développement React, contenant les fichiers JavaScript tels que App.js et index.js. App.js est le composant principal qui orchestre le rendu des différentes vues et composants de l'application. index.js sert de point d'entrée pour l'application, où le composant App est relié au Document Object Model (DOM)
- Le dossier public contient le index.html, qui est le fichier de template HTML de base. C'est ici que l'application React s'attache pour charger tous les composants
- Les node_modules stockent les bibliothèques et dépendances externes installées via npm, qui sont utilisées pour ajouter des fonctionnalités supplémentaires et optimiser le développement
- Les package.json et package-lock.jsonr épertorient toutes ces dépendances ainsi que les scripts personnalisés pour lancer, construire, et tester l'application
</div>

## Backend
<div align="justify">
Le backend de l'application Album Vidéo joue un rôle essentiel en gérant la logique de l'application, le traitement des données et la communication avec la base de données. Il agit comme le cœur fonctionnel de l'application, traitant les requêtes entrantes du frontend, interagissant avec la base de données pour récupérer, modifier, ajouter ou supprimer des données, et renvoyant les informations nécessaires au frontend. En utilisant Python, un langage polyvalent et puissant, le backend assure un traitement efficace des données et une intégration fluide avec diverses bases de données et autres services.



Le fichier server.py est le cœur du backend de votre application Album Vidéo. Il utilise FastAPI, un framework web moderne et rapide pour Python, pour créer et gérer les API. Le fichier commence par importer les bibliothèques nécessaires, y compris boto3 pour l'interaction avec les services AWS (comme S3 pour le stockage de vidéos), psycopg2 pour la connexion à PostgreSQL, et FastAPI pour la création de l'API web. Ensuite, un modèle de données pour les vidéos est défini en utilisant Pydantic, ce qui facilite la validation et la sérialisation des données. L'application FastAPI est configurée avec CORS pour permettre les requêtes cross-origin, ce qui est crucial pour les applications front-end qui communiquent avec le backend depuis un domaine différent. Puis, le backend définit deux routes principales : une pour vérifier le statut du serveur (/status) et une autre pour récupérer la liste des vidéos (/videos). La route /videos se connecte à la base de données PostgreSQL, récupère les enregistrements de vidéos, les formate en utilisant le modèle Pydantic, puis renvoie les données formatées au client. Cette conception modulaire et la clarté du code facilitent la maintenance, l'extension, et l'optimisation de l'application backend.


La base de données PostgreSQL est un élément central de l'application Album Vidéo, stockant les informations cruciales telles que les détails des vidéos. Dans cette configuration, PostgreSQL sert de base de données relationnelle robuste et performante. Elle est configurée pour être accessible via le port 5432 et peut être gérée par le biais d'Adminer, un outil d'administration de base de données basé sur le Web. Pour accéder à l'interface d'Adminer, les utilisateurs peuvent naviguer vers "http://localhost:8080/" dans leur navigateur Internet. Une fois connectés, ils peuvent visualiser, modifier, ajouter ou supprimer des données dans la base de données PostgreSQL. Cette interface rend la gestion de la base de données pratique et accessible, même pour ceux qui ne sont pas familiers avec les lignes de commande SQL.


Amazon AWS S3 est utilisé dans l'application Album Vidéo pour le stockage des fichiers vidéo eux-mêmes. S3 est un service de stockage d'objets offert par Amazon Web Services, connu pour sa durabilité, sa disponibilité et sa facilité d'utilisation. Dans le contexte de Album Vidéo, S3 sert de dépôt pour les fichiers vidéo, où chaque vidéo est stockée comme un objet distinct. L'utilisation d'AWS S3 offre plusieurs avantages, comme la scalabilité, la sécurité des données, et l'accès global. Le backend interagit avec S3 via boto3, le SDK AWS pour Python, pour récupérer les URL des vidéos stockées sur S3. Ces URL sont ensuite utilisées dans l'application pour permettre aux utilisateurs de lire les vidéos directement depuis le stockage S3, garantissant ainsi une expérience utilisateur fluide et une gestion efficace des ressources de stockage.
</div>

## Axes d'amélioration
<div align="justify">
</div>
## Bibliographie
- Python
- JavaScript (Node.js, npm)
- SQL
- Nginx
- Docker
- PostgreSQL
- 
