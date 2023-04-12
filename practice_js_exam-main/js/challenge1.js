document.addEventListener('DOMContentLoaded', function() {
  // Style h1 heading
  var h1 = document.querySelector('h1');
  h1.style.color = '#6E3DFF';


  // Show alert with current time on double-click
  document.body.addEventListener('dblclick', function() {
    var currentTime = new Date().toLocaleTimeString();
    alert('Current Time: ' + currentTime);
  });

  // Toggle email field
  var toggleInput = document.getElementById('toggle');
  var emailBox = document.getElementById('emailBox');

  toggleInput.addEventListener('click', function() {
    emailBox.classList.toggle('hidden');
  });
});

  
  