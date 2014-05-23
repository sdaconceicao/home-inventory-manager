<?php

class MY_Controller extends CI_Controller {

    var $data;

    function __construct() {
        parent::__construct();
        $this->success();
        $this->is_logged_in();
    }

    function is_logged_in() {
        $is_logged_in = $this->session->userdata("is_logged_in");
        if (!isset($is_logged_in) || $is_logged_in != true) {
            $this->data["is_logged_in"] = false;
            redirect('/login');
        } else {
            $this->data['username'] = $this->session->userdata["username"];
            $this->data["is_logged_in"] = true;
        }
    }

    function success() {
        $success = $this->session->userdata("success");
        if (!isset($success) || $success != '') {
            $this->data["success"] = $success;
        }
        $data = array(
            'success' => null
        );
        $this->session->set_userdata($data);
    }

}

?>
