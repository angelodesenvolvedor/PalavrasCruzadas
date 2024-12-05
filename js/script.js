// Função para verificar as respostas
function verificar() {
    const respostas = {
        "1-1": "g", "1-2": "a", "1-3": "t", "1-4": "o", "1-5": "p", "1-6": "l",  // Horizontal 1 (GATO)
        "2-1": "v", "2-2": "f", "2-3": "s", "2-4": "c", "2-5": "i", "2-6": "i",  // Vertical 1 (LISBOA)
        "3-1": "e", "3-2": "r", "3-3": "r", "3-4": "i", "3-5": "z", "3-6": "s",  // Vertical 2 (ÁFRICA)
        "4-1": "r", "4-2": "i", "4-3": "z", "4-4": "d", "4-5": "z", "4-6": "b",  // Vertical 3 (PIZZA)
        "5-1": "d", "5-2": "c", "5-3": "r", "5-4": "e", "5-5": "a", "5-6": "o",  // Vertical 4 (VERDE)
        "6-1": "e", "6-2": "a", "6-3": "d", "6-4": "m", "6-5": "c", "6-6": "a"   // Vertical 5 (MÉDICO)
    };

    let correto = true;

    // Limpar as cores anteriores de fundo dos inputs
    for (let id in respostas) {
        const input = document.getElementById(id);
        input.style.backgroundColor = '';  // Limpar a cor de fundo anterior
    }

    // Loop para verificar cada célula do tabuleiro
    for (let id in respostas) {
        const input = document.getElementById(id);
        const respostaCorreta = respostas[id];
        const valorUsuario = input.value.trim().toLowerCase();

        if (valorUsuario === '') continue; // Ignorar células vazias
        if (valorUsuario === respostaCorreta) {
            input.style.backgroundColor = 'green'; // Resposta correta (verde)
        } else {
            input.style.backgroundColor = 'red'; // Resposta incorreta (vermelho)
            correto = false; // Marca que houve erro
        }
    }

    // Exibe o alerta adequado com base no resultado
    if (correto) {
        document.getElementById('alerta-correto').style.display = 'block';
        document.getElementById('alerta-errado').style.display = 'none';
    } else {
        document.getElementById('alerta-errado').style.display = 'block';
        document.getElementById('alerta-correto').style.display = 'none';
    }

    // Esconde os alertas após 2 segundos
    setTimeout(function() {
        document.getElementById('alerta-correto').style.display = 'none';
        document.getElementById('alerta-errado').style.display = 'none';
    }, 2000);
}


// Função para exibir as dicas
function mostrarDica(pista) {
    const dicas = [
        "Horizontal 1: Animal doméstico muito comum como pet.",
        "Vertical 1: Capital de Portugal.",
        "Vertical 2: Continente que abriga países como Egito, África do Sul e Nigéria.",
        "Vertical 3: Prato italiano muito popular, servido em várias formas e sabores.",
        "Vertical 4: Cor associada à natureza, representando plantas e árvores.",
        "Vertical 5: Profissional de saúde que diagnostica e trata doenças."
    ];

    // Exibir a dica no painel de dicas
    document.getElementById("dica-texto").innerText = dicas[pista - 1];

    // Destaque o botão da pista selecionada
    const listaPistas = document.querySelectorAll("#pistas .list-group-item");
    listaPistas.forEach(item => item.classList.remove('active')); 
    listaPistas[pista - 1].classList.add('active'); 
}

// Função para remover o destaque e ocultar a dica ao clicar fora das pistas
function removerDestaqueEDica(event) {
    const pistas = document.getElementById('pistas');
    const dicaTexto = document.getElementById("dica-texto");

    // Verifica se o clique foi fora do container de pistas
    if (!pistas.contains(event.target)) {
        // Remove o destaque dos itens de pista
        const itens = document.querySelectorAll('.list-group-item');
        itens.forEach(item => item.classList.remove('active'));

        // Limpa o texto da dica
        dicaTexto.innerText = '';
    }
}

// Função para iniciar/reiniciar o jogo
function iniciarJogo() {
    // Esconde as regras
    document.getElementById("regras").style.display = 'none';

    // Exibe o tabuleiro de jogo
    document.getElementById("jogo").style.display = 'block';
    
    // Limpar as respostas dos inputs (resetar as células)
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
        input.value = '';
        input.style.backgroundColor = '';  // Limpar a cor de fundo
    });

    // Esconder alertas
    document.getElementById('alerta-correto').style.display = 'none';
    document.getElementById('alerta-errado').style.display = 'none';

    // Limpar a dica
    document.getElementById("dica-texto").innerText = '';
    
    // Remover destaque das pistas
    const listaPistas = document.querySelectorAll("#pistas .list-group-item");
    listaPistas.forEach(item => item.classList.remove('active'));
}

// Adiciona o evento de clique no documento para monitorar cliques fora das pistas
document.addEventListener('click', removerDestaqueEDica);