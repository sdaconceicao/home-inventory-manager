<?php

class User extends MY_Controller {
    
    function index() {
        $this->data['title'] = "My Dashboard";
        $this->data['main_content'] = "user/dashboard";     
        $this->load->view("templates/template", $this->data);
    }

    function profile() {
        $this->data['title'] = "My Profile";
        $this->data['main_content'] = "user/profile";
        $this->load->view("templates/template", $this->data);
    }

    function logout() {
        $data = array(
            'username' => null,
            'is_logged_in' => false
        );
        $this->session->set_userdata($data);
        redirect("login");
    }
    
    
}

?>
