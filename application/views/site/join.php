<h1>Create an account</h1>
<div class="grid_6 prefix_3 suffix_3">
    <?php echo form_open("site/new_user"); ?>
    <ul>
        <li>
            <label>First Name</label>
            <input name="firstName" value="<?php echo $u->firstName ?>" />  
        </li>
        <li>
            <label>Last Name</label>
            <input name="lastName" value="<?php echo $u->lastName ?>" />  
        </li>
        <li>
            <label>Email</label>
           <input name="email" value="<?php echo $u->email ?>" />  
        </li>
        <li>
            <label>Username</label>
            <input name="username" value="<?php echo $u->username ?>" />  
        </li>
        <li>
            <label>Password</label>
            <input name="password" type="password" value="<?php echo $u->password ?>" />  
        </li>
        <li>
            <label>Confirm Your Password</label>
            <input name="password_confirm" type="password" value="<?php echo $u->password_confirm ?>" />  
        </li>
        <li>
            <?php echo form_submit("submit", "Create Your Account"); ?>
        </li>
    </ul>
    <?php echo form_close(); ?>
</div>