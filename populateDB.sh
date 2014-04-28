curl -i -X PUT localhost:3000/saint-etienne/ -d '{"name": "Saint-Etienne", "description": "La ville du chaudron"}' -H "Content-Type: application/json"

curl -i -X PUT localhost:3000/lyon/ -d '{"name": "Lyon", "description": "Connu pour ces celebres bouchons Lyonnais"}' -H "Content-Type: application/json"

curl -i -X PUT localhost:3000/montpellier/ -d '{"name": "Montpellier", "description": "Une ville ensoleille"}' -H "Content-Type: application/json"

curl -i -X PUT localhost:3000/saint-etienne/homeless -d '{"name": "Homeless" ,"description" : "Un endroit ideal pour toutes les personnes en detresses"}' -H "Content-Type: application/json"

curl -i -X PUT localhost:3000/saint-etienne/socialparadise -d '{"name": "Social Paradise" ,"description" : "Un bon endroit pour se relaxer"}' -H "Content-Type: application/json"

curl -i -X PUT localhost:3000/lyon/kidstory -d '{"name": "Kid Story" ,"description" : "Logement specialisé pour les enfants en detresses"}' -H "Content-Type: application/json"

curl -i -X PUT localhost:3000/lyon/olderhelp -d '{"name": "Older help" ,"description" : "Logement pour les personnes agées"}' -H "Content-Type: application/json"

curl -i -X PUT localhost:3000/montpellier/nomoney -d '{"name": "No Money" ,"description" : "Logement pour les personnes sans revenu"}' -H "Content-Type: application/json"

curl -i -X PUT localhost:3000/montpellier/surferland -d '{"name": "Land of Surfer" ,"description" : "Logement pour les surfers(uniquement) en detresse"}' -H "Content-Type: application/json"

curl -i -X POST localhost:3000/saint-etienne/homeless/ -d '{"body":"Tres bon acceuil"}' -H "Content-Type:application/json"

curl -i -X POST localhost:3000/saint-etienne/socialparadise/ -d '{"body":"Un sejour de folie!"}' -H "Content-Type:application/json"

curl -i -X POST localhost:3000/lyon/kidstory/ -d '{"body":"Uniquement pour les mineurs ne pas avoir de moustaches!"}' -H "Content-Type:application/json"

curl -i -X POST localhost:3000/lyon/olderhelp/ -d '{"body":"Jai adoré le Jacuzzi"}' -H "Content-Type:application/json"

curl -i -X POST localhost:3000/montpellier/nomoney/ -d '{"body":"Gratuit et Tres propre , rien à redire"}' -H "Content-Type:application/json"

curl -i -X POST localhost:3000/montpellier/surferland/ -d '{"body":"Très bon sejour "}' -H "Content-Type:application/json"


