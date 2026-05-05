let contactForm = document.getElementById("contactForm");
let modalEl = document.getElementById("formSubmission");
contactForm.addEventListener("submit", checkForm);

function checkForm(event) {
   event.preventDefault();

   contactForm.firstName.style.boxShadow = "0px 0px 6px lightGreen";
   contactForm.lastName.style.boxShadow = "0px 0px 6px lightGreen";
   contactForm.email.style.boxShadow = "0px 0px 6px lightGreen";

   let validForm = true;
   if (contactForm.firstName.value === "") {
      contactForm.firstName.style.boxShadow = "0px 0px 6px red";
      validForm = false;
   }

   if (contactForm.lastName.value === "") {
      contactForm.lastName.style.boxShadow = "0px 0px 6px red";
      validForm = false;
   }
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (!emailRegex.test(contactForm.email.value)) {
      contactForm.email.style.boxShadow = "0px 0px 6px red";
      validForm = false;
   }
   if (validForm) {
      contactForm.firstName.value = "";
      contactForm.lastName.value = "";
      contactForm.email.value = "";
      contactForm.message.value = "";
      let modal = bootstrap.Modal.getOrCreateInstance(modalEl);
      modal.show();
  }
}