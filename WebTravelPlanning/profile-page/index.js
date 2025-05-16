var getUser1 = localStorage.getItem('user1');
var user1 = JSON.parse(getUser1);
var getUser = localStorage.getItem('arrUser');
var arrUser = JSON.parse(getUser);
const fileInput = document.getElementById("file");
var a;
for(var i = 0; i < arrUser.length; i++){
    if(arrUser[i].tk==user1){
        a = i;
        document.getElementById("txtfname").value = arrUser[i].fname;
        document.getElementById("txtlname").value = arrUser[i].lname;
        document.getElementById("txtemail").value = arrUser[i].tk;
        if(arrUser[i].location!=null){
            document.getElementById("txtLocation").value = arrUser[i].location;
        }

        if(arrUser[i].Gender!=null){
            document.getElementById("txtGender").value = arrUser[i].Gender;
        }

        if(arrUser[i].DOB!=null){
            document.getElementById("txtDOB").value = arrUser[i].DOB;
        }
    }
}
    
function changePageSecurity(){
    window.location.href = "../private-page/index.html"
}

function changePage(){
    window.location.href = "./myTour.html"
}

fileInput.addEventListener("change", (event)=>{
    const selectedFile = event.target.files[0];
    const filePath = URL.createObjectURL(selectedFile);
    document.getElementById("avt").src = filePath;
})

function saveInfor(){
    if(document.getElementById("txtLocation").value!=null){
        arrUser[a].location = document.getElementById("txtLocation").value;
    }
    if(document.getElementById("txtGender").value!=null){
        arrUser[a].Gender = document.getElementById("txtGender").value;
    }
    if(document.getElementById("txtDOB").value!=null){
        arrUser[a].DOB = document.getElementById("txtDOB").value;
    }
    localStorage.setItem('arrUser', JSON.stringify(arrUser));
    alert("Saved");
    location.reload();
}