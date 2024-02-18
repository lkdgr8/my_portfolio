<?php
    // Only process POST reqeusts. 
    include 'connection.php'; 
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        // Get the form fields and remove whitespace.
        $name = strip_tags(trim($_POST['name']));
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $number = trim($_POST["number"]);
        $location = trim($_POST["subject"]);
        $message = trim($_POST["message"]);

        // Check that data was sent to the mailer.
        if ( empty($name) OR empty($number) OR empty($location) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "Please complete the form and try again.";
            exit;
        }
        $sql = "INSERT INTO 5wn_leads (name, email, phone, subject, message)
        VALUES ('$name', '$email', '$number', '$location', '$message' )";
        
        if ($conn->query($sql) === TRUE) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
        
        $conn->close();
        // Set the recipient email address.
        // FIXME: Update this to your desired email address.
        $recipient = "connect@eterneclinic.com, mesinghsantosh78@gmail.com, latesh891993@gmail.com, futureverseseraphyq@gmail.com";

        // Set the email subject.
        $subject = "5WN Contact Form Enquiry";

        // Build the email content.
        $email_content = "Name: $name\n";
        $email_content .= "Subject: $subject\n";
        $email_content .= "Number: $number\n";
        $email_content .= "Email: $email\n\n";
        
        $email_headers = "From: $name <$email>";

        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            http_response_code(200);
            $email_success = "Sending Your data, please wait!.";
            // header('Location: thankyou.php');
            // echo $email_success;
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            $email_fail = "Oops! Something went wrong and we couldn't send your message.";
            echo $email_fail;
        }
    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        $email_deny = 'There was a problem with your submission, please try again.';
        echo $email_deny;
    }
?>
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script>
  $(document).ready(function(){
  setTimeout(function(){
     window.location="../index.html";
  },3000);
})
</script>


