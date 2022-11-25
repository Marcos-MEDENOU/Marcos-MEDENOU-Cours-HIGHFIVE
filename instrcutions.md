## Exercice 1: FirstUpperCase
Difficulté: Easy

Créez une fonction firstUpperCase(string).
Cette fonction prend une phrase, et
retourne chaque mot avec la 1ère lettre en 
majuscule.

Tests:
firstUpperCase("bonjour tout le monde") devrait retourner "Bonjour Tout Le Monde"
firstUpperCase("bonjour") devrait retourner "Bonjour"

A vos claviers ! :)

## Exercice 2: LongestWord
Difficulté: Easy

Créez une fonction longestWord(string).
Cette fonction prend une chaîne de caractères, et retourne
la longeur du plus long mot.

Tests:

longestWord("bonjour à tous") devrait retourner 7 car "bonjour" est le plus long mot et il compte 7 caractères
longestWord("les chaussettes de l'archiduchesse) ==> retourner 15 en référence à "l'archiduchesse"

## Exercice 3: LargestNumber
Difficulté: Easy

Créez une fonction largestWord(arr).
Cette fonction doit retourner le plus grand nombre dans une liste de nombres passées en argument

Tests:

largestWord([20, 32, 97]) devrait retourner 97
largestWord([156, 851, 138]) devrait retourner 851
largestWord([357, 195, 759]) devrait retourner 759

## Exercice 4: ConfirmEnd
Difficulté: Easy

Créez une fonction confirmEnd(string, end).
Cette fonction doit vérifier que le string qu'on lui passe termine bien
par le caractère "end".

Tests:

confirmEnd("bonjour", "n") devrait retourner false
confirmEnd("bonjour", "r") devrait retourner true

## Exercice 5: Tracage
Difficulté: Easy

Créez une fonction truncate(str, num) {...}
Cette fonction doit tronquer la chaîne de caractères si la 
longueur de ce dernier dépasse le nombre spécifié par le paramètre "num".
Retournez la chaîne de caractères tronquée avec ... à fin.

Tests:

truncate("bonjour à tous", 5) devrait retourner "bonjo..."
truncate("salut", 8) devrait retourner "salut"

## Exercice 6:  Les détectives
Difficulté: Easy

Créez une fonction findElement() qui traverse un tableau et retourne le premier élément qui passe le "test de vérité". C'est-à-dire que pour un élément donné, le test de vérité est passé si func(x) est vrai. Si aucun élément ne passe le test, retournez undefined.

Tests:
findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) devrait retourner 8

findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) devrait retourner undefined

## Exercice 7: Les perroquets
Difficulté: Easy

Créez une fonction repeat(string, num) qui prend 2 paramètres: un mot puis un entier.
La fonction doit pouvoir répéter le mot qu'on lui passe le nombre de fois spécifié.

Tests:

repeat ("abc", 3) devrait retourner "abcabcabc"
repeat ("*", 3) =devrait retourner "***"
repeat ("bonjour", 2) devrait retourner "bonjourbonjour";

## Exercice 8: Factorisation
Difficulté: Médium

Créez une fonction factorialize(number) qui retourne le factoriel d'un entier.
Le factoriel d'un entier n, souvent noté n! est le produit de tous les entiers positifs
inférieur ou égal à n.
ex 5! = 1 * 2 * 3 * 4 * 5 = 120

## Exercice 9: Téléportation et Fusion
Difficulté: Medium

Il vous est donné deux tableaux et un index.
Créez une fonction frankenSplice(arr1, arr2, index).
Copiez dans l'ordre chaque élément du premier tableau dans le second tableau.
Commencez par insérer les éléments à l'index n du second tableau.
Retournez le tableau final.
NB: Les tableaux de départ reste inchangés après l'exécution des fonctions.

Tests:

frankenSplice([1, 2, 3], [4, 5], 1) devrait retourner [4, 1, 2, 3, 5]
frankenSplice([1, 2], ["a", "b"], 1) devrait retourner ["a", 1, 2, "b"]
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) devrait retourner ["head", "shoulders", "claw", "tentacle", "knees", "toes"]
Tous les éléments du premier tableau devrait être additionnés au second tout en respectant l'ordre de départ.
frankenSplice([1, 2, 3, 4], [], 0) devrait retourner [1, 2, 3, 4]

## Exercice 10: Faux Videurs
Difficulté: Medium

Supprimez toutes les  valeurs fausses d'un tableau. Renvoiez un nouveau tableau; ne pas muter le tableau d'origine.
Les fausses valeurs en JavaScript sont false, null, 0, "", undefined et NaN.

Tests:

bouncer([7, "ate", "", false, 9])devrait retourner [7, "ate", 9].
bouncer(["a", "b", "c"])devrait retourner ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""])devrait retourner [].
bouncer([null, NaN, 1, 2, undefined])devrait retourner [1, 2]

## Exercice 11: Où devrais-je être
Difficulté: Moyenne

Créez une fonction getIndexToIns(arr, toInsert).
Renvoiez l'indice le plus bas auquel une valeur (deuxième argument) doit être insérée dans un tableau (premier argument) une fois qu'il a été trié. La valeur renvoyée doit être un nombre.

Par exemple, getIndexToIns([1,2,3,4], 1.5) doit retourner 1 car il est supérieur à 1(index 0), mais inférieur à 2(index 1).

De même, getIndexToIns([20,3,5], 19) devrait retourner 2 car une fois le tableau trié, il ressemblera à [3,5,20] et 19 est inférieur à 20 (index 2) et supérieur à 5 (index 1).

Tests:

getIndexToIns([10, 20, 30, 40, 50], 35) devrait renvoyer 3.
getIndexToIns([10, 20, 30, 40, 50], 35) devrait renvoyer un nombre.
getIndexToIns([10, 20, 30, 40, 50], 30) devrait renvoyer 2.
getIndexToIns([10, 20, 30, 40, 50], 30) devrait renvoyer un nombre.
getIndexToIns([40, 60], 50) devrait renvoyer 1.
getIndexToIns([40, 60], 50) devrait renvoyer un nombre.
getIndexToIns([3, 10, 5], 3) devrait renvoyer 0.
getIndexToIns([3, 10, 5], 3) devrait renvoyer un nombre.
getIndexToIns([5, 3, 20, 3], 5) devrait renvoyer 2.
getIndexToIns([5, 3, 20, 3], 5) devrait renvoyer un nombre.
getIndexToIns([2, 20, 10], 19) devrait renvoyer 2.
getIndexToIns([2, 20, 10], 19) devrait renvoyer un nombre.
getIndexToIns([2, 5, 10], 15) devrait renvoyer 3.
getIndexToIns([2, 5, 10], 15) devrait renvoyer un nombre.
getIndexToIns([], 1) devrait renvoyer 0.
getIndexToIns([], 1) devrait renvoyer un nombre.

## Exercice 12: Mutation
Difficulté: Medium

Renvoiez true si la chaîne du premier élément du tableau contient toutes les lettres de la chaîne du deuxième élément du tableau.

Par exemple, ["hello", "Hello"], doit retourner true car toutes les lettres de la deuxième chaîne sont présentes dans la première, sans tenir compte de la casse.

Les arguments ["hello", "hey"] doivent retourner false car la chaîne hellone contient pas de y.

Enfin, ["Alien", "line"], devrait retourner true car toutes les lettres de linesont présentes dans Alien.

Tests:

mutation(["hello", "hey"]) devrait retourner false.
mutation(["hello", "Hello"]) devrait retourner true.
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) devrait retourner true.
mutation(["Mary", "Army"]) devrait retourner true.
mutation(["Mary", "Aarmy"]) devrait retourner true.
mutation(["Alien", "line"]) devrait retourner true.
mutation(["floor", "for"]) devrait retourner true.
mutation(["hello", "neo"]) devrait retourner false.
mutation(["voodoo", "no"]) devrait retourner false.
mutation(["ate", "date"]) devrait retourner false.
mutation(["Tiger", "Zebra"]) devrait retourner false.
mutation(["Noel", "Ole"]) devrait retourner true.

## Exercice 13: Singe Trapu
Difficulté: Medium

Écrivez une fonction chunkArrayInGroups(arr, size)  qui divise un tableau (premier argument) en groupes de la longueur de size(deuxième argument) et les renvoie sous la forme d'un tableau à deux dimensions.

Tests:

chunkArrayInGroups(["a", "b", "c", "d"], 2) devrait retourner [["a", "b"], ["c", "d"]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) devrait retourner [[0, 1, 2], [3, 4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) devrait retourner [[0, 1], [2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) devrait retourner [[0, 1, 2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) devrait retourner [[0, 1, 2], [3, 4, 5], [6]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) devrait retourner [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) devrait retourner [[0, 1], [2, 3], [4, 5], [6, 7], [8]].

## Exercice 14: Encodage Latin 
Difficulté: Hard

Créez une fonction latinPing(string).
Cette fonction prend des chaîne de caractères, et
retourne une version coder de cette dernière.
Pour chaque mot constituant la phrase, on déplace                                                                                                                                                    
le 1er caractère à la fin du mot, puis on ajoute "ay"
NB: la ponctuation, n'est pas prise en compte (! ? .)
ex: latinPing("hello!") devrait retourner "ellohay!"
ex: latinPing("bonjour à tous!") devrait retourner "onjourbay àay tousay !