const quizData = [
    {
        questao: 'Qual é a linguagem de programação mais usada para desenvolvimento web?',
        a: 'Cobol',
        b: 'Pascal',
        c: 'JavaScript',
        d: 'Java',
        correct: 'c' 
    },

    {
        questao: 'Em programação, o que é um "laço ou loop"?',
        a: 'Uma estrutura condicional como: if e else',
        b: 'Uma estrutura de repetição como: While e For',
        c: 'Uma estrutura de compilação como: Link e Loop',
        d: 'Uma alocação dinâmica',
        correct: 'b' 
    },

    {
        questao: 'Em C++, qual função é usada para imprimir mensagens na tela?',
        a: 'cout << "A 4° é a correta!";',
        b: 'System.out.printf("A 3° não é a correta!");',
        c: 'print("Eu sou a correta!")',
        d: 'console.log("A correta é a 2°!");',
        correct: 'a' 
    },


    {
        questao: 'Quem foi o pai da computação?',
        a: 'Thomas Jonh Watson',
        b: 'Alan Mathison Turing ',
        c: 'Alan Jonh Turing',
        d: 'William Gordon Welchman',
        correct: 'b' 
    },


    {
        questao: 'Qual linguagem de programação não é Orientada a Objetos?',
        a: 'C',
        b: 'Python',
        c: 'Java',
        d: 'C++',
        correct: 'a'
        
    },

    {
       questao: 'Qual a linguagem de Programação mais usada em 2023?',
       a: 'JavaScript',
       b: 'Python',
       c: 'C++',
       d: 'C#',
       correct: 'b'
        
    },

    {
        questao: 'Como se chama a sigla HTML?',
        a: 'Hypertext Markup Language',
        b: 'Json Object Notation',
        c: 'Cascadubg Style Sheet',
        d: 'Hypertitle Markup Language',
        correct: 'a'
    },

    {
        questao: 'Qual linguagem derivada do C foi criada pela Microsoft?',
        a: 'Pascal',
        b: 'Java',
        c: 'C++',
        d: 'C#',
        correct: 'd'
    },

    {
        questao: 'Quando foi criado o primeiro Computador?',
        a: '1953',
        b: '1921',
        c: '1946',
        d: '1942',
        correct: 'c'
    },

    {
        questao: 'Qual é a diferença fundamental entre "=="" e "===" em JavaScript?',
        a: '"==" é usado para comparações restritas, enquanto "===" é usado para comparações',
        b: '"==" é usado para comparações de igualdade de valor e tipo, enquanto "===" é usado apenas para comparações de valor.',
        c: '"==" e "===" são a mesma coisa.',
        d: '"==" é usado para comparações de igualdade de valor, enquanto "===" é usado para comparações de igualdade de valor e tipo.',
        correct: 'd'
    }

    
];


// Constante de resposta
const respostaEls = document.querySelectorAll(".resposta");

const quiz = document.getElementById("quiz");

const questaoEl = document.getElementById("questao");
const r1 = document.getElementById("text_a");
const r2 = document.getElementById("text_b");
const r3 = document.getElementById("text_c");
const r4 = document.getElementById("text_d");

const btnResponder =  document.getElementById("responder");
let pts = 0;
let quizAtual = 0;


recarregar();


function recarregar(){
    resetRespostas();

    const quizAtualData = quizData[quizAtual];

    questaoEl.innerText = quizAtualData.questao;

    r1.innerText = quizAtualData.a;
    r2.innerText = quizAtualData.b;
    r3.innerText = quizAtualData.c;
    r4.innerText = quizAtualData.d;

}

function resetRespostas(){
    respostaEls.forEach((respostaEl) => {
       respostaEl.checked = false;
    });
}



function getSelected(){

    // definir como indefinida
    let resposta = undefined;

    // laço da resposta selecionada
    respostaEls.forEach((respostaEl) => {
        if(respostaEl.checked){
            resposta =  respostaEl.id;
        }
    });

    return resposta;
    
}


btnResponder.addEventListener("click", () => {
    const resposta = getSelected();

    if (!resposta) {
        // Caso n selecione nada.
        alert("Selecione uma resposta");
        return;
    }

    if(resposta){
        if(resposta === quizData[quizAtual].correct){
            pts++;
        }

        quizAtual++;

        if(quizAtual < quizData.length){
            recarregar();
        }

        else{
            quiz.innerHTML = `<center><h2>Você respondeu corretamente ${pts}/${quizData.length} perguntas.</h2></center> <button onclick="location.reload()">Recarregar</button>`
            if(pts === quizData.length){
                alert("Genial😎")
            }

            else if(pts === quizData.length - 1 ){
                alert("Se acertar mais uma é gênio(a)😊")
            }

            else if(pts === quizData.length - 2){
                alert("Acerta mais ✌ ai")
            }
        }
    }   

});