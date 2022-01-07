Hello A
Good Bye B
Good Bye C
Good Bye D
Hello E
Hello F
Hello G
Hello H
Hello I
Good Bye J

(function () {

var names = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}

})();
