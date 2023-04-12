
document.addEventListener('DOMContentLoaded', function () {
    // Challenge 1: Print the default value of the textarea to the console
    var textarea = document.getElementById('billing');
    console.log(textarea.value);
  
    // Challenge 2 and 3: Copy information and toggle home address field
    var checkbox = document.querySelector('input[type="checkbox"][name="useBilling"]');
    var billingAddress = document.getElementById('billing');
    var homeAddress = document.getElementById('home');
  
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        homeAddress.value = billingAddress.value;
        homeAddress.disabled = true;
      } else {
        homeAddress.value = '';
        homeAddress.disabled = false;
      }
    });
  });
  
  
