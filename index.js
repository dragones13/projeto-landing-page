 var setaDireita = window.document.getElementById("seta-direita")
 
 var leonardo = window.document.getElementById("leonardo")
 var samanta = window.document.getElementById("samanta") 
 var bruna = window.document.getElementById("bruna")

 var setaEsquerda = window.document.getElementById("seta-esquerda")
 var card = window.document.getElementsByClassName("card")

 function rolarParaDireita() {
    leonardo.style ="display:none"
    bruna.style ="display:flex"
    setaEsquerda.style = "display:flex; margin-top:px;"    
    setaDireita.style = "display:none"
    card.style = "display:none"

   }
 function rolarParaEsquerda(){
   bruna.style = "display:none"
   leonardo.style = "display:flex"
   setaEsquerda.style = "display:none"
   

 }