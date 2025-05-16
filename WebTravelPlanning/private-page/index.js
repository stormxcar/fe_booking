const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];

var getUser1 = localStorage.getItem('user1');
var user1 = JSON.parse(getUser1);

var getUser = localStorage.getItem('arrUser');
var arrUser = JSON.parse(getUser);

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function changePageAccount(){
  window.location.href = "../profile-page/index.html"
}


function changePage(){
  window.location.href = "../profile-page/myTour.html"
}

var pass

function repass(){
  var i = 0
  for(i; i < arrUser.length; i++){
    if(arrUser[i].tk==user1){
      pass = arrUser[i].pass;
      break;
    }
  }

  var oldpass = document.getElementById("oldpass").value
  var newpass = document.getElementById("newpass").value
  var renewpass = document.getElementById("renewpass").value
  var pattern = /.{8,}/g
  if(pattern.test(newpass)==false){
    alert("Password must be with minimum 8 characters");
    return;
  }
  if(oldpass == pass){
    if(newpass==renewpass){
      arrUser[i].pass =  newpass;
      alert("Password is change success");
      localStorage.setItem('arrUser', JSON.stringify(arrUser));
    }else{
      alert("Confirm password does not match the password");
      return;
    }
  }else{
    alert("Current password does not match");
  }
}