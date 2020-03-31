<?php

require __DIR__."/../vendor/autoload.php";

Toro::serve(array(
    "/" => "\Controller\Home",
    "/signup" => "\Controller\Signup",
    "/login" => "\Controller\Login",
    "/feed" => "\Controller\Feed",
    "/logout" => "\Controller\Logout"
)); 
