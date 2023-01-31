

const botonCargar = document.getElementById("cargarItem");

botonCargar.addEventListener('click', cargarUnItem)

let carrito = []

function traerItems()
{
  carrito= JSON.parse(localStorage.getItem("carrito"));
  mostrarItems(carrito)
}

function cargarUnItem()
{
    let articulo = new Item ()
    articulo.lugar = document.getElementById('lugar')
    articulo.valor = document.getElementById('valor')
    articulo.propina = document.getElementById('propina')
    /*

    articulo.lugar = prompt('Por favor ingrese el nombre del lugar donde realizo el gasto')
    articulo.valor = parseFloat(prompt('Por favor ingrese el valor total gastado'))
    articulo.propina = parseFloat(prompt('Por favor ingrese el valor de la propina'))
    */

    carrito.push(articulo);
    localStorage.setItem("carrito",JSON.stringify(carrito))
    mostrarItems(carrito);
}


function mostrarItems(items)
{
 let tabla = document.getElementById('items')
 let counter = 1
 items.forEach((elemento) => {
    let tr = document.createElement("tr") 
    let th = document.createElement("th") 
    th.innerText = counter
 
    tr.appendChild(th); 

    let td = document.createElement('td')
    td.innerText = elemento.lugar
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerText = elemento.valor
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerText = elemento.propina
    tr.appendChild(td)
    
    counter++
})
}

traerItems();
