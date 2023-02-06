document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const inputs = form.elements;

  // add event listener to each input
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", function () {
      // Get the current input value
      const inputValue = inputs[i].value;
      // Update the corresponding element in the preview container
      document.getElementById(inputs[i].name + "-preview").innerHTML = inputValue;
      // Save form data to local storage when input values change
      localStorage.setItem(inputs[i].name, inputValue);
    });
  }

  // Load form data from local storage on page load
  window.addEventListener("load", function () {
    for (let i = 0; i < inputs.length; i++) {
      const storedValue = localStorage.getItem(inputs[i].name);
      if (storedValue) {
        inputs[i].value = storedValue;
        document.getElementById(inputs[i].name + "-preview").innerHTML = storedValue;
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
