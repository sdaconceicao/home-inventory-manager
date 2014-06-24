<?php



class Item extends DataMapper {



    var $has_one = array("inventory", "subcategory");

    var $auto_populate_has_one = TRUE;



    function __construct($id = NULL) {

        parent::__construct($id);

    }



    var $validation = array(

        'name' => array(

            'label' => 'Name',

            'rules' => array('required', 'trim', 'alpha_dash', 'min_length' => 1, 'max_length' => 20),

        ),

        'inventory_id' => array(

            'label' => 'Inventory',

            'rules' => array('required', 'trim', 'alpha_dash', 'min_length' => 1, 'max_length' => 20),

        ),

        'subcategory_id' => array(

            'label' => 'Subcategory',

            'rules' => array('trim'),

        ),

        'maker' => array(

            'label' => 'Maker',

            'rules' => array('trim', 'alpha_dash', 'min_length' => 1, 'max_length' => 50),

        ),

        'modelNumber' => array(

            'label' => 'Model Number',

            'rules' => array('trim', 'alpha_dash', 'min_length' => 1, 'max_length' => 20),

        ),

        'value' => array(

            'label' => 'Maker',

            'rules' => array('trim', 'alpha_dash', 'min_length' => 1, 'max_length' => 20),

        ),

        'purchase' => array(

            'label' => 'Date Purchased',

            'rules' => array('trim', 'valid_date', 'min_length' => 1, 'max_length' => 20),

        ),

        'notes' => array(

            'label' => 'Notes',

            'rules' => array('trim', 'alpha_dash', 'min_length' => 1, 'max_length' => 255),

        ),

    );



}