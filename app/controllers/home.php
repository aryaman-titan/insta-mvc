<?php

namespace Controller;

class Home{
    public function get(){
        echo \View\Loader::make()->render("templates/home.twig");
    }

    public function get_xhr(){
        echo "Hello Aryaman! krliya be tu :-)";
    }
}