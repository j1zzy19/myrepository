const header = document.querySelector("header");
const main = document.querySelector("main");
const body = document.body;


// const mainOptions = {};

// const mainObeserver = new IntersectionObserver(
//     function (
//     entries,
//     mainObeserver
//     ) {
//         entries.forEach(entry =>{
//             if(!entry.isIntersecting){
//                 header.classList.add("nav-scrolled");
//             }else {
//                 header.classList.remove("nav-scrolled");
//             }
//             console.log(entry.target);
//         })
//     }, 
// mainOptions);

// mainObeserver.observe(main);

window.onscroll = function(){
    if(window.scrollY > 22){
        header.classList.add("nav-scrolled");
    }
    else if(window.scrollY < 22 && header.classList.contains("nav-scrolled")){
        header.classList.remove("nav-scrolled");
    }
}
