function validateForm() {
    let fname = document.forms["myForm"]["fname"].value;
    let lname = document.forms["myForm"]["lname"].value;
    let email = document.forms["myForm"]["email"].value;
    let text = document.forms["myForm"]["text"].value;

    let form = document.getElementById("myForm");

    let alertFname = document.getElementById("alert-fname");
    let alertLname = document.getElementById("alert-lname");
    let alertEmail = document.getElementById("alert-email");
    let alertText = document.getElementById("alert-text");

    alertFname.innerHTML = "";
    alertLname.innerHTML = "";
    alertEmail.innerHTML = "";
    alertText.innerHTML = "";

    document.getElementById('fname').style.border = '2px solid yellowgreen';
    document.getElementById('lname').style.border = '2px solid yellowgreen';
    document.getElementById('email').style.border = '2px solid yellowgreen';
    document.getElementById('text').style.border = '2px solid yellowgreen';

    var mailformat = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (fname == "") {
        alertFname.innerHTML = "First name Required";
        document.getElementById('fname').style.border = '2px solid red';
    }

    if (lname == "") {
        alertLname.innerHTML = "Last name Required";
        document.getElementById('lname').style.border = '2px solid red';
    }

    if (email == "" || email == null) {
        alertEmail.innerHTML = "Email Required";
        document.getElementById('email').style.border = '2px solid red';
    }

    if (email !== "" && !email.match(mailformat)) {
        alertEmail.innerHTML = "Email is invalid";
        document.getElementById('email').style.border = '2px solid red';
    }

    if (text == "") {
        alertText.innerHTML = "Message Required";
        document.getElementById('text').style.border = '2px solid red';
    }

    if (fname != "" && lname != "" && (email != "" && email.match(mailformat)) && text != "") {
        alert("Subbmited");
        return true;
    }

    else {
        return false;
    }

}

function menu() {
    let burger = document.getElementById("myTopnav");
    burger.classList.toggle("open");
}