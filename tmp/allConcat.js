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
