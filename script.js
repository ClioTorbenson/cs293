let contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", checkForm);

function checkForm(event) {
   contactForm.firstName.style.backgroundColor = "LightGreen";
   contactForm.lastName.style.backgroundColor = "LightGreen";
   contactForm.email.style.backgroundColor = "LightGreen";

   if (contactForm.firstName.value === "") {
      contactForm.firstName.style.backgroundColor = "Orange";
      event.preventDefault();
   }

   if (contactForm.lastName.value.length != 5) {
      contactForm.lastName.style.backgroundColor = "Orange";
      event.preventDefault();
   }

   if (contactForm.email.value != "yes") {
      contactForm.email.style.backgroundColor = "Orange";
      event.preventDefault();
   }
}