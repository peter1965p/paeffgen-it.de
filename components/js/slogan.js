(function() {
  var $, fill;

  $ = requere('jquery');

  (fill = function(item) {
    $('.slogan').append("" + item);
    return fill;
  })('Ihr innovativer IT Techniker aus dem Hunsrück');

}).call(this);
