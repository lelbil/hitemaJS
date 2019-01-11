Exercice 3
==========

Dans le fichier exercice3.js, implémenter la fonction arrayToString qui prend en seul paramètre un tableau, *data*. Ce tableau peut contenir n'importe quel type de données !

En sortie, cette fonction doit retourner une chaine de caractère contenant toutes les valeurs numériques contenue dans *data*, triées par ordre croissant, et séparées par des tirets (-)

exemples :
---------

```javascript
const exemple1 = arrayToString([10, '0', 100.1]);
const exemple2 = arrayToString([51, {}, '10.3', () => 15, null]);
```

exemple1 doit valoir

```javascript
'0-10-100.1'
```

exemple2 doit valoir

```javascript
'10.3-51'
```
