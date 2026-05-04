let contactForm = document.querySelector("#contactForm");
contactForm.addEventListener("submit", checkForm);

function checkForm(event) {
   contactForm.firstName.style.backgroundColor = "LightGreen";
   contactForm.lastName.style.backgroundColor = "LightGreen";
   contactForm.email.style.backgroundColor = "LightGreen";

   if ( firstName.value === "" ) {
      contactForm.firstName.style.backgroundColor = "Orange";
      event.preventDefault();
   }

   if ( lastName.value === "" ) {
      contactForm.lastName.style.backgroundColor = "Orange";
      event.preventDefault();
   }

   if ( email.value === "" ) {
      contactForm.email.style.backgroundColor = "Orange";
      event.preventDefault();
   }
}
