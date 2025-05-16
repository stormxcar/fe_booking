function handleLikeDislikeClick(event) {
  const target = event.target;
  if (!target.matches('i.fa-thumbs-up, i.fa-thumbs-down')) {
      return;
  }

  const reviewContainer = target.closest('.review');
  if (!reviewContainer) {
      return;
  }

  const likeButton = reviewContainer.querySelector('.fa-thumbs-up');
  const dislikeButton = reviewContainer.querySelector('.fa-thumbs-down');

  if (target === likeButton) {
      likeButton.parentElement.style.background = "#3B71FE";
      dislikeButton.parentElement.style.background = "";
  } else if (target === dislikeButton) {
      dislikeButton.parentElement.style.background = "rgba(128, 128, 128, 0.5)";
      likeButton.parentElement.style.background = "";
  }

  const allContainers = document.querySelectorAll('.review');
  allContainers.forEach((container) => {
      if (container !== reviewContainer) {
          container.querySelectorAll('.fa-thumbs-up').parentElement.style.background = "";
          container.querySelectorAll('.fa-thumbs-down').parentElement.style.background = "";
      }
  });
}

document.addEventListener('click', handleLikeDislikeClick);

// Get the modal
const modal = document.getElementById("modal");

// Get the button that opens the modal
const btn = document.getElementById("modalFAQ");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
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
