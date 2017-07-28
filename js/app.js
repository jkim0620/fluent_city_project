document.addEventListener("DOMContentLoaded", () => {
  console.log("Content loaded!");

  let openForm = document.getElementById("open-form");
  let modal = document.getElementById("modal");

  openForm.addEventListener("click", () => {
    modal.style.display = "block";
  });

});
