<h1>Dashboard</h1> 

<ul class="dashboard-module">

    <?php foreach ($inventories as $entry) {?>

        <li>

            <a class="fa fa-search fa-5x" href="inventories/view_inventory/<?php echo $entry->id; ?>"><span><?php echo $entry->name; ?></span></a>

        </li>

    <?php } ?>
    <li><?php echo anchor("inventories/get_add_inventory", "<span>Add New Inventory</span>", "class='fa fa-plus fa-5x'") ?></li>
</ul>



