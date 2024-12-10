var marcacao = 'O';
var contador = 0;
var casas = [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ']
var fimDoJogo = false
var velha = false



function marcaOpcao(op){
  let marcar = document.querySelector(`#q${op}`)
  marcar.innerHTML = `<p>X</p>`
    }

function marca(op){
      let marcar = document.querySelector(`#ln${op}`)
      if (contador%2==0) {
        marcacao = 'X'
        marcar.innerHTML = `<p>${marcacao}</p>`
        casas [op] = marcacao
      }

      else {
        marcacao = 'O'
        marcar.innerHTML = `<p>${marcacao}</p>`
        casas [op] = marcacao
      }
      contador += 1
      validaVecedor()

 }

 function validaVecedor(){

  let linhaSuperior = casas[1]==casas[2]&&casas[2]==casas[3]&&casas[3]!=' '
  let 
 
 
 
  if (linhaSuperior){
    alert (`o vencendor é ` + marcacao)

  }
    
 
 }

 