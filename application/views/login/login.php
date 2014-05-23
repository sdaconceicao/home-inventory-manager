<div class="grid_6 prefix_3 suffix_3">
<?php echo form_open("login/login_user"); ?>
<ul>
    <li>
        <label>Username</label>
        <?php echo form_input("username"); ?>
    </li>
    <li>
        <label>Password</label>
        <?php echo form_password("password"); ?>
    </li> 
    <li>
        <?php echo form_submit("submit", "Login"); ?>
        <?php echo anchor("site/join", "Create Account"); ?>
    </li>
</ul>
<?php echo form_close(); ?>
 
</div>