<?php

class User extends DataMapper {

    var $has_many = array("inventory");
    var $auto_populate_has_many = TRUE;
    
    var $validation = array(
        'firstName' => array(
            'label' => 'First Name',
            'rules' => array('required', 'trim', 'min_length' => 3, 'max_length' => 20),
        ),
        'lastName' => array(
            'label' => 'Last Name',
            'rules' => array('required', 'trim', 'min_length' => 3, 'max_length' => 20),
        ),
        'username' => array(
            'label' => 'Username',
            'rules' => array('required', 'trim', 'unique', 'alpha_dash', 'min_length' => 3, 'max_length' => 20),
        ),
        'password' => array(
            'label' => 'Password',
            'rules' => array('required', 'min_length' => 2, 'encrypt'),
        ),
        'password_confirm' => array(
            'label' => 'Confirm Password',
            'rules' => array('required', 'encrypt', 'matches' => 'password'),
        ),
        'email' => array(
            'label' => 'Email Address',
            'rules' => array('required', 'trim', 'valid_email')
        )
    );

    function login() {
        $u = new User();
        $u->where('username', $this->username)->get();
        $this->validate()->get();
        if (empty($this->id)) {
            $this->error_message('login', 'Username or password invalid');
            return FALSE;
        } else {
            return TRUE;
        }
    }

    function _encrypt($field) {
        // Don't encrypt an empty string
        if (!empty($this->{$field})) {
            // Generate a random salt if empty
            if (empty($this->salt)) {
                $this->salt = md5(uniqid(rand(), true));
            }

            $this->{$field} = md5($this->{$field});
        }
    }

}