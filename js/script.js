window.addEventListener("DOMContentLoaded", () => {
  "use strict";

 const tabs = require('./modules/tabs'),
     cards = require('./modules/cards'),
     timer = require('./modules/timer'),
     modal = require('./modules/modal'),
     slider = require('./modules/slider'),
     calc = require('./modules/calc'),
     forms = require('./modules/forms');

 tabs();
 cards();
 timer();
 modal();
 slider();
 calc();
 forms();

});
