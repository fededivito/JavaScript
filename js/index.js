const productos = [
    {
    id: 1,
    nombre: "Cubre volante",
    precio: 2400,
    stock: 5,
    img: 'https://i.ibb.co/wYvxxdb/cubrevolante.webp" alt="cubrevolante'
    },
    {
    id: 2,
    nombre: "Funda premium",
    precio: 4500,
    stock: 10,
    img: 'https://i.ibb.co/2k1zDdx/funda-premium.webp'
    },
    {
    id: 3,
    nombre: "Funda cuero automotor",
    precio: 2800,
    stock: 50,
    img: 'https://i.ibb.co/qLGvB1P/funda-cuero-automotor.webp'
    },
    {
    id: 4,
    nombre: "Mascara protectora",
    precio: 8000,
    stock: 5,
    img: 'https://i.ibb.co/xCVg2qY/mascara.jpg'
    },
    {
    id: 5,
    nombre: "Cubre auto",
    precio: 10000,
    stock: 3,
    img: 'https://i.ibb.co/2krCvmJ/cubre-auto.webp'
    },
    {
    id: 6,
    nombre: "Cubre moto",
    precio: 9000,
    stock: 15,
    img: 'https://i.ibb.co/9tTRgDD/cubre-moto.webp'
    }
]
let storage = []

function imprimirDetalle(id, insertBox){
    let producto = productos[id-1]
    const {nombre, precio, stock, img} = producto

    insertBox.innerHTML = `<div>
                                <div class="closePopup">Salir</div>
                                <section class="product-detail">
                                    <div class="imagen">
                                        <img src="${img}" alt="">
                                    </div>
                                    <div class="descripcion-detail">
                                        <h3>${nombre}</h3>
                                        <p><strong>$ ${precio}</strong> - 6 cuotas sin interes</p>
                                        <div class="click">
                                            <span class="less">-</span>
                                            <span class="resultado">0</span>
                                            <span class="more">+</span>
                                        </div>
                                    <div class="botonCarrito">AGREGAR</div>
                                    </div>
                                </section>
                            </div>`
('.boton')
    const closePopup = document.querySelector('.closePopup')
    const more = document.querySelector('.more')
    const less = document.querySelector('.less')
    const resultado = document.querySelector('.resultado')
    const agregarCarrito = document.querySelector('.botonCarrito')
    let contador = 0

    more.onclick = () => {
        contador++
        contador = contador > stock ? stock : contador
        resultado.innerText = contador
    }

    less.onclick = () => {
        contador--
        //console.log(contador)
        contador = contador < 0 ? 0 : contador
        resultado.innerText = contador
    }

    closePopup.onclick = () => {
        popup.classList.add('d-none')
    }

    agregarCarrito.onclick = () => {
        if(contador != 0){
            //agrego al carrito
            producto.agregadoAlCarrito = contador
            storage.push(producto)
            sessionStorage.setItem('carrito', JSON.stringify(storage))

            swal({
                title: `Agregaste ${producto.agregadoAlCarrito} ${nombre} a tu carrito!`,
                icon: 'success',
                confirmButtonText: 'Cool'
            })

        }else{
            //no agregues al carrito - mensaje error
            swal({
                title: 'Error!',
                text: 'No podemos agregar 0 productos al carrito',
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        }
    }
}



const mainBox = document.querySelector('.main')

//For para insertar productos al main segun mi array de objetos
for(producto of productos){
    //Uso desestructuracion para no repetir producto.propiedad
    const {id, nombre, precio, stock, img} = producto

    //console.log(id)
    mainBox.innerHTML +=  `<article class="product">
                                <div class="imagen">
                                    <img src="${img}" alt="${nombre}">
                                </div>
                                <div class="descripcion">
                                    <h3>${nombre}</h3>
                                    <div class="boton boton-${id}">Ver detalle</div>
                                    <input type='hidden' class='info-id' value="${id}"/>
                                </div>
                            </article>`

    let botonProd = document.querySelector(`.boton-${id}`)
}

const botonesVerDetalle = document.querySelectorAll('.boton')
const popup = document.querySelector('.popupDetalle')


//Como tengo un array donde todos los botones tienen la misma clase, uso el querySelectorAll y recorro ese array dandoles un evento de onclick
for(verDetalle of botonesVerDetalle){
    verDetalle.onclick = (e) => {
        //popup.style.display = 'flex'
        popup.classList.remove('d-none')
        let id = e.target.nextElementSibling.value
        imprimirDetalle(id, popup)
    }

} 













































































































































// let less = document.querySelector(".less")
// let more = document.querySelector(".more")
// let resultado = document.querySelector(".resultado")
// let contador = 0

// more.onclick = (e) => {
//     //contador = contador + 1
//     contador += 1
//     resultado.innerText = contador
// }

// less.addEventListener('click', function(e){
//     //contador = contador + 1
//     contador -= 1
//     resultado.innerText = contador
// })


