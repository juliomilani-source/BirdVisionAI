const rankingDiv = document.getElementById("ranking");

let ranking =
    JSON.parse(localStorage.getItem("ranking")) || [];

ranking.sort((a, b) => b.pontos - a.pontos);

rankingDiv.innerHTML = "<h2>Top 10 Jogadores</h2>";

ranking.forEach((jogador, index) => {

    rankingDiv.innerHTML += `
        <p>
            ${index + 1}º - ${jogador.nome}
            (${jogador.pontos} pontos)
        </p>
    `;

});