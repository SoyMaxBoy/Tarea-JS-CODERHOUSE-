let userEmail = prompt("Ingrese su correo:");
let confirmUserEmail = prompt("Confirme su correo:");

while (userEmail != "" && confirmUserEmail != "") {
  if (userEmail == confirmUserEmail) {
    alert("El correo a sido guardado con éxito!");
    break;
  } else {
    alert("Los correos deben de ser iguales");

    userEmail = prompt("Ingrese su correo:");
    confirmUserEmail = prompt("Confirme su correo:");
  }
}

alert("Bienvenido pelotudo");

let total = 0;
let producto;
let cantidad;
let seguirComprando;

do {
  producto = prompt("Que Comprar shampoo,  acondicionador o ambos?");
  cantidad = parseInt(prompt("Cuantos quieres comprar?"));

  let precio;

  switch (producto) {
    case "shampoo":
      precio = 500;
      alert("agregaste un shampoo a tu carrito");
      break;
    case "acondicionador":
      precio = 700;
      alert("agregaste un acondicionador a tu carrito");
      break;
    case "ambos":
      precio = 1100;
      break;

    default:
      alert("ESte Producto no esta en stock");
      precio = 0;
      cantidad = 0;
      break;
  }

  total = precio * cantidad;

  confirm("Quieres seguir comprando?");
} while (seguirComprando);

let finalizarCompra = confirm(
  `El total de la compra es: ${total} \n \n Desea Finalizar la compra?`
);

if (finalizarCompra) {
  alert("Su Compra ha sido realizado con exito");
} else "";
