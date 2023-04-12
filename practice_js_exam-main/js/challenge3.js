document.addEventListener('DOMContentLoaded', function() {
  var display = document.getElementById('display');
  var thumbnails = document.getElementsByClassName('thumbnail');
  var initialDisplayText = display.textContent;
  var initialDisplayBackground = display.style.backgroundImage;

  function mouseEnterHandler(event) {
    var thumbnail = event.target;
    display.style.backgroundImage = 'url(' + thumbnail.src + ')';
    display.textContent = thumbnail.alt;
    thumbnail.style.opacity = '0';
  }

  function mouseLeaveHandler(event) {
    var thumbnail = event.target;
    display.style.backgroundImage = initialDisplayBackground;
    display.textContent = initialDisplayText;
    thumbnail.style.opacity = '1';
  }

  function focusHandler(event) {
    mouseEnterHandler(event);
  }

  function blurHandler(event) {
    mouseLeaveHandler(event);
  }

  // Show alert with the caption from the 2nd figure
  var secondFigureCaption = document.querySelector('#thumbs figure:nth-child(2) figcaption');
  alert(secondFigureCaption.textContent);

  // Add event listeners for each thumbnail
  for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('mouseenter', mouseEnterHandler);
    thumbnails[i].addEventListener('mouseleave', mouseLeaveHandler);
    thumbnails[i].addEventListener('focus', focusHandler);
    thumbnails[i].addEventListener('blur', blurHandler);
  }
});

