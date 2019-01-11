Exercice 4
==========

Implémenter la classe Person, dans le ficher exercice4.js, tel que :

* Person doit avoir 3 attributs : 
  - fistName *(string)*
  - lastName *(string)*
  - age *(number)*

* Avec les "setters" associés :
  - setFirstName
  - setLastName
  - setAge

* Ainsi qu'une fonction toString() qui doit retouner les attributs de l'objets sous forme d'une chaine de caractère, avec une mise en forme : "*firstName* *lastName*, *age* ans"

* De plus, l'implémentation doit permettre de **chainer les setters**, dans n'importe quel ordre.

exemple :
---------

```javascript
const person = new Person();

person
  .setFirstName('Robert')
  .setAge(67)
  .setLastName('Martin');

const asString = person.toString();
```

asString doit valoir :

```javascript
'Robert Martin, 67 ans'
```
