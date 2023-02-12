<?php
// Variables
$firstName = "Ramil";
$age = 31;
$bool = true;

// Displaying or Printing
define('GREETINGS', "Hello Everyone!");
$firstName = "Something Else";
echo "<br>";
echo GREETINGS;
echo "<br>";
echo $firstName;
echo "<br>";

// Operators
// +,-,*,/,%,**
echo 1*3;
echo "<br>";
echo 3**3;
echo "<br>";

$array = ['one', 'two', 'three'];
$array2 = array('four', 'five', 'six');

print_r($array);
echo "<br>";
print_r($array2);
echo "<br>";

// Functions
function displayMessage($message) {
    return "Message: $message";
}

echo displayMessage("This is a sample message");

// Conditions
$number = 10;
$condition = 100;

if($number === "5") {
    echo "True";
}else{
    echo "False";
}

// Ternary - shorthand version of if
echo $number ? 'True' : 'False';
echo "<br><br>";



// Switch
switch($condition) {
    case 1:
        echo "One <br>";
        break;
    case 2:
        echo "Two <br>";
        break;
    default:
        echo "None <br>";
}


// Loops
// While
$count = 6;
// while($count <=5) {
//     echo $count;
//     $count ++;

// }
// echo "<br>"; 
// // Do While
// do {
//     echo $count;
//     $count ++;
// } while($count <=5);

// echo $count;


// For Loop
// for($i = 1; $i <= 10; $i++) {
//     echo $1;
// }

// For Each
$array = ['One', 'Two', 'Three', 'Four', 'Five'];

foreach($array as $index => $arr) {
    echo "Index: $index Value: $arr <br>";
}





?>

