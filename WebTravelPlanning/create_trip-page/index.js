    const showMyTripCheckbox = document.querySelector('#show-my-trip');
    const myTripList = document.querySelector('#my-trip-list');
    const thingRight = document.getElementById('thing_right_items')
    let isAdded = false;
    const addToTripButtons = document.querySelectorAll('.add-to-trip');

// Hàm thực hiện khi click vào các button add-to-trip
    function handleAddToTripButtonClick() {
        const card = this.closest('.card');
        const cardClone = card.cloneNode(true);
        cardClone.classList.add('card_clone');
        myTripList.appendChild(cardClone);
        myTripList.classList.add('active');

 // Thay đổi màu và chữ của button khi được nhấn
    const addButton = card.querySelector('.add');
    if (addButton) {
        addButton.innerHTML = isAdded ? 'Add' : 'Added';
        addButton.style.backgroundColor = isAdded ? 'gray' : 'blue';
    }
    alert("Add to Show items for your trip successed !")
    }
        
// Lặp qua tất cả các button add-to-trip và thêm sự kiện click
    addToTripButtons.forEach(button => {
        button.addEventListener('click', handleAddToTripButtonClick);
    });

 // Thêm sự kiện "change" vào checkbox "show items in my trip"
    showMyTripCheckbox.addEventListener('change', function() {
        myTripList.style.display = this.checked ? 'inline-block' : 'none'; 
        myTripList.style.height = this.checked ? '750px' : '0';
        thingRight.style.height = this.checked ? '750px' : '100%';

        if (this.checked) {
            myTripList.classList.add('show');
            thingRight.classList.add('hide');
            if(myTripList.children.length === 0){
                alert("There are no trips you have added yet !");
            }
        } else {
            myTripList.classList.remove('show');
            thingRight.classList.remove('hide');
         }
    });

    const seeMore = document.getElementById('explore');
    seeMore.addEventListener('click', () =>{
        alert('Our website does not currently add new trips !');
    })