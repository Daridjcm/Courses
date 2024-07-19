<?php
    $isDev = true;
    $age = 30;
    $concat = $age . '1'; // Concatenar con .
    $add = $age + 5; // Sumar con el signo +
    define('name', 'Dariana');

    $ouput1 = match (true) {
        $age <= 11 => "Eres un bebe 👩🏼‍🦲",
        $age > 11 => "Eres un adolescente 👩🏼",
        $age === 18 => "Eres mayor de edad 👩🏼‍🎓",
        $age > 19 => "Eres un adulto joven 👩🏼‍🦳"
    };
?>

<h1> 
    Mi nombre es <?= name ?>
</h1>
<h2> <?= $ouput1 ?></h2>

<style>
    :root {
        color-scheme: light dark;
    }

    body {
        display: grid;
        place-content: center;
    }
</style>