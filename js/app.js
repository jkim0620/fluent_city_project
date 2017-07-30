document.addEventListener("DOMContentLoaded", () => {
  console.log("Content loaded!");

  let form = document.getElementById("form");
  let firstName = document.getElementById("first-name");
  let openForm = document.getElementById("open-form");
  let modal = document.getElementById("modal");
  let sendBtn = document.getElementById("sendBtn");

  openForm.addEventListener("click", () => {
    modal.style.display = "block";
  });

  // Function to validate if the form is ready to be submitted
  const validateForm = () => {
    // Button starts as disabled mode
    // WHEN form has empty field set button stays disabled

    // ON CHANGE of the form
    form.addEventListener("input", () => {
      // CHECK IF every form fields has contents
      if (messageForm.firstName.value && messageForm.lastName.value && messageForm.email.value && messageForm.message.value) {
        // IF yes, add a class to the button that triggers an animation that let's the user know that button is ready to be clicked
        // alert("Form ready to submit");
        sendBtn.classList.add("enabeld");
      }
    });

    // AFTER form has been submittedset the button back to its original state
  }

  validateForm();


});
