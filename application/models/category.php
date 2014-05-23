<?php

class Category extends DataMapper{
    var $has_many = array('subcategory');
    var $validation = array(
        'name' => array(
            'label' => 'Name',
            'rules' => array('required', 'trim', 'unique', 'alpha_dash', 'min_length' => 3, 'max_length' => 20),
        )
    );
   
}

?>
