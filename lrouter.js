/*  Love Saroha
    lovesaroha1994@gmail.com (email address)
    https://www.lovesaroha.com (website)
    https://github.com/lovesaroha  (github)
*/
(function ($) {

  // Router Object.
  class RouterObject {
    constructor() {
      this.routes = {};
    }

    // Initialize router on page load or change.
    initialize(e) {
      e.preventDefault();
      let url = $.location.toString().replace($.location.origin, "").split("?");
      if (url[0] == "/") { url[0] = "/#/"; }
      if (this.routes[url[0]] == undefined) {
        window.location = "/#/";
        return;
      }
      let urlParameters = {};
      if (url[1] != undefined) {
        // Assign url parameters values.
        let params = url[1].split("&");
        for (let k = 0; k < params.length; k++) {
          let paramsPair = params[k].split("=");
          if (paramsPair.length != 2) { continue; }
          urlParameters[paramsPair[0]] = paramsPair[1];
        }
      }
      // Prepare application.
      document.querySelector(`html`).scrollTop = 0;
      this.routes[url[0]](urlParameters);
    }

    // This function add new route.
    Add(url, callback) {
      this.routes[url] = callback;
    }

  }
  // This function create new router instance.
  function Create() {
    let router = new RouterObject();
    // Run router function on page change.
    $.addEventListener("load", router.initialize, false);
    $.addEventListener("popstate", router.initialize, false);
    return router;
  }

  // Export.
  $.lrouter = {
    Create: Create
  }
}(window));