const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const surnameInput = document.querySelector("#surname");
const imageInput = document.querySelector("#image");
const emailInput = document.querySelector("#email");
const phoneNumberInput = document.querySelector("#phone-number");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameInput.value.trim();
  const surname = surnameInput.value.trim();
  const image = imageInput.files[0];
  const email = emailInput.value.trim();
  const phoneNumber = phoneNumberInput.value.trim();

  if (name.length < 2) {
    alert("Name must be at least 2 characters long");
    return;
  }

  if (surname.length < 2) {
    alert("Surname must be at least 2 characters long");
    return;
  }

  if (!image) {
    alert("Image is required");
    return;
  }

  if (!email.endsWith("@redberry.ge")) {
    alert("Email must end with @redberry.ge");
    return;
  }

  if (!/\d{3}-\d{2}-\d{2}-\d{2}/.test(phoneNumber)) {
    alert("Phone number must be in the format XXX-XX-XX-XX");
    return;
  }

  // Submit the form if all validation checks pass
  form.submit();
});
