(function () {
  'use strict';

  if (!window.addEventListener) return // Check for IE9+

  var options = INSTALL_OPTIONS;
  var element, pathArray, userId, penId;

  // updateElement runs every time the options are updated.
  // Most of your code will end up inside this function.
  function updateElement () {
    element = INSTALL.createElement(options.location, element);

    pathArray = options.penURL.split('/');
    userId = pathArray[3] || "";
    penId = pathArray[5] || "";

    // Set the app attribute to your app's dash-delimited alias.
    element.setAttribute('app', 'codepen');
    element.innerHTML = "<iframe height='" + options.height + "' scrolling='no' title='Codepen' src='//codepen.io/" + userId + "/embed/" + penId + "/?height=265&theme-id=" + options.theme + "&default-tab=" + options.defaultTab + ",result&embed-version=2&editable=" + options.editable + "' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/" + userId + "/pen/" + penId + "/'>Pen</a> by " + userId + " (<a href='https://codepen.io/" + userId + "'>@" + userId + "</a>) on <a href='https://codepen.io'>CodePen</a></iframe>";
  }

  // INSTALL_SCOPE is an object that is used to handle option changes without refreshing the page.
  window.INSTALL_SCOPE = {
    setOptions: function setOptions (nextOptions) {
      options = nextOptions;

      updateElement()
    }
  };

  // This code ensures that the app doesn't run before the page is loaded.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateElement);
  } else {
    updateElement()
  }
}());
