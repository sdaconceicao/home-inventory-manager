<?php

class Site extends CI_Controller {

    function index() {
        $data['main_content'] = "site/index";
        $data['title'] = "Welcome to My Inventory Manager";
        $data['is_logged_in'] = $this->session->userdata("is_logged_in");
        $this->load->view("templates/template", $data);
    }

    public function view($page = 'home') {
        if (!file_exists('application/views/site/' . $page . '.php')) {
            show_404();
        }

        $data['title'] = ucfirst($page); // Capitalize the first letter
        $data['is_logged_in'] = $this->session->userdata("is_logged_in");
        if ($data['is_logged_in']) {
            $data['username'] = $this->session->userdata["username"];
        }
        $this->load->view('templates/header', $data);
        $this->load->view('site/' . $page, $data);

        $this->load->view('templates/footer', $data);
    }

    function join($data = null) {
        if (!isset($data)){
            $u = new User();
            $data['u'] =  $u; 
        }
        $data['title'] = "Create an Account";
        $data['main_content'] = "site/join";
        $this->load->view("templates/template", $data);
    }

    function new_user() {
        $u = new User();
        $u->firstName = $this->input->post('firstName');
        $u->lastName = $this->input->post('lastName');
        $u->email = $this->input->post('email');
        $u->username = $this->input->post('username');
        $u->password = $this->input->post('password');
        $u->password_confirm = $this->input->post('password_confirm');
        $data['u'] =  $u; 
        if ($u->save()) {
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
           $this->join($data);
        }
    }

}
