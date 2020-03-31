/**
 * Variables
 */
const signupButton = document.getElementById("signup-button"),
  loginButton = document.getElementById("login-button"),
  userForms = document.getElementById("user_options-forms");

/**
 * Add event listener to the "Sign Up" button
 */
signupButton.addEventListener(
  "click",
  () => {
    userForms.classList.remove("bounceRight");
    userForms.classList.add("bounceLeft");
  },
  false
);

/**
 * Add event listener to the "Login" button
 */
loginButton.addEventListener(
  "click",
  () => {
    userForms.classList.remove("bounceLeft");
    userForms.classList.add("bounceRight");
  },
  false
);

$(document).ready(function() {
  console.log("Hello world!");
});

function ejax() {
  $.ajax({
    type: "GET",
    url: "/",
    complete: function() {
      alert("Aryaman!");
      console.log(2 + 3 + 6);
    }
  });
}

$("#signup-form").submit(function(e) {
  e.preventDefault();

  var uname = $("#username").val();
  var email = $("#email").val();
  var password = $("#password").val();

  var data = {
    username: uname,
    email: email,
    password: password
  };

  console.log(data);

  $.ajax({
    type: "POST",
    url: "/login",
    data: data,
    complete: function (res) {
      alert(res.responseText);
      document.location.replace('/feed');
    }
  });

});


$("#signup-form").submit(function(e) {
  e.preventDefault();

  var uname = $("#username").val();
  var email = $("#email").val();
  var password = $("#password").val();

  var data = {
    username: uname,
    email: email,
    password: password
  };

  console.log(data);

  $.ajax({
    type: "POST",
    url: "/login",
    data: data,
    complete: function (res) {
      alert(res.responseText);
      document.location.replace('/feed');
    }
  });

});

$("#signup-form").submit(function(e) {
  e.preventDefault();

  var uname = $("#reg_username").val();
  var email = $("#reg_email").val();
  var password = $("#reg_password").val();

  var data = {
    username: uname,
    email: email,
    password: password
  };

  console.log(data);

  $.ajax({
    type: "POST",
    url: "/signup",
    data: data,
    complete: function (res) {
      alert(res.responseText);
      document.location.replace('/feed');
    }
  });

});

$("#login-form").submit(function(e) {
  e.preventDefault();

  
  var email = $("#email").val();
  var password = $("#password").val();

  var data = {
    email: email,
    password: password
  };

  console.log(data);

  $.ajax({
    type: "POST",
    url: "/login",
    data: data,
    complete: function (res) {
      alert(res.responseText);
      if(res.responseText == "1"){
        document.location.replace('/feed');
      }
    }
  });

});
