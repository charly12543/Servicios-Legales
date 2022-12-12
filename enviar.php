<?php
$destino ="cbustamantet12@gmail.com";
$nombre= $_POST["nombre"];
$correo= $_POST["correo"];
$telefono= $_POST["telefono"];
$estado= $_POST["estado"];
$empresa= $_POST["empresa"];
$mensaje= $_POST["mensaje"];
$contenido = "Nombre: " . $nombre . "\ncorreo: " .$correo . "\ntelefono: " .$telefono . "\estado: " .$estado . "\empresa: " .$empresa . "\mensaje: " .$mensaje ;
mail($destino,"contacto", $contenido);
header("Location:gracias.html");
?>