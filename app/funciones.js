// fecth
let usuarios;

const url = '../server/users.json';

(async () => {
  const data = await fetch(url);

  const usersData = await data.json();

  const usuarios = JSON.stringify(usersData.users);

  if (!localStorage.getItem('Users')) {
    localStorage.setItem('Users', usuarios);
  }
})();
//

// function btnBack
function btnBack(father) {
  // inicializando boton que vuelve atras
  const botonBack = document.createElement('button');
  botonBack.classList.add('botonBack');
  botonBack.setAttribute('type', 'button');
  botonBack.textContent = 'Atras';

  father.appendChild(botonBack);

  botonBack.addEventListener('click', () => {
    location.reload();
  });
}
//

// new user 1
function newUser() {
  // refer quinta funcion
  const fifthFunction = document.querySelector('.fifthFunction-off');
  // hidden / display

  fifthFunction.classList.add('fifthFunction');
  fifthFunction.classList.remove('fifthFunction-off');

  optionMenu.classList.add('optionMenu-off');
  optionMenu.classList.remove('optionMenu');
  //
}

// button the new user
function initButton() {
  // refer quinta funcion
  const fifthFunction = document.querySelector('.fifthFunction-off');

  const sendNewInformation = document.querySelector('.sendNewInformation');
  // form
  const newUser = document.querySelector('#newUser');
  const newPassword = document.querySelector('#newPassword');
  const newDebt = document.querySelector('#newDebt');
  const newComment = document.querySelector('#newComment');

  // eslint-disable-next-line no-shadow
  const optionMenu = document.querySelector('.optionMenu');

  sendNewInformation.addEventListener('click', () => {
    const newUserValue = newUser.value;
    const newPasswordValue = newPassword.value;
    const newDebtValue = newDebt.value;
    const newDebtValueNumber = Number(newDebtValue);
    const newCommentValue = newComment.value;

    users.push(
      new Users(newUserValue, newPasswordValue, newDebtValueNumber, true),
    );

    localStorage.setItem('Users', JSON.stringify(users));

    Toastify({
      text: 'Se creo un nuevo usuario',
      duration: 5000,
      gravity: 'top',
      position: 'right',
      style: {
        width: '240px',
        height: 'auto',
        fontSize: '25px',
      },
    }).showToast();

    newUser.value = '';
    newDebt.value = '';
    newPassword.value = '';
    newComment.value = '';

    // hidden / display

    fifthFunction.classList.add('fifthFunction-off');
    fifthFunction.classList.remove('fifthFunction');

    optionMenu.classList.add('optionMenu');
    optionMenu.classList.remove('optionMenu-off');
  });
}

// 2 Función - Puede verificar un poco más precisión y buscar el object y mostrar el nombre y el monto de la deuda.
function userAndDebt() {
  const name = document.querySelector('#name');
  const password = document.querySelector('#password');
  const botonClick = document.querySelector('.botonClick');

  const optionMenu = document.querySelector('.optionMenu');
  const login = document.querySelector('.login-off');

  // refer primera funcion
  const firstFunction = document.querySelector('.firstFunction-off');

  // hidden / display
  optionMenu.classList.add('optionMenu-off');
  optionMenu.classList.remove('optionMenu');
  login.classList.add('login');
  login.classList.remove('login-off');

  //
  botonClick.addEventListener('click', () => {
    const nameValue = name.value;
    const passwordValue = password.value;

    const findTheTruth = users.some(
      (user) => user?.name === nameValue && user?.password === passwordValue,
    );

    if (findTheTruth) {
      // hidden / display

      login.classList.add('login-off');
      login.classList.remove('login');

      firstFunction.classList.add('firstFunction');
      firstFunction.classList.remove('firstFunction-off');

      //

      const userFound = users.find(
        (user) => user?.name === nameValue && user?.password === passwordValue,
      );
      const parrafoTruth = document.createElement('p');
      const parrafoSolution = document.createElement('p');
      parrafoTruth.classList.add('parrafoTruth');
      parrafoSolution.classList.add('parrafoSolution');

      firstFunction.appendChild(parrafoTruth);
      firstFunction.appendChild(parrafoSolution);
      parrafoTruth.textContent = 'Indentidad verificada';
      parrafoSolution.textContent += `${userFound.name} tu deuda es de: ${userFound.debt}$`;

      btnBack(firstFunction);
    } else {
      // hidden / display

      login.classList.add('login-off');
      login.classList.remove('login');

      firstFunction.classList.add('firstFunction');
      firstFunction.classList.remove('firstFunction-off');

      //
      const parrafo = document.createElement('p');
      parrafo.classList.add('parrafoElse');
      firstFunction.appendChild(parrafo);
      parrafo.textContent = 'El usuario no existe';

      btnBack(firstFunction);
    }
    name.value = '';
    password.value = '';
  });
}

// 3 Función - Puede verificar y buscar el object deseado y mostrar el estado (true/false) de la deuda
function displayDebt() {
  const name = document.querySelector('#name');
  const password = document.querySelector('#password');
  const botonClick = document.querySelector('.botonClick');

  const optionMenu = document.querySelector('.optionMenu');
  const login = document.querySelector('.login-off');

  // refer segunda funcion
  const secondFuction = document.querySelector('.secondFuction');

  // hidden / display

  optionMenu.classList.add('optionMenu-off');
  optionMenu.classList.remove('optionMenu');
  login.classList.add('login');
  login.classList.remove('login-off');

  //

  botonClick.addEventListener('click', () => {
    const nameValue = name.value;
    const passwordValue = password.value;

    const findTheTruth = users.some(
      (user) => user?.name === nameValue && user?.password === passwordValue,
    );

    if (findTheTruth) {
      // hidden / display

      login.classList.add('login-off');
      login.classList.remove('login');

      //

      const userFound = users.find(
        (user) => user?.name === nameValue && user?.password === passwordValue,
      );

      if (userFound.paymentStatus === true) {
        const parrafoSolution2 = document.createElement('p');
        parrafoSolution2.classList.add('parrafoSolution2');
        secondFuction.appendChild(parrafoSolution2);

        parrafoSolution2.textContent += `El estado es: ${userFound.paymentStatus}, es decir, aun tienes deuda`;

        btnBack(secondFuction);
      } else {
        const parrafo2 = document.createElement('p');
        parrafo2.classList.add('parrafo2');
        secondFuction.appendChild(parrafo2);
        parrafo2.textContent = `El estado es: ${userFound.paymentStatus}, es decir, no tienes deuda`;

        btnBack(secondFuction);
      }
    } else {
      // hidden / display

      login.classList.add('login-off');
      login.classList.remove('login');

      secondFuction.classList.add('secondFuction');
      secondFuction.classList.remove('secondFuction-off');

      //
      const parrafo = document.createElement('p');
      parrafo.classList.add('parrafoElse');
      parrafo.textContent = 'El usuario no existe';
      secondFuction.appendChild(parrafo);

      btnBack(secondFuction);
    }
    name.value = '';
    password.value = '';
  });
}

// 4 Función - Puede verificar y buscar el object deseado y poder pagar algo u/o toda la deuda
function payDebt() {
  const name = document.querySelector('#name');
  const password = document.querySelector('#password');
  const botonClick = document.querySelector('.botonClick');

  const optionMenu = document.querySelector('.optionMenu');
  const login = document.querySelector('.login-off');

  // refer tercera funcion
  const thirdFunction = document.querySelector('.thirdFunction');

  // hidden / display
  optionMenu.classList.add('optionMenu-off');
  optionMenu.classList.remove('optionMenu');
  login.classList.add('login');
  login.classList.remove('login-off');
  //
  const divForm = document.querySelector('.divNone');

  botonClick.addEventListener('click', () => {
    const nameValue = name.value;
    const passwordValue = password.value;

    const findTheTruth = users.some(
      (user) => user?.name === nameValue && user?.password === passwordValue,
    );

    if (findTheTruth) {
      const userFound = users.find(
        (user) => user?.name === nameValue && user?.password === passwordValue,
      );

      if (userFound.paymentStatus === false) {
        // hidden / display
        login.classList.add('login-off');
        login.classList.remove('login');
        //

        const parrafoSolution3 = document.createElement('p');
        parrafoSolution3.classList.add('parrafoSolution3');
        parrafoSolution3.textContent = `Tu cuenta ya estaba paga ${userFound.name}`;
        //
        thirdFunction.appendChild(parrafoSolution3);

        btnBack(thirdFunction);
      } else {
        // hidden / display
        login.classList.add('login-off');
        login.classList.remove('login');

        divForm.classList.add('divForm');
        divForm.classList.remove('divNone');

        //

        const spanForm = document.createElement('span');
        spanForm.textContent = 'Cuanto quieres abonar a tu deuda: ';

        const inputForm = document.createElement('input');
        inputForm.setAttribute('type', 'number');

        const botonForm = document.createElement('button');
        botonForm.setAttribute('type', 'button');
        botonForm.textContent = 'Enviar pago';

        divForm.appendChild(spanForm);
        divForm.appendChild(inputForm);
        divForm.appendChild(botonForm);

        botonForm.addEventListener('click', () => {
          const inputFormValue = inputForm.value;
          const inputFormValueNumber = Number(inputFormValue);

          console.log('Esta aqui bien');
          // hidden / display

          divForm.classList.add('divNone');
          divForm.classList.remove('divForm');

          //

          if (inputFormValueNumber === userFound.debt) {
            console.log('Esta aqui bien2');
            const parrafo3 = document.createElement('p');
            const parrafoAlter = document.createElement('p');
            parrafo3.classList.add('parrafo3');

            thirdFunction.appendChild(parrafo3);
            thirdFunction.appendChild(parrafoAlter);

            parrafo3.textContent = 'Ya no debes nada';
            //
            userFound.paymentStatus = false;

            // LocalStorage
            localStorage.setItem('Users', JSON.stringify(users));

            parrafoAlter.textContent = `Name: ${userFound.name}, Debt: ${userFound.debt}, paymentStatus: ${userFound.paymentStatus}`;

            btnBack(thirdFunction);
          } else if (inputFormValueNumber > userFound.debt) {
            //
            const parrafo3 = document.createElement('p');
            const parrafoAlter = document.createElement('p');
            parrafo3.classList.add('parrafo3');

            thirdFunction.appendChild(parrafo3);
            thirdFunction.appendChild(parrafoAlter);
            //
            const result = inputFormValueNumber - userFound.debt;
            //
            userFound.paymentStatus = false;

            // LocalStorage
            localStorage.setItem('Users', JSON.stringify(users));
            //
            parrafo3.textContent = `Name: ${userFound.name}, Debt: ${userFound.debt}, paymentStatus: ${userFound.paymentStatus}`;
            //
            parrafoAlter.textContent = `Ya no debes y te sobran: ${result}$`;
            // LocalStorage

            //

            btnBack(thirdFunction);
          } else if (inputFormValueNumber < userFound.debt) {
            //
            const parrafo3 = document.createElement('p');
            const parrafoAlter = document.createElement('p');
            parrafo3.classList.add('parrafo3');
            //
            thirdFunction.appendChild(parrafo3);
            thirdFunction.appendChild(parrafoAlter);
            //
            const result = userFound.debt - inputFormValueNumber;
            //
            userFound.debt = result;
            // localStorage
            localStorage.setItem('Users', JSON.stringify(users));
            //
            parrafo3.textContent = `Name: ${userFound.name},  Debt: ${userFound.debt},  paymentStatus: ${userFound.paymentStatus}`;
            parrafoAlter.textContent = `Aun te faltan pagar: ${result}$`;

            btnBack(thirdFunction);
          } else {
            //
            alert('Algo no funciona funcion 4 - interno');
            console.error('Algo no funciona');
          }
        });
      }
    } else {
      // hidden / display

      login.classList.add('login-off');
      login.classList.remove('login');

      thirdFunction.classList.add('thirdFunction');
      thirdFunction.classList.remove('thirdFunction-off');

      //

      const parrafo = document.createElement('p');
      parrafo.classList.add('parrafoElse');
      parrafo.textContent = 'El usuario no existe';
      thirdFunction.appendChild(parrafo);

      btnBack(thirdFunction);
    }

    name.value = '';
    password.value = '';
  });
}

function more(fetch) {
  const name = document.querySelector('#name');
  const password = document.querySelector('#password');
  const botonClick = document.querySelector('.botonClick');

  const optionMenu = document.querySelector('.optionMenu');
  const login = document.querySelector('.login-off');

  /**/
  // inicializando boton que vuelve atras
  const botonBack = document.createElement('button');
  botonBack.classList.add('botonBack');
  botonBack.setAttribute('type', 'button');
  botonBack.textContent = 'Atras';

  // refer cuarta funcion
  const more = document.querySelector('.more-off');

  // hidden / display

  optionMenu.classList.add('optionMenu-off');
  optionMenu.classList.remove('optionMenu');

  login.classList.add('login');
  login.classList.remove('login-off');

  //

  botonClick.addEventListener('click', () => {
    const nameValue = name.value;
    const passwordValue = password.value;

    const userFoundAdmit = fetch.some(
      (admit) => nameValue === admit?.name && passwordValue === admit?.password,
    );

    if (userFoundAdmit) {
      // hidden / display

      login.classList.add('login-off');
      login.classList.remove('login');

      more.classList.add('more');
      more.classList.remove('more-off');

      //
    } else {
      Toastify({
        text: 'Usuario invalido, no eres usuario admit',
        duration: 3000,
        gravity: 'bottom',
        position: 'center',
        style: {
          width: '240px',
          height: 'auto',
          fontSize: '23px',
          color: '#c8d7bd',
          background: 'linear-gradient(to right, #00b09b, #96c93d)',
        },
      }).showToast();
    }
    name.value = '';
    password.value = '';
  });
}

// Admit
function btnBackAdmit(father) {
  // inicializando boton que vuelve atras
  const buttonBack = document.querySelector('.buttonBack');

  buttonBack.addEventListener('click', () => {
    location.reload();
  });
}

function listDebets() {
  const firstPhase = document.querySelector('.firstPhase');

  const listOlAdmit = document.querySelector('.listOlAdmit');
  const listDebt = document.querySelector('.listDebt-off');
  //
  const names = document.querySelector('.names');
  const debts = document.querySelector('.debts');
  const paymentStatus = document.querySelector('.paymentStatus');

  //

  // hidden / display

  firstPhase.classList.add('firstPhase-off');
  firstPhase.classList.remove('firstPhase');

  listDebt.classList.remove('listDebt-off');
  listDebt.classList.add('listDebt-on');
  //

  users.forEach((item) => {
    const parrafoName = document.createElement('p');
    const parrafoDebt = document.createElement('p');
    const parrafoStatus = document.createElement('p');
    parrafoName.textContent = `${item.name}`;
    parrafoDebt.textContent = `${item.debt}`;
    parrafoStatus.textContent = `${item.paymentStatus}`;
    names.appendChild(parrafoName);
    debts.appendChild(parrafoDebt);
    paymentStatus.appendChild(parrafoStatus);
  });
  //

  btnBackAdmit();
}

// btnChange usado en removeList
function btnChange(user) {
  user.paymentStatus = false;
  localStorage.setItem('Users', JSON.stringify(users));
}

function removeList() {
  const removeList = document.querySelector('.removeList');
  const containerBox = document.querySelector('.containerBox-off');
  //
  const firstPhase = document.querySelector('.firstPhase');
  const listOlAdmit = document.querySelector('.listOlAdmit');
  //

  // inicializando boton que vuelve atras
  const buttonBack = document.querySelector('.buttonBack-off');
  //

  // hidden / display

  firstPhase.classList.add('firstPhase-off');
  firstPhase.classList.remove('firstPhase');

  containerBox.classList.add('containerBox');
  containerBox.classList.remove('containerBox-off');

  buttonBack.classList.add('buttonBack');
  buttonBack.classList.remove('buttonBack-off');

  //

  users.map((item) => {
    const divs = document.createElement('div');
    divs.classList.add('divsSpans');
    const spanName = document.createElement('span');
    const spanDebt = document.createElement('span');
    const spanPaymentStatus = document.createElement('span');
    const btnRemove = document.createElement('button');
    btnRemove.classList.add('itemRemove');

    spanName.textContent = `${item.name}`;
    spanDebt.textContent = `${item.debt}`;
    spanPaymentStatus.textContent = `${item.paymentStatus}`;
    btnRemove.textContent = 'Eliminar';

    divs.appendChild(spanName);
    divs.appendChild(spanDebt);
    divs.appendChild(spanPaymentStatus);
    divs.appendChild(btnRemove);
    containerBox.appendChild(divs);
    containerBox.appendChild(buttonBack);

    btnRemove.addEventListener('click', () => {
      btnChange(item);
      spanPaymentStatus.textContent = 'false';
    });
  });

  buttonBack.addEventListener('click', () => {
    location.reload();
  });
}
