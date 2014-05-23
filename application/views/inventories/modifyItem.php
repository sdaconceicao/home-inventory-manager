<h1>Edit Item</h1>
<div class="grid_6 prefix_3 suffix_3">
    <?php echo form_open("inventories/set_add_item"); ?>
    <input type="hidden" name="id" value="<?php echo $i->id ?>"/>
    <ul>
        <li>
            <label>Name</label>
            <input name="name" value="<?php echo $i->name ?>" />  
        </li>
        <li>
            <label>Maker</label>
            <input name="maker" value="<?php echo $i->maker ?>" />  
        </li>
        <li>
            <label>Model Number</label>
            <input name="modelNumber" value="<?php echo $i->modelNumber ?>" />  
        </li>
        <li>
            <label>Value</label>
            <input name="value" value="<?php echo $i->value ?>" />  
        </li>
        <li>    
            <label>Category</label>
            <select name="subcategory_id">
                <option value="" disabled="disabled">Choose a Category</option>
                <?php
                foreach ($subcategories as $subcategory)
                {
                    echo '<option value="'.$subcategory->id.'"';
                    if ($subcategory->id==$i->subcategory_id) echo ' selected="selected"';
                    echo '>'.$subcategory->name.'</option>';
                }
                ?>
                </select>
        </li>
        <li>
            <label>Purchase Date</label>
            <input name="purchase" value="<?php echo $i->purchase ?>" class="date" />  
        </li>
        <li>
            <label>Notes</label>
            <input name="notes" value="<?php echo $i->notes ?>" />  
        </li>
        <li>
            <?php echo form_submit("submit", "Save"); ?>
            <a href="view_inventory/<?php echo $i->inventory_id?>">cancel</a>
        </li>
    </ul>
    <?php echo form_close(); ?>
</div>
