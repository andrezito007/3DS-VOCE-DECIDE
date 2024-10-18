const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultados');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "Você é um adolescente de 15 anos que após seus pais lhe contarem que vão viajar, eles te enviam para passar alguns dias na casa de sua vó, cerca de uma semana, você fica muito animado pois é a primeira vez que passará alguns dias com sua vó. No dia seguinte seus pais vão para a viagem e você espera na frente da casa de sua avó esperando ela abrir para você, mas estranhamente ninguém abre e você decide abrir por si só. Ao entrar na casa, você você se depara com uma casa muito suja e desorganizada, e agora você tem duas escolhas:  ",
        alternativas: [
            {
                texto:'Procurar sua avó pela casa e aproveitar para explorar o local.',
                afirmacao: 'Você decidiu explorar a casa de sua avó apesar de estar muito suja.'
            },
            {
                texto:'Entrar no cômodo da sala e apenas sentar no sofá esperando.',
                afirmacao: 'Você senta no sofá a espera de sua avó e fica enojado(a) com a sujeira.'
            }
            
        ]
    },
    {
        enunciado: "Você olha ao redor e percebe um papel meio rasgado jogado no chão, como você é muito curioso(a), você vai até o papel e percebe que é uma lista de regras, contendo apenas 4: 'Regra 1: Se você está lendo isso, você vai morrer, então faça que sua morte seja menos dolorosa, não vá ao quarto 02; Regra 2: Se você ver ela apenas sorria, você não quer ver ela brava...; Regra 3: Em hipótese alguma diga que está com fome, acredite ela que vai se alimentar; Regra 4: Não tente abrir a porta, você não vai conseguir escapar. Aproveite sua estadia, pois será a ultima.' ",
        alternativas: [
            {
                texto:'Você olha para o papel e decide ignorar achando que é apenas uma brincadeira.',
                afirmacao: 'Você ignorou o papel com o pensamento de ser apenas uma brincadeira de sua vó. '
            },
            {
                texto:'Você pensa que a escrita é verdadeira por conta da situação da casa e decide seguir as regras a risca.',
                afirmacao: 'Você escolheu seguir as regras a risca pois não quer desafiar a morte.'
            }
            
        ]
    },
    {
        enunciado: "Ao terminar de ler o papel, você olha para trás e vê sua vó com um rosto deformado por conta de um 'acidente' que ocorreu antigamente, você decide não questionar e apenas seguir as regras por medo, então logo dá um sorriso. Após isso ela te chama para a cozinha e pergunta se você está com fome, você rapidamente diz que não pois já estava sem fome. Ela apenas te encara com um sorriso.",
        alternativas: [
            {
                texto:'Você sorri de volta e vai até o banheiro para respirar um pouco',
                afirmacao: 'Você encontra sua vó que lhe da um sorriso mas você consegue despistar ela indo até o banheiro.'
            },
            {
                texto:'Você vai até o quarto 03 para tentar organizar suas ideias e saber se era uma brincadeira ou não.',
                afirmacao: 'Você encontra sua vó que lhe da um sorriso mas você consegue despistar ela e vai até o quarto e começa a pensar se tudo isso não se passa de uma brincadeira de boas vindas.'
            }
            
        ]
    },
    {
        enunciado: "Ao olhar ao redor do cômodo você se depara com um corpo em decomposição e percebe que era de um primo seu que havia sumido há 1 mês, você se assusta e sai do cômodo correndo e se depara com sua vó com duas facas te esperando e você também percebe que ela está sem a mandibula. O que você faz?",
        alternativas: [
            {
                texto:'Você dá um sorriso debochado e com medo e sai correndo e sem querer entra no quarto 02',
                afirmacao: 'Após se ver numa situação deseperadora de sua vó querendo te matar, você sai correndo e sem querer entra no quarto 2.'
            },
            {
                texto:'Você apenas se vê naquela situação e desce as escadas correndo e acaba tropeçando e caindo no quarto 2.',
                afirmacao: 'Quando você tentou escapar de sua vó pelas escadas, você acabou tropeçando e caindo dentro do quarto 2.'
            }
            
        ]
    },
    {
        enunciado: "Ao olhar dentro do quarto 2 você se depara com uma seita onde estão seus pais e toda sua família, você acaba descobrindo que sua família esta querendo te sacrificar para completar um ritual quem vem sendo feito desde os seus ancestrais. Todos te olham...eles ja sabem que você está ali...eles estão indo até você... você não tem saída...o que você faz?",
        alternativas: [
            {
                texto:'Você apenas aceita sua morte pois entende que nasceu por aquele momento e acaba se entregando ao ritual.',
                afirmacao: 'Você vê todos os membros da seita indo em sua direção e você não faz nenhum movimento brusco, apenas aceita o seus fim. Você morreu.'
            },
            {
                texto:'Você se desespera e tenta fugir indo até a porta de entrada.',
                afirmacao: 'Você corre até a porta mas sua avó está te esperando e consegue te capturar e te levar até a seita. Você morreu.'
            }
            
        ]
     }
    ]

let atual = 0;
let perguntaAtual;
let historiaFinal = '';

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = '';
    mostraAlternativas();
}


function mostraAlternativas(){
    for( const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement('button');
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener('click', () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas)
        }
    }
    function respostaSelecionada(opcaoSelecionada) {
        const afirmacao = opcaoSelecionada.afirmacao;
        historiaFinal += afirmacao + ' ';
        atual++;
        mostraPergunta()
    }

    function mostraResultado(){
        caixaPerguntas.textContent = ' Mesmo seguindo as regras, você não tinha escapatória. Você está morto! Você vai passar um tempo na casa de sua avó pois seus pais vão viajar, você acaba descobrindo uma seita secreta e decide escapar, mas no final você morre. Logo a seguir você verá suas escolhas que foram feitas durante a história:'
        textoResultado.textContent = historiaFinal;
        caixaAlternativas.textContent = '';
    }

mostraPergunta();