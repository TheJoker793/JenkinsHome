# etape1:etape de construction
#1 utiliser la version 18 de node js comme image de base pour l'etape de construction
FROM node:18 As build
#2 definit le repertoire de travail à /app à l'interieur de conteneur
WORKDIR /app
#3 copie package.json et package-lock.json dans le repertoire de travail
COPY  package.json package-lock.json ./ 
#install les dependances npm definis dans le fichier package.json
RUN npm install
#copier le code source du repertoire courant vers le repertoire du travail du conteneur
COPY . .
#executer la construction en production de l'application
RUN npm run build --prod

#etape2:etape d'execution 
#*********************************************************************************
#utiliser la derniere version de nginx comme image de base pour l'etape d'exection
FROM nginx:latest
#copie l'application construite de l'etape de construction vers le repertoire de service nginx
COPY --from=build /app/dist/*/browser/* /usr/share/nginx/html/
