Exercice 6
==========


Dans le fichier exercice6.js, implémenter la fonction getPromisesCountByState qui prend en seul paramètre un tableau de promesses, *promises*.

La fonction doit retourner une promesse contenant un objet avec deux propriétés :
  - resolved : le nombre de promesses du tableau *promises* en état resolved
  - rejected : le nombre de promesses du tableau *promises* en état rejected


exemple :
---------

```javascript
getPromisesCountByState([ Promise.resolve(), Promise.reject(), Promise.resolve() ])
.then((result) => {
});
```

result doit valoir :

```javascript
{
  resolved: 2,
  rejected: 1
}
```
