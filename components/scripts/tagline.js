var $, fill;

$ = require('jquery');

(fill = function(item) {
  return $('.tagline').append(`${item}`);
})('Ihr innovativer IT Techniker aus dem Hunsrück');

fill;
