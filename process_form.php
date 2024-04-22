<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    // Add your processing logic here, such as sending an email or saving to a database
    // For demonstration purposes, we'll simply display the submitted data
    
    echo "<h1>Form Submitted Successfully</h1>";
    echo "<p>Name: $name</p>";
    echo "<p>Email: $email</p>";
    echo "<p>Message: $message</p>";
} else {
    // If the form is not submitted via POST method, redirect back to the form page
    header("Location: index.html");
    exit();
}
?>
