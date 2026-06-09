import {
    db,
    ref,
    push,
    set,
    onValue
} from "./firebase.js";

export function salvarRanking(nome, pontos) {

    const rankingRef = ref(db, "ranking");

    const novoRegistro = push(rankingRef);

    set(novoRegistro, {
        nome: nome,
        pontos: pontos,
        data: Date.now()
    });
}

export function carregarRanking(callback) {

    const rankingRef = ref(db, "ranking");

    onValue(rankingRef, (snapshot) => {

        const dados = snapshot.val();

        if (!dados) {
            callback([]);
            return;
        }

        const ranking = Object.values(dados);

        ranking.sort((a, b) => b.pontos - a.pontos);

        callback(ranking.slice(0, 10));
    });
}