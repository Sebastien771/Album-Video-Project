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

## Problématiques Résolues
<div align="justify">
Album Vidéo est la quintessence de la centralisation pour le stockage vidéo, éliminant le besoin de jongler entre multiples plateformes et offrant un accès à votre collection personnelle de vidéos à tout moment et de n'importe où. Conçu pour simplifier le partage et enrichir l'expérience de visualisation, notre application facilite la gestion de vos souvenirs numériques grâce à des fonctionnalités intuitives d'organisation en albums, d'édition, et de recherche avancée, le tout enveloppé dans un design réactif qui s'adapte à tous vos appareils. Au cœur de cette solution, React.js anime le frontend, Python dynamise le backend, PostgreSQL sécurise vos données, tandis que Docker et Docker Compose orchestrent le déploiement et la maintenance, formant ainsi une synergie technologique qui redéfinit l'interaction avec vos contenus vidéos.
</div>
<br/>

## Lecture du projet
Pour lancer le projet, veuillez suivre les étapes suivantes :
- Cloner le GitHub en local
- Lancer Docker (via le terminal ou via Docker Desktop)
- À partir du terminal, aller à la racine du projet
- Exécuter la commande "docker-compose up"
- Dans un navigateur Internet, accéder à l'adresse "http://localhost:3000/" pour visualiser l'application

## Chargement de la base données
Si vous ne voyez aucune vidéo, ne vous inquietez ! Vous pouvez charger des vidéos de test accessibles à tous ou vos propores vidéos pour essayer l'application. Pour cela, suivez les étapes suivantes :
- Une fois avoir exécuté la commande "docker-compose up", accéder à l'adresse "http://localhost:8080/"
- Connectez-vous à la base de données PostgreSQL grâce aux identifiants fournis (mdp = "docker")
<p align="center">
  <img width="262" alt="PostgreSQL" src="https://github.com/Sebastien771/Album-Video-Project/assets/124042574/8daca2fd-821e-437a-acce-94cedbbbe205">
</p>
- Dans la section "Create table", créez la table "video" avec les colonnes suivantes et appuyez sur "Save"
<p align="center">
<img width="500" alt="Capture d’écran 2023-12-02 à 00 56 06" src="https://github.com/Sebastien771/Album-Video-Project/assets/124042574/56409794-5707-4372-9552-a8ad234d114c">
</p>
- Dans la section "SQL Command", exécutez la commande suivante : 
<p align="center">
<img width="686" alt="SQL_INSERT_INTO" src="https://github.com/Sebastien771/Album-Video-Project/assets/124042574/7254a0f6-40bc-4ad4-b692-6f593c47b1ff">
</p>
- Ainsi, votre base de données doit ressembler à : 
<p align="center">
<img width="744" alt="POSTGRESQL_DB" src="https://github.com/Sebastien771/Album-Video-Project/assets/124042574/34a358c8-bf3a-4b1d-b8c3-e2e4e909f67e">
</p>
- Finalement, rechargez la page "http://localhost:3000/" pour voir les différentes vidéos
<br/>

## Docker
<div align="justify">
Docker est utilisé dans ce projet pour conteneuriser et orchestrer tous les composants de l'application Album Vidéo, garantissant une homogénéité entre les environnements de développement, de test et de production. Les services sont définis dans un fichier "docker-compose.yaml" pour une gestion facile des conteneurs, tandis que les fichiers "Dockerfile" pour le frontend et le backend standardisent les processus de construction et de déploiement du code. En utilisant Docker, nous pouvons lancer toute l'application de manière prévisible et rapide, sans se soucier des différences de configuration entre les environnements ou des installations logicielles manuelles, tout en assurant que l'application fonctionne de manière isolée et sécurisée.
</div>
<br/>
<div align="justify">
Plus précisement, le fichier docker-compose.yaml agit comme chef d'orchestre pour nos conteneurs, simplifiant la gestion et le déploiement des services nécessaires à l'application. Avec ce fichier, nous définissons un conteneur pour la base de données PostgreSQL, configuré pour stocker les données de manière persistante et sécurisée, accessible via le port standard 5432. Un second conteneur pour Adminer nous offre une interface web pratique pour la gestion de notre base de données, et ce, grâce à une dépendance explicite envers le service de la base de données, assurant un ordre de lancement approprié. Puis, le service frontend construit une image à partir du répertoire contenant notre code source React, le rendant disponible via le port 3000 de l'hôte, et se connectant au backend à travers une variable d'environnement spécifiant l'URL de l'API. Finalement, le service backend fait de même pour configurer notre base de données.
</div>










 

