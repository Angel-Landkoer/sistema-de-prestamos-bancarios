// Arry de los object(Usuarios / Manager)
const users = localStorage.getItem('Users')
  ? JSON.parse(localStorage.getItem('Users'))
  : [];

const admitManager = [];

// Admit

// Welcome the Users
const tagH1 = document.querySelector('.h1');
const tagH2 = document.querySelector('.h2');
tagH1.innerHTML = 'Bienvenido al este programa de Préstamos Bancarias';
tagH1.addEventListener('click', () => {
  tagH1.innerHTML = 'Acabas de hackear Facebook, bien hecho';
});

const optionMenu = document.querySelector('.optionMenu');
const listOl = document.querySelector('.listOl');

const numberOption = document.querySelector('#numberOption');

const botonSubmit = document.querySelector('.optionSubmit');
botonSubmit.addEventListener('click', () => {
  //
  const numberOptionValue = Number(numberOption.value);

  if (numberOptionValue >= 6 || numberOptionValue <= 0) {
    //
    Toastify({
      text: 'Opcion invalida',
      duration: 3000,
      gravity: 'top',
      position: 'right',
      style: {
        width: '240px',
        height: 'auto',
        fontSize: '25px',
      },
    }).showToast();
  }

  if (numberOptionValue === 1 || numberOptionValue === '1') {
    newUser();
  } else if (numberOptionValue === 2 || numberOptionValue === '2') {
    userAndDebt();
  } else if (numberOptionValue === 3 || numberOptionValue === '3') {
    displayDebt();
  } else if (numberOptionValue === 4 || numberOptionValue === '4') {
    payDebt();
  } else if (numberOptionValue === 5 || numberOptionValue === '5') {
    let usuariosAdmit;

    const cargarDatos = async () => {
      const url = '../server/admitManager.json';
      const res = await fetch(url);
      const listAdmit = await res.json();
      usuariosAdmit = listAdmit.admitManager;
      console.log(usuariosAdmit);
      more(usuariosAdmit);
    };
    cargarDatos();
    //
  } else {
    console.log('No funciona');
  }
  numberOption.value = '';
});

// End the welcome Users

// inicializacion del button new user
initButton();