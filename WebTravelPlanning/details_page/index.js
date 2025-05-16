var getTour = localStorage.getItem('arrTour');
var arrTour = JSON.parse(getTour);
var getUser1 = localStorage.getItem('user1');
var user1 = JSON.parse(getUser1);




function addTour(){
    Btour = {
        id: user1,
        name: document.getElementById("name").textContent, code: document.getElementById("tcode").textContent, departure: document.getElementById("depart").textContent
        , duration: document.getElementById("dura").textContent, place: document.getElementById("place").textContent
    }
    if(arrTour==null){
        arrTour=[];
    }
    for(var i = 0; i < arrTour.length; i++){
        if(arrTour[i].id == user1){
            if(arrTour[i].code==Btour.code){
                alert("Duplicate tour")
                return;
            }
        }
    }

    if((a + b + c)==0){
        alert("Number of tour participants greater than 0")
        return;
    }

    var fname = document.getElementById("firstname").value
    var lname = document.getElementById("lastname").value
    var email = document.getElementById("email").value
    var phone = document.getElementById("phone").value
    var cr = document.getElementById("cr").value
    var crname = document.getElementById("cr-name").value
    var cvv = document.getElementById("cvv").value

    if(fname==""||lname==""||email==""||phone==""){
        alert("Please complete all information");
        return;
    }else{
        var pattern = /\D+/g
        if(pattern.test(fname)==false){
            alert("First name is not contain numbers")
            return;
        }
        pattern = /\D+/g
        if(pattern.test(lname)==false){
            alert("Last name is not contain numbers")
            return;
        }
        pattern = /.+@.+.com/g
        if(pattern.test(email)==false){
            alert("Email must be like abc@gmail.com")
            return;
        }
        pattern =  /0\d{9}/g
        if(pattern.test(phone)==false){
            alert("Phone number is not valid")
            return;
        }
    }

    if(checkmethod==0){
        alert("Please select payment method");
        return;
    }else{
        if(checkmethod == 2){
            if(cr==""||crname==""||cvv==""){
                alert("Please complete payment information");
                return;
            }else{
                var pattern = /\d{16}/g
                if(pattern.test(cr)==false){
                    alert("Credit card number is not valid");
                    return;
                }
                pattern = /\D+/g
                if(pattern.test(crname)==false){
                    alert("Credit card name is not contain numbers");
                    return;
                }
                pattern = /\d{3}/g
                if(pattern.test(cvv)==false){
                    alert("CVV is not valid");
                    return;
                }
            }
        }
    }

    arrTour.push(Btour);
    
    localStorage.setItem('arrTour', JSON.stringify(arrTour))
    alert("Book tour is success")
}
 
var a = 0;
var b = 0;
var c = 0;
var money = 0;

function addPer(per, sum){
    sum = sum + 1;
    document.getElementById(per).innerHTML = sum;
    return sum;
}

function addBaby(){
    b = addPer("bby", b);
    money = money + 100;
    total();
}

function addChild(){
    c = addPer("Chil", c);
    money = money + 400;
    total(); 
}

function addAdult(){
    a = addPer("Adult", a);
    money = money + 1000;
    total();
}

function minusPer(per, minus){
    minus = minus - 1;
    if(minus < 0)
        return 0;
    document.getElementById(per).innerHTML = minus;
    return minus;
}

function minusBaby(){
    if(money - 100 >= 0 && b > 0){
        b = minusPer("bby", b);
        money = money - 100;
        total();
    }else{
        return;
    }

}

function minusChild(){
    if(money - 400 >= 0 && c > 0){
        c = minusPer("Chil", c);
        money = money - 400;
        total();
    }else{
        return;
    }

}

function minusAdult(){
    if(money - 1000 >= 0 && a > 0){
        a = minusPer("Adult", a);
        money = money - 1000;
        total();
    }else{
        return;
    }
   
}

document.getElementById("private").onclick = function(e){
    if(this.checked && (a+b+c)>0){
        money = money + 1600;
        total();
        document.getElementById("private1").checked = true;
    }
}

function total(){
    document.getElementById("totalPer").innerHTML = a+b+c+" person";

    document.getElementById("totalMoney").innerHTML = money+" $";
}

function checkGiamGia(){
    alert("Invalid code");
}

//modal
// Get the modal
const modal = document.getElementById("modal");

// Get the button that opens the modal
const btn = document.getElementById("loadPayMent");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  document.getElementById("bby1").innerHTML = c;
  document.getElementById("Chil1").innerHTML = b;
  document.getElementById("Adult1").innerHTML = a;
  document.getElementById("totalPer1").innerHTML = a+b+c + " person";
  document.getElementById("totalMoney1").innerHTML = money + " $";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Handle form submission
const form = document.getElementById("myForm");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const fullName = formData.get("fullname");
  const email = formData.get("email");
  console.log(`Full Name: ${fullName}`);
  console.log(`Email: ${email}`);
  modal.style.display = "none";
 
});

var checkmethod = 0;

//momo method
function qrMomo(){
    document.getElementById("visa-me").style.display = 'none';
    document.getElementById("momo-me").style.display = 'none';
    setTimeout(function(){
        document.getElementById("momo-me").style.display = 'inline-block';
    },1000)
    checkmethod = 1;
}
//mastercard method
function mastercard(){
    document.getElementById("momo-me").style.display = 'none';
    setTimeout(function(){
        document.getElementById("visa-me").style.display = 'inline-block';
    },1000)
    checkmethod = 2;
}

