var App = (function () {
  'use strict';

  App.formElements = function( ){
    //Select2
    $(".select2").select2({
      width: '100%'
    });
  };

  return App;
})(App || {});
