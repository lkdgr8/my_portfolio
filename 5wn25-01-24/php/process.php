<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require 'vendor/autoload.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer();

try {
    //Server settings
    //$mail->SMTPDebug = 1;                                       // Enable verbose debug output
    $mail->isSMTP();                                            // Set mailer to use SMTP
    $mail->Host       = 'smtp.mail.gmail.com';  			// Specify main and backup SMTP servers
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'seraphyq.marketing@gmail.com';                     // SMTP username 
    $mail->Password   = 'Seraphyq@2023';                               // SMTP password
    $mail->SMTPSecure = 'tls';                                  // Enable TLS encryption, `ssl` also accepted
    $mail->Port       = 465;                                    // TCP port to connect to
    // $mail->SMTPOptions = array(
    //     'ssl' => array(
    //         'verify_peer' => false,
    //         'verify_peer_name' => false,
    //         'allow_self_signed' => true
    //     )
    // );

    //Recipients
    $mail->setFrom('san86vk@gmail.com');
    $mail->addAddress('mesinghsantosh78@gmail.com, lateshkakrai825@gmail.com');     // Add a recipient
    $mail->addReplyTo($_REQUEST['email'], $_REQUEST['name']);

    // Content
    $mail->isHTML(true);
    $mail->Subject = $_REQUEST['subject'];

    $fields = array();
    $fields{"name"} = "Name";
    $fields{"email"} = "E-mail";
    $fields{"subject"} = "Subject";
    $fields{"message"} = "Message";

    $body = "Here is the message from yourwebsite:\n\n"; foreach($fields as $a => $b){   $body .= sprintf("%20s: %s\n",$b,$_REQUEST[$a]); }

    $mail->Body    = $body;
    $mail->AltBody = $body;

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
