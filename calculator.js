var elements = document.getElementsByClassName("a-button");
var numberRegex = new RegExp("^[0-9]$");
var expression = "";

var buttonClick = function (e) {
  e.preventDefault()
  let valPressed = e.srcElement.innerText;
  if (valPressed === "DEL") {
    deletePressed();
  } else if (valPressed === "RESET") {
    resetPressed();
  } else if (valPressed === "=") {
    let result = eval(expression);
        if (result % 1 !== 0) { 
            result = result.toFixed(3); 
        }
        document.querySelector(".result>h1").innerHTML = result;
        expression = result.toString();
  } else if (valPressed === "DEL") {
    deletePressed();
  } else if (numberRegex.test(valPressed) || valPressed === ".") {
    appendToExpression(valPressed);
  } else {
    appendToExpression(" " + valPressed + " ");
  }
  return false;
};

function appendToExpression(valPressed) {
  expression += valPressed;
  document.querySelector(".result>h1").innerHTML = expression;
}

function evaluateExpression() {
  try {
    var result = eval(expression);
    document.querySelector(".result>h1").innerHTML = result;
  } catch (error) {
    document.querySelector(".result>h1").innerHTML = "Error";
  }
}

function resetPressed() {
  expression = "";
  document.querySelector(".result>h1").innerHTML = "0";
}

function deletePressed() {
  if (expression.length > 0) {
    expression = expression.slice(0, -1);
    document.querySelector(".result>h1").innerHTML = expression;
  }
}

for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", buttonClick);
}