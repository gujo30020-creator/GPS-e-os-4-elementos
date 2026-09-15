// BANCO DE PERGUNTAS EXPANDIDO (30 PERGUNTAS POR MÓDULO)
const questionBank = {
    english: [
        { q: "Complete: 'I wanted to go to the party, ___ I had to study for my test.'", options: ["because", "but", "so", "although"], answer: 1 },
        { q: "Which word indicates contrast?", options: ["Furthermore", "However", "Therefore", "In addition"], answer: 1 },
        { q: "Choose the correct linking word for cause: 'She stayed at home ___ it was raining.'", options: ["because", "although", "so", "but"], answer: 0 },
        { q: "Which linking word expresses result or consequence?", options: ["Therefore", "Unless", "Whereas", "Despite"], answer: 0 },
        { q: "Complete: '___ being tired, he finished the project.'", options: ["Although", "Despite", "Because", "Since"], answer: 1 },
        { q: "Select the option that shows addition:", options: ["Moreover", "However", "Otherwise", "Instead"], answer: 0 },
        { q: "Complete: 'You won't pass the exam ___ you study hard.'", options: ["if", "unless", "so", "because"], answer: 1 },
        { q: "Which word means 'por outro lado' ou 'enquanto que'?", options: ["Whereas", "In order to", "Consequently", "Besides"], answer: 0 },
        { q: "Complete: 'He saved money ___ he could buy a new computer.'", options: ["so that", "because of", "in spite of", "due to"], answer: 0 },
        { q: "Choose the correct connector: 'The game was canceled ___ heavy rain.'", options: ["due to", "although", "even though", "whereas"], answer: 0 },
        { q: "Which linking word introduces an example?", options: ["For instance", "In conclusion", "As a result", "On the contrary"], answer: 0 },
        { q: "Complete: 'She works out daily ___ keep fit.'", options: ["in order to", "because", "so", "unless"], answer: 0 },
        { q: "Select the word that expresses similarity:", options: ["Likewise", "Conversely", "Whereas", "Otherwise"], answer: 0 },
        { q: "Complete: '___ the rain, we went for a walk.'", options: ["In spite of", "Because", "So", "Since"], answer: 0 },
        { q: "Which connector indicates a summary or conclusion?", options: ["In summary", "First of all", "Meanwhile", "Besides"], answer: 0 },
        { q: "Complete: 'He is very smart; ___, he is very humble.'", options: ["furthermore", "because", "unless", "so"], answer: 0 },
        { q: "Which word shows time sequence?", options: ["Meanwhile", "Despite", "Although", "Whereas"], answer: 0 },
        { q: "Complete: 'Take an umbrella ___ it rains.'", options: ["in case", "unless", "however", "therefore"], answer: 0 },
        { q: "Which word means 'portanto'?", options: ["Therefore", "Although", "Unless", "Despite"], answer: 0 },
        { q: "Complete: '___ he was late, he didn't miss the beginning.'", options: ["Even though", "Because", "Due to", "So"], answer: 0 },
        { q: "Select the linking word used for emphasis:", options: ["Indeed", "However", "Unless", "Otherwise"], answer: 0 },
        { q: "Complete: 'I love coffee, ___ my brother prefers tea.'", options: ["whereas", "because", "therefore", "so"], answer: 0 },
        { q: "Which word introduces a condition?", options: ["Provided that", "Consequently", "As a result", "In addition"], answer: 0 },
        { q: "Complete: 'He failed the test ___ he didn't study.'", options: ["since", "although", "despite", "however"], answer: 0 },
        { q: "Which connector expresses alternative choices?", options: ["Otherwise", "Furthermore", "Thus", "In fact"], answer: 0 },
        { q: "Complete: 'She speaks English ___ French fluently.'", options: ["as well as", "despite", "however", "unless"], answer: 0 },
        { q: "Which word means 'além disso'?", options: ["Besides", "However", "Although", "Unless"], answer: 0 },
        { q: "Complete: '___ we hurry, we will miss the train.'", options: ["Unless", "Because", "So", "Since"], answer: 0 },
        { q: "Which linking word means 'como resultado'?", options: ["Consequently", "Although", "In spite of", "Whereas"], answer: 0 },
        { q: "Complete: 'The event was successful ___ the team's hard work.'", options: ["thanks to", "although", "unless", "even though"], answer: 0 }
    ],
    portuguese: [
        { q: "O que é um modelo de linguagem (LLM) no contexto de IA?", options: ["Um robô físico que aprende línguas", "Um algoritmo treinado em grandes volumes de texto para prever a próxima palavra", "Um dicionário digital estático", "Um programa que apenas traduz textos sem entender o contexto"], answer: 1 },
        { q: "No contexto da escrita e comunicação, o que significa o termo 'Prompt'?", options: ["A resposta gerada por uma inteligência artificial", "A instrução ou comando fornecido pelo usuário para orientar a IA", "Um tipo de erro de digitação comum", "A velocidade de carregamento de um site"], answer: 1 },
        { q: "Qual figura de linguagem está presente em: 'A IA é um mar de conhecimento'?", options: ["Metáfora", "Metonímia", "Hipérbole", "Ironia"], answer: 0 },
        { q: "Na análise linguística de textos de IA, o que é uma 'alucinação'?", options: ["Quando o usuário imagina coisas no código", "Quando a IA gera informações falsas ou sem base na realidade com tom de certeza", "Um vírus de computador que altera o texto", "A capacidade da IA de sentir emoções"], answer: 1 },
        { q: "Em um texto argumentativo, a tese representa:", options: ["O ponto de vista principal defendido pelo autor", "O exemplo prático citado na conclusão", "Os dados estatísticos apresentados", "A dúvida final do leitor"], answer: 0 },
        { q: "Qual conector estabelece uma relação de oposição/contraste?", options: ["Portanto", "No entanto", "Além disso", "Pois"], answer: 1 },
        { q: "O termo 'Processamento de Linguagem Natural' (PLN) estuda:", options: ["A evolução biológica da fala humana", "A capacidade de computadores entenderem e gerarem linguagem humana", "A gramática normativa tradicional do português", "A criação de novas línguas artificiais"], answer: 1 },
        { q: "Identifique a frase com coesão textual adequada:", options: ["A IA evoluiu rápido, mas ela aprendeu novos dados.", "Estudei para a prova; portanto, fui muito bem nas questões.", "Comprei um livro contudo li ele inteiro ontem.", "Embora fizesse sol, fomos à praia se divertir."], answer: 1 },
        { q: "A coesão referencial por anáfora ocorre quando:", options: ["Um termo retoma uma informação dita anteriormente no texto", "Apresentamos uma ideia completamente nova", "Omitimos o verbo principal da oração", "Usamos palavras em outro idioma"], answer: 0 },
        { q: "O uso de linguagem clara e objetiva em engenharia de prompt visa:", options: ["Reduzir ambiguidade nas respostas do modelo", "Aumentar o tamanho do texto gerado", "Fazer a IA responder mais devagar", "Evitar o uso de palavras em português"], answer: 0 },
        { q: "Qual conector expressa uma ideia de adição?", options: ["Ademais", "Contudo", "Porquanto", "Todavia"], answer: 0 },
        { q: "O que caracteriza a ambiguidade em um texto?", options: ["Possibilidade de mais de uma interpretação para uma mesma mensagem", "Clareza excessiva no vocabulário", "Uso exclusivo de termos técnicos", "Falta de pontuação final"], answer: 0 },
        { q: "Na comunicação homem-máquina, a 'Engenharia de Prompt' refere-se a:", options: ["Estruturar comandos para obter os melhores resultados da IA", "Consertar os componentes físicos do servidor", "Criar novas linguagens de programação", "Traduzir manuais do inglês para o português"], answer: 0 },
        { q: "Qual das opções apresenta uma conjunção explicativa?", options: ["Pois (antes do verbo)", "Portanto", "Embora", "Conforme"], answer: 0 },
        { q: "O recurso linguístico de omitir um termo subentendido pelo contexto chama-se:", options: ["Elipse", "Pleonasmo", "Hipérbole", "Catacrese"], answer: 0 },
        { q: "Em um texto formal, a coerência garante que:", options: ["As ideias façam sentido entre si e não haja contradições", "O texto tenha exatamente 500 palavras", "Todas as frases sejam curtas", "Não se usem pronomes pessoais"], answer: 0 },
        { q: "A polissemia ocorre quando:", options: ["Uma mesma palavra possui múltiplos significados dependendo do contexto", "Duas palavras têm o mesmo som mas grafias diferentes", "Uma palavra cai em desuso no idioma", "O texto apresenta erros gramaticais"], answer: 0 },
        { q: "Qual conector introduz uma condição em português?", options: ["Desde que", "Portanto", "A fim de que", "Posto que"], answer: 0 },
        { q: "A reescrita de textos mantendo o sentido original é chamada de:", options: ["Paráfrase", "Paródia", "Plágio", "Síntese"], answer: 0 },
        { q: "O tom de voz em um prompt serve para:", options: ["Definir o estilo e o nível de formalidade da resposta da IA", "Programar o código fonte da aplicação", "Aumentar a velocidade do processador", "Apenas corrigir a ortografia do usuário"], answer: 0 },
        { q: "O conector 'por conseguinte' indica uma relação de:", options: ["Conclusão", "Causa", "Concessão", "Adição"], answer: 0 },
        { q: "O uso de linguagem conotativa é marcado pelo:", options: ["Sentido figurado e poético das palavras", "Sentido dicionarizado e literal", "Uso exclusivo de dados matemáticos", "Uso de termos jurídicos"], answer: 0 },
        { q: "Qual conjunção indica concessão (ideia de oposição que não impede o fato)?", options: ["Embora", "Portanto", "Porque", "A fim de"], answer: 0 },
        { q: "O que é 'Fine-tuning' no contexto de modelos de IA?", options: ["Ajuste fino de um modelo genérico para uma tarefa específica", "A formatação visual do texto em HTML", "A digitação rápida de um texto", "A tradução automática de um livro"], answer: 0 },
        { q: "Na produção textual, o termo 'intertextualidade' significa:", options: ["A relação e diálogo entre dois ou mais textos", "A correção gramatical do texto", "O tamanho dos parágrafos de um artigo", "O número de acessos de uma página web"], answer: 0 },
        { q: "Qual conector indica finalidade?", options: ["A fim de que", "Ainda que", "À medida que", "Visto que"], answer: 0 },
        { q: "O vício de linguagem que consiste em repetir uma ideia desnecessariamente é:", options: ["Redundância / Pleonasmo vicioso", "Ambiguidade", "Solecismo", "Barbarismo"], answer: 0 },
        { q: "A inferência em leitura de texto é a capacidade de:", options: ["Deducir informações implícitas com base nas pistas do texto", "Copiar o texto sem alterações", "Contar o número de palavras", "Memorizar todas as frases"], answer: 0 },
        { q: "Qual conector introduz uma comparação?", options: ["Tal qual", "Contudo", "Porquanto", "Portanto"], answer: 0 },
        { q: "Na comunicação digital, o termo 'token' em IA representa:", options: ["Fragmentos de texto (palavras ou pedaços de palavras) processados pelo modelo", "Uma senha secreta de banco", "A foto de perfil do usuário", "Um tipo de vírus de computador"], answer: 0 }
    ],
    math: [
        { q: "Se um modelo de IA analisa 120 dados por minuto, quantos dados analisará em 2 horas?", options: ["7.200", "14.400", "2.400", "12.000"], answer: 1 },
        { q: "Em lógica condicional (Se P, então Q), se P é verdadeiro e Q é falso, o resultado é:", options: ["Verdadeiro", "Falso", "Indeterminado", "Nulo"], answer: 1 },
        { q: "Qual a probabilidade de sortear um número par em um dado comum de 6 faces?", options: ["1/6", "1/3", "1/2", "2/3"], answer: 2 },
        { q: "Qual a sequência correta da conversão do número binário 101 para decimal?", options: ["3", "5", "6", "7"], answer: 1 },
        { q: "Se uma rede neural reduz o erro em 20% a cada ciclo, qual a porcentagem restante após 1 ciclo de 100%?", options: ["80%", "70%", "50%", "85%"], answer: 0 },
        { q: "Qual é a média aritmética dos valores: 10, 20, 30 e 40?", options: ["20", "25", "30", "35"], answer: 1 },
        { q: "Se f(x) = 3x + 5, qual o valor de f(4)?", options: ["12", "17", "20", "15"], answer: 1 },
        { q: "Uma matriz 3x3 possui quantas células no total?", options: ["6", "9", "12", "3"], answer: 1 },
        { q: "Qual o próximo número da sequência lógica: 2, 4, 8, 16, ___?", options: ["20", "24", "32", "64"], answer: 2 },
        { q: "Em um conjunto de 100 dados, 15% são incorretos. Quantos dados estão corretos?", options: ["15", "75", "85", "90"], answer: 2 },
        { q: "Quanto é 2 elevado à 5ª potência (2⁵)?", options: ["32", "16", "64", "25"], answer: 0 },
        { q: "Qual é a raiz quadrada de 144?", options: ["12", "14", "16", "10"], answer: 0 },
        { q: "Qual a negação lógica da afirmação 'Todos os gatos são pretos'?", options: ["Pelo menos um gato não é preto", "Nenhum gato é preto", "Todos os gatos são brancos", "Gatos não existem"], answer: 0 },
        { q: "Se x + 7 = 15, qual o valor de x?", options: ["8", "7", "9", "6"], answer: 0 },
        { q: "O número binário 1111 corresponde a qual número decimal?", options: ["15", "14", "16", "8"], answer: 0 },
        { q: "Em um algoritmo, o que significa a operação de resto da divisão (Módulo / %)? Ex: 10 % 3", options: ["1", "3", "0", "2"], answer: 0 },
        { q: "Se um algoritmo leva 2^n passos e n=4, quantos passos ele fará?", options: ["16", "8", "32", "64"], answer: 0 },
        { q: "Qual é o valor absoluto de -15?", options: ["15", "-15", "0", "1"], answer: 0 },
        { q: "Em lógica booleana, V AND F (Verdadeiro E Falso) resulta em:", options: ["Falso", "Verdadeiro", "Nulo", "Indefinido"], answer: 0 },
        { q: "Em lógica booleana, V OR F (Verdadeiro OU Falso) resulta em:", options: ["Verdadeiro", "Falso", "Nulo", "Indefinido"], answer: 0 },
        { q: "Se um servidor processa 500 requisições por segundo, quantas processará em 10 segundos?", options: ["5.000", "500", "50.000", "1.000"], answer: 0 },
        { q: "Qual o resultado de (8 + 2) * 5?", options: ["50", "18", "40", "30"], answer: 0 },
        { q: "A mediana da lista de números [3, 1, 7, 5, 9] é:", options: ["5", "3", "7", "1"], answer: 0 },
        { q: "Em um gráfico de função linear y = ax + b, o termo 'a' representa:", options: ["O coeficiente angular (inclinação)", "O ponto de corte no eixo y", "A raiz da equação", "A área sob a curva"], answer: 0 },
        { q: "Se uma imagem digital possui 1920x1080 pixels, qual o total aproximado em megapixels?", options: ["2 MP", "1 MP", "4 MP", "8 MP"], answer: 0 },
        { q: "Qual a porcentagem correspondente à fração 3/4?", options: ["75%", "50%", "25%", "80%"], answer: 0 },
        { q: "Qual a soma dos ângulos internos de um triângulo?", options: ["180°", "360°", "90°", "270°"], answer: 0 },
        { q: "Se log₂ (8) = x, qual o valor de x?", options: ["3", "2", "4", "8"], answer: 0 },
        { q: "Qual é o fatorial de 4 (4!)?", options: ["24", "12", "16", "8"], answer: 0 },
        { q: "Se a probabilidade de um evento ocorrer é 0.2, qual a probabilidade de ele NÃO ocorrer?", options: ["0.8", "0.2", "0.5", "0.0"], answer: 0 }
    ]
};

// VARIÁVEIS DE ESTADO
let currentMode = '';
let playerName = '';
let currentQuestionIndex = 0;
let score = 0;
let timerInterval = null;
let secondsElapsed = 0;
let activeQuestions = [];

// EMBARALHADOR DE ARRAYS
function shuffleArray(array) {
    let shuffled = JSON.parse(JSON.stringify(array));
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

    // Sorteia exatamente 10 perguntas das 30 disponíveis
    const shuffledBank = shuffleArray(questionBank[mode]);
    activeQuestions = shuffledBank.slice(0, 10);

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

    document.getElementById('question-count').innerText = `Pergunta ${currentQuestionIndex + 1} de ${totalQuestions}`;
    const progressPercent = (currentQuestionIndex / totalQuestions) * 100;
    document.getElementById('progress-bar').style.width = `${progressPercent}%`;

    document.getElementById('question-text').innerText = currentQ.q;

    // Embaralha alternativas
    let optionsWithIndex = currentQ.options.map((opt, idx) => ({
        text: opt,
        isCorrect: idx === currentQ.answer
    }));
    optionsWithIndex = shuffleArray(optionsWithIndex);

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

// RESPOSTA
function selectOption(isCorrect) {
    if (isCorrect) score++;
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

    saveScore(playerName, score, secondsElapsed, currentMode);
    showScreen('result-screen');
}

// SALVAR NO DISPOSITIVO
function saveScore(name, pts, timeSecs, mode) {
    let rankingData = JSON.parse(localStorage.getItem('ai_game_ranking')) || [];
    
    rankingData.push({
        name: name,
        score: pts,
        time: timeSecs,
        mode: mode,
        date: new Date().toLocaleDateString()
    });

    rankingData.sort((a, b) => b.score - a.score || a.time - b.time);
    localStorage.setItem('ai_game_ranking', JSON.stringify(rankingData));
}

function showRankingScreen() {
    showScreen('ranking-screen');
    filterRanking('english');
}

function filterRanking(mode) {
    const buttons = document.querySelectorAll('.ranking-tabs .tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    const modeIndex = { english: 0, portuguese: 1, math: 2 }[mode];
    if (buttons[modeIndex]) buttons[modeIndex].classList.add('active');

    const rankingData = JSON.parse(localStorage.getItem('ai_game_ranking')) || [];
    const filtered = rankingData.filter(item => item.mode === mode).slice(0, 5);

    const tbody = document.getElementBy
