<?php 


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'PHPMailer-master/src/Exception.php';
require 'PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer-master/src/SMTP.php';

$mail = new PHPMailer;
$mail->CharSet = 'utf-08';
$mail->IsSMTP();

$fio = $_POST['user_fio'];
$email = $_POST['user_email'];
$subject = $_POST['user_subject'];
$message = $_POST['user_message'];

$mail->SMTPDebug  = 2;
$mail->SMTPAuth = true;
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;

$mail->Host = 'smtp.meta.ua';
$mail->Username = 'urgr8hater@meta.ua';
$mail->Password = 'yourgreathater412';

$mail->IsHTML(true);
$mail->addAddress('info@gasservice.net.ua');
$mail->setFrom('urgr8hater@meta.ua');
$mail->Subject = 'Application from the site';
$mail->Body = 'ФИО: ' .$fio. '<br>Тема: ' .$subject. '<br>Email : ' .$email. '<br>Message: ' .$message;

if(!$mail->Send()) {
    var_dump($mail);
} else {
    header('Location: thank-you.html');
}

?>