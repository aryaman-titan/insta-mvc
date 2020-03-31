<?php

namespace Model;

class Signup{
    public static function reg_user($uname, $email, $password){
        $db = \DB::get_instance();
        $stmt = $db->prepare("INSERT INTO `userData` (`id`, `username`, `email`, `password`) VALUES (NULL, ?, ?, ?)");
        if($stmt->execute([$uname, $email, $password])){
            echo "Welcome ".$uname;
        }
    }
}

class Login{
    public static function log_user($email, $password){
        session_start();
        $db = \DB::get_instance();
        $stmt = $db->prepare("SELECT * from userData where email = (?) LIMIT 1");
        $stmt->execute([$email]);
        $data = $stmt->fetchAll();
        if($data[0]["password"] === $password){
            echo "1";
            $_SESSION["id"] = $data[0]['id'];
        }
    }
} 

class GetCred{
    public static function get_cred($id){
        $db = \DB::get_instance();
        $stmt = $db->prepare("SELECT * from userData where id = ? LIMIT 1");
        $stmt->execute([$id]);
        $data = $stmt->fetchAll();
        return $data[0];
    }
}