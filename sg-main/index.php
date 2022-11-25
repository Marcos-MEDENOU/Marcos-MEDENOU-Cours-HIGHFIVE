<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulaire de commande</title>
    <style>
        body{
            background-color: rgb(37, 21, 36);
            color:white;
            text-Align:center
        }
        input{
            width:250px;
            height:30px;
            margin-top:10px;
            margin-bottom:15px;
        }
        .error{
            color:red;
            height:6px
        }
        form{
            text-Align:center
        }
        h1{
            text-Align:center;
        }
        button{
            margin-top:10px;
            height:30px;
            width:60px;
            text-Align:center;
        }
    </style>
</head>
<body>
    <?php 
        $firstnameError=$lastnameError=$emailError=null;
        $firstname=$lastname=$email=null;
        if($_SERVER["REQUEST_METHOD"] =="POST"){
            if(empty($_POST["firstname"])){
                $firstnameError="Firstname is required";
            } else {
                $firstname = $_POST["firstname"];
            }

            if(empty($_POST["lastname"])){
                $lastnameError="Lastname is required";
            }else {
                $lastname = $_POST["lastname"];
            }

            if(empty($_POST["email"])){
                $emailError="email is required";
            }else {
                $email = $_POST["email"];
            }
            // if(empty($_POST["email"])){
            //     $emailError="email is required";
            // }else{
            //     $emailError=$_POST["email"];
            // }
        }

    ?>
    <h1>Exemple de validation de formulaire avec PHP</h1>
    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post">
        <p><span class="error"> *champ obligatoire</span></p>
        FirstName: <input type="text" name="firstname" value="<?php echo $firstname;?>" placeholder="Enter your fistname"> <br>
        <span class="error">* <?php echo $firstnameError; ?> </span> <br>
        LastName :<input type="text" name="lastname"  value="<?php echo $lastname;?>" placeholder="Enter your fistname"> <br>
        <span class="error">* <?php echo $lastnameError;  ?></span> <br>
        E-mail:<input type="text" name="email"  value="<?php echo $email;?>" placeholder="Enter your email"> <br>
        <span class="error">*  <?php echo $emailError; ?> </span> <br>
        Password:<input type="password" name="password"> <br>
    
        Welcom <?php echo $_POST["lastname"]; ?>
        Your email address is: <?php echo $_POST["email"]; ?>
        <button type="submit" name="submit" value="Submit">button</button><br> 
    </form>
    
</body>
</html>
