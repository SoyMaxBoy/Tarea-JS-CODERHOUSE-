function confirmadorEmail(userEmail, confirmUserEmail) {
  while (userEmail != "" && confirmUserEmail != "") {
    if (userEmail == confirmUserEmail) {
      alert("Tu correo fue guardado!");
      return userEmail;
    } else {
      alert("Los correos deben ser iguales");

      userEmail = prompt("Ingrese su correo:");
      confirmUserEmail = prompt("Confirme su correo:");
    }
  }
}

function confirmadorPass(userPass, confirmUserPass) {
  while (userPass != "" && confirmUserPass != "") {
    if (userPass == confirmUserPass) {
      alert("La contraseña a sido guardado con éxito!");
      return userPass;
    } else {
      alert("La contraseña deben considir");

      userPass = prompt("Ingrese su Contraseña:");
      confirmUserPass = prompt("Confirme su contraseña:");
    }
  }
}

function confirmadorNombre(userName, userLastName) {
  while (userName != "" && userLastName != "") {
    alert("Debes Llenar los cambos");
    const userName = prompt("Introduce tu Nombre:");
    const userLastName = prompt(`Introduce tu Apellido`);
  }
}

alert(`Bienvenido a Mercamax`);
registerConfirm = confirm(
  "Primero debes crear una cuenta para realizar un pedido"
);

while (registerConfirm) {
  if (registerConfirm) {
    const userName = prompt("Introduce tu Nombre:");
    const userLastName = prompt(`Introduce tu Apellido`);

    confirmadorNombre;

    const userFullName = `${userName} ${userLastName}`;

    userEmail = prompt(
      `Gracias ${userFullName} por colocar tus datos \n \n \n Coloca tu Correo Electronico`
    );
    confirmUserEmail = prompt(
      `Hey ${userFullName} \n \n \n Introduce nuevamente tu correo electronico \n para confirmar que sea correcto`
    );
    confirmadorEmail(userEmail, confirmUserEmail);

    userPass = prompt(`Hey ${userName} \n \n \n Coloca tu nueva contraseña`);
    confirmUserPass = prompt(
      `Hey ${userName} \n \n \n Confirma la nueva contraseña`
    );
    confirmadorPass(userPass, confirmUserPass);

    let Cuentacreada = confirm(
      `Tu Cuenta fue creada exitosamente \n\nUsuario: ${confirmadorEmail(
        userEmail,
        confirmUserEmail
      )}\nContraseña: ${(userPass, confirmUserPass)}`
    );

    if (Cuentacreada === false) {
      registerConfirm = false;
      registerConfirm = confirm(
        "Primero debes crear una cuenta para realizar un pedido"
      );
    }

    alert(`Realiza  tu pedido`);
    let total = 0;
    let producto;
    let cantidad;
    let seguirComprando;
    let ag = "Agregaste:";

    do {
      producto = prompt(
        "Coloca el codigo del producto deseado \n Codigo |    Producto    | Precio:\n  10001  |  Agua 16oz   | 50$  \n  10002  | Pasta dental  | 75$  \n  10003  |  Cepillos D   | 25$  \n  10004  |  Leche 16oz  | 80$  \n  10005  | Carne Fresca | 200$ \n  10006  | Carne Frizada| 100$ \n  10007  | Pimienta x Lb| 25$  \n  10008  |     Ajo x Lb     | 15$  "
      );
      cantidad = parseInt(prompt("Cuantos quieres comprar?"));

      let precio;

      switch (producto) {
        case "10001":
          precio = 50;
          alert(`${ag} ${cantidad} Agua 16oz`);
          break;
        case "10002":
          precio = 75;
          alert(`${ag} ${cantidad} Pasta dental`);
          break;
        case "10003":
          precio = 25;
          alert(`${ag} ${cantidad} Cepillo dental`);
          break;
        case "10004":
          precio = 80;
          alert(`${ag} ${cantidad} Leche 16oz`);
          break;
        case "10005":
          precio = 200;
          alert(`${ag} ${cantidad}LB de Carne fresca`);
          break;
        case "10006":
          precio = 100;
          alert(`${ag} ${cantidad}LB de Carne frizada`);
          break;
        case "10007":
          precio = 25;
          alert(`${ag} ${cantidad}LB de Pimienta`);
          break;
        case "10008":
          precio = 15;
          alert(`${ag} ${cantidad}LB de Ajo`);
          break;

        default:
          alert(
            "Este Producto no esta en el listado o no fue escrito \ncorrectamente"
          );
          precio = 0;
          cantidad = 0;
          break;
      }

      total = precio * cantidad;

      seguircomprando = confirm("Quieres seguir comprando?");
    } while (seguirComprando);

    let finalizarCompra = confirm(
      `El total de la compra es: ${total} \n \n Desea Finalizar la compra?`
    );

    if (finalizarCompra) {
      alert("Su Compra ha sido realizado con exito en 1hr va estar con usted");
    } else "";

    break;
  } else {
    alert(`Gracias por la visita te esperamos pronto`);
  }
}
