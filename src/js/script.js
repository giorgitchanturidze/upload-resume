document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const inputs = form.elements;

  // add event listener to each input
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", function () {
      // Get the current input value
      const inputValue = inputs[i].value;
      // Check if the input is a image
      if (inputs[i].type === "file") {
        // Get the image preview container
        const imagePreview = document.getElementById("image-preview");
        // Set the image source to the input value
        imagePreview.src = URL.createObjectURL(inputs[i].files[0]);
        // Save form data to local storage when input values change
        localStorage.setItem(inputs[i].name, imagePreview.src);
        // Validate the image input
        validateImage(inputs[i]);
      }else{
        // Update the corresponding element in the preview container
        document.getElementById(inputs[i].name + "-preview").innerHTML = inputValue;
        // Save form data to local storage when input values change
        localStorage.setItem(inputs[i].name, inputValue);
        // Validate the text input
        validateTextInput(inputs[i]);
      }
    });
  }

  // Load form data from local storage on page load
  window.addEventListener("load", function () {
    for (let i = 0; i < inputs.length; i++) {
      const storedValue = localStorage.getItem(inputs[i].name);
      console.log(storedValue);
      if (storedValue) {
        // If inputs[i].name is image, set the image source to the stored value
        if (inputs[i].name === "image") {
          document.getElementById("image-preview").src = storedValue;
        }else{
        inputs[i].value = storedValue;
        document.getElementById(inputs[i].name + "-preview").innerHTML = storedValue;
      }
      }
    }
  });
  
  // Get the clear button
  const clearButton = document.getElementById("clear-button");
  
  // Bind an event listener to the clear button to clear local storage
  clearButton.addEventListener("click", function () {
    localStorage.clear();
  });
});
  // Upload image
  function uploadImage() {
    document.getElementById("image").click();
  }