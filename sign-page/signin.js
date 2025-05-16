$(document).ready(function(){
    var user
    var getUser = localStorage.getItem('arrUser');
    var arrUser = JSON.parse(getUser);
    var txtFname = $("#fname");
    var errFname = $("#errfname");
    function kiemtraFname(){
        var pattern = /[A-Za-z]+/g
        if(txtFname.val()==""){
            errFname.html("*First name is not null");
            return false;
        }

        if(!pattern.test(txtFname.val())){
            errFname.html("*First name must be not contain numbers");
            return false;
        }
        errFname.html("(*)");
        return true;
    }
    txtFname.blur(kiemtraFname);

    var txtLname = $("#lname");
    var errLname = $("#errlname");
    function kiemtraLname(){
        var pattern =  /[A-Za-z]+/g
        if(txtLname.val()==""){
            errLname.html("*Last name is not null");
            return false;
        }

        if(!pattern.test(txtLname.val())){
            errLname.html("*Last name must be not contain numbers");
            return false;
        }
        errLname.html("(*)");
        return true;
    }
    txtLname.blur(kiemtraLname);

    var txtEmail = $("#email");
    var errEmail = $("#erremail");
    function kiemtraEmail(){
        var pattern = /.+@.+.com/g
        if(txtEmail.val()==""){
            errEmail.html("*Email is not null");
            return false;
        }

        if(!pattern.test(txtEmail.val())){
            errEmail.html("*Email is not valid");
            return false;
        }
        errEmail.html("(*)");
        return true;
    }
    txtEmail.blur(kiemtraEmail);

    var txtPass = $("#pass");
    var errPass = $("#errpass");
    function kiemtraPass(){
        var pattern = /.{8,}/g
        if(txtPass.val()==""){
            errPass.html("*Password is not null");
            return false;
        }
        if(!pattern.test(txtPass.val())){
            errPass.html("*Password must more than 8 characters");
            return false;
        } 
        errPass.html("(*)");
        return true;
    }
    txtPass.blur(kiemtraPass);

    var txtRepass = $("#repass");
    var errRepass = $("#errrepass");
    function kiemtraRepass(){
        if(txtRepass.val()==""){
            errRepass.html("*Confirm password is not null");
            return false;
        }

        if(!(txtPass.val()==txtRepass.val())){
            errRepass.html("*Confirm password is not match password");
            return false;
        }
        errRepass.html("*");
        return true;
    }
    txtRepass.blur(kiemtraRepass)
})

var user;

function chk_fname(){
    var pattern = /[a-zA-z]/g;
    if(pattern.test(document.getElementById('fname').value)==false){
        // document.getElementById('lname').style.outline = "1px solid red"
        return false;
    }
}
document.getElementById('fname').blur(chk_fname())

function chk_lname(){
   var pattern = /[a-zA-z]/g;
    if(pattern.test(document.getElementById('lname').value)==false){
        // document.getElementById('lname').style.outline = "1px solid red"
        return false;
    }
}

function chk_email(){
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/g;
    if((pattern.test(document.getElementById('email').value)==false)){
        // document.getElementById('lname').style.outline = "1px solid red"
        return false;
    }
}

function chk_pass(){
    var pattern = /.{8,}/g;
    if(pattern.test(document.getElementById('pass').value)==false){
        // document.getElementById('lname').style.outline = "1px solid red"
        return false;
    }
}

function chk_repass(){
    if(!(document.getElementById('repass').value==document.getElementById('pass').value)){
        return false;
    }
}

var getUser = localStorage.getItem('arrUser');
var arrUser = JSON.parse(getUser);
if(arrUser==null){
    arrUser=[]
}
function chk_regex(){
    event.preventDefault();
    if(chk_fname()==false||chk_lname()==false||chk_email()==false||chk_pass()==false||chk_repass()==false){
        alert("Register is success!")
        return;
    }
    console.log(arrUser)
    var txtTK = document.getElementById('email').value;
    var txtMK = document.getElementById('pass').value;
    var txtFname = document.getElementById('fname').value;
    var txtLname = document.getElementById('lname').value;
    user = {tk: txtTK, pass: txtMK, fname: txtFname, lname:txtLname};
    
    arrUser.push(user);
    localStorage.setItem('arrUser', JSON.stringify(arrUser));
    
    alert("Register success!");
    window.location.href = "signup.html";
}

