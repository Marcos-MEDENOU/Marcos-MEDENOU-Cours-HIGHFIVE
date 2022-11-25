<?php

/**
 * Robot Factory – Bonus 5
 *
 * Ce bonus est un peu plus barbu que les précédents. Mais d'un autre côté,
 * si vous êtes arrivés ici, c'est que vous n'êtes pas trop mauvais !
 *
 * Vous verrez dans cette correction un certain nombre de notions que vous
 * n'avez probablement pas encore vues. Nous n'entrerons pas dans les détails,
 * le cours sur la POO sera là pour ça.
 */

class Robot
{
    private const NAME_LETTERS = 2;
    private const NAME_NUMBERS = 4;
    private const NAME_SEPARATOR = '-';

    private const EVIL_RATE = 0.3334;

    private const DATE_FORMAT = 'd m Y';
    private const HOUR_FORMAT = 'H:i:s';

    private string $name;
    private bool $evil;

    public function __construct()
    {
        $this->name = $this->generateRandomName(
            self::NAME_LETTERS,
            self::NAME_NUMBERS,
            self::NAME_SEPARATOR
        );

        $this->evil = $this->generateEvilness(
            self::EVIL_RATE
        );
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function isEvil(): bool
    {
        return $this->evil;
    }

    public function getReversedName(): string
    {
        return strrev($this->name);
    }

    public function guessDate(): string
    {
        return date(self::DATE_FORMAT);
    }

    public function guessHour(): string
    {
        return date(self::HOUR_FORMAT);
    }

    public function generateRandomNumber(int $min, int $max): int
    {
        return mt_rand($min, $max);
    }

    public function checkIfNumberIsEven(int $x): bool
    {
        return ($x % 2) === 0;
    }

    private function generateRandomName(
        int $nbOfLetters,
        int $nbOfNumbers,
        ?string $separator
    ): string {
        if ($nbOfLetters < 1) {
            $nbOfLetters = 1;
        }
        if ($nbOfNumbers < 1) {
            $nbOfNumbers = 1;
        }

        $letters = [
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
            'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
            'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
        ];
        $numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

        $robotName = '';

        for ($i = 0; $i < $nbOfLetters; ++$i) {
            $randomKey = array_rand($letters);
            $robotName .= $letters[$randomKey];
        }

        if ($separator !== null) {
            $robotName .= $separator;
        }

        for ($i = 0; $i < $nbOfNumbers; ++$i) {
            $randomKey = array_rand($numbers);
            $robotName .= $numbers[$randomKey];
        }

        return $robotName;
    }

    private function generateEvilness(float $evilRate): bool
    {
        $randomNumber = mt_rand(0, 100);

        return $randomNumber < (100 * $evilRate);
    }
}

$robot = new Robot();

$robotName = $robot->getName();
$reversedName = $robot->getReversedName();

$date = $robot->guessDate();
$hour = $robot->guessHour();

$randomNumber = $robot->generateRandomNumber(1, 10);

if ($robot->checkIfNumberIsEven($randomNumber)) {
    $parityMsg = 'pair';
} else {
    $parityMsg = 'impair';
}

if ($robot->isEvil()) {
    $robotMoralDecision = 'Extermination ! Extermination !';
} else {
    $robotMoralDecision = 'Vous voulez un café ?';
}

?>

<!doctype html>
<html lang="fr-FR">
<head>
    <meta charset="UTF-8">
    <title>Robot Factory</title>
</head>
<body>
<h1>Robot Factory</h1>

<p>Salut, humain. Je suis <?= $robotName ?>.</p>

<p>Nous sommes le <?= $date ?>, il est <?= $hour ?>.</p>

<p>J'ai choisi le nombre <?= $randomNumber ?>. C'est un nombre <?= $parityMsg ?>.</p>

<p>Mon nom à l'envers s'écrit <?= $reversedName ?>. Ah. Ah. Ah.</p>

<p><?= $robotMoralDecision ?></p>
</body>
</html>
