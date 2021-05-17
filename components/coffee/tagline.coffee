$ = require 'jquery'
do fill = (item = 'Ihr innovativer IT Techniker aus dem Hunsrück') ->
  $('.tagline').append "#{item}"
fill