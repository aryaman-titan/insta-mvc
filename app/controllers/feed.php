<?php

namespace Controller;

class Feed {

    public function get(){
        
            $id = 6;
            echo \View\Loader::make()->render("templates/feed.twig", array(
                "credential" => \Model\GetCred::get_cred($id)
            ));
        
    }
}