
<?php 
 if (!isset($is_logged_in)){
     $data['is_logged_in'] = false;
 } else {
     $data['is_logged_in'] = $is_logged_in;
 }

 $this->load->view("templates/header", $data);  
 $this->load->view($main_content);  
 $this->load->view("templates/footer");  
?>     
       
