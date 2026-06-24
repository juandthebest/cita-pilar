# 💖 Cita Romántica

Una pequeña web de broma para pedirle una cita a alguien especial.

## Cómo abrirla

Haz **doble clic** en `index.html` (se abre en el navegador). No hace falta instalar nada.

## Qué hace

- Pregunta *"¿Quieres tener una cita conmigo?"* con corazones flotando de fondo.
- El botón **"No" se escapa** al intentar pulsarlo, se encoge poco a poco y cambia de frase.
- El botón **"Sí" crece** cada vez más, hasta volverse irresistible.
- Al pulsar **"Sí"** aparece un **formulario rellenable** (nombre, día, hora, plan, mensaje).
- Al enviarlo, **la respuesta te llega por correo** y se muestra la confirmación. 🎉

## ⚙️ IMPORTANTE: activar el envío por correo (Web3Forms)

El envío usa [Web3Forms](https://web3forms.com) (gratis, sin servidor). Para que los correos
te lleguen, necesitas una **access key**:

1. Entra en **https://web3forms.com**.
2. Escribe tu correo (`juandiego.carmena@dxc.com`) y pulsa **"Create Access Key"**.
3. Recibirás la clave en tu correo (algo como `a1b2c3d4-....`).
4. Abre `index.html` y reemplaza `TU_ACCESS_KEY_AQUI` por tu clave:
   ```html
   <input type="hidden" name="access_key" value="a1b2c3d4-....">
   ```
5. ¡Listo! Cada formulario enviado te llegará a ese correo.

> Mientras no pongas tu clave real, el formulario mostrará un error al enviar.
> El plan gratuito permite 250 envíos al mes, de sobra para una broma. 😄

## Estructura

```
cita-romantica/
├── index.html    → estructura de la página
├── estilos.css   → diseño y animaciones
├── cita.js       → lógica (botones, corazones)
└── README.md     → este archivo
```

## Personalizar

- **Textos** (pregunta, detalles de la cita): `index.html`
- **Colores**: variable `--rosa` al principio de `estilos.css`
- **Frases del botón "No"** y velocidades: array `frasesNo` y las `escala` en `cita.js`
