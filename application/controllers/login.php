<?php

class Login extends CI_Controller {

    function index() {
        $data['main_content'] = "login/login";
        $data['title'] = "Login";
        $this->load->view("templates/template", $data);
    }

    function login_user() {
        $u = new User();
        $u->username = $this->input->post('username');
        $u->password = $this->input->post('password');


        if ($u->login()) {
            $data = array(
                'username' => $u->username,
                'firstName' => $u->firstName,
                'user_id' => $u->id,
                'is_logged_in' => true
            );
            $this->session->set_userdata($data);
            redirect("users");
        } else {
            $errors = "";
            foreach ($u->error->all as $e) {
                $errors .= $e;
            }
            $data["errors"] = $errors;
            $data['main_content'] = "login/login";
            $data['title'] = "Login";
            $this->load->view("templates/template", $data);
        }
    }

}

?>
