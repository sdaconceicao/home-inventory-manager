<html>

<head>

	<title><?php if (isSet($title)) echo $title." - "?>My Inventory Manager</title>
    <link rel="stylesheet" href="<?php echo base_url();?>css/normalize.css" type="text/css" media="screen"/>
    <link rel="stylesheet" href="<?php echo base_url();?>css/jquery-ui-1.10.0.custom.min.css" type="text/css" media="screen"/>
    <link rel="stylesheet" href="<?php echo base_url();?>css/960_12_col.css" type="text/css" media="screen"/>
    <link rel="stylesheet" href="<?php echo base_url();?>css/font-awesome.min.css" type="text/css" media="screen"/>
    <link rel="stylesheet" href="<?php echo base_url();?>css/main.css" type="text/css" media="screen"/>
    <link rel="stylesheet" href="<?php echo base_url();?>css/colorbox.css" type="text/css" media="screen"/>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic' rel='stylesheet' type='text/css'>
</head>

<body>

    <header>
       <a href="<?php if ($is_logged_in){ echo base_url()."users"; } else {echo base_url()."site";}?>">
           <span id="logo">My Inventory Manager</span>
       </a>
       <nav class="clearfix">
            <ul>

                <?php if ($is_logged_in){ ?>

                <li>Welcome <?php echo $username; ?> -</li>
                <li><?php echo anchor("users/logout", " ", 'class="fa fa-key"'); ?></li>

                <li><?php echo anchor("users/profile", " ", 'class="fa fa-cog"'); ?></li>

                <?php }else{ ?>

                <li ><?php echo anchor("login/", " ", 'class="fa fa-sign-in"'); ?></li>

                <?php } ?>

                <li><?php echo anchor("site/view/about", " ", 'class="fa fa-info"'); ?></li>

            </ul>	

       </nav>

    </header>
    <?php if ($is_logged_in){ ?>
    <nav id="main-navigation">
        <ul class="sidebar-menu">
            <?php foreach ($inventories as $entry) {?>

                <li class="sub-menu">
                    <a href="#"><?php echo $entry->name; ?></a>
                    <ul class="sub">
                        <li> <a href="inventories/view_inventory/<?php echo $entry->id; ?>">View Items</a></li>
                        <li><?php echo anchor("inventories/get_add_item", "Create New Item") ?></li>
                    </ul>
                </li>

            <?php } ?>

            
            <li><?php echo anchor("inventories/add_inventory", "Add Inventory") ?></li>
        </ul>
    </nav>
    <?php } ?>
    <main id="main" role="main"> 

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



      

    

	