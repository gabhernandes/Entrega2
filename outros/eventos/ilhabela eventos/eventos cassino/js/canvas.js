/*
 * A cada refresh (F5) da página, o método "montarFigura()"
 * é executado.
 * */
window.onload=function(){ 
       montarFigura();
};
  
function montarFigura() {
  
           /*
            * Capturamos o objeto/container canvas através do seu ID.
            * Você também pode optar por utilizar jQuery, a lógica é a mesma, só
            * muda a sintaxe.
            * */
             canvas = document.getElementById("canvasQuadrado");
              
             /*
              * Aqui é onde toda a 'mágica', começa a ocorrer. Iremos usar o método
              * "getContext('2d')" que irá "converter" nosso simples 
               * container em um objeto 2D onde
              * poderemos trabalhar com diversos métodos que veremos mais adiante.
              * */
             ctx = canvas.getContext('2d');
             console.log("Capturando canvasQuadrado em formato 2D");
        
}

window.onload=function(){ 
       montarFigura();
};
  
function montarFigura() {
  
            
             canvas = document.getElementById("canvasQuadrado");
              
             console.log("Capturando canvasQuadrado em formato 2D");
             ctx = canvas.getContext('2d');
              
             console.log("Colorindo canvas no plano x,y");
              
             //setamos a cor como preta para depois criar o retangulo
             ctx.fillStyle="black";
              
             //criamos o retangulo no plano passando os 4 vertices que o mesmo possui
             ctx.fillRect(0,0,150,75);
              
        
}

window.onload = function() {
       montarFigura();
};
  
function montarFigura() {
  
       canvas = document.getElementById("canvasQuadrado");
        
       /*
        * Adicionamos um listener ao canvas, assim toda vez que
        * ao clicar no canvas este método será chamado.
        * */
       canvas.addEventListener('click', function(e) {
              
             var rect = this.getBoundingClientRect();
              
             //Criamos uma estrutura contendo as coordenadas atuais do mouse
             var coords = {
                    x : e.clientX - rect.left,
                    y : e.clientY - rect.top
             };
             console.log("Coordenada Atual: " + coords.x + ", " + coords.y);
              
             //Capturamos o contexto 2d do canvas
             ctx = this.getContext('2d');
              
             //Preenchemos a cor em hexadecimal
             ctx.fillStyle = "#FFDEAD";
              
             //Criamos o retangulo na tela
             ctx.fillRect(0, 0, 150, 75);
       }, false);
  
       console.log("Capturando canvasQuadrado em formato 2D");
       ctx = canvas.getContext('2d');
  
       console.log("Colorindo canvas no plano x,y");
  
       // setamos a cor como preta para depois criar o retangulo
       ctx.fillStyle = "black";
  
       // criamos o retangulo no plano passando os 4 vertices que o mesmo possui
       ctx.fillRect(0, 0, 150, 75);
  
}

window.onload = function() {
       montarFigura();
};
  
function montarFigura() {
  
       canvas = document.getElementById("canvasQuadrado");
  
       canvas
         .addEventListener(
          'click',
         function(e) {
         var rect = this.getBoundingClientRect();
                                   
         var coords = {
          x : e.clientX - rect.left,
          y : e.clientY - rect.top
         };
         console.log("Coordenada Atual: " + coords.x + ", "
          + coords.y);
                     
         /*
          * Essa função nos garante que apenas se o usuário clicar dentro do
          * retângulo, a cor será alterada
          * */
          if (isPontoInRec(coords.x, coords.y)) {
             console.log("Você clicou dentro do retângulo. Iniciando mudança de cores...");
              // Capturamos o contexto 2d do canvas
             ctx = this.getContext('2d');
             // Preenchemos a cor em hexadecimal
             ctx.fillStyle = "#FFDEAD";
             // Criamos o retangulo na tela
             ctx.fillRect(0, 0, 150, 75);
  
         }
        }, false);
  
       console.log("Capturando canvasQuadrado em formato 2D");
       ctx = canvas.getContext('2d');
  
       console.log("Colorindo canvas no plano x,y");
  
       ctx.fillStyle = "black";
  
       ctx.fillRect(0, 0, 150, 75);
  
}
  
/*
 * Está função verifica se o ponto x,y está dentro do retângulo
 * */
function isPontoInRec(x, y) {
    var rectDimensions = [0,0,150,75];
       var click_x = x;
       var click_y = y;
  
       if (click_x >= rectDimensions[0] && click_x 
        <= rectDimensions[0] + rectDimensions[2]
         && click_y >= rectDimensions[1] && click_y 
         <= rectDimensions[1] + rectDimensions[3]) {
             return true;
       }
  
       return false;
}

