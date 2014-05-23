<?php

class Inventories extends MY_Controller {

    function view_inventory($id) {

        $inventory = new Inventory();
        $inventory->where("id", $id)->get();
        if ($inventory->user_id == $this->session->userdata['user_id']) {
            $session_data = array('inventory_id' => $id);
            $this->session->set_userdata($session_data);
            $this->data["main_content"] = "inventories/viewInventory";
            $items = new Item();
            $items->where('inventory_id', $id)->get();
            $this->data["items"] = $items;
            $this->data["inventory"] = $inventory;
            $this->data["title"] = $inventory->name;
            $this->load->view("templates/template", $this->data);
        } else {
            $this->data["main_content"] = "site/permissionDenied";
            $this->load->view("templates/template", $this->data);
        }
    }

    function get_add_inventory($data = null) {
        if (!isset($data)) {
            $i = new Inventory();
            $data['i'] = $i;
        }
        $this->data = $data;
        $this->data['i'] = $i;
        $this->data["main_content"] = "inventories/addInventory";
        $this->load->view("templates/template", $this->data);
    }

    function set_add_inventory() {
        $i = new Inventory();
        $i->user_id = $this->session->userdata['user_id'];
        $i->name = $this->input->post('name');
        $this->data['i'] = $i;
        if ($i->save()) {
            $data = array(
                'inventory_id' => $i->id,
                'success' => "Inventory created"
            );
            $this->session->set_userdata($data);
            
            redirect("inventories/view_inventory/" . $i->id);
        } else {
            $errors = "";
            foreach ($i->error->all as $e) {
                $errors .= $e;
            }
            $this->data["errors"] = $errors;
            $this->get_add_inventory($this->data);
        }
    }

    function get_add_item($data = null) {
        if (!isset($data)) {
            $i = new Item();
            $i->inventory_id = $this->session->userdata['inventory_id'];
            $data['i'] = $i;
        }
        $this->data = $data;
        $s = new Subcategory();
        $this->data['subcategories'] = $s->where('user_id', $this->session->userdata['user_id'])->get();
        $this->data["main_content"] = "inventories/modifyItem";
        $this->load->view("templates/template", $this->data);
    }

    function set_add_item() {
        $i = new Item();
        $i->where("id", $this->input->post('id'))->get();
        $i->inventory_id = $this->session->userdata['inventory_id'];
        $i->subcategory_id = $this->input->post('subcategory_id');
        $i->name = $this->input->post('name');
        $i->maker = $this->input->post('maker');
        $i->modelNumber = $this->input->post('modelNumber');
        $i->value = $this->input->post('value');
        $i->purchase = $this->input->post('purchase');
        $i->notes = $this->input->post('notes');
        $this->data['i'] = $i;
        if ($i->save()) {
            $data = array(
                'success' => "Item created"
            );
            $this->session->set_userdata($data);
            redirect("inventories/view_inventory/" . $i->inventory_id);
        } else {
            $errors = "";
            foreach ($i->error->all as $e) {
                $errors .= $e;
            }
            $this->data["errors"] = $errors;
            $this->get_add_item($this->data);
        }
    }
    function get_edit_item ($id){
        $i = new Item();
        $i->where("id", $id)->get();
        $this->data['i'] = $i;
        $this->get_add_item($this->data);
    }
}

?>
