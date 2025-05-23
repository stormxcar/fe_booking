    const showMyTripCheckbox = document.querySelector('#show-my-trip');
    const myTripList = document.querySelector('#my-trip-list');
    const thingRight = document.getElementById('thing_right_items');
    const addToTripButtons = document.querySelectorAll('.add-to-trip');
    const seeMore = document.getElementById('explore');

    // Thêm sự kiện click cho các nút "add-to-trip"
    addToTripButtons.forEach(button => {
        button.addEventListener('click', function () {
            const card = this.closest('.card');
            const cardClone = card.cloneNode(true);
            cardClone.classList.add('card_clone');
            myTripList.appendChild(cardClone);
            myTripList.classList.add('active');

            // Đổi trạng thái nút
            const addButton = card.querySelector('.add');
            if (addButton) {
                addButton.innerHTML = 'Added';
                addButton.style.backgroundColor = 'blue';
            }
            alert("Add to Show items for your trip successed !");
        });
    });

    // Sự kiện thay đổi checkbox "show-my-trip"
    showMyTripCheckbox.addEventListener('change', function () {
        const checked = this.checked;
        myTripList.style.display = checked ? 'inline-block' : 'none';
        myTripList.style.height = checked ? '750px' : '0';
        thingRight.style.height = checked ? '750px' : '100%';

        myTripList.classList.toggle('show', checked);
        thingRight.classList.toggle('hide', checked);

        if (checked && myTripList.children.length === 0) {
            alert("There are no trips you have added yet !");
        }
    });

    // Sự kiện click nút "explore"
    seeMore.addEventListener('click', () => {
        alert('Our website does not currently add new trips !');
    });
