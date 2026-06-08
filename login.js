document.getElementById("entrar").addEventListener("click", () => {

    const nome = document.getElementById("nome").value.trim();

    if(nome === ""){
        alert("Digite seu nome!");
        return;
    }

    localStorage.setItem("jogador", nome);

    window.location.href = "jogo.html";

});