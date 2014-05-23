<?php

class Inventory extends DataMapper {
    var $has_one = array("user");
    var $auto_populate_has_one = TRUE;  
    function __construct($id = NULL) {
        parent::__construct($id);
    }
    
    var $validation = array(
        'name' => array(
            'label' => 'Name',
            'rules' => array('required', 'trim',  'min_length' => 1, 'max_length' => 20),
        ),
        'user_id' => array(
            'label' => 'User ID',
            'rules' => array('required', 'trim', 'alpha_dash', 'min_length' => 1, 'max_length' => 20),
        )
    );


}

?>
