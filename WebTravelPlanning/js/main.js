let profile = document.querySelector(".user-menu");
let menu = document.querySelector(".menu");

profile.onclick = function () {
  menu.classList.toggle("active");
};

const searchTour = document.getElementById("searchTour");

searchTour.addEventListener("click", (e) => {
  window.location.href = "../create_trip-page/index.html";
});

const slides = document.querySelectorAll(".booking_cards");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let index = 0;

// Show the first slide
slides[index].classList.add("active");

// Previous button click event
prev.addEventListener("click", function () {
  slides[index].classList.remove("active");
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  slides[index].classList.add("active");
});

// Next button click event
next.addEventListener("click", function () {
  slides[index].classList.remove("active");
  index++;
  if (index >= slides.length) {
    index = 0;
  }
  slides[index].classList.add("active");
});

// AOS.init();

const modalPlan = document.getElementById("modalPlan");
const btnPlan = document.getElementById("createPlan");
const btnClosePlan = document.querySelector(".closePlan");
modalPlan.style.display = "none";
btnPlan.onclick = function () {
  modalPlan.style.transitionDuration = "0.5s";
  modalPlan.style.display = "block";
};
btnClosePlan.onclick = function () {
  modalPlan.style.display = "none";
};

const btn_trv = document.querySelector(".select_trv");
const btn_price = document.querySelector(".select_price");
const passengerDetail = document.querySelector(".passenger_detail_trav");
const budgetDetail = document.querySelector(".budget_detail");
const btn_filter = document.querySelector(".select_filter");
const filterDetail = document.querySelector(".filter_detail");

// toggle hiện đang bật
let activeToggle = null;

btn_trv.addEventListener("click", () => {
  ToggleDetail(passengerDetail);
});

btn_price.addEventListener("click", () => {
  ToggleDetail(budgetDetail);
});

btn_filter.addEventListener("click", () => {
  ToggleDetail(filterDetail);
});

function ToggleDetail(ele) {
  if (activeToggle === ele) {
    ele.classList.remove("details");
    activeToggle = null;
  } else {
    if (activeToggle) {
      activeToggle.classList.remove("details");
    }
    ele.classList.add("details");
    activeToggle = ele;
  }
}

// increase and decrease number of customers
const btnMinus = document.querySelectorAll(".minus");
const btnPlus = document.querySelectorAll(".plus");
let numberChange = document.querySelectorAll(".numberChange");

btnMinus.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    if (numberChange[index].textContent > 0) {
      numberChange[index].textContent =
        parseInt(numberChange[index].textContent) - 1;
    }
  });
});

btnPlus.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    numberChange[index].textContent =
      parseInt(numberChange[index].textContent) + 1;
  });
});

function resetFunction() {
  numberChange.forEach((number) => {
    number.textContent = 0;
  });
}

// lấy giá trị và reset lại giá
const priceRange = document.getElementById("priceRange");
const myPriceInput = document.getElementById("myPrice");
const resetButton = document.getElementById("resetButton");

priceRange.addEventListener("input", () => {
  const value = parseInt(priceRange.value);
  const max = parseInt(priceRange.max);
  const min = parseInt(priceRange.min);

  myPriceInput.value = value;
});

resetButton.addEventListener("click", () => {
  myPriceInput.value = 0;
  priceRange.value = 0;
});

//
const items = document.querySelectorAll(".select_type li");
items.forEach((item) => {
  item.addEventListener("click", () => {
    items.forEach((item) => {
      item.classList.remove("active");
    });
    item.classList.add("active");
  });
});

const starReviews = document.querySelectorAll(".filter_top_select button");
starReviews.forEach((review) => {
  review.addEventListener("click", () => {
    starReviews.forEach((review) => {
      review.classList.remove("active");
    });
    review.classList.add("active");
  });
});

const cancelCheckbox = document.getElementById("cancelCheckbox");
const beachCheckbox = document.getElementById("beachCheckbox");
const parkingCheckbox = document.getElementById("parkingCheckbox");
const resCheckbox = document.getElementById("resCheckbox");
const gymCheckbox = document.getElementById("gymCheckbox");
const poolCheckbox = document.getElementById("poolCheckbox");
const wifiCheckbox = document.getElementById("wifiCheckbox");
const spaCheckbox = document.getElementById("spaCheckbox");
const boardCheckbox = document.getElementById("boardCheckbox");
const petCheckbox = document.getElementById("petCheckbox");

const resetChecked = document.getElementById("resetCheck");

// Gán sự kiện cho nút Reset
resetChecked.addEventListener("click", () => {
  cancelCheckbox.checked = false;
  beachCheckbox.checked = false;
  parkingCheckbox.checked = false;
  resCheckbox.checked = false;
  gymCheckbox.checked = false;
  poolCheckbox.checked = false;
  wifiCheckbox.checked = false;
  spaCheckbox.checked = false;
  boardCheckbox.checked = false;
  petCheckbox.checked = false;

  starReviews.forEach((review) => {
    starReviews.forEach((review) => {
      review.classList.remove("active");
    });
  });
});
