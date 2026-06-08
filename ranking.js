import {
    db,
    ref,
    onValue
} from "./firebase.js";

const rankingDiv = document.getElementById("ranking");

const rankingRef = ref(db, "ranking");

onValue(rankingRef, (snapshot) => {

    const dados = snapshot.val();

    if(!dados){
        rankingDiv.innerHTML = "<p>Nenhuma pontuação ainda.</p>";
        return;
    }

    let lista = [];

    Object.values(dados).forEach(item => {
        lista.push(item);
    });

    lista.sort((a,b) => b.pontos - a.pontos);

    rankingDiv.innerHTML = "";

    lista.slice(0,10).forEach((jogador, index) => {

        rankingDiv.innerHTML += `
            <p>
                ${index+1}º - ${jogador.nome}
                (${jogador.pontos} pts)
            </p>
        `;

    });

});