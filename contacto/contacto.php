<?php

require 'vendor/autoload.php';

$from = new SendGrid\Email($_POST["fullname"], $_POST["emailfrom"]);
$subject = "[Web Tramit]: Mensaje a través del formulario de contacto";
$to = new SendGrid\Email("Marina Recio", "tramit@yopmail.com");
$content = new SendGrid\Content("text/plain", $_POST["content"] . "\n Teléfono proporcionado: " . $_POST["phone"] );

$mail = new SendGrid\Mail($from, $subject, $to, $content);
$apiKey = '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';

$sg = new \SendGrid($apiKey);
$response = $sg->client->mail()->send()->post($mail);

header('Location: index.html?gracias=1');
exit; 
?>
