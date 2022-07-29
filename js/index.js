
let less = document.querySelector(".less")
let more = document.querySelector(".more")
let resultado = document.querySelector(".resultado")
let contador = 0

more.onclick = (e) => {
    //contador = contador + 1
    contador += 1
    resultado.innerText = contador
}

less.addEventListener('click', function(e){
    //contador = contador + 1
    contador -= 1
    resultado.innerText = contador
})
