// Corazones de fondo
const emojis = ['💖', '💕', '💗', '❤️', '💓', '🌸', '✨'];
for (let i = 0; i < 18; i++) {
  const c = document.createElement('span');
  c.className = 'corazon-fondo';
  c.textContent = emojis[i % emojis.length];
  c.style.left = Math.random() * 100 + 'vw';
  c.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
  c.style.animationDuration = (Math.random() * 8 + 6) + 's';
  c.style.animationDelay = (Math.random() * 8) + 's';
  document.body.appendChild(c);
}

// El botón "No" huye, se encoge despacio y suelta frasecillas
let veces = 0;
const frasesNo = ['No 🙃', '¿Segur@? 😬', 'Piénsalo 🥹', '¡Venga! 🥺', 'Casi… 😅', 'Atrápame 😈', 'Imposible 😎'];

function escapar() {
  const no = document.getElementById('no');
  veces++;
  no.textContent = frasesNo[veces % frasesNo.length];

  const maxX = window.innerWidth - no.offsetWidth - 20;
  const maxY = window.innerHeight - no.offsetHeight - 20;
  no.style.position = 'fixed';
  no.style.left = Math.random() * maxX + 'px';
  no.style.top = Math.random() * maxY + 'px';

  // El botón "No" se encoge poco a poco
  const escalaNo = Math.max(1 - veces * 0.04, 0.25);
  no.style.transform = 'scale(' + escalaNo + ')';

  // El botón "Sí" se hace cada vez más grande y tentador
  const si = document.getElementById('si');
  const escala = Math.min(1 + veces * 0.15, 2.8);
  si.style.transform = 'scale(' + escala + ')';
}

// Paso 1 -> Paso 2: al decir "Sí" mostramos el formulario
function decirSi() {
  document.getElementById('pregunta').classList.add('escondido');
  document.getElementById('formulario').classList.add('activa');
  lluviaDeCorazones(20);
}

// Lluvia de corazones extra
function lluviaDeCorazones(cantidad) {
  for (let i = 0; i < cantidad; i++) {
    const c = document.createElement('span');
    c.className = 'corazon-fondo';
    c.textContent = '💖';
    c.style.left = Math.random() * 100 + 'vw';
    c.style.fontSize = (Math.random() * 2 + 1.5) + 'rem';
    c.style.opacity = 0.8;
    c.style.animationDuration = (Math.random() * 4 + 3) + 's';
    document.body.appendChild(c);
  }
}

// Paso 2 -> Paso 3: enviar el formulario a Web3Forms y mostrar el éxito
const form = document.getElementById('form-cita');
form.addEventListener('submit', async function (e) {
  e.preventDefault();
  const boton = document.getElementById('enviar');
  const error = document.getElementById('error');
  error.textContent = '';
  boton.disabled = true;
  boton.textContent = 'Enviando... 💌';

  try {
    const datos = new FormData(form);
    const respuesta = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: datos
    });
    const resultado = await respuesta.json();

    if (resultado.success) {
      document.getElementById('formulario').classList.remove('activa');
      document.getElementById('formulario').classList.add('escondido');
      document.getElementById('exito').classList.add('activa');
      lluviaDeCorazones(30);
    } else {
      throw new Error(resultado.message || 'No se pudo enviar');
    }
  } catch (err) {
    error.textContent = '¡Ups! No se pudo enviar (' + err.message + '). Inténtalo de nuevo.';
    boton.disabled = false;
    boton.textContent = 'Enviar 💌';
  }
});
