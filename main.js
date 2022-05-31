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

    alert(`Realiza su tu pedido`);
    console.log(`Proximamente con la version con facturacion`);
    break;
  } else {
    alert(`Gracias por la visita te esperamos pronto`);
  }
}
