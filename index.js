
const listaProductos = [
    {
        name: "Alfajor Jorgelin",
        class: "Negro",
        price: "$150",
    },
    {
        name: "Sugus",
        class: "Verdes",
        price: "$5",
    },
    {
        name: "Tita",
        class: "Doble",
        price: "$60",
    },
    {
        name: "Chupetin Evolution",
        class: "Azul",
        price: "$30",
    },
    {
        name: "Beldent",
        class: "Menta",
        price: "$100",
    }
]

const menu = document.getElementById("menu");
for (listaProducto of listaProductos){
    const item = document.createElement("li");
    item.innerHTML = "<h2>" + listaProducto.name + "</h2>" + "<p>" + listaProducto.class + "</p>" + "<p>" + listaProducto.price + "</p>"
    menu.append(item)
}


// function getMenu() {
//     const items = document.getElementById(items);
//     for (nombre of nombres){
//         const item = document.createElement("li");
//         item.innerHTML = `<h2>${nombre.nombre}</h2>``<p>${nombre.state}</p>`;
//         items.append(item);
//     }
// }