const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;
const boxSize = 20;
const gameSpeed = 800;

let snake = [ { x: 9 * boxSize, y: 10 * boxSize } ];
let direction = "DOWN";
let score = 0;

const scoreDisplay = document.getElementById("score");

let game;

function drawBox(x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, boxSize, boxSize);
};

function spawnFood() {
  return {
    x: Math.floor(Math.random() * (width / boxSize)) * boxSize,
    y: Math.floor(Math.random() * (height / boxSize)) * boxSize,
  };
}
let food = spawnFood();

document.addEventListener("keydown", changeDirection);

function changeDirection(e) {
  if (e.key === "ArrowLeft" && direction !== "RIGHT") {
    direction = "LEFT";
  } else if (e.key === "ArrowUp" && direction !== "DOWN") {
    direction = "UP";
  } else if (e.key === "ArrowRight" && direction !== "LEFT") {
    direction = "RIGHT";
  } else if (e.key === "ArrowDown" && direction !== "UP") {
    direction = "DOWN"

function collisionWithBody(head, body) {
  for (let i = 0; i < body.length; i++) {
    if (head.x === body[i].x && head.y === body[i].y) {
      return true;
    }
  }
  return false;
}

function drawGame() {
  ctx.clearRect(0, 0, width, height);
  drawBox(food.x, food.y, "red");

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;


  if (direction === "LEFT")  snakeX -= boxSize;
  if (direction === "RIGHT") snakeX += boxSize;
  if (direction === "UP")    snakeY -= boxSize;
  if (direction === "DOWN")  snakeY += boxSize;
  if (snakeX === food.x && snakeY === food.y) {
 
    score++;
    scoreDisplay.textContent = `Score : ${score}`;

    food = spawnFood();
  } else {

    snake.pop();
  }

  let newHead = { x: snakeX, y: snakeY };


  if (
    snakeX < 0 ||
    snakeX >= width ||
    snakeY < 0 ||
    snakeY >= height
  ) {

    clearInterval(game);
    alert(`Game Over ! Votre score est de : ${score}`);
    return;
  }

  if (collisionWithBody(newHead, snake)) {

    clearInterval(game);
    alert(`Game Over ! Votre score est de : ${score}`);
    return;
  }

  snake.unshift(newHead);


  for (let i = 0; i < snake.length; i++) {

    drawBox(snake[i].x, snake[i].y, i === 0 ? "lime" : "green");
  }
}

game = setInterval(drawGame, gameSpeed);
};
}
