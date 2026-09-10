// BANCO DE PERGUNTAS DIVERSIFICADO
const questionBank = {
    english: [
        {
            q: "Complete: 'I wanted to go to the party, ___ I had to study for my test.'",
            options: ["because", "but", "so", "although"],
            answer: 1
        },
        {
            q: "Which word indicates contrast?",
            options: ["Furthermore", "However", "Therefore", "In addition"],
            answer: 1
        },
        {
            q: "Choose the correct linking word for cause: 'She stayed at home ___ it was raining.'",
            options: ["because", "although", "so", "but"],
            answer: 0
        },
        {
            q: "Which linking word expresses result or consequence?",
            options: ["Therefore", "Unless", "Whereas", "Despite"],
            answer: 0
        },
        {
            q: "Complete: '___ being tired, he finished the project.'",
            options: ["Although", "Despite", "Because", "Since"],
            answer: 1
        },
        {
            q: "Select the option that shows addition:",
            options: ["Moreover", "However", "Otherwise", "Instead"],
            answer: 0
        },
        {
            q: "Complete: 'You won't pass the exam ___ you study hard.'",
            options: ["if", "unless", "so", "because"],
            answer: 1
        },
        {
            q: "Which word means 'por outro lado' or 'enquanto que'?",
            options: ["Whereas", "In order to", "Consequently", "Besides"],
            answer: 0
        },
        {
            q: "Complete: 'He saved money ___ he could buy a new computer.'",
            options: ["so that", "because of", "in spite of", "due to"],
            answer: 0
        },
        {
            q: "Choose the correct connector: 'The game was canceled ___ heavy rain.'",
            options: ["due to", "although", "even though", "whereas"],
            answer: 0
        }
    ],
    portuguese: [
        {
            q: "O que é um modelo de linguagem (LLM) no contexto de IA?",
            options: [
                "Um robô físico que aprende línguas",
                "Um algoritmo treinado em grandes volumes de texto para prever a próxima palavra",
                "Um dicionário digital estático",
                "Um programa que apenas traduz textos sem entender o contexto"
            ],
            answer: 1
        },
        {
            q: "No contexto da escrita e comunicação, o que significa o termo 'Prompt'?",
            options: [
                "A resposta gerada por uma inteligência artificial",
                "A instrução ou comando fornecido pelo usuário para orientar a IA",
                "Um tipo de erro de digitação comum",
                "A velocidade de carregamento de um site"
            ],
            answer: 1
        },
        {
            q: "Qual figura de linguagem está presente em: 'A IA é um mar de conhecimento'?",
            options: ["Metáfora", "Metonímia", "Hipérbole", "Ironia"],
            answer: 0
        },
        {
            q: "Na análise linguística de textos de IA, o que é uma 'alucinação'?",
            options: [
                "Quando o usuário imagina coisas no código",
                "Quando a IA gera informações falsas ou sem base na realidade com tom de certeza",
                "Um vírus de computador que altera o texto",
                "A capacidade da IA de sentir emoções"
            ],
            answer: 1
        },
        {
            q: "Em um texto argumentativo, a tese representa:",
            options: [
                "O ponto de vista principal defendido pelo autor",
                "O exemplo prático citado na conclusão",
                "Os dados estatísticos apresentados",
                "A dúvida final do leitor"
            ],
            answer: 0
        },
        {
            q: "Qual conector estabelece uma relação de oposição/contraste?",
            options: ["Portanto", "No entanto", "Além disso", "Pois"],
            answer: 1
        },
        {
            q: "O termo 'Processamento de Linguagem Natural' (PLN) estuda:",
            options: [
                "A evolução biológica da fala humana",
                "A capacidade de computadores entenderem e gerarem linguagem humana",
                "A gramática normativa tradicional do português",
                "A criação de novas línguas artificiais"
            ],
            answer: 1
        },
        {
            q: "Identifique a frase com coesão textual adequada:",
            options: [
                "A IA evoluiu rápido, mas ela aprendeu novos dados.",
                "Estudei para a prova; portanto, fui muito bem nas questões.",
                "Comprei um livro contudo li ele inteiro ontem.",
                "Embora fizesse sol, fomos à praia se divertir."
            ],
            answer: 1
        },
        {
            q: "A coesão referencial por anáfora ocorre quando:",
            options: [
                "Um termo retoma uma informação dita anteriormente no texto",
                "Apresentamos uma ideia completamente nova",
                "Omitimos o verbo principal da oração",
                "Usamos palavras em outro idioma"
            ],
            answer: 0
        },
        {
            q: "O uso de linguagem clara e objetiva em engenharia de prompt visa:",
            options: [
                "Reduzir ambiguidade nas respostas do modelo",
                "Aumentar o tamanho do texto gerado",
                "Fazer a IA responder mais devagar",
                "Evitar o uso de palavras em português"
            ],
            answer: 0
        }
    ],
    math: [
        {
            q: "Se um modelo de IA analisa 120 dados por minuto, quantos dados analisará em 2 horas?",
            options: ["7.200", "14.400", "2.400", "12.000"],
            answer: 1
        },
        {
            q: "Em lógica condicional (Se P, então Q), se P é verdadeiro e Q é falso, o resultado é:",
            options: ["Verdadeiro", "Falso", "Indeterminado", "Nulo"],
            answer: 1
        },
        {
            q: "Qual a probabilidade de sortear um número par em um dado comum de 6 faces?",
            options: ["1/6", "1/3", "1/2", "2/3"],
            answer: 2
        },
        {
            q: "Qual a sequência correta da conversão do número binário 101 para decimal?",
            options: ["3", "5", "6", "7"],
            answer: 1
        },
        {
            q: "Se uma rede neural reduz o erro em 20% a cada ciclo, qual a porcentagem restante após 1 ciclo de 100%?",
            options: ["80%", "70%", "50%", "85%"],
            answer: 0
        },
        {
            q: "Qual é a média aritmética dos valores: 10, 20, 30 e 40?",
            options: ["20", "25", "30", "35"],
            answer: 1
        },
        {
            q: "Se f(x) = 3x + 5, qual o valor de f(4)?",
            options: ["12", "17", "20", "15"],
            answer: 1
        },
        {
            q: "Uma matriz 3x3 possui quantas células no total?",
            options: ["6", "9", "12", "3"],
            answer: 1
        },
        {
            q: "Qual o próximo número da sequência lógica: 2, 4, 8, 16, ___?",
            options: ["20", "24", "32", "64"],
            answer: 2
        },
        {
            q: "Em um conjunto de 100 dados, 15% são incorretos. Quantos dados estão corretos?",
            options: ["15", "75", "85", "90"],
            answer: 2
        }
    ]
};

// VARIÁVEIS DE ESTADO DO JOGO
let currentMode = '';
let playerName = '';
let currentQuestionIndex = 0;
let score = 0;
let timerInterval = null;
let secondsElapsed = 0;
let activeQuestions = []; // Guarda as perguntas embaralhadas da rodada

// FUNÇÃO PARA EMBARALHAR ARRAYS (Algoritmo Fisher-Yates)
function shuffleArray(array) {
    let shuffled = JSON.parse(JSON.stringify(array)); // Copia profunda
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// GERENCIAMENTO DE TELAS
function showScreen(screenId) {
    document.querySelectorAll('.card').forEach(card => card.classList.add('hidden'));
    document.getElementById(screenId).classList.remove('hidden');
}

// INICIAR O JOGO
function startGame(mode) {
    const inputName = document.getElementById('player-name').value.trim();
    playerName = inputName !== "" ? inputName : "Jogador " + Math.floor(Math.random() * 1000);
    
    currentMode = mode;
    currentQuestionIndex = 0;
    score = 0;
    secondsElapsed = 0;

    // Embaralha as perguntas da matéria escolhida
    activeQuestions = shuffleArray(questionBank[mode]);

    // Atualizar Badge de Modo
    const modeNames = {
        english: "🇺🇸 Inglês",
        portuguese: "🇧🇷 Português",
        math: "🔢 Matemática"
    };
    document.getElementById('mode-badge').innerText = modeNames[mode];

    showScreen('game-screen');
    startTimer();
    loadQuestion();
}

// CRONÔMETRO
function startTimer() {
    clearInterval(timerInterval);
    document.getElementById('timer-display').innerText = "⏱️ 00:00";
    timerInterval = setInterval(() => {
        secondsElapsed++;
        const mins = String(Math.floor(secondsElapsed / 60)).padStart(2, '0');
        const secs = String(secondsElapsed % 60).padStart(2, '0');
        document.getElementById('timer-display').innerText = `⏱️ ${mins}:${secs}`;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

// CARREGAR PERGUNTA
function loadQuestion() {
    const totalQuestions = activeQuestions.length;

    if (currentQuestionIndex >= totalQuestions) {
        endGame();
        return;
    }

    const currentQ = activeQuestions[currentQuestionIndex];

    // Atualizar número e barra de progresso
    document.getElementById('question-count').innerText = `Pergunta ${currentQuestionIndex + 1} de ${totalQuestions}`;
    const progressPercent = ((currentQuestionIndex) / totalQuestions) * 100;
    document.getElementById('progress-bar').style.width = `${progressPercent}%`;

    // Texto da pergunta
    document.getElementById('question-text').innerText = currentQ.q;

    // Embaralhar as alternativas também para não ficar sempre na mesma ordem
    // Mantendo a referência do índice correto
    let optionsWithIndex = currentQ.options.map((opt, idx) => ({
        text: opt,
        isCorrect: idx === currentQ.answer
    }));
    optionsWithIndex = shuffleArray(optionsWithIndex);

    // Renderizar botões de opção
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    optionsWithIndex.forEach((optObj, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = `${String.fromCharCode(65 + idx)}) ${optObj.text}`;
        btn.onclick = () => selectOption(optObj.isCorrect);
        optionsContainer.appendChild(btn);
    });
}

// SELEÇÃO DE RESPOSTA
function selectOption(isCorrect) {
    if (isCorrect) {
        score++;
    }

    currentQuestionIndex++;
    loadQuestion();
}

// FIM DE JOGO
function endGame() {
    stopTimer();
    
    const mins = Math.floor(secondsElapsed / 60);
    const secs = secondsElapsed % 60;
    const timeFormatted = `${mins}m ${secs}s`;

    document.getElementById('result-player-name').innerText = `Mandou bem, ${playerName}!`;
    document.getElementById('final-score').innerText = `${score} / ${activeQuestions.length}`;
    document.getElementById('final-time').innerText = timeFormatted;

    // Salvar Pontuação no localStorage
    saveScore(playerName, score, secondsElapsed, currentMode);

    showScreen('result-screen');
}

// SISTEMA DE RANKING E STORAGE
function saveScore(name, pts, timeSecs, mode) {
    let rankingData = JSON.parse(localStorage.getItem('ai_game_ranking')) || [];
    
    rankingData.push({
        name: name,
        score: pts,
        time: timeSecs,
        mode: mode,
        date: new Date().toLocaleDateString()
    });

    // Ordenar por pontos (decrescente) e por tempo (crescente)
    rankingData.sort((a, b) => b.score - a.score || a.time - b.time);

    localStorage.setItem('ai_game_ranking', JSON.stringify(rankingData));
}

function showRankingScreen() {
    showScreen('ranking-screen');
    filterRanking('english'); // Modo padrão ao abrir
}

function filterRanking(mode) {
    // Atualizar abas ativas
    const buttons = document.querySelectorAll('.ranking-tabs .tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    const modeIndex = { english: 0, portuguese: 1, math: 2 }[mode];
    if (buttons[modeIndex]) buttons[modeIndex].classList.add('active');

    const rankingData = JSON.parse(localStorage.getItem('ai_game_ranking')) || [];
    const filtered = rankingData.filter(item => item.mode === mode).slice(0, 5); // Top 5

    const tbody = document.getElementById('ranking-table-body');
    tbody.innerHTML = '';

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4">Nenhuma pontuação registrada neste modo.</td></tr>`;
        return;
    }

    filtered.forEach((item, idx) => {
        const mins = Math.floor(item.time / 60);
        const secs = item.time % 60;
        const timeFormatted = `${mins}m ${secs}s`;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${idx + 1}º</td>
            <td>${item.name}</td>
            <td><strong>${item.score}</strong>/10</td>
            <td>${timeFormatted}</td>
        `;
        tbody.appendChild(row);
    });
}

function resetToHome() {
    showScreen('home-screen');
    }
