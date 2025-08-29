let navbar=document.getElementById('navbar');

window.addEventListener('scroll',checkScroll);

function checkScroll(){
    if(window.scrollY>100){
        navbar.classList.add('scrolled');

    } else{
        navbar.classList.remove('scrolled');
    }
}

function validateForm(event) {
    event.preventDefault(); 

    // Get values from form
    let name = $("#name").val().trim();
    let email = $("#email").val().trim();
    let interest = $("#interest").val();
    let msg = $("#msg").val().trim();

    // Name check
    if (name === "") {
      alert("Please enter your full name.");
      $("#name").focus();
      return false;
    }

    // Email check (simple pattern)
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "") {
      alert("Please enter your email.");
      $("#email").focus();
      return false;
    } else if (!email.match(emailPattern)) {
      alert("Please enter a valid email address.");
      $("#email").focus();
      return false;
    }

    // Interest check
    if (interest === "") {
      alert("Please select your interest.");
      $("#interest").focus();
      return false;
    }

    // Message check (optional)
    if (msg.length < 5) {
      alert("Please add at least 5 characters in additional details.");
      $("#msg").focus();
      return false;
    }

    // If everything is correct
    alert("Form submitted successfully!");
    $("#Form")[0].submit(); 
  }

  // jQuery code to run after page load
  $(document).ready(function () {
    $(".form-btn").on("click", validateForm);
  });