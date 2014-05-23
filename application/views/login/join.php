<?php

?>
Create an account
<?php 
 echo form_open("login/join"); 
 echo form_input("firstName", set_value("firstName", "First Name")); 
 echo form_input("lastName", set_value("lastName", "Last Name")); 
 echo form_input("username", set_value("username", "Username")); 
 echo form_input("email", set_value("email", "Email")); 
 echo form_password("password", set_value("password", "Password")); 
 echo form_password("password2", set_value("password2", "Password Confirm")); 
 echo form_submit("submit", "Create Your Account"); 
 echo validation_errors("<p class='error'>");
 echo form_close(); 
 ?>