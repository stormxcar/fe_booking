
var getTour = localStorage.getItem('arrTour');
var arrTour = JSON.parse(getTour);
var getUser1 = localStorage.getItem('user1');
var user1 = JSON.parse(getUser1);
    var countTour = 0;
    for(var i = 0; i < arrTour.length; i++){
        if(arrTour[i].id == user1)
            countTour++;
    }

    if(countTour==0){  
        document.getElementById('tbl-tour').style.display = "none"
        document.getElementById('btnDel').style.display = "none"    
        setTimeout(function(){
            alert("You haven't booked a tour at the moment")},1000);
    }else{
        document.getElementById('btnDel').style.display = "block"
    }
    
    console.log(arrTour)

    for(var i = 0; i < arrTour.length; i++){
        if(user1 == arrTour[i].id){
            var namecol = arrTour[i].name;
            var codecol = arrTour[i].code;
            var durationcol = arrTour[i].duration;
            var departurecol = arrTour[i].departure;
            var placecol = arrTour[i].place;
        
            var tr = document.createElement('tr');
            var td1 = tr.appendChild(document.createElement('td'));
            var td2 = tr.appendChild(document.createElement('td'));
            var td3 = tr.appendChild(document.createElement('td'));
            var td4 = tr.appendChild(document.createElement('td'));
            var td5 = tr.appendChild(document.createElement('td'));
        
        
            td1.innerHTML = namecol
            td2.innerHTML = codecol
            td3.innerHTML = departurecol
            td4.innerHTML = durationcol
            td5.innerHTML = placecol
        
            document.getElementById("tbl-tour").appendChild(tr)
        }
    }

function clearTour(){
    if(confirm('Are you sure delete all tours ?')){
        arrTour = []
        localStorage.setItem('arrTour', JSON.stringify(arrTour))
        alert("Deleted")
        location.reload()
    }
}

function changePage(){
    window.location.href = "./index.html"
}
function changePageSecurity(){
    window.location.href = "../private-page/index.html"
}