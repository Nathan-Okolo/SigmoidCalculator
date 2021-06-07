// TITLE: Sigmoid Calculator

const calculatorForm = document.getElementById("calculator");
const clearButton = document.getElementById("clear-all");
const inputLists = document.getElementsByTagName("input");
clearButton.addEventListener("click", clearAllFields);




function outcome() { 
    const x = Number(document.getElementById("X").value);
    const answer = 1/(1+Math.exp(-x));
    document.getElementById("result").innerHTML = String(answer); 
    console.log(x);
    console.log(answer)
}

function clearAllFields() {
  for (let input of inputLists) {
    input.value = null;
  }

  const resultBox = document.getElementById("result");
  resultBox.innerText = "?";
  resultBox.className = "";
}
