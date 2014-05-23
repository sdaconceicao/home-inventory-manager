<h1>Create New Inventory</h1>
<div class="grid_6 prefix_3 suffix_3">
    <?php echo form_open("inventories/add_inventory"); ?>
    <ul>
        <li>
            <label>Name</label>
            <?php echo form_input("name", set_value("name", "Enter inventory name")); ?>
        </li>
        <li>
            <?php echo form_submit("submit", "Create"); ?>
        </li>
    </ul>
    <?php echo form_close(); ?>
</div>