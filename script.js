// Seleciona os botões
const btnTema = document.querySelector(".btn-tema");
const btnVoltarTopo = document.querySelector(".btn-voltar-topo");

// Alterna entre tema claro e escuro
btnTema.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Volta ao topo da página
btnVoltarTopo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
