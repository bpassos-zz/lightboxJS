// Click event to open image

window.onload = function() {
  // prepare the overlay
  var overlayElm = document.createElement('div');
  var bodyElm    = document.querySelector('body');

  overlayElm.classList.add('lightboxJS-overlay');
  // add overlay do body
  bodyElm.insertBefore(overlayElm, bodyElm.firstChild);

  var img = document.querySelector('img');

  img.addEventListener('click', function(event) {
    var newImg = this.cloneNode(false);
    overlayElm.appendChild(newImg);

    overlayElm.classList.add('lightboxJS-overlay-show');
  }, false);
};
