var $, fill;

$ = require('jquery');

(fill = function(item) {
  return $('.tagline').append(`${item}`);
})('Wir leben IT!');

fill;
