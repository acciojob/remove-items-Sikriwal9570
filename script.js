//your JS code here. If required.

const removeButton = document.querySelector('input[type="button"]');
const colorSelect = document.getElementById('colorSelect');

// Add a click event listener to the button
removeButton.addEventListener('click', function () {
  // Get the selected option
  const selectedOption = colorSelect.options[colorSelect.selectedIndex];

  // Check if an option is selected
  if (selectedOption) {
    // Remove the selected option from the dropdown
    colorSelect.removeChild(selectedOption);
  }
});

