document.addEventListener("DOMContentLoaded", () => {

  // Variables for DOM elements
  let formBg = document.getElementById("form-bg");
  let optionContainer = document.getElementById("option-container");
  let formContainer = document.getElementById("form-container");
  let confirmContainer = document.getElementById("confirm-container");
  let form = document.getElementById("form");
  let option = document.getElementById("option");
  let radios = document.getElementsByName("radio");
  let openForm = document.getElementById("open-form-btn");
  let optionCloseBtn = document.getElementById("optionCloseBtn");
  let continueBtn = document.getElementById("continueBtn");
  let sendBtn = document.getElementById("sendBtn");
  let closeBtn = document.getElementById("closeBtn");
  let faqBtn = document.getElementById("faq-btn");
  let readMoreBtn = document.getElementById("read-more-btn");


  // Reusable function to reset and close form
  const closeAndResetForm = () => {
    optionContainer.classList.remove("slide");
    formContainer.classList.remove("slide");
    confirmContainer.classList.remove("slide");
    formBg.classList.remove("opacity");

    // Reset form and button to original state
    setTimeout(() => {
      formBg.classList.remove("display");
      option.reset();
      form.reset();
      continueBtn.classList.remove("slide-bg");
      sendBtn.classList.remove("slide-bg");
    }, 500);
  }

  // Reusable function to trigger close button
  const clickCloseBtn = (el) => {
    el.addEventListener("click", () => {
      closeAndResetForm();
    });
  }

  // Function to add slideIn effect to a button
  const slideInAnimation = (el) => {
    el.classList.add("slide-bg");
  }

  // Function to add wiggle animation to a button
  const wiggleAnimation = (el) => {
    el.classList.remove("slide-bg");
    el.classList.add("error");

    setTimeout(() => {
      el.classList.remove("error");
    }, 1000);
  }


  clickCloseBtn(optionCloseBtn);
  clickCloseBtn(closeBtn);


  // ON CLICK of button, open form with slide up effect
  openForm.addEventListener("click", () => {
    formBg.classList.toggle("display");
    formBg.classList.toggle("opacity");
    setTimeout(() => {
      optionContainer.classList.toggle("slide");
    }, 100);
  });


  // Function to validate if radio button is checked and ready to continue
  const validateOption = () => {
    // ON CLICK of radio buttion
    option.addEventListener("change", () => {
      slideInAnimation(continueBtn);
    });

    continueBtn.addEventListener("click", (e) => {
      e.preventDefault();

      let arr = [];
      for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
          arr.push(radios[i]);
        }
      }

      if (arr.length === 0 ) {
        wiggleAnimation(continueBtn);
      } else {
        formContainer.classList.toggle("slide");
      }
    });
  } // End of validateOption function

  validateOption();


  // Function to validate if the form is ready to be submitted
  const validateForm = () => {
    // ON CHANGE of the form
    form.addEventListener("input", () => {
      if (form.name.value && form.message.value && form.email.value.includes("@")) {
        // Add a class to the button that triggers an animation that let's the user know button is ready to be clicked
        slideInAnimation(sendBtn);
      }
    });

    // ON CLICK of send button
    sendBtn.addEventListener("click", (e) => {
      e.preventDefault();
      // IF form is not completed
      if (!form.name.value || !form.email.value.includes("@") || !form.message.value) {
        // Let user know button is not clickable with a wiggleAnimation
        wiggleAnimation(sendBtn);
      } else {
        // IF form is ready to be submitted, open confirm-message
        confirmContainer.classList.toggle("slide");
        // and after 3seconds close the entire form
        setTimeout(() => {
          closeAndResetForm();
        }, 3000);
      }

      // SAVE user's name and show on 'confirm-message' section
      document.getElementById("user-name").innerHTML = `${form.name.value}`;
      document.getElementById("user-email").innerHTML = `${form.email.value}`;
    });

    sendBtn.classList.remove("slide-bg");
  } // End of validateForm function

  validateForm();


  // Reference: https://stackoverflow.com/questions/17733076/smooth-scroll-anchor-links-without-jquery
  // Smooth Scroll Effect with pure JavaScript
  const scrollTo = (element, to, duration) => {
    if (duration <= 0) return;
    let difference = to - element.scrollTop;
    let perTick = difference / duration * 10;

    setTimeout(() => {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return;
        scrollTo(element, to, duration - 10);
    }, 10);
  }

  let target = document.getElementById("faq-section");

  faqBtn.addEventListener("click", () => {
    scrollTo(document.body, target.offsetTop, 400);
  });


  // Toggle hidden FAQ contents on click of readmore button
  let displayMore = document.getElementById("faq-right");
  let displayMoreEl = document.getElementById("hidden-faq");

  readMoreBtn.addEventListener("click", () => {
    displayMore.classList.toggle("show-more");
    displayMoreEl.classList.toggle("show-more");
  });

});
