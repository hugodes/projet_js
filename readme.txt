Bonjour,


Voici les modalités d'installation et de fonctionnement de notre projet.
	1 - Lancer le service de mongoDB "mongod"
	2 - Decompresser l'archive du projet dans un dossier racine nommé "Jouannic"
	3 - Lancer l'API RESTful à l'aide la commande "node index.js"
	4 - Lancer le script populateDB "bash populateDB.sh"
    5 - Ouvrez le naviguateur et aller à l'adresse (http://localhost/Jouannic/)
    6 - Pour les tests , executé make à la racine du projet apres avoir installer mocha et chai


Pour ce qui est des différentes fonctionnalités :
	- "App.js" à la racine correspond au backbone de la page web dynamique
	- Test qui couvre l'integralité des models mongoose de l'API
	- Affichage des différents logements dans chaque ville avec les commentaires associés
	- Possibilité d'ajouter un logement dans chaque ville via l'interface Add Housing
    - Cliquer sur le lien "Des logements pour les personnes en difficultés" nous ramene à la liste des villes

Malheuresement par manque de temps , nous n'avons pas pu faire la fonction de reservation de ce logement.

Merci d'avance pour votre lecture,

Le groupe FHTR.