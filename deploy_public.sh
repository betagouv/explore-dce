#!/bin/bash

# 1/ Réinitialisation de Podman
echo -e "\e[34mÉtape 1: Arrêt des containers\e[0m"
cd ~/explore-dce
podman-compose down
podman image prune -f
# podman system prune -a -f
# rm -rf /var/tmp/buildah*
# rm -rf /var/tmp/container*

# 2/ Update des Codebases
echo -e "\e[34mÉtape 2: Update de la codebase\e[0m"
git fetch --all
git checkout main
git reset --hard origin/main
git pull --force

# 3/ Démarrage des containers
echo -e "\e[34mÉtape 3: Démarrage des containers\e[0m"
podman-compose up -d --build
