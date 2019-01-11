Exercice 1
==========

Ecrire le code de la fonction getPersonWithAge, 
 - qui prend en paramètre un objet (person) 
 - doit retourner un objet avec les mêmes attributs que person plus un nouveau, "age", qui contiendra.. son age ! (de type number, entier)
 - l'objet original ne doit pas être modifié

l'objet _person_ a les attributs suivants :
  * dateOfBirth (string, au format MM/DD/YYYY c'est à dire mois/jour/année)
  * firstName
  * lastName
  * peut être d'autres...

Le programme doit s'adapter à la date à laquelle le code sera lancé

N'hésitez pas à consulter cette documentation : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date

Au besoin, une année contient 31557600000 millisecondes

exemple :
---------

```javascript
const person = {
  dateOfBirth: '01/31/1990'
  firstName: 'Kent',
  lastName: 'Beck'
}

const personWithAge = getPersonWithAge(person);
```

Si la function est exécutée le 30 janvier 2019, personWithAge doit valoir :

```javascript
{
  dateOfBirth: '01/31/1990'
  firstName: 'Kent',
  lastName: 'Beck',
  age: 28
}
```


et si elle est exécutée le 31 janvier ou le 1er février 2019 :

```javascript
{
  dateOfBirth: '01/31/1990'
  firstName: 'Kent',
  lastName: 'Beck',
  age: 29
}
```
