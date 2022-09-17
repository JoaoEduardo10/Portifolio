
// script do header
let hamburger = document.querySelector('.hamburger')
let efeito = document.querySelector('.sidebar')
let botao1= document.querySelector('.hamburger')
const itens = document.querySelectorAll('.menu-item')

botao1.classList.remove('invisivel1');
let botao2 = document.querySelector('.hamburger2')

const sair = () => {
    efeito.classList.add('invisivel')
    botao1.classList.remove('invisivel1')
    botao2.classList.add('invisivel2')
}

itens.forEach((item) => item.addEventListener('click', sair))


hamburger.addEventListener('click',function(){
    efeito.classList.remove('invisivel')
    botao1.classList.add('invisivel1')
    botao2.classList.remove('invisivel2')
})

botao2.addEventListener('click',function(){
    efeito.classList.add('invisivel')
    botao1.classList.remove('invisivel1')
    botao2.classList.add('invisivel2')
})

//********************************************************************** */
//animaçao do nomelet 


function adicionarNome(nome){

    const texto = document.createTextNode('João Eduardo.')
    nome.appendChild(texto)
    
    const textoArrey = nome.textContent.split("")
    nome.textContent = " "

    textoArrey.forEach((letra, i) => {
        setTimeout(() => {
            nome.textContent += letra
        }, 200* i)
    })

}

function tira (){
    document.querySelector('.displaiy').classList.remove('displaiy')
}

let text = document.createTextNode('')
let nome = document.getElementById('nome')

setTimeout(() => {
    adicionarNome(nome)
},2500)
setTimeout(() => {
    tira()
},300)

// logica de nimação do scroll
const target = document.querySelectorAll("[data-anime]")
const animatio = "animate"


function scroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4)

    target.forEach((elemente) => {
        if(windowTop > elemente.offsetTop){
            elemente.classList.add(animatio)
        } else {
            elemente.classList.remove(animatio)
        }
    })
}


window.addEventListener('scroll', scroll)






