<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Algo PHP</title>
</head>

<body>
    <pre>

        <?php
            # Excercice 1:
            function firstUpperCase(string $s)
            {
                echo "string ===> " . $s . PHP_EOL;
                return ucwords($s);
            }

            $str = "bonjour tout le monde";
            echo firstUpperCase($str) . PHP_EOL;

            $str = "je m'appelle eric dupond moretti.";
            echo firstUpperCase($str) . PHP_EOL;

            # Exercice 2:
            function longestWord(string $s)
            {
                return max(array_map(fn ($el) => mb_strlen($el), explode(' ', $s)));
            }

            echo "bonjour a tous" . PHP_EOL;
            echo "longestWord ==> " . longestWord("bonjour a tous") . PHP_EOL;

            echo "je m'appelle eric dupond moretti." . PHP_EOL;
            echo "longestWord ==> " . longestWord("je m'appelle eric dupond moretti.") . PHP_EOL;

            #Exercice 3:
            function largestNumber(array $arr)
            {
                return max($arr);
            }

            echo "largesNumber [23, 12, 98] ==> " . largestNumber([23, 12, 98]) . PHP_EOL;
            echo "largesNumber [10, 139, 960, 1029] ==> " . largestNumber([10, 139, 960, 1029]) . PHP_EOL;

            #Exercice 4:
            function confirmEnd(string $s, string $end)
            {
                return str_ends_with($s, $end);
            }

            echo "confirmEnd(\"bonjour\", \"n\")" . PHP_EOL;
            echo confirmEnd("bonjour", "n") ? "True" : "False" . PHP_EOL;
            
            echo "confirmEnd(\"bonjour\", \"r\")" . PHP_EOL;
            echo confirmEnd("bonjour", "r")  ? "True" : "False"  . PHP_EOL;

            #Exercice 5:
            function truncate(string $s, int $num) {
                return mb_strlen($s) < $num ? $s : substr_replace($s, "...", $num);
            }
            echo PHP_EOL;
            echo truncate("bonjour à tous", 5) . PHP_EOL;
            echo truncate("salut", 8) . PHP_EOL;

            # Exercice 6:
            function findElement(array $arr, $func) {
                return count(array_filter($arr, $func)) > 1 ? array_values(array_filter($arr, $func))[0] : "undefined";
            }
            echo "findElement(findElement([1, 3, 5, 8, 9, 10], function(\$num) { return \$num % 2 === 0; }) ==> " . (findElement([1, 3, 5, 8, 9, 10], function($num) { return $num % 2 === 0; })) . PHP_EOL;
            // echo findElement([1, 3, 5, 9], function($num) { return $num % 2 === 0; });
            echo "findElement(findElement([1, 3, 5, 9], function(\$num) { return \$num % 2 === 0; }) ==> " . (findElement([1, 3, 5, 9], function($num) { return $num % 2 === 0; })) . PHP_EOL;

            # Exercice 7:
            function repeat(string $s, int $num) {
                return str_repeat($s, $num);
            }

            echo repeat("abc", 3) . PHP_EOL;
            echo repeat("*", 3) . PHP_EOL;
            echo repeat("bonjour", 2) . PHP_EOL;

            # Exercice 8:
            function factorialize($num) {
                return array_product(range(1, $num));
            }

            echo "factorialize(5) ==> " . factorialize(5) . PHP_EOL;
            
            # Exercice 9:
            function frankenSplice(array $arr1, array $arr2, int $pos): array {
                $newArr = [...$arr2];
                array_splice($newArr, $pos, 0, $arr1);
                return $newArr;
            }
            print_r(frankenSplice([1, 2, 3], [4, 5], 1));
            
            # Exercice 10:
            function bouncer(array $arr): array {
                return array_values(array_filter($arr, fn($el) => (bool) $el));
            }

            print_r(bouncer([7, "ate", "", false, 9])) . PHP_EOL;
            print_r(bouncer(["a", "b", "c"])) . PHP_EOL;
            print_r(bouncer([false, null, 0, ""])) . PHP_EOL;
            
            # Exercice 11:
            function getIndexToIns(array $arr, int $num): int {
                $newArr = [...$arr, $num];
                sort($newArr, SORT_NUMERIC);
                return array_search($num, $newArr);
            }

            echo "getIndexToIns([10, 20, 30, 40, 50], 35) ==> " . getIndexToIns([10, 20, 30, 40, 50], 35) . PHP_EOL;
            
            # Exercice 12:
            function mutation(array $arr): bool {
                // Tableau comprenant les lettres qu'on recherche
                $searchedLetters = str_split(strtolower($arr[0]));
                // Tableau comprenant les lettres de comparaison
                $searchedArr = str_split(strtolower($arr[1]));

                // On parcours chaque lettre qu'on recherche
                foreach($searchedLetters as $letter) {
                    // si la lettre n'existe pas, on retourne automatiquement false
                    if (array_search($letter, $searchedArr) === false) {
                        return false;
                    }
                }
                // si le code arrive jusqu'ici, c'est que toutes les lettres existent
                // donc on retourne true
                return true;
            }
            echo mutation(["Mary", "Army"]) ? "True\n" : "False\n" ;
            echo mutation(["floor", "for"]) ? "True\n" : "False\n";

            # Exercice 13:
            function chunkArrayInGroups($arr, $length) {
                return array_chunk($arr, $length);
            }

            print_r(chunkArrayInGroups(["a", "b", "c", "d"], 2)) . PHP_EOL;
            print_r(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)) . PHP_EOL;

            # Exercice 14:
            function latinPing(string $s): string {
                return preg_replace("/(\w)(\w*)(\s|$)/", "\$2\$1ay\$3", $s);

            }
            echo latinPing("hello");
        ?>
        
    </pre>
</body>

</html>