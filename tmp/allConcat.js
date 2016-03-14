var Journal = require('./../js/journal.js').Journal;
var moment = require('moment');

$(document).ready(function(){
  $('#journal').submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var entry = new Journal(title, body);
    var count = entry.countWords();
    $('#word-count').text(count);
    $('#date').text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
    });
  });

$(document).ready(function(){
  $('#time').text(moment());
});

var apiKey = "adfb6c08f301ba43007da5fb6b0c50b9";

$(document).ready(function(){
  $('#weatherLocation').click(function(){
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
    $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
    });
  });
});
