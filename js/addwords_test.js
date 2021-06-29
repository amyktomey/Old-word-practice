// form to collect/validate input for the test...

function addWords() {
    var name = document.forms["chooseWords"]["Name"];
    var noun = document.forms["chooseWords"]["Noun"];
    var verb = document.forms["chooseWords"]["Verb"];
    var color = document.forms["chooseWords"]["Color"];

    if (name.value == "") {
        window.alert("Please enter your name.");
        name.focus();
        return false;
    }
    if (noun.value == "") {
        window.alert("Please enter a noun.  A noun is a person, place or thing.");
        name.focus();
        return false;
    }
    if (verb.value == "") {
        window.alert("Please enter a verb.  A verb is an action word");
        name.focus();
        return false;
    }
    if (color.value == "") {
        window.alert("Please enter a color. What is your favorite color?");
        name.focus();
        return false;
    }

    return true;
}

var a = 0;
var b = 0;
var c = 0;
function changeBackground() {
  var x = document.getElementById('bg');
  bg.style.backgroundColor = 'rgb('+a+', '+b+', '+c+')';
  a += 1;
  b += a + 1;
  c += b + 1;
  if (a > 255) a = a - b;
  if (b > 255) b = a;
  if (c > 255) c = b;
}
