<label >E-mail:</label><br>
        <input type="text" name="email"> <br>
        <span class="error">* 
        <?php echo $emailError; ?>
        </span> <br>
        <label >Password:</label><br>
        <input type="password" name="password"> <br>
    
        Welcom <?php echo $_POST["lastname"]; ?>
        Your email address is: <?php echo $_POST["email"]; ?>