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

class Signup{
    public function post_xhr(){
        $password = $_POST['password'];
        $uname = $_POST['username'];
        $email = $_POST['email'];
        echo \Model\Signup::reg_user($uname, $email, $password);
    }
}

class Login{
    public function post_xhr(){
        $password = $_POST['password'];
        $email = $_POST['email'];
        echo \Model\Login::log_user($email, $password);
    }
}

class Logout{
    public function get(){
        session_unset();
        echo \View\Loader::make()
    }
}