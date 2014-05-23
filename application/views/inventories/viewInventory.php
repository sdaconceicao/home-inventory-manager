<h1><?php echo $inventory->name;?></h1>
<div class="grid_6 prefix_3 suffix_3">

    <ul>
      <?php foreach ($items as $entry) {?>
          <li>
               <?php echo anchor("inventories/get_edit_item/".$entry->id, $entry->name) ?>

          </li>
      <?php } ?>
    </ul>

    <?php echo anchor("inventories/get_add_item", "Create New Item") ?>
</div>