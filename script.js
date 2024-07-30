const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado:"Qual o melhor jogador na opinião do Marco",
      alternativas: [
  {
 texto: "messi",
afirmaçao: "afirmaçao"
},
{
  texto: "ronaldo",
  afirmação:"afirmação"
}
]
}

}
enunciado:"voce gosta de futebol"
      alternativas: [
        
        "Reyna";
        "Jett";
            ]
},
{
    enunciado:"Qual foi o peak do Matheus?"
      alternativas: [
        "Imortal 1";
        "Ascendente 3";
            ]
},
{
    enunciado:"Qual o main do Matheus?"
      alternativas: [
        "Jett";
        "Clove";
            ]
},
{
    enunciado:"perguntas 5"
      alternativas: [
        "alternativa 1";
        "alternativa 2";
            ]
},
];























let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {  
    if (Atual>= perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();;
            
