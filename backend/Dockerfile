# Utilise l'image officielle Python comme image de base
FROM python:3.8-slim

# Définit le répertoire de travail dans le conteneur
WORKDIR /app

# Copie le fichier requirements.txt dans le répertoire de travail
COPY requirements.txt /app/

# Installe les bibliothèques nécessaires
RUN pip install --no-cache-dir -r requirements.txt

# Copie les autres fichiers du projet dans le répertoire de travail
COPY . /app/

# Expose le port 8001 pour le trafic HTTP 
EXPOSE 8001

# Lance Uvicorn pour servir l'application FastAPI sur le port 8001
CMD ["uvicorn", "server:app", "--host", "0.0.0.0", "--port", "8001"]

