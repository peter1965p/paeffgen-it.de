$ = require 'jquery'
do fill = (item = 'Wir leben IT!') ->
  $('.tagline').append "#{item}"
fill