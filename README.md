# botanicionic
Application Ionic
Etienne URBANO - Mars 2022

Pour lancer l'application, se placer dans le répertoire racine et lancer les commandes :
- ionic serve
- json-server db.json (c'est le nom de ma DB pour ce projet)

Si le serveur json n'est pas encore installé, lancer : 
- npm i -g json-server


PWA : pour compiler (lancer le build) et lancer mon appli en mode PWA, lancer depuis un terminal Windows (et non gitbash):
- ionic build --prod --base-href "www"
- http-server www (dans un second terminal CMD)

Si le pwa n'a pas été installé, lancer : 
- ng add @angular/pwa    --> ça crée mon répertoire "www" sur lequel je lance le serveur web ensuite. 


Pour créer de nouveaux composants métier (entités) ou services, lancer :
- ionic g class modelPlant (par exemple)
- ionic g service apiPlant (par exemple)

Ce projet a été généré grâce à la commande :
- ionic start botanicionic     --> lancée depuis terminal CMD et non GitBash car ce dernier ne supporte pas l'interactif