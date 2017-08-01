document.addEventListener("DOMContentLoaded", () => {
  console.log("Content loaded!");

  // let openFormBtn = document.getElementById("open-form");
  let modal = document.getElementById("modal");
  let formBg = document.getElementById("form-bg");
  let formContainer = document.getElementById("form-container");
  let form = document.getElementById("form");
  let openForm = document.getElementById("open-form-btn");
  let sendBtn = document.getElementById("sendBtn");
  let closeBtn = document.getElementById("closeBtn");

  // Open form with slide up effect
  openForm.addEventListener("click", () => {
    formBg.classList.toggle("display");
    formBg.classList.toggle("opacity");
    setTimeout(function() {
      formContainer.classList.toggle("slide");
    }, 100);
  });

  // Close form with slide up effect
  closeBtn.addEventListener("click", () => {
    formContainer.classList.toggle("slide");
    formBg.classList.toggle("opacity");
    setTimeout(function() {
      formBg.classList.toggle("display");
      form.reset();
  }, 500);
  });

  // Function to validate if the form is ready to be submitted
  const validateForm = () => {
    // ON CHANGE of the form
    form.addEventListener("input", animateButton);
  }

  // Function that adds a class that triggers animation that indicates it's ready to continue
  const animateButton = () => {
    // CHECK IF every form fields has contents
    if (messageForm.name.value && messageForm.email.value && messageForm.message.value) {
      // IF yes, add a class to the button that triggers an animation that let's the user know that button is ready to be clicked
      // alert("Form ready to submit");
      sendBtn.classList.add("enabeld");
    }
  }

  // Function that adds a class that triggers animation that indicates that form is not ready to be submitted
  const animateError = (e) => {
    // IF form has empty field, add a class that animates accordingly
    if (!messageForm.name.value || !messageForm.email.value || !messageForm.message.value) {
      sendBtn.classList.add("refused");

      // Remove animation
      setTimeout(function() {
        sendBtn.classList.remove("refused");
    }, 1000);
    }
  }

  sendBtn.addEventListener("click", animateError);

  validateForm();


});
