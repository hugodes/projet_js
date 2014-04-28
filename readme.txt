Voici les modalités d'installation et de fonctionnement de notre projet.
	1 - Mettez vous dans votre public_html
	2 - executez la commande 'git clone git@github.com:hugodes/projet_js.git'
	3 - Lancer le service de mongoDB "mongod"
	4 - Lancez les tests avec la commande "make" (après avoir installé mocha et chai via npm)
	5 - Lancer l'API RESTful à l'aide la commande "node index.js"
	6 - Lancer le script populateDB "bash populateDB.sh"
 	7 - Ouvrez le naviguateur et aller à l'adresse (http://localhost/projet_js/)
	8 - Verrifier les ressources ajoutés


Pour ce qui est des différentes fonctionnalités :
	- "App.js" à la racine correspond au backbone de la page web dynamique
	- Test qui couvre l'integralité des models mongoose de l'API
	- Affichage des différents logements dans chaque ville avec les commentaires associés
	- Possibilité d'ajouter un logement dans chaque ville via l'interface Add Housing
	- Cliquer sur le lien "Des logements pour les personnes en difficultés" nous ramene à la liste des villes

Malheuresement par manque de temps , nous n'avons pas pu faire la fonction de reservation de ce logement.

Merci d'avance pour votre lecture,

Le groupe FHTR.