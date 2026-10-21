const water = [2.5, 1.2, 3.4, 1.0, 2.8, 3.6, 1.5];

const HIGH_LIMIT = 3;
const LOW_LIMIT = 1.5;
const MIN_AVERAGE = 2;


function findMax(arr) {
  return Math.max(...arr);
}

function filterHighDays(arr) {
  return arr.filter(function (liters) {
    return liters > HIGH_LIMIT;
  });
}

function calculateSum(arr) {
  return arr.reduce(function (sum, liters) {
    return sum + liters;
  }, 0);
}

function countLowDays(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= LOW_LIMIT) {
      count++;
    }
  }
  return count;
}

function formatNumber(value) {
  return value.toLocaleString('ru-RU', { maximumFractionDigits: 1 });
}

const totalLiters = calculateSum(water);
const highDays = filterHighDays(water);
const maxLiters = findMax(water);
const lowDaysCount = countLowDays(water);
const lowDaysPercent = (lowDaysCount / water.length) * 100;
const averageLiters = totalLiters / water.length;

const waterMessage =
  `За неделю вы выпили ${formatNumber(totalLiters)} литров воды, ` +
  `в ${highDays.length} днях норма была превышена`;

console.log(`Дней с низким потреблением (≤ ${formatNumber(LOW_LIMIT)} л): ${lowDaysCount}`);
console.log(`Процент дней с низким потреблением: ${formatNumber(lowDaysPercent)}%`);
console.log(`Максимальное потребление за день: ${formatNumber(maxLiters)} л`);

if (averageLiters < MIN_AVERAGE) {
  console.log('Рекомендуется увеличить потребление воды до 2–2,5 литров в день');
}


const loginLink = document.getElementById('login-link');
const loginSection = document.getElementById('login-section');
const profileSection = document.getElementById('profile-section');
const loginForm = document.getElementById('login-form');

loginLink.addEventListener('click', function (e) {
  e.preventDefault();
  loginSection.classList.toggle('hidden');
});

const ACCESS_CODE = 'rustam2026'; // пароль для входа

loginForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const enteredCode = document.getElementById('access-code').value;

  if (enteredCode === ACCESS_CODE) {
    const name = prompt('Отлично! Как вас зовут?') || 'гость';

    alert(`Добро пожаловать, ${name}! Проверка пройдена успешно.\n\n${waterMessage}`);
    console.log(`Пользователь "${name}" вошёл в систему в ${new Date().toLocaleTimeString()}`);

    window.location.href = './login/login.html';
  } else {
    alert('Неверный код доступа. Попробуйте снова.');
    console.log('Неудачная попытка входа: неверный код');
  }
});

const closeLoginBtn = document.getElementById('close-login');

closeLoginBtn.addEventListener('click', function () {
  loginSection.classList.add('hidden');
});

loginSection.addEventListener('click', function (e) {
  if (e.target === loginSection) {
    loginSection.classList.add('hidden');
  }
});