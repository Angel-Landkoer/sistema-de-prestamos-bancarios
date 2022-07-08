// Welcome

Toastify({
  text: 'Bienvenida a las opciones de administrador',
  duration: 2000,
  gravity: 'top',
  position: 'right',
  style: {
    width: '330px',
    height: 'auto',
    fontSize: '23px',
  },
}).showToast();

// Admit
const devH1 = document.querySelector('.devH1');
const devH2 = document.querySelector('.devH2');
//
devH1.innerHTML = 'Opciones de administrador';
devH2.innerHTML = 'Welcome';

const admit = document.querySelector('#admit');
const botonSubmitAdimit = document.querySelector('.submitAdmit');
botonSubmitAdimit.addEventListener('click', () => {
  const admitValue = Number(admit.value);

  if (admitValue >= 3 || admitValue <= 0) {
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

  if (admitValue === 1 || admitValue === '1') {
    listDebets();
  } else if (admitValue === 2 || admitValue === '2') {
    removeList();
  } else if (admitValue === 3 || admitValue === '3') {
    //
  } else if (admitValue === 4 || admitValue === '4') {
    //
  } else {
    console.log('Algo no funciona');
  }

  admit.value = '';
});
