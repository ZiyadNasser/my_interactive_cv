var i = 0;
var txt = 'مرحبًا بكم في الصفحة الشخصية لـ';
var speed = 50;

function welcomeStart() {
  if (i < txt.length) {
    document.getElementById("startWelcome").innerHTML += txt.charAt(i);
    i++;
    setTimeout(welcomeStart, speed);
  } else {
    welcomeName(); 
  }
}

var i2 = 0;
var txt2 = 'زياد ناصر آل كدم';
var speed2 = 50;

function welcomeName() {
  if (i2 < txt2.length) {
    document.getElementById("nameWelcome").innerHTML += txt2.charAt(i2);
    i2++;
    setTimeout(welcomeName, speed2);
  }
}

window.onload = function() {
  welcomeStart();
};
