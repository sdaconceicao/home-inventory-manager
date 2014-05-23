<h1>Create New Inventory</h1>
<div class="grid_6 prefix_3 suffix_3">
    <?php echo form_open("inventories/set_add_inventory"); ?>
    <ul>
        <li>
            <label>Name</label>
            <input name="name" value="<?php echo $i->name ?>" />  
        </li>
        <li>
            <?php echo form_submit("submit", "Create"); ?>
        </li>
    </ul>
    <?php echo form_close(); ?>
</div>