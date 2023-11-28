# Importation des modules nécessaires
import boto3            # AWS SDK pour Python
import psycopg2         # Connecteur pour la base de données PostgreSQL

from typing import List                 # Typage pour les listes
from pydantic import BaseModel          # Modélisation des données

import uvicorn                                  # Serveur ASGI pour exécuter FastAPI
from fastapi import FastAPI, UploadFile         # Framework web FastAPI et gestion des fichiers uploadés

# Middleware pour la gestion des CORS (Cross-Origin Resource Sharing)
from fastapi.middleware.cors import CORSMiddleware

# Définition d'un modèle Pydantic pour les données vidéo
class VideoModel(BaseModel):
    id: int
    video_title: str
    video_url: str

# Création d'une instance de l'application FastAPI
app = FastAPI(debug=True)
# Configuration du middleware pour autoriser les requêtes cross-origin
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],            # Autorise toutes les origines
    allow_credentials=True,
    allow_methods=["*"],            # Autorise toutes les méthodes
    allow_headers=["*"],            # Autorise tous les headers
)

# Route pour vérifier le statut du serveur
@app.get("/status")
async def check_status():
    return "Hello World!"

# Route pour obtenir la liste des vidéos
@app.get("/videos", response_model=List[VideoModel])
async def get_videos():
    # Connexion à la base de données PostgreSQL
    conn = psycopg2.connect(
        database="exampledb", user="docker", password="docker", host="0.0.0.0"
    )
    cur = conn.cursor()
    # Exécution de la requête SQL pour obtenir toutes les vidéos
    cur.execute("SELECT * FROM video ORDER BY id DESC")
    rows = cur.fetchall()

    # Formatage des données en utilisant le modèle Pydantic
    formatted_videos = []
    for row in rows:
        formatted_videos.append(
            VideoModel(id=row[0], video_title=row[1], video_url=row[2])
        )

    # Fermeture de la connexion à la base de données
    cur.close()
    conn.close()
    return formatted_videos

# Point d'entrée pour exécuter l'application avec Uvicorn
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=False)