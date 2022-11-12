let x = document.querySelector(".x");
let bolinha = document.querySelector(".o");
let caixas = document.querySelectorAll('.box');
let botoes = document.querySelectorAll("#buttons-container");
let mensagem = document.getElementById("messageText");
let conteudoMensagem = document.querySelector("#message");
let segundoJogador;

// contador de jogadas
let jogador1 = 0;
let jogador2 = 0;

// chamando evento dentro das caixas
for(i=0;i<caixas.length;i++){
    caixas[i].addEventListener("click", function(){
        let el;
        if(jogador1==jogador2){
           //x
           el = x;
        }
        else{
            //o
            el = bolinha;
        }

        // verifica se já tem x ou 0 no código
        if(this.childNodes.length==0){
            let cloneElemento = el.cloneNode(true); //clonando elemento
            this.appendChild(cloneElemento);
            // computando jogada
            if(jogador1 == jogador2){
            jogador1++
                }
            else{
             jogador2++
            }
            // checa quem venceu

            checkWinCondition();
        }
        
       });
       
}  

function checkWinCondition(){
    let bloco1 = document.getElementById("block-1");
    let bloco2 = document.getElementById("block-2");
    let bloco3 = document.getElementById("block-3");
    let bloco4 = document.getElementById("block-4");
    let bloco5 = document.getElementById("block-5");
    let bloco6 = document.getElementById("block-6");
    let bloco7 = document.getElementById("block-7");
    let bloco8 = document.getElementById("block-8");
    let bloco9 = document.getElementById("block-9");

    
    if(bloco1.childNodes.length > 0 && bloco2.childNodes.length >0 && bloco3.childNodes.length>0 ){
        let b1 = bloco1.childNodes[0].className;
        let b2 = bloco2.childNodes[0].className;
        let b3 = bloco3.childNodes[0].className;

        if( b1=='x' && b2 =='x'&& b3=='x' ){
            declararVencedor('x');

        } else if(b1=='o' && b2 =='o'&& b3=='o'){
            declararVencedor('o');
        }  
    }
    if(bloco4.childNodes.length > 0 && bloco5.childNodes.length >0 && bloco6.childNodes.length>0){
        let b4 = bloco4.childNodes[0].className;
        let b5 = bloco5.childNodes[0].className;
        let b6 = bloco6.childNodes[0].className;

        if( b4=='x' && b5 =='x'&& b6=='x' ){
            declararVencedor('x');
        } else if(b4=='o' && b5 =='o'&& b6=='o'){
            declararVencedor('o');
        }
    }
    if(bloco7.childNodes.length > 0 && bloco8.childNodes.length >0 && bloco9.childNodes.length>0){
        let b7 = bloco7.childNodes[0].className;
        let b8 = bloco8.childNodes[0].className;
        let b9 = bloco9.childNodes[0].className;

        if( b7=='x' && b8 =='x'&& b9=='x' ){
            declararVencedor('x');
        } else if(b7=='o' && b8 =='o'&& b9=='o'){
            declararVencedor('o');
        }
    }

    if(bloco1.childNodes.length > 0 && bloco4.childNodes.length >0 && bloco7.childNodes.length>0){
        let b1 = bloco1.childNodes[0].className;
        let b4 = bloco4.childNodes[0].className;
        let b7 = bloco7.childNodes[0].className;

        if( b1=='x' && b4 =='x'&& b7=='x' ){
            declararVencedor('x');
        } else if(b1=='o' && b4 =='o'&& b7=='o'){
            declararVencedor('o');
        }
    }
    if(bloco2.childNodes.length > 0 && bloco5.childNodes.length >0 && bloco8.childNodes.length>0){
        let b2 = bloco2.childNodes[0].className;
        let b5 = bloco5.childNodes[0].className;
        let b8 = bloco8.childNodes[0].className;

        if( b2=='x' && b5 =='x'&& b8=='x' ){
            declararVencedor('x');
        } else if(b2=='o' && b5 =='o'&& b8=='o'){
            declararVencedor('o');
        }
    }
    if(bloco3.childNodes.length > 0 && bloco6.childNodes.length >0 && bloco9.childNodes.length>0){
        let b3 = bloco3.childNodes[0].className;
        let b6 = bloco6.childNodes[0].className;
        let b9 = bloco9.childNodes[0].className;

        if( b3=='x' && b6 =='x'&& b9=='x' ){
            declararVencedor('x');
        } else if(b3=='o' && b6 =='o'&& b9=='o'){
            declararVencedor('o');
        }
    }
    if(bloco1.childNodes.length > 0 && bloco5.childNodes.length >0 && bloco9.childNodes.length>0){
        let b1 = bloco1.childNodes[0].className;
        let b5 = bloco5.childNodes[0].className;
        let b9 = bloco9.childNodes[0].className;

        if( b1=='x' && b5 =='x'&& b9=='x' ){
            declararVencedor('x');
        } else if(b1=='o' && b5 =='o'&& b9=='o'){
            declararVencedor('o');
        }
    }
    if(bloco3.childNodes.length > 0 && bloco5.childNodes.length >0 && bloco7.childNodes.length>0){
        let b3 = bloco3.childNodes[0].className;
        let b5 = bloco5.childNodes[0].className;
        let b7 = bloco7.childNodes[0].className;

        if( b3=='x' && b5 =='x'&& b7=='x' ){
            declararVencedor('x');
        } else if(b3=='o' && b5 =='o'&& b7=='o'){
            declararVencedor('o');
        }
    }
    //deu velha
    let contador = 0;
    for(let i = 0; i< caixas.length ; i++) {
        if(caixas[i].childNodes[0] != undefined){
            contador++;
        }
    }
    if (contador==9){
        alert("deu velha amore")
        let boxRemove = document.querySelectorAll(".box div");
        for (let i = 0; i<boxRemove.length;i++){
            boxRemove[i].parentNode.removeChild(boxRemove[i]);
        }
    }
}

// funçao que limpa o jogo, declara o vencedor e atualiza o placar.
function declararVencedor(vencedor){
    let placarX = document.getElementById("scoreboard-1");
    let placarBolinha = document.getElementById("scoreboard-2");
    let msg = "";

    if (vencedor =="x"){
        placarX.textContent = parseInt(placarX.textContent)+1;
        msg = 'o Jogador X venceu!';
        //exibe a msg
        conteudoMensagem.innerHTML = msg;
        mensagem.classList.remove("hide");
    
    }
    else if(vencedor=="o"){
        placarBolinha.textContent = parseInt(placarBolinha.textContent)+1;
        msg = "o jogador O venceu!";
        //exibe a msg
        conteudoMensagem.innerHTML = msg;
        mensagem.classList.remove("hide");
    }
    setTimeout(function(){
        mensagem.classList.add("hide");
    }, 2000);

    //zera as jogadas

    player1 = 0;
    player2 = 0;

    //remove x e o

    let boxRemove = document.querySelectorAll(".box div");
    for (let i = 0; i<boxRemove.length;i++){
        boxRemove[i].parentNode.removeChild(boxRemove[i]);
    }
}


