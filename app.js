const inputPesquisa = document.getElementById('pesquisa');
const btnPesquisar = document.getElementById('btnPesquisar');
const resultados = document.getElementById('resultados');

// Função para filtrar e exibir bandas
function filtrarBandas() {
    const termoPesquisa = inputPesquisa.value.toLowerCase();

    // Filtrar as bandas que começam com o termo digitado
    const resultadosFiltrados = bandas.filter(banda => banda.nome.toLowerCase().startsWith(termoPesquisa));

    resultados.innerHTML = ''; // Limpa os resultados anteriores

    if (resultadosFiltrados.length > 0 && termoPesquisa !== '') {
        // Limitar o número de resultados, por exemplo, aos 5 primeiros
        const resultadosLimitados = resultadosFiltrados.slice(0, 5);

        resultadosLimitados.forEach(banda => {
            const divBanda = document.createElement('div');
            divBanda.classList.add('item-resultado');
            divBanda.innerHTML = `
                <h2>${banda.nome}</h2>
                <p>Gênero: ${banda.genero}</p>
                <p>Álbum Famoso: ${banda.albumFamoso}</p>
                <p>Ano de Formação: ${banda.anoFormacao}</p>
                <p>${banda.musica}</p>
            `;
            resultados.appendChild(divBanda);
        });
    } else {
        resultados.innerHTML = '<p>Nenhuma banda encontrada.</p>';
    }
}

// Evento de clique no botão "Pesquisar"
btnPesquisar.addEventListener('click', filtrarBandas);

// Evento de input no campo de pesquisa (enquanto o usuário digita)
inputPesquisa.addEventListener('input', filtrarBandas);
