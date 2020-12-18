<!-- 
    Reference: 
    below code was taken from 
    Date: 18/12/2020
    Site: https://www.techiediaries.com/php-react-rest-api-crud-tutorial/
 -->


<?php 

$host = "localhost"; 
$user = "root"; 
$password = "DATABASE PASSWORD"; 
$dbname = "Exam"; 
$id = '';

$con = mysqli_connect($host, $user, $password,$dbname);

$method = $_SERVER['REQUEST_METHOD'];
$request = explode('/', trim($_SERVER['PATH_INFO'],'/'));

if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}

switch ($method) {
    case 'GET':
      $sql = "select * from User"; 
      break;
}

// run SQL statement
$result = mysqli_query($con,$sql);

// die if SQL statement failed
if (!$result) {
    http_response_code(404);
    die(mysqli_error($con));
}



?>