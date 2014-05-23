Dashboard
<ul>
    <?php foreach ($inventories as $entry) {?>
        <li>
            <a href="inventories/view_inventory/<?php echo $entry->id; ?>"><?php echo $entry->name; ?></a>
        </li>
    <?php } ?>
</ul>
<?php echo anchor("inventories/get_add_inventory", "Create New Inventory") ?>
