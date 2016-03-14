exports.Journal = function(title, body){
  this.title = title;
  this.body = body;
};

exports.Journal.prototype.countWords = function(){
  var bodyArr = this.body.split(" ");

  var wordCount = 0;

  bodyArr.forEach(function() {
    wordCount++;
    console.log("things and stuff");
  });

  return wordCount;
};
