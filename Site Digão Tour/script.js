document.addEventListener("DOMContentLoaded", () => {
  const elementoAno = document.getElementById("ano-letivo-dinamico"); // puxa do html oque será mudado dinamicamente (ano letivo)

  if (elementoAno) {
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear(); // pega o ano atual (ex: 2025)
    const mesAtual = dataAtual.getMonth(); // pega o mês atual (0-11)

    let anoParaExibir;
    if (mesAtual >= 9) { // verifica se o mês é o mês 9 (outubro)
      anoParaExibir = anoAtual + 1;
    } else {
      anoParaExibir = anoAtual;
    }

    elementoAno.textContent = anoParaExibir; // joga pro html o ano correto
  }
});