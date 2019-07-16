var blockquote = document.querySelector('blockQuote');


var button = document.querySelector('.btn');

  // Sanitize and encode all HTML in from a 3rd party
  var sanitizeHTML = function(str) {
    var temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
  };

  // Listen for click events on Woof button
button.addEventListener('click', function(event) {
  // Set up our HTTP request
  var xhr = new XMLHttpRequest();
  // Setup our listener to process request state changes
  xhr.onreadystatechange = function() {
      // Only run if the request is complete
      if (xhr.readyState !== 4) return;
      // Process our return data
      if (xhr.status >= 200 && xhr.status < 300) {
        // This will run when the request is successful
        var data = JSON.parse(xhr.responseText);
        var imgHTML = '<img src="' + data.message + '">';
        blockquote.innerHTML = imgHTML;
        console.log(xhr);
      } else {
        // This will run when it's not
        blockquote.textContent = 'Sorry, No Doggo';
        console.log(xhr);
      }
};

xhr.open('GET', 'https://dog.ceo/api/breeds/image/random');
xhr.send();

}, false);
