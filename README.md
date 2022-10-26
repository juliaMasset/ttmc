# TTMC
L'objectif du projet est de réaliser en équipe de 3 sous format digital le jeu de société "TTMC". Développé avec les frameworks Spring et Angular.

## Règles du jeu
Le but du jeu est d’être le premier à parcourir le plateau (contenant 35 cases) en répondant aux questions posées.
L’originalité réside sur le principe d’auto-évaluation de ses connaissances de 1 à 5 sur une multitude de sujets.

À chaque note correspond une question, plus ou moins complexe.
En cas de bonne réponse l'équipe avancera du nombre de cases correspondant à sa note auto-évaluée.
En cas de mauvaise réponse, l’équipe restera sur la même case jusqu’au prochain tour.

Les cartes sont tirées dans 4 catégories en fonction de la case où se trouve l'équipe. Les catégories sont les suivantes : improbable, mature, plaisir, scolaire.

3 équipes - à partir de 14 ans



## Fonctionnalités dévéloppées

### Coté administateur
- Affichage de la liste des cartes recto avec bouton pour retourner une carte et afficher les réponses
- Formulaire pour ajouter une nouvelle carte dans le jeu
- Bouton pour supprimer une carte avec pop up de confirmation


### Coté joueur
- Lancer une partie 
- Tirer une carte parmi les cartes de catégories correspondant à la case où se trouve l'équipe
- Répondre à la question "Tu te mets combien" en fonction du titre de la carte tirée
- Afficher les questions de la carte tirée
- Afficher les réponses de la carte tirée 
- Indiquer si l'équipe a bien répondu à la question et avancement du numéro de case en fonction
- Afficher le podium lorsqu'une équipe a atteint la case 35


## Comment lancer le projet ?
### 1. Lancer le back 
- Ouvrir le dossier "api" dans l'IDE IntelliJ
- Initialiser la bdd avant de run le projet avec la commande :
docker run --name mariadb --rm -e MYSQL_ROOT_PASSWORD=toor -e MYSQL_DATABASE=defaultdb -p 3306:3306 mariadb
- Connecter la bdd à l'IDE IntelliJ via l'onglet Database 
- Lancer les scripts sql contenus dans le dossier "/initdb" 
- Run le projet et ouvrir une page http://localhost:8080/cartes pour visualiser le back

### 2. Lancer le front
- Ouvrir le dossier front dans IntelliJ
- Lancer la commande suivante afin d'installer toutes les dépendances précisées dans le fichier package.json et de générer le package-lock.json : npm i
- Démarrer le serveur avec la commande ng serve
- Ouvrir la page web http://localhost:4200/
