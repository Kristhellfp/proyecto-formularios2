let root = document.querySelector("#root");


let div_formulario = document.createElement("div");
div_formulario.className = "div-formularios";

//Lista de textos 
let formularios = [
    {nombre:"Login", link:"componentes/login/login.html"},
    {nombre:"Formulario de Contacto", link:"componentes/formularioDeContacto/formularioDeContacto.html"},
    {nombre:"Formulario de Registro", link:"componentes/formularioDeRegistro/formularioDeRegistro.html"},
    {nombre:"Formulario de Búsqueda", link:"componentes/formularioDeBusqueda/formularioDeBusqueda.html"},
    {nombre:"Formulario de Pedido Compras", link:"componentes/formularioDePedidoCompra/FormularioDePedidoCompra.html"},
    {nombre:"Formulario de Comentarios Reseñas", link:"componentes/formulariodeComentariosReseñas/formularioDeComentariosReseñas.html"},
];


formularios.forEach(itemLista=>{


    let div_item = document.createElement("a");
    div_item.className = "item";
    div_item.href = itemLista.link;
    div_item.innerText = itemLista.nombre;


    div_formulario.appendChild(div_item);
});

root.appendChild(div_formulario);



