Bonjour,


Voici les modalités d'installation et de fonctionnement de notre projet.
	1 - Lancer le service de mongoDB "mongod"
	2 - Lancez les tests avec la commande "make" (après avoir installé mocha et chai via npm)
	3 - Lancer l'API RESTful à l'aide la commande "node index.js"
	4 - Lancer le script populateDB "bash populateDB.sh"
    5 - Ouvrez le naviguateur et aller à l'adresse (http://localhost/projet_js/)
    6 - Verrifier les ressources ajoutés


Pour ce qui est des différentes fonctionnalités :
	- "App.js" à la racine correspond au backbone de la page web dynamique
	- Test qui couvre l'integralité des models mongoose de l'API
	- Affichage des différents logements dans chaque ville avec les commentaires associés
	- Possibilité d'ajouter un logement dans chaque ville via l'interface Add Housing
    - Cliquer sur le lien "Des logements pour les personnes en difficultés" nous ramene à la liste des villes

Malheuresement par manque de temps , nous n'avons pas pu faire la fonction de reservation de ce logement.

Merci d'avance pour votre lecture,

Le groupe FHTR.