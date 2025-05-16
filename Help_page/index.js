const btnsend = document.getElementById('send');
        btnsend.addEventListener('click' , (e) => {
            e.preventDefault();
            alert("You're sign in");
            window.location.href = "/sign-page/signup.html";
        })