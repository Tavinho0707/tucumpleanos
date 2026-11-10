/* ==========================================================
   CONEXIÓN CON FIREBASE FIRESTORE
========================================================== */
const firebaseConfig = {
  apiKey: "AIzaSyCclwyUdgqKrJFj6sfUXj5rzAswrXwavc0",
  authDomain: "tucumpleanos-b8dfd.firebaseapp.com",
  projectId: "tucumpleanos-b8dfd",
  storageBucket: "tucumpleanos-b8dfd.firebasestorage.app",
  messagingSenderId: "477862343477",
  appId: "1:477862343477:web:96b7d81084c7d06119d27c"
};

/* ==========================================================
   CONFIGURACIÓN DE LOS 18 DÍAS (19 Noviembre al 6 Diciembre)
   Modifica aquí los códigos, fotos, títulos y mensajes
========================================================== */
const daysData = [
  {
    day: 1,
    unlockDate: "2026-11-10",
    dateText: "19 Nov",
    fullDate: "19 de Noviembre",
    code: "INICIO19",
    hint: "El inicio de nuestra cuenta regresiva especial.",
    giftTitle: "Comienza la aventura",
    giftPhoto: "img/regalo-1.jpg",
    message: "¡Arrancan oficialmente tus 18 días! Cada fecha que pase será un detalle pensado solo para sacarte una sonrisa."
  },
  {
    day: 2,
    unlockDate: "2026-11-20",
    dateText: "20 Nov",
    fullDate: "20 de Noviembre",
    code: "COQUETA",
    hint: "Pista: Algo que te digo cuando te arreglas",
    giftTitle: "Skincare & Consentidera ✨",
    giftPhoto: "img/regalo-2.jpg",
    message: "Para que te tomes un tiempo para ti y te consientas. Estás preciosa todos los días, pero hoy te toca relajarte."
  },
  {
    day: 3,
    unlockDate: "2026-11-21",
    dateText: "21 Nov",
    fullDate: "21 de Noviembre",
    code: "POSTRE",
    hint: "Pista: Siempre hay espacio para uno",
    giftTitle: "Vale por tu postre favorito 🍰",
    giftPhoto: "img/regalo-3.jpg",
    message: "Este vale es canjeable cuando quieras. Tú eliges el lugar y yo me encargo de llevarte."
  },
  {
    day: 4,
    unlockDate: "2026-11-22",
    dateText: "22 Nov",
    fullDate: "22 de Noviembre",
    code: "SONRISA",
    hint: "Pista: Lo más lindo de tu carita",
    giftTitle: "Un recuerdo especial 📸",
    giftPhoto: "img/regalo-4.jpg",
    message: "Amo cada vez que te ríes conmigo. Hoy quiero recordarte lo feliz que me haces."
  },
  {
    day: 5,
    unlockDate: "2026-11-23",
    dateText: "23 Nov",
    fullDate: "23 de Noviembre",
    code: "CARTA",
    hint: "Pista: Tinta y papel dedicados a ti",
    giftTitle: "Una cartita física escondida 💌",
    giftPhoto: "img/regalo-5.jpg",
    message: "Revisa bien en tu bolso o donde te dije... Hay unas palabras escritas a mano esperándote."
  },
  {
    day: 6,
    unlockDate: "2026-11-24",
    dateText: "24 Nov",
    fullDate: "24 de Noviembre",
    code: "BESO",
    hint: "Pista: De esos que no se olvidan",
    giftTitle: "Tu chocolate favorito 🍓",
    giftPhoto: "img/regalo-6.jpg",
    message: "Un antojito dulce para alegrarte la tarde mientras seguimos descontando días."
  },
  {
    day: 7,
    unlockDate: "2026-11-25",
    dateText: "25 Nov",
    fullDate: "25 de Noviembre",
    code: "LUNA",
    hint: "Pista: La miramos juntos de noche",
    giftTitle: "Noche de pelis y arrunchis 🍿",
    giftPhoto: "img/regalo-7.jpg",
    message: "Vale oficial por una tarde de películas, cobijas y tus snacks preferidos sin interrupciones."
  },
  {
    day: 8,
    unlockDate: "2026-11-26",
    dateText: "26 Nov",
    fullDate: "26 de Noviembre",
    code: "PASEO",
    hint: "Pista: Cuando salimos sin rumbo fijo",
    giftTitle: "Una salida especial 🍦",
    giftPhoto: "img/regalo-8.jpg",
    message: "Vamos por un helado o a dar una vuelta para charlar rico como siempre nos gusta."
  },
  {
    day: 9,
    unlockDate: "2026-11-27",
    dateText: "27 Nov",
    fullDate: "27 de Noviembre",
    code: "OJITOS",
    hint: "Pista: Me pierdo en ellos",
    giftTitle: "Un detalle para tu cuarto 🌸",
    giftPhoto: "img/regalo-9.jpg",
    message: "¡Mitad de camino cumplida! Ya llevamos 9 días y falta poco para el gran día."
  },
  {
    day: 10,
    unlockDate: "2026-11-28",
    dateText: "28 Nov",
    fullDate: "28 de Noviembre",
    code: "MUSICA",
    hint: "Pista: Lo que suena cuando pienso en ti",
    giftTitle: "Nuestra playlist dedicada 🎧",
    giftPhoto: "img/regalo-10.jpg",
    message: "Agregué varias canciones que me recuerdan a ti en cada momento."
  },
  {
    day: 11,
    unlockDate: "2026-11-29",
    dateText: "29 Nov",
    fullDate: "29 de Noviembre",
    code: "SIEMPRE",
    hint: "Pista: Lo que dura una promesa",
    giftTitle: "Un accesorio lindo 💍",
    giftPhoto: "img/regalo-11.jpg",
    message: "Para que lo lleves puesto y te acuerdes de mí donde sea que vayas."
  },
  {
    day: 12,
    unlockDate: "2026-11-30",
    dateText: "30 Nov",
    fullDate: "30 de Noviembre",
    code: "NOVIEMBRE",
    hint: "Pista: El mes que se acaba hoy",
    giftTitle: "¡Despedimos noviembre! ☕",
    giftPhoto: "img/regalo-12.jpg",
    message: "Mañana empieza tu mes. Solo faltan 6 días para tus 18."
  },
  {
    day: 13,
    unlockDate: "2026-12-01",
    dateText: "1 Dic",
    fullDate: "1 de Diciembre",
    code: "LLEGAN",
    hint: "Pista: Ya se siente diciembre",
    giftTitle: "Café o merienda sorpresa 🥐",
    giftPhoto: "img/regalo-13.jpg",
    message: "Entramos a la recta final. El 6 de diciembre está a la vuelta de la esquina."
  },
  {
    day: 14,
    unlockDate: "2026-12-02",
    dateText: "2 Dic",
    fullDate: "2 de Diciembre",
    code: "REINA",
    hint: "Pista: La corona te queda perfecta",
    giftTitle: "Vale de masaje o consentidera 💆‍♀️",
    giftPhoto: "img/regalo-14.jpg",
    message: "Solo para que descanses y te sientas tratada como la reina que eres."
  },
  {
    day: 15,
    unlockDate: "2026-12-03",
    dateText: "3 Dic",
    fullDate: "3 de Diciembre",
    code: "FALTAN3",
    hint: "Pista: Cuántos días quedan",
    giftTitle: "Un postrecito especial 🍪",
    giftPhoto: "img/regalo-15.jpg",
    message: "¡3 días! La emoción va subiendo y ya casi llega la sorpresa mayor."
  },
  {
    day: 16,
    unlockDate: "2026-12-04",
    dateText: "4 Dic",
    fullDate: "4 de Diciembre",
    code: "MAGIA",
    hint: "Pista: Lo que siento contigo",
    giftTitle: "Un ramo o florecita 💐",
    giftPhoto: "img/regalo-16.jpg",
    message: "Flores para alegrar tu día previo a tu fin de semana de fiesta."
  },
  {
    day: 17,
    unlockDate: "2026-12-05",
    dateText: "5 Dic",
    fullDate: "5 de Diciembre",
    code: "MANANA",
    hint: "Pista: La víspera esperada",
    giftTitle: "La noche previa 🌙✨",
    giftPhoto: "img/regalo-17.jpg",
    message: "¡Mañana cumples 18! Duerme rico y prepárate para celebrar por todo lo alto."
  },
  {
    day: 18,
    unlockDate: "2026-12-06",
    dateText: "6 Dic",
    fullDate: "6 de Diciembre",
    code: "FELICES18",
    hint: "Pista: La frase del día más importante",
    giftTitle: "¡FELICES 18 AÑOS MI AMOR! 👑🎁",
    giftPhoto: "img/regalo-18.jpg",
    message: "Llegó tu día. Eres una persona increíble, llena de metas y con un corazón enorme. Gracias por dejarme ser parte de tu vida y celebrar estos 18 años juntos. ¡Te amo con todo mi ser!"
  }
];

// MODO PRUEBAS:
// Ponlo en true mientras programas para poder abrir cualquier día y probar tus códigos.
// Cuando se la envíes a ella, cámbialo a false.
const DEBUG_BYPASS_DATE = false;

function isDayDateAvailable(unlockDateStr) {
  if (DEBUG_BYPASS_DATE) return true;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [year, month, day] = unlockDateStr.split('-').map(Number);
  const targetDate = new Date(year, month - 1, day);
  targetDate.setHours(0, 0, 0, 0);

  return today >= targetDate;
}

/* ==========================================================
   ESTADO Y LOCALSTORAGE
========================================================== */
const STORAGE_KEY = 'advent_18_unlocked_days';
let activeDay = null;
let db = null;
let docRef = null;
let daysConfigDocRef = null;
let unlockedDays = loadLocalUnlockedDays();
let codeErrorAnimationTimer = null;
let codeErrorMessageTimer = null;

function loadLocalUnlockedDays() {
  const data = localStorage.getItem(STORAGE_KEY);
  const days = data ? JSON.parse(data) : [];
  return Array.isArray(days) ? [...new Set(days.filter(day => Number.isInteger(day) && day >= 1 && day <= 18))] : [];
}

function getUnlockedDays() {
  return unlockedDays;
}

function setUnlockedDays(days) {
  unlockedDays = [...new Set(days.filter(day => Number.isInteger(day) && day >= 1 && day <= 18))];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(unlockedDays));
}

function saveUnlockedDay(dayNum) {
  const current = getUnlockedDays();
  if (!current.includes(dayNum)) {
    setUnlockedDays([...current, dayNum]);
    if (docRef) {
      saveUnlockedDayToFirebase(dayNum);
    }
  }
}

function listenToProgress() {
  docRef.onSnapshot((snapshot) => {
    if (snapshot.exists) {
      const days = snapshot.data().days;
      setUnlockedDays(Array.isArray(days) ? days : []);
    } else if (unlockedDays.length > 0) {
      saveUnlockedDaysToFirebase(unlockedDays);
    } else {
      setUnlockedDays([]);
    }
    renderCalendar();
    const adminModal = document.getElementById('adminModal');
    if (adminModal && !adminModal.classList.contains('hidden')) {
      updateAdminProgress();
    }
  }, (error) => {
    console.error('Error al escuchar el progreso en Firestore:', error);
  });
}

async function saveUnlockedDaysToFirebase(days) {
  try {
    await docRef.set({
      days: firebase.firestore.FieldValue.arrayUnion(...days),
      fechaActualizacion: new Date().toISOString()
    }, { merge: true });
  } catch (error) {
    console.error('Error al migrar el progreso a Firestore:', error);
  }
}

async function saveUnlockedDayToFirebase(dayNumber) {
  try {
    await docRef.set({
      days: firebase.firestore.FieldValue.arrayUnion(dayNumber),
      fechaActualizacion: new Date().toISOString()
    }, { merge: true });
  } catch (error) {
    console.error('Error al guardar el progreso en Firestore:', error);
  }
}

async function resetFirebaseProgress() {
  if (!docRef) return;

  try {
    await docRef.set({
      days: [],
      fechaActualizacion: new Date().toISOString()
    }, { merge: true });
  } catch (error) {
    console.error('Error al reiniciar el progreso en Firestore:', error);
  }
}

function initFirebase() {
  if (typeof firebase === 'undefined' || !firebase.initializeApp || !firebase.firestore) {
    console.error('No se pudieron cargar los SDKs de Firebase; se usará el progreso local.');
    return;
  }

  try {
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
    db = firebase.firestore();
    docRef = db.collection('advent_calendar').doc('progreso');
    daysConfigDocRef = db.collection('advent_calendar').doc('config_dias');
    listenToProgress();
    listenToDaysConfig();
  } catch (error) {
    db = null;
    docRef = null;
    daysConfigDocRef = null;
    console.error('Error al inicializar Firebase; se usará el progreso local:', error);
  }
}

/* ==========================================================
   RENDER DEL CALENDARIO
========================================================== */
function renderCalendar() {
  const grid = document.getElementById('calendarGrid');
  const unlocked = getUnlockedDays();
  const now = new Date();
  const todayDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  grid.innerHTML = '';

  daysData.forEach(item => {
    const isUnlocked = unlocked.includes(item.day);
    const isFutureLocked = !isDayDateAvailable(item.unlockDate);
    const isCurrentActive = !isUnlocked && item.unlockDate === todayDate;
    const card = document.createElement('div');
    card.className = `day-card ${isUnlocked ? 'unlocked' : ''} ${isFutureLocked ? 'future-locked' : ''} ${isCurrentActive ? 'current-active' : ''} ${item.day === 18 ? 'day-18' : ''}`;
    card.onclick = () => openDayModal(item.day);

    let statusIcon = isUnlocked ? '🎁' : '🔒';
    if (item.day === 18 && !isUnlocked) statusIcon = '👑';

    card.innerHTML = `
      <span class="card-num">${item.day}</span>
      <span class="card-date">${item.dateText}</span>
      <span class="card-status">${statusIcon}</span>
    `;
    grid.appendChild(card);
  });

  updateProgressBar();
}

function updateProgressBar() {
  const progressBar = document.getElementById('progressBar');
  const progressText = document.getElementById('progressText');
  if (!progressBar || !progressText) return;

  const totalDays = 18;
  const count = getUnlockedDays().length;
  const percentage = Math.round((count / totalDays) * 100);

  progressBar.style.width = `${percentage}%`;
  progressText.textContent = count === totalDays
    ? '🎉 ¡Todas las sorpresas desbloqueadas! (100%)'
    : `${count} de ${totalDays} sorpresas desbloqueadas (${percentage}%)`;
}

/* ==========================================================
   LÓGICA DEL MODAL
========================================================== */
function openDayModal(dayNum) {
  activeDay = daysData.find(d => d.day === dayNum);
  if (!activeDay) return;

  const unlocked = getUnlockedDays();
  const isAlreadyUnlocked = unlocked.includes(dayNum);
  const isDateReached = isDayDateAvailable(activeDay.unlockDate);

  const modal = document.getElementById('unlockModal');
  const codeSec = document.getElementById('codeSection');
  const rewardSec = document.getElementById('rewardSection');
  const dateLockSec = document.getElementById('dateLockSection');
  const errorText = document.getElementById('codeErrorMsg');
  const input = document.getElementById('codeInput');

  clearTimeout(codeErrorAnimationTimer);
  clearTimeout(codeErrorMessageTimer);
  input.classList.remove('input-error');
  errorText.textContent = '';
  codeSec.classList.add('hidden');
  rewardSec.classList.add('hidden');
  dateLockSec.classList.add('hidden');
  input.value = '';

  if (isAlreadyUnlocked) {
    showRewardView(activeDay);
  } else if (!isDateReached) {
    dateLockSec.classList.remove('hidden');
    document.getElementById('dateLockTitle').textContent = `Día ${activeDay.day}`;
    document.getElementById('dateLockDate').textContent = activeDay.fullDate;
    document.getElementById('dateLockMessage').innerHTML =
      `Este regalito aún está sellado con candado de tiempo.<br><br>Vuelve el <strong>${activeDay.fullDate}</strong> para desbloquearlo con tu clave secreta. ✨`;
  } else {
    codeSec.classList.remove('hidden');
    document.getElementById('modalDayNumber').textContent = `Día ${activeDay.day}`;
    document.getElementById('modalDateTag').textContent = activeDay.fullDate;
    updateDayHint(activeDay);
    
    setTimeout(() => input.focus(), 250);
  }

  modal.classList.remove('hidden');
}

function updateDayHint(dayData) {
  const hintContainer = document.getElementById('hintContainer');
  const hintText = document.getElementById('hintText');
  if (!hintContainer || !hintText) return;

  const today = new Date();
  const currentDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  if (dayData.unlockDate && currentDate < dayData.unlockDate) {
    hintContainer.classList.add('hint-locked');
    hintText.textContent = `Esta pista se revelará el ${dayData.fullDate || dayData.dateText || dayData.unlockDate}. ¡Paciencia! ✨`;
    return;
  }

  hintContainer.classList.remove('hint-locked');
  hintText.textContent = dayData.hint || 'Busca muy bien en tu habitación...';
}

function verifyCode() {
  if (!activeDay) return;

  const inputEl = document.getElementById('codeInput');
  const userCode = inputEl.value.trim().toUpperCase();
  const validCode = activeDay.code.trim().toUpperCase();

  if (userCode === validCode) {
    clearTimeout(codeErrorAnimationTimer);
    clearTimeout(codeErrorMessageTimer);
    inputEl.classList.remove('input-error');
    document.getElementById('codeErrorMsg').textContent = '';
    saveUnlockedDay(activeDay.day);
    triggerConfetti();
    renderCalendar();
    showRewardView(activeDay);
  } else {
    triggerCodeError();
  }
}

function triggerCodeError(customText = '¡Código incorrecto! Revisa la pista escondida ✨') {
  const inputEl = document.getElementById('codeInput');
  const errorEl = document.getElementById('codeErrorMsg');

  if (inputEl) {
    clearTimeout(codeErrorAnimationTimer);
    inputEl.classList.remove('input-error');
    void inputEl.offsetWidth;
    inputEl.classList.add('input-error');
    inputEl.value = '';
    inputEl.focus();

    codeErrorAnimationTimer = setTimeout(() => {
      inputEl.classList.remove('input-error');
    }, 1000);
  }

  if (errorEl) {
    clearTimeout(codeErrorMessageTimer);
    errorEl.textContent = customText;
    codeErrorMessageTimer = setTimeout(() => {
      errorEl.textContent = '';
    }, 2500);
  }
}

function showRewardView(item) {
  document.getElementById('codeSection').classList.add('hidden');
  const rewardSec = document.getElementById('rewardSection');
  rewardSec.classList.remove('hidden');

  document.getElementById('rewardTitle').textContent = item.giftTitle;
  document.getElementById('rewardMessage').textContent = item.message;
  
  const photoEl = document.getElementById('rewardPhoto');
  photoEl.src = item.giftPhoto;
}

function closeModal() {
  document.getElementById('unlockModal').classList.add('hidden');
  activeDay = null;
}

function handleBackdropClick(e) {
  if (e.target.id === 'unlockModal') closeModal();
}

function handleImageError(img) {
  // Imagen de respaldo estética si aún no has puesto el archivo en la carpeta img
  img.src = 'https://images.unsplash.com/photo-1513201099705-a9742e15a5be?w=800&auto=format&fit=crop&q=80';
}

function triggerConfetti() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
}

function resetProgress() {
  if (confirm('¿Quieres reiniciar todas las casillas para probar desde cero?')) {
    localStorage.removeItem(STORAGE_KEY);
    setUnlockedDays([]);
    resetFirebaseProgress();
    renderCalendar();
  }
}

/* ==========================================================
   LÓGICA DEL MODAL DE INSTRUCCIONES / BIENVENIDA
========================================================== */
function initWelcomeModal() {
  const modal = document.getElementById('welcomeModal');
  const btnStart = document.getElementById('btnStartAdventure');
  const btnHelp = document.getElementById('btnHelp');

  if (!localStorage.getItem('hasSeenInstructions')) {
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
    btnStart.focus();
  }

  btnStart.addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
    localStorage.setItem('hasSeenInstructions', 'true');
    btnHelp.focus();
  });

  btnHelp.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
    btnStart.focus();
  });
}

/* ==========================================================
   RELOJ CONTADOR EN TIEMPO REAL AL 6 DE DICIEMBRE
========================================================== */
function initCountdown() {
  const targetDate = new Date(2026, 11, 6, 0, 0, 0).getTime();

  const daysEl = document.getElementById('daysCount');
  const hoursEl = document.getElementById('hoursCount');
  const minutesEl = document.getElementById('minutesCount');
  const secondsEl = document.getElementById('secondsCount');
  const titleEl = document.querySelector('.countdown-title');

  function updateTimer() {
    const distance = targetDate - new Date().getTime();

    if (distance <= 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minutesEl.textContent = '00';
      secondsEl.textContent = '00';
      titleEl.textContent = '¡HOY ES TU CUMPLEAÑOS! 👑🎉';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

/* ==========================================================
   GENERADOR AUTOMÁTICO DE PATRÓN DE FONDO
========================================================== */
const backgroundPhotos = [
  'img/bebe-1.webp',
  'img/bebe-2.jpg',
  'img/bebe-3.jpg',
  'img/bebe-4.jpg',
  'img/bebe-5.jpg'
];

function generateBackgroundPattern() {
  const container = document.getElementById('patternBackground');
  if (!container || backgroundPhotos.length === 0) return;

  container.innerHTML = '';

  const totalItems = Math.ceil((window.innerWidth * window.innerHeight) / 9000);
  const rotations = [-5, -2, 0, 3, 6, -3, 4];

  for (let i = 0; i < totalItems; i++) {
    const item = document.createElement('div');
    item.className = 'pattern-item';

    const photoSrc = backgroundPhotos[i % backgroundPhotos.length];
    const rotation = rotations[i % rotations.length];

    item.style.backgroundImage = `url('${photoSrc}')`;
    item.style.setProperty('--rot', `${rotation}deg`);
    container.appendChild(item);
  }
}

/* ==========================================================
   PANEL SECRETO DE MONITOREO (MODO ADMIN)
========================================================== */
const ADMIN_PIN = '0707';
let titleClickCount = 0;
let titleClickTimer = null;

function openAdminWithAuth() {
  const inputPin = prompt('🔒 Acceso Administrador - Ingresa tu PIN:');
  if (inputPin !== ADMIN_PIN) {
    if (inputPin !== null) alert('PIN incorrecto.');
    return;
  }

  const modal = document.getElementById('adminModal');
  renderAdminPanel();
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
  document.getElementById('closeAdminBtn').focus();
}

function closeAdminPanel() {
  const modal = document.getElementById('adminModal');
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
}

function renderAdminPanel() {
  const listEl = document.getElementById('adminDaysList');
  if (!listEl) return;

  updateAdminProgress();
  listEl.replaceChildren();

  daysData.forEach((dayData) => {
    const isUnlocked = getUnlockedDays().includes(dayData.day);
    const dayItem = document.createElement('div');
    dayItem.className = `admin-day-card ${isUnlocked ? 'unlocked' : 'locked'}`;
    dayItem.dataset.day = dayData.day;

    const top = document.createElement('div');
    top.className = 'admin-card-top';

    const dayNumber = document.createElement('span');
    dayNumber.className = 'admin-day-num';
    dayNumber.textContent = `Día ${dayData.day} (${dayData.dateText})`;

    const dayStatus = document.createElement('span');
    dayStatus.className = 'admin-status-pill admin-day-status';
    dayStatus.textContent = isUnlocked ? '🔓 Abierto' : '🔒 Bloqueado';

    top.append(dayNumber, dayStatus);

    const codeField = createAdminConfigField('Clave:', `adminCode_${dayData.day}`, dayData.code, 'Ej: regalo20');
    const hintField = createAdminConfigField('Pista:', `adminHint_${dayData.day}`, dayData.hint, 'Ej: Busca bajo la almohada');

    const buttons = document.createElement('div');
    buttons.className = 'admin-card-buttons';

    const saveButton = document.createElement('button');
    saveButton.className = 'btn-save-day';
    saveButton.type = 'button';
    saveButton.dataset.action = 'save';
    saveButton.dataset.day = dayData.day;
    saveButton.textContent = '💾 Guardar cambios';

    const toggleButton = document.createElement('button');
    toggleButton.className = 'btn-toggle-day';
    toggleButton.type = 'button';
    toggleButton.dataset.action = 'toggle';
    toggleButton.dataset.day = dayData.day;
    toggleButton.textContent = isUnlocked ? 'Bloquear' : 'Forzar apertura';

    buttons.append(saveButton, toggleButton);
    dayItem.append(top, codeField, hintField, buttons);
    listEl.appendChild(dayItem);
  });
}

function createAdminConfigField(labelText, inputId, value, placeholder) {
  const field = document.createElement('label');
  field.className = 'admin-inputs-group';
  field.htmlFor = inputId;

  const label = document.createElement('span');
  label.textContent = labelText;

  const input = document.createElement('input');
  input.id = inputId;
  input.type = 'text';
  input.value = typeof value === 'string' ? value : '';
  input.placeholder = placeholder;
  input.autocomplete = 'off';

  field.append(label, input);
  return field;
}

function updateAdminProgress() {
  const openedCount = getUnlockedDays().length;
  const total = daysData.length;
  const percent = Math.round((openedCount / total) * 100);
  document.getElementById('adminOpenedCount').textContent = openedCount;
  document.getElementById('adminPendingCount').textContent = total - openedCount;
  document.getElementById('adminPercent').textContent = `${percent}%`;

  daysData.forEach((dayData) => {
    const card = document.querySelector(`.admin-day-card[data-day="${dayData.day}"]`);
    if (!card) return;

    const isUnlocked = getUnlockedDays().includes(dayData.day);
    card.classList.toggle('unlocked', isUnlocked);
    card.classList.toggle('locked', !isUnlocked);
    card.querySelector('.admin-day-status').textContent = isUnlocked ? '🔓 Abierto' : '🔒 Bloqueado';
    card.querySelector('[data-action="toggle"]').textContent = isUnlocked ? 'Bloquear' : 'Forzar apertura';
  });
}

async function saveDayConfig(dayNumber) {
  const codeInput = document.getElementById(`adminCode_${dayNumber}`);
  const hintInput = document.getElementById(`adminHint_${dayNumber}`);
  const targetDay = daysData.find(day => day.day === dayNumber);
  if (!targetDay || !codeInput || !hintInput) return;
  if (!daysConfigDocRef) {
    alert('Firestore no está disponible. No se pudo guardar la configuración.');
    return;
  }

  const code = codeInput.value.trim().toUpperCase();
  const hint = hintInput.value.trim();
  if (!code) {
    alert('La clave no puede quedar vacía.');
    codeInput.focus();
    return;
  }

  try {
    await daysConfigDocRef.set({
      [`dia_${dayNumber}`]: { code, hint }
    }, { merge: true });

    targetDay.code = code;
    targetDay.hint = hint;
    alert(`✅ Día ${dayNumber} actualizado con éxito.`);
  } catch (error) {
    console.error('Error al guardar la configuración del día:', error);
    alert('Error al guardar en Firebase.');
  }
}

function listenToDaysConfig() {
  daysConfigDocRef.onSnapshot((snapshot) => {
    if (!snapshot.exists) return;

    const config = snapshot.data();
    let hasChanges = false;
    daysData.forEach((dayData) => {
      const dayConfig = config[`dia_${dayData.day}`];
      if (!dayConfig || typeof dayConfig !== 'object') return;

      if (typeof dayConfig.code === 'string' && dayConfig.code.trim()) {
        dayData.code = dayConfig.code;
      }
      if (typeof dayConfig.hint === 'string') {
        dayData.hint = dayConfig.hint;
      }
      hasChanges = true;
    });

    const adminModal = document.getElementById('adminModal');
    if (hasChanges && adminModal && !adminModal.classList.contains('hidden')) {
      renderAdminPanel();
    }
  }, (error) => {
    console.error('Error al escuchar la configuración de los días en Firestore:', error);
  });
}

async function toggleDayDirect(dayNumber) {
  if (!docRef) {
    alert('Firestore no está disponible. No se pudo actualizar el día.');
    return;
  }
  if (!Number.isInteger(dayNumber) || dayNumber < 1 || dayNumber > 18) {
    console.error('Número de día inválido para el panel de administración:', dayNumber);
    return;
  }

  try {
    const operation = getUnlockedDays().includes(dayNumber)
      ? firebase.firestore.FieldValue.arrayRemove(dayNumber)
      : firebase.firestore.FieldValue.arrayUnion(dayNumber);
    await docRef.set({
      days: operation,
      ultimoDesbloqueo: new Date().toISOString()
    }, { merge: true });
  } catch (error) {
    console.error('Error al actualizar estado en Firestore:', error);
    alert('Error al sincronizar con Firebase.');
  }
}

function initAdminPanel() {
  const title = document.querySelector('.main-title');
  const modal = document.getElementById('adminModal');
  const closeButton = document.getElementById('closeAdminBtn');
  const daysList = document.getElementById('adminDaysList');
  const resetButton = document.getElementById('resetAllBtn');

  title.tabIndex = 0;
  title.setAttribute('role', 'button');
  title.setAttribute('aria-label', 'Abrir panel de administración: pulsa tres veces');
  title.style.cursor = 'pointer';

  const handleTitleActivation = () => {
    titleClickCount += 1;
    clearTimeout(titleClickTimer);

    if (titleClickCount === 3) {
      titleClickCount = 0;
      openAdminWithAuth();
    } else {
      titleClickTimer = setTimeout(() => {
        titleClickCount = 0;
      }, 700);
    }
  };

  title.addEventListener('click', handleTitleActivation);
  title.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleTitleActivation();
    }
  });
  closeButton.addEventListener('click', closeAdminPanel);
  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeAdminPanel();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeAdminPanel();
    }
  });
  daysList.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-action]');
    if (!button) return;

    const dayNumber = Number(button.dataset.day);
    if (button.dataset.action === 'save') {
      saveDayConfig(dayNumber);
    } else if (button.dataset.action === 'toggle') {
      toggleDayDirect(dayNumber);
    }
  });
  resetButton.addEventListener('click', async () => {
    if (!confirm('⚠️ ¿Seguro que quieres resetear TODO el calendario a 0?')) return;
    if (!docRef) {
      alert('Firestore no está disponible. No se pudo reiniciar el calendario.');
      return;
    }

    try {
      await docRef.set({
        days: [],
        ultimoReseteo: new Date().toISOString()
      }, { merge: true });
    } catch (error) {
      console.error('Error al resetear el progreso desde el panel:', error);
      alert('No se pudo resetear la base de datos.');
    }
  });
}

// Permitir tecla Enter en el campo de texto
document.addEventListener('DOMContentLoaded', () => {
  renderCalendar();
  initCountdown();
  generateBackgroundPattern();
  initFirebase();
  initWelcomeModal();
  initAdminPanel();
  window.addEventListener('resize', generateBackgroundPattern);
  
  document.getElementById('codeInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') verifyCode();
  });
});