<?php

class Subcategory extends DataMapper {

    var $has_one = array('category');
    var $auto_populate_has_one = TRUE;  
    var $validation = array(
        'name' => array(
            'label' => 'Name',
            'rules' => array('required', 'trim', 'unique', 'alpha_dash', 'min_length' => 3, 'max_length' => 20),
        ),
        'user_id' =>array(
             'label' => 'User Id',
            'rules' => array('required', 'trim' ),
        )
    );
    
    

}

?>
