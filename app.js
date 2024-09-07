const inputPesquisa = document.getElementById('pesquisa');
const resultados = document.getElementById('resultados');
const divSugestoes = document.createElement('div'); // Div para sugestões
divSugestoes.setAttribute('id', 'sugestoes');
document.body.appendChild(divSugestoes); // Adiciona a div ao corpo para as sugestões
const botaoLimpar = document.getElementById('limpar'); // Referência ao botão Limpar

// Função para filtrar e exibir bandas
function filtrarBandas() {
    const termoPesquisa = inputPesquisa.value.trim().toLowerCase();

    // Limpa as sugestões anteriores
    divSugestoes.innerHTML = '';
    divSugestoes.style.display = 'none'; // Esconde sugestões até que haja resultados

    if (termoPesquisa === '') {
        resultados.innerHTML = ''; // Limpa os resultados
        resultados.style.display = 'none'; // Esconde o contêiner de resultados
        return; // Não exibe sugestões se o campo estiver vazio
    }

    // Filtrar as bandas que começam com o termo digitado
    const resultadosFiltrados = bandas.filter(banda => 
        banda.nome.toLowerCase().startsWith(termoPesquisa)
    );

    if (resultadosFiltrados.length > 0) {
        divSugestoes.style.display = 'block'; // Exibe as sugestões

        resultadosFiltrados.forEach(banda => {
            const divSugestao = document.createElement('div');
            divSugestao.classList.add('sugestao-item');
            divSugestao.textContent = banda.nome;

            // Quando o usuário clicar na sugestão, preenche o campo de pesquisa
            divSugestao.addEventListener('click', () => {
                inputPesquisa.value = banda.nome; // Preenche o campo de pesquisa
                exibirDetalhesBanda(banda); // Exibe os detalhes da banda
                divSugestoes.innerHTML = ''; // Limpa as sugestões após a seleção
                divSugestoes.style.display = 'none'; // Esconde as sugestões
            });

            divSugestoes.appendChild(divSugestao);
        });
    }
}

// Função para exibir os detalhes da banda selecionada
function exibirDetalhesBanda(banda) {
    resultados.innerHTML = `
        <h2>${banda.nome}</h2>
        <p>Gênero: ${banda.genero}</p>
        <p>Álbum Famoso: ${banda.albumFamoso}</p>
        <p>Ano de Formação: ${banda.anoFormacao}</p>
        <p>${banda.musica}</p>
    `;
    resultados.style.display = 'block'; // Exibe o contêiner de resultados
}

// Função para limpar a pesquisa
function limparPesquisa() {
    inputPesquisa.value = ''; // Limpa o campo de pesquisa
    resultados.innerHTML = ''; // Limpa os resultados
    resultados.style.display = 'none'; // Esconde o contêiner de resultados
    divSugestoes.innerHTML = ''; // Limpa as sugestões
    divSugestoes.style.display = 'none'; // Esconde as sugestões
}

// Evento de input no campo de pesquisa (enquanto o usuário digita)
inputPesquisa.addEventListener('input', filtrarBandas);

// Evento de click no botão Limpar
botaoLimpar.addEventListener('click', limparPesquisa);

// Posicionar as sugestões logo abaixo do campo de pesquisa
inputPesquisa.addEventListener('focus', () => {
    const rect = inputPesquisa.getBoundingClientRect();
    divSugestoes.style.position = 'absolute';
    divSugestoes.style.top = `${rect.bottom}px`;
    divSugestoes.style.left = `${rect.left}px`;
    divSugestoes.style.width = `${rect.width}px`;
});
