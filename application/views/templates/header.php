<html>
<head>
	<title><?php if (isSet($title)) echo $title." - "?>My Inventory Manager</title>
        <script type="text/javascript" src="<?php echo base_url()?>js/vendor/jquery-1.9.0.min.js"></script>
        <script type="text/javascript" src="<?php echo base_url()?>js/vendor/jquery.ui.core.min.js"></script>
        <script type="text/javascript" src="<?php echo base_url()?>js/vendor/jquery.ui.datepicker.min.js"></script>
        <script type="text/javascript" src="<?php echo base_url()?>js/vendor/jquery.colorbox-min.js"></script>
        <script type="text/javascript" src="<?php echo base_url()?>js/vendor/modernizr-2.6.2.min.js"></script>
        <script type="text/javascript" src="<?php echo base_url()?>js/main.js"></script>
        <link rel="stylesheet" href="<?php echo base_url();?>css/normalize.css" type="text/css" media="screen"/>
        <link rel="stylesheet" href="<?php echo base_url();?>css/jquery-ui-1.10.0.custom.min.css" type="text/css" media="screen"/>
        <link rel="stylesheet" href="<?php echo base_url();?>css/960_12_col.css" type="text/css" media="screen"/>
        <link rel="stylesheet" href="<?php echo base_url();?>css/main.css" type="text/css" media="screen"/>
        <link rel="stylesheet" href="<?php echo base_url();?>css/colorbox.css" type="text/css" media="screen"/>
</head>
<body>
    <header>
       <a href="<?php if ($is_logged_in){ echo base_url()."users"; } else {echo base_url()."site";}?>">
           <span id="logo">My Inventory Manager</span>
       </a>
       <nav class="clearfix">
           
            <ul>
                <?php if ($is_logged_in){ ?>
                <li>Welcome <?php echo $username; ?> - <?php echo anchor("users/logout", "Logout"); ?></li>
                <li><?php echo anchor("users/profile", "Edit Profile"); ?></li>
                <?php }else{ ?>
                <li><?php echo anchor("login/", "Sign In"); ?></li>
                <?php } ?>
                <li><?php echo anchor("site/view/about", "About"); ?></li>
            </ul>	
       </nav>
    </header>
    <div id="main" class="container_12" role="main"> 
        <?php if (isset($success)){ ?>
            <ul class="message success">
                <?php echo $success; ?>
            </ul>
        <?php } ?>
        <?php if (isset($errors)){ ?>
            <ul class="message error">
                <?php echo $errors; ?>
            </ul>
        <?php } ?>

      
    
	