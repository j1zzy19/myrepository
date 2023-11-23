// Seleciona o botão
const themeToggle = document.querySelector('#theme-toggle');
// Checa pela preferência do tema escuro a nivel do OS
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
// Pega a preferência do usuario do local storage, se estiver disponivel
const currentTheme = localStorage.getItem("theme");
// SE a preferência do usuario no local storage for tema escuro...
if(currentTheme == "dark"){
    // ...habilita a classe '.dark-theme' no <body>
    document.body.classList.toggle("dark-theme");
// Do contrário, SE a preferência do usuario no local storage for tema claro...
}else if( currentTheme == "light"){
    //...habilita a classe '.light-theme' no <body>
    document.body.classList.toggle("light-theme");
}
// Escuta por um click no botão
themeToggle.addEventListener("click", function() {
    //  SE a preferência do usuario no OS for escura e combinar com a classe '.dark-theme'...
    if (prefersDarkScheme.matches){
        // ...então ativar a classe do tema claro
        document.body.classList.toggle("light-theme");
        // ...mas usa a '.dark-theme' se a classe '.light-theme' ja estiver no <body>
        var theme = document.body.classList.contains("light-theme") ? "light" : "dark";
    }else{
        // Do contrário, fazer a mesma coisa só que para o '.dark-theme'
        document.body.classList.toggle("dark-theme");
        var theme = document.body.classList.contains("dark-theme") ? "dark" : "light";
    }
    // Salvar a preferência atual no local storage para continuar o mesmo tema
    localStorage.setItem("theme", theme);
});