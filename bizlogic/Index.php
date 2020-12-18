<!-- below code was taken from 
    https://www.techiediaries.com/php-react-rest-api-crud-tutorial/
 -->


<?php 

$host = "localhost"; 
$user = "root"; 
$password = "trinitymiyuru"; 
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
    // case 'POST':
    //   $name = $_POST["name"];
    //   $email = $_POST["email"];
    //   $country = $_POST["country"];
    //   $city = $_POST["city"];
    //   $job = $_POST["job"];

    //   $sql = "insert into contacts (name, email, city, country, job) values ('$name', '$email', '$city', '$country', '$job')"; 
    //   break;
}

// run SQL statement
$result = mysqli_query($con,$sql);

// die if SQL statement failed
if (!$result) {
    http_response_code(404);
    die(mysqli_error($con));
}



?>