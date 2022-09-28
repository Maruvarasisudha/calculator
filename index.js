
let screen = document.getElementById("calculator");


function myfunction(num) {
  screen.value += num;
}

function calculate() {

  try {
    screen.value = eval(screen.value);
  } catch (error) {
    alert("invalid");
  }
}
 function clearall() {
  screen.value = "";
}
function delet() {
  screen.value = screen.value.slice(0, -1);
}

