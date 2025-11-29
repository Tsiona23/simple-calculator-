 <?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $expression = $_POST["expression"] ?? "";

    // SAME safety: allow only numbers, operators
    if (!preg_match("/^[0-9+\-.*\/()%^eEpi ]+$/", $expression)) {
        die("Invalid Expression");
    }

    $expression = str_replace("^", "**", $expression);

    try {
        eval("\$result = $expression;");
        echo "Result: " . $result;
    } catch (Throwable $e) {
        echo "Error";
    }
}
?>
