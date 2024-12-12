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

  let linhaInfHorizontal = casas[7]==casas[8]&&casas[8]==casas[9]&&casas[9]!=' '
  let linhaFrontHorizontal = casas[1]==casas[2]&&casas[2]==casas[3]&&casas[3]!=' '
  let linhaSupHorizontal = casas[4]==casas[5]&&casas[5]==casas[6]&&casas[6]!=' '

  let linhaEsqVertical = casas[1]==casas[4]&&casas[4]==casas[7]&&casas[7]!=' '
  let linhaMeioVertical = casas[2]==casas[5]&&casas[5]==casas[8]&&casas[8]!=' '
  let linhaDirVertical = casas[3]==casas[6]&&casas[6]==casas[9]&&casas[9]!=' '
  
  let linhaDiagonalA = casas[9]==casas[5]&&casas[5]==casas[1]&&casas[1]!=' '
  let linhaDiagonalB = casas[3]==casas[5]&&casas[5]==casas[7]&&casas[7]!=' '
 
  let  validaPrenchencimento = linhaDiagonalA || linhaDiagonalB || linhaDirVertical  || linhaEsqVertical || linhaMeioVertical || linhaSupHorizontal || linhaFrontHorizontal || linhaInfHorizontal

  if (validaPrenchencimento){
    alert (`o vencendor é ` + marcacao)

  }
  else if (contador == 9) {

  alert (`empate`)

  }
 }