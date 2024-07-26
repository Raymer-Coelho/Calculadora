function display(value){ 
  document.getElementById("resultado").value += value  

}

function calcular() {
  let expression = document.getElementById("resultado").value
  let result = eval(expression)
  document.getElementById("resultado").value = result  
}

function voltar(){
  let display = document.getElementById("resultado");
  display.value = display.value.slice(0, -1);
}

function apagar() {
  document.getElementById("resultado").value = ""
}