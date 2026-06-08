import {
    db,
    ref,
    push,
    set
} from "./firebase.js";

function salvarPontuacao(pontos){

    const nome = localStorage.getItem("jogador");

    const rankingRef = ref(db, "ranking");

    const novoRegistro = push(rankingRef);

    set(novoRegistro, {
        nome: nome,
        pontos: pontos,
        data: Date.now()
    });

}