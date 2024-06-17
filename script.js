const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual sua opinião sobre o chat gpt?",
            alternativas: [
        {
              texto:"alternativa 1"  
              afirmação:"afirmação "
}
{
   texto:"alternativa 2")
  

      ]      
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia (IA), o professor decidiu fazer uma sequência de aulas sobre esta ela. No fim de uma aule ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
        alternativas: [
            "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
            "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho, o professor realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
        alternativas: [
            "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
            "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores."
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            "Criar uma imagem utilizando uma plataforma de design como o Paint.",
            "Criar uma imagem utilizando um gerador de imagem de IA."
        ]
    },
    {
        enunciado:"bolsonaro ou lula?",
        alternativas: [
            "sim"
            "não",
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal ="";
function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto:
        botaoAlternativas.addEventlistener("click",()=>repostaselecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
function respostaselecionada(opcaoselecionada){
    const afirmacaoes = opcaoselecionada.afirmacoes
    historiafinal = afirmacoes;
    atual++;
    mostrapergunta();
}
mostraPergunta();
