<?php
// File: submit_form.php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve data sent from the form
    $data = json_decode(file_get_contents("php://input"), true);
    
    // Define the file name
    $fileName = 'submissions.csv';

    // Check if the file exists to add headers accordingly
    $fileExists = file_exists($fileName);

    // Open the file in append mode
    $file = fopen($fileName, 'a');

    // If file doesn't exist, add the headers
    if (!$fileExists) {
        fputcsv($file, ['First Name', 'Last Name', 'Email', 'Message']);
    }

    // Write the data to the file
    fputcsv($file, [
        $data['firstName'],
        $data['lastName'],
        $data['email'],
        $data['message']
    ]);

    // Close the file
    fclose($file);

    echo json_encode(["message" => "Form submitted successfully"]);
}
?>
