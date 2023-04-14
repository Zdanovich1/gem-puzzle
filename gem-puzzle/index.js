//*Анимированный фавикон

let count = 1;
let favicons = document.querySelector('link[rel ~= "icon"]');

function animateFavicon() {
   favicons.setAttribute('href', `src/assets/icons/${count}.png`);
   count++;
   if (count === 17) count = 1;
}

setInterval(animateFavicon, 600);

//*Инициируем элементы DOM при загрузке страницы

function initContent() {
   const body = document.querySelector('body');
   const content = `   <div class="game" id="game">
   <div class="game__title">
      <h1>Gem Puzzle</h1>
   </div>
   <div class="game__buttons">
      <button class="button btn-1" id="shuffle">Shuffle and start</button>
      <button class="button btn-2" id="stop">Stop</button>
      <button class="button btn-3" id="save">Save</button>
      <button class="button btn-4" id="results">Results</button>
   </div>
   <div class="game__info info">
      <div class="info__moves">
         <p>Moves: 0</p>
      </div>
      <div class="info__time">
         <p>Time: 00:00</p>
      </div>
      <div class="info__volume">
         <button>
            <img src="src/assets/volume/volumeOn.png" id="volumeOn" alt="volume">
            <img src="src/assets/volume/volumeOff.png" id="volumeOff" alt="volume">
         </button>
      </div>
   </div>
   <div class="game__playground" id="game__playground">
      <button class="item" data-matrix-id="1"><span class="item__value">1</span></button>
      <button class="item" data-matrix-id="2"><span class="item__value">2</span></button>
      <button class="item" data-matrix-id="3"><span class="item__value">3</span></button>
      <button class="item" data-matrix-id="4"><span class="item__value">4</span></button>
      <button class="item" data-matrix-id="5"><span class="item__value">5</span></button>
      <button class="item" data-matrix-id="6"><span class="item__value">6</span></button>
      <button class="item" data-matrix-id="7"><span class="item__value">7</span></button>
      <button class="item" data-matrix-id="8"><span class="item__value">8</span></button>
      <button class="item" data-matrix-id="9"><span class="item__value">9</span></button>

      <button class="item" data-matrix-id="10"><span class="item__value">10</span></button>
      <button class="item" data-matrix-id="11"><span class="item__value">11</span></button>
      <button class="item" data-matrix-id="12"><span class="item__value">12</span></button>
      <button class="item" data-matrix-id="13"><span class="item__value">13</span></button>
      <button class="item" data-matrix-id="14"><span class="item__value">14</span></button>
      <button class="item" data-matrix-id="15"><span class="item__value">15</span></button>
      <button class="item" data-matrix-id="16"><span class="item__value">16</span></button>

      <button class="item" data-matrix-id="17"><span class="item__value">17</span></button>
      <button class="item" data-matrix-id="18"><span class="item__value">18</span></button>
      <button class="item" data-matrix-id="19"><span class="item__value">19</span></button>
      <button class="item" data-matrix-id="20"><span class="item__value">20</span></button>
      <button class="item" data-matrix-id="21"><span class="item__value">21</span></button>
      <button class="item" data-matrix-id="22"><span class="item__value">22</span></button>
      <button class="item" data-matrix-id="23"><span class="item__value">23</span></button>
      <button class="item" data-matrix-id="24"><span class="item__value">24</span></button>
      <button class="item" data-matrix-id="25"><span class="item__value">25</span></button>

      <button class="item" data-matrix-id="26"><span class="item__value">26</span></button>
      <button class="item" data-matrix-id="27"><span class="item__value">27</span></button>
      <button class="item" data-matrix-id="28"><span class="item__value">28</span></button>
      <button class="item" data-matrix-id="29"><span class="item__value">29</span></button>
      <button class="item" data-matrix-id="30"><span class="item__value">30</span></button>
      <button class="item" data-matrix-id="31"><span class="item__value">31</span></button>
      <button class="item" data-matrix-id="32"><span class="item__value">32</span></button>
      <button class="item" data-matrix-id="33"><span class="item__value">33</span></button>
      <button class="item" data-matrix-id="34"><span class="item__value">34</span></button>
      <button class="item" data-matrix-id="35"><span class="item__value">35</span></button>
      <button class="item" data-matrix-id="36"><span class="item__value">36</span></button>

      <button class="item" data-matrix-id="37"><span class="item__value">37</span></button>
      <button class="item" data-matrix-id="38"><span class="item__value">38</span></button>
      <button class="item" data-matrix-id="39"><span class="item__value">39</span></button>
      <button class="item" data-matrix-id="40"><span class="item__value">40</span></button>
      <button class="item" data-matrix-id="41"><span class="item__value">41</span></button>
      <button class="item" data-matrix-id="42"><span class="item__value">42</span></button>
      <button class="item" data-matrix-id="43"><span class="item__value">43</span></button>
      <button class="item" data-matrix-id="44"><span class="item__value">44</span></button>
      <button class="item" data-matrix-id="45"><span class="item__value">45</span></button>
      <button class="item" data-matrix-id="46"><span class="item__value">46</span></button>
      <button class="item" data-matrix-id="47"><span class="item__value">47</span></button>
      <button class="item" data-matrix-id="48"><span class="item__value">48</span></button>
      <button class="item" data-matrix-id="49"><span class="item__value">49</span></button>

      <button class="item" data-matrix-id="50"><span class="item__value">50</span></button>
      <button class="item" data-matrix-id="51"><span class="item__value">51</span></button>
      <button class="item" data-matrix-id="52"><span class="item__value">52</span></button>
      <button class="item" data-matrix-id="53"><span class="item__value">53</span></button>
      <button class="item" data-matrix-id="54"><span class="item__value">54</span></button>
      <button class="item" data-matrix-id="55"><span class="item__value">55</span></button>
      <button class="item" data-matrix-id="56"><span class="item__value">56</span></button>
      <button class="item" data-matrix-id="57"><span class="item__value">57</span></button>
      <button class="item" data-matrix-id="58"><span class="item__value">58</span></button>
      <button class="item" data-matrix-id="59"><span class="item__value">59</span></button>
      <button class="item" data-matrix-id="60"><span class="item__value">60</span></button>
      <button class="item" data-matrix-id="61"><span class="item__value">61</span></button>
      <button class="item" data-matrix-id="62"><span class="item__value">62</span></button>
      <button class="item" data-matrix-id="63"><span class="item__value">63</span></button>
      <button class="item" data-matrix-id="64"><span class="item__value">64</span></button>
   </div>
   <div class="game__size">
      <p id="play-size">Frame size: 4*4</p>
   </div>
   <div class="game__size-buttons">
      <p>Other sizes:</p>
      <button class="size-button" id="3x3">
         <span>3x3</span>
      </button>
      <button class="size-button" id="4x4">
         <span>4x4</span>
      </button>
      <button class="size-button" id="5x5">
         <span>5x5</span>
      </button>
      <button class="size-button" id="6x6">
         <span>6x6</span>
      </button>
      <button class="size-button" id="7x7">
         <span>7x7</span>
      </button>
      <button class="size-button" id="8x8">
         <span>8x8</span>
      </button>
   </div>
   <div class="game__result result">
      <div class="result__title">
         <p>Game</p>
         <p>Moves</p>
         <p>Time</p>
      </div>
      <div class="result__results">
      </div>
      <div class="result__close-button">
         <div class="close-icon"></div>
      </div>
   </div>
   <div class="game__win">
      <div class="win-game__message"></div>
      <div class="win-game__close-icon">
         <div class="close-icon__win"></div>
      </div>
   </div>
</div>
<audio src="src/audio/chip.mp3" class="audio" autoplay></audio>`;

   body.insertAdjacentHTML('afterbegin', content);
}

initContent();

//!-------------Логика игры

const game = document.getElementById('game');
const container = document.getElementById('game__playground');
const items = Array.from(container.querySelectorAll('.item'));
var countItems = 16;

//*1 Позиционируем элементы по игровому полю
function cutMatrix() {
   items.forEach((item, ind) => {
      if (ind >= countItems - 1) {
         item.style.display = 'none';
      } else {
         item.style.display = 'block';
      }
   });
}
cutMatrix();

let matrix = getMatrix(items.slice(0, countItems).map((el) => Number(el.dataset.matrixId)));

function buildMatrix() {
   let matrix = getMatrix(items.slice(0, countItems).map((el) => Number(el.dataset.matrixId)));
   setPositionItems(matrix);
}
buildMatrix();

//*1.1 Учитываем размер поля, согласно выбранной опции
const threeXthree = document.getElementById('3x3');
const fourXfour = document.getElementById('4x4');
const fiveXfive = document.getElementById('5x5');
const sixXsix = document.getElementById('6x6');
const sevenXseven = document.getElementById('7x7');
const eightXeight = document.getElementById('8x8');
let playSize = document.getElementById('play-size');

threeXthree.addEventListener('click', function () {
   countItems = 9;
   blankNumber = 9;
   movesCount = 0;
   moveInfoChanger();
   minutes = 0;
   seconds = 0;
   matrix = getMatrix(items.slice(0, countItems).map((el) => Number(el.dataset.matrixId)));
   cutMatrix();
   buildMatrix();
   items.forEach(item => {
      item.style.width = '33.33%';
      item.style.height = '33.33%';
   })
   playSize.innerHTML = '<p>Frame size: 3*3</p>';
   shuffle();
})

fourXfour.addEventListener('click', function () {
   countItems = 16;
   blankNumber = 16;
   movesCount = 0;
   moveInfoChanger();
   minutes = 0;
   seconds = 0;
   matrix = getMatrix(items.slice(0, countItems).map((el) => Number(el.dataset.matrixId)));
   cutMatrix()
   buildMatrix()
   items.forEach(item => {
      item.style.width = '25%';
      item.style.height = '25%';
   })
   playSize.innerHTML = '<p>Frame size: 4*4</p>';
   shuffle();
})

fiveXfive.addEventListener('click', function () {
   countItems = 25;
   blankNumber = 25;
   movesCount = 0;
   moveInfoChanger();
   minutes = 0;
   seconds = 0;
   matrix = getMatrix(items.slice(0, countItems).map((el) => Number(el.dataset.matrixId)));
   cutMatrix()
   buildMatrix()
   items.forEach(item => {
      item.style.width = '20%';
      item.style.height = '20%';
   })
   playSize.innerHTML = '<p>Frame size: 5*5</p>';
   shuffle();
})

sixXsix.addEventListener('click', function () {
   countItems = 36;
   blankNumber = 36;
   movesCount = 0;
   moveInfoChanger();
   minutes = 0;
   seconds = 0;
   matrix = getMatrix(items.slice(0, countItems).map((el) => Number(el.dataset.matrixId)));
   cutMatrix()
   buildMatrix()
   items.forEach(item => {
      item.style.width = '16.66%';
      item.style.height = '16.66%';
   })
   playSize.innerHTML = '<p>Frame size: 6*6</p>';
   shuffle();
})

sevenXseven.addEventListener('click', function () {
   countItems = 49;
   blankNumber = 49;
   movesCount = 0;
   moveInfoChanger();
   minutes = 0;
   seconds = 0;
   matrix = getMatrix(items.slice(0, countItems).map((el) => Number(el.dataset.matrixId)));
   cutMatrix()
   buildMatrix()
   items.forEach(item => {
      item.style.width = '14.28%';
      item.style.height = '14.28%';
   })
   playSize.innerHTML = '<p>Frame size: 7*7</p>';
   shuffle();
})

eightXeight.addEventListener('click', function () {
   countItems = 64;
   blankNumber = 64;
   movesCount = 0;
   moveInfoChanger();
   minutes = 0;
   seconds = 0;
   matrix = getMatrix(items.slice(0, countItems).map((el) => Number(el.dataset.matrixId)));
   cutMatrix()
   buildMatrix()
   items.forEach(item => {
      item.style.width = '12.5%';
      item.style.height = '12.5%';
   })
   playSize.innerHTML = '<p>Frame size: 8*8</p>';
   shuffle();
})

//*2 Перемешивание
const maxShuffleCount = 120;
let timer;
const suffledClassName = 'gameShuffle';

document.getElementById('shuffle').addEventListener('click', shuffle);
window.addEventListener('load', shuffle);

//*3 Изменение позиции элемента по клику
let blankNumber = 16;

container.addEventListener('click', (event) => {
   const buttonNode = event.target.closest('button');
   if (!buttonNode) { return }

   const buttonNumber = Number(buttonNode.dataset.matrixId);
   const buttonCoordinates = findCoordinatesByNumber(buttonNumber, matrix);
   const blankCoordinates = findCoordinatesByNumber(blankNumber, matrix);
   const isValid = isValidForSwap(buttonCoordinates, blankCoordinates);

   if (isValid) {
      swap(blankCoordinates, buttonCoordinates, matrix);
      setPositionItems(matrix);
      movesCount++;
      moveInfoChanger();
   }
})

//*4 Счетчик шагов
let movesCount = 0;
let moveInfo = document.querySelector('.info__moves');

function moveInfoChanger() {
   moveInfo.innerHTML = `<p>Moves: ${movesCount}</p>`;
}

//*5 Счетчик времени
let seconds = 0;
let minutes = 0;
let timeInfo = document.querySelector('.info__time');

function gameTimer() {
   seconds++;
   if (minutes <= 9) {
      if (seconds < 10) {
         timeInfo.innerHTML = `<p>Time: 0${minutes}:0${seconds}</p>`;
      } else if (seconds >= 10) {
         timeInfo.innerHTML = `<p>Time: 0${minutes}:${seconds}</p>`;
      }
      if (seconds === 59) {
         minutes++;
         seconds = 0;
      }
   } else {
      if (seconds < 10) {
         timeInfo.innerHTML = `<p>Time: ${minutes}:0${seconds}</p>`;
      } else if (seconds >= 10) {
         timeInfo.innerHTML = `<p>Time: ${minutes}:${seconds}</p>`;
      }
      if (seconds === 59) {
         minutes++;
         seconds = 0;
      }
   }
}
setInterval(gameTimer, 1000);

//*6 Аудио перемещения фишек
let audio = document.querySelector('.audio');

function play() {
   audio.play();
}

const volumeOn = document.getElementById('volumeOn');
const volumeOff = document.getElementById('volumeOff');

volumeOn.addEventListener('click', function () {
   volumeOn.style.display = 'none';
   volumeOff.style.display = 'block';
   audio.volume = 0;
})

volumeOff.addEventListener('click', function () {
   volumeOff.style.display = 'none';
   volumeOn.style.display = 'block';
   audio.volume = 1;
})

//*7 Сохранение результатов 10 игр

const saveButton = document.getElementById('save');
const resultsButton = document.getElementById('results');
const resultCloseButton = document.querySelector('.result__close-button');
const results = document.querySelector('.result__results');
const resultsWindow = document.querySelector('.game__result');
const gameButtons = document.querySelector('.game__buttons');
const resizeButtons = document.querySelector('.game__size-buttons');

let resultsStatistic = results.getElementsByTagName('p');
let gameCount = 0;

saveButton.addEventListener('click', function () {
   gameCount++;
   results.insertAdjacentHTML("beforeend", `<div class="results__game">
   <p>${gameCount}</p>
   <p>${movesCount}</p>
   <p>0${minutes}:${seconds}</p>
</div>`)
})

resultsButton.addEventListener('click', function () {
   resultsWindow.classList.add('active');
   container.classList.add(suffledClassName);
   gameButtons.classList.add(suffledClassName);
   resizeButtons.classList.add(suffledClassName);
})

resultCloseButton.addEventListener('click', function () {
   resultsWindow.classList.remove('active');
   container.classList.remove(suffledClassName);
   gameButtons.classList.remove(suffledClassName);
   resizeButtons.classList.remove(suffledClassName);
})

//*8 Победный поп-ап
const winWindow = document.querySelector('.game__win');
let winMessage = document.querySelector('.win-game__message')
const winCloseButton = document.querySelector('.close-icon__win');

let winMatrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16], [17, 18, 19, 20], [21, 22, 23, 24], [25, 26, 27, 28], [29, 30, 31, 32], [33, 34, 35, 36], [37, 38, 39, 40], [41, 42, 43, 44], [45, 46, 47, 48], [49, 50, 51, 52], [53, 54, 55, 56], [57, 58, 59, 60], [61, 62, 63, 64]];

function check() {
   let counter = 0;
   for (let i = 0; i < matrix.flat().length; i++) {
      if (matrix.flat()[i] === winMatrix.flat().slice(0, countItems)[i]) {
         counter++;
      }
   }
   if (counter === countItems) {
      win();
   }
}

function win() {
   winWindow.classList.add('open');
   winMessage.innerHTML = `<p>Hooray! You solved the puzzle in ${minutes}:${seconds} and ${movesCount} moves!</p>`;
   gameCount++;
   results.insertAdjacentHTML("beforeend", `<div class="results__game">
   <p>${gameCount}</p>
   <p>${movesCount}</p>
   <p>0${minutes}:${seconds}</p>
</div>`)
   container.classList.add(suffledClassName);
   gameButtons.classList.add(suffledClassName);
   resizeButtons.classList.add(suffledClassName);
}

winCloseButton.addEventListener('click', function () {
   winWindow.classList.remove('open');
   container.classList.remove(suffledClassName);
   gameButtons.classList.remove(suffledClassName);
   resizeButtons.classList.remove(suffledClassName);
   shuffle();
})

//*9 Drag'n'Drop

//**Helpers */

function initMatrix(countItems) {
   let arr = [];
   for (let i = 0; i < Math.sqrt(countItems); i++) {
      arr.push([]);
   }
   return arr;
}
initMatrix(countItems)

function getMatrix(arr) {
   const matrix = initMatrix(countItems);
   let y = 0;
   let x = 0;

   for (let i = 0; i < arr.length; i++) {
      if (x >= Math.sqrt(countItems)) {
         y++;
         x = 0;
      }
      matrix[y][x] = arr[i];
      x++;
   }
   return matrix;
}

function setPositionItems(matrix) {
   for (let y = 0; y < matrix.length; y++) {
      for (let x = 0; x < matrix[y].length; x++) {
         const value = matrix[y][x];
         const item = items[value - 1];
         setItemStyles(item, x, y);
      }
   }
}

function setItemStyles(item, x, y) {
   const shift = 100;
   item.style.transform = `translate3D(${x * shift}%, ${y * shift}%, 0)`;
}

let blokedCoords = null;
function randomSwap(matrix) {
   const blankCoordinates = findCoordinatesByNumber(blankNumber, matrix);
   const validCoords = findValidCoords({ blankCoordinates, matrix, blokedCoords, })
   const swapCoords = validCoords[Math.floor(Math.random() * validCoords.length)]

   swap(blankCoordinates, swapCoords, matrix);
   blokedCoords = blankCoordinates;
}

function findValidCoords({ blankCoordinates, matrix, blokedCoords }) {
   const validCoords = [];

   for (let y = 0; y < matrix.length; y++) {
      for (let x = 0; x < matrix[y].length; x++) {
         if (isValidForSwap({ x, y }, blankCoordinates)) {
            if (!blokedCoords || !(blokedCoords.x === x && blokedCoords.y === y)) {
               validCoords.push({ x, y });
            }
         }
      }
   }
   return validCoords;
}

function findCoordinatesByNumber(number, matrix) {
   for (let y = 0; y < matrix.length; y++) {
      for (let x = 0; x < matrix[y].length; x++) {
         if (matrix[y][x] === number) {
            return { x, y };
         }
      }
   }
   return null;
}

function isValidForSwap(coords1, coords2) {
   const diffX = Math.abs(coords1.x - coords2.x);
   const diffY = Math.abs(coords1.y - coords2.y);

   return (diffX === 1 || diffY === 1) && (coords1.x === coords2.x || coords1.y === coords2.y)
}

function swap(coords1, coords2, matrix) {
   const coords1Number = matrix[coords1.y][coords1.x];
   matrix[coords1.y][coords1.x] = matrix[coords2.y][coords2.x];
   matrix[coords2.y][coords2.x] = coords1Number;
   play();
   check();
}

function shuffle() {
   //* 2.1 Реализовать randomSwap
   randomSwap(matrix);
   setPositionItems(matrix);
   //* 2.2 Вызываем randomSwap n раз
   let shuffleCount = 0;
   clearInterval(timer);
   game.classList.add(suffledClassName);

   if (shuffleCount === 0) {
      timer = setInterval(() => {
         randomSwap(matrix);
         setPositionItems(matrix);
         shuffleCount += 1;
         if (shuffleCount >= maxShuffleCount) {
            game.classList.remove(suffledClassName);
            clearInterval(timer);
         }
      }, 0)
   }
   movesCount = 0;;
   moveInfoChanger()
   //* 2.3 Запускаем таймер с нуля
   minutes = 0;
   seconds = 0;
   gameTimer();
}
