let i = 1;
let qtdItem = document.getElementById("qtdItem").value


function AddQtd() {
  i++;
  document.getElementById("qtdItem").value = i;
}

function LessQtd() {
    if(i >=2){
        i = i - 1;
        document.getElementById("qtdItem").value = i;
    }
  
}
