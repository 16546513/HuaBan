const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

let prevX, prevY

setCanvasSize()
canvas.addEventListener('mousedown', down)
canvas.addEventListener('mouseup', up)

function up() {
  ctx.closePath()
  canvas.removeEventListener('mousemove', move)
}
function down({ offsetX: x, offsetY: y }) {
  prevX = x
  prevY = y
  ctx.beginPath()
  ctx.moveTo(x, y)
  canvas.addEventListener('mousemove', move)
}
function move({ offsetX: x, offsetY: y }) {
  prevX = x
  prevY = y
  ctx.lineTo(x, y)
  ctx.stroke()
  ctx.moveTo(x, y)
}
function setCanvasSize() {
  const app = document.querySelector('#app')
  let { width, height } = app.getBoundingClientRect()
  canvas.width = width
  canvas.height = height
}

document.querySelector('.color.black').addEventListener('click', () => {
  ctx.strokeStyle = 'black'
})
document.querySelector('.color.green').addEventListener('click', () => {
  ctx.strokeStyle = 'green'
})
document.querySelector('.color.red').addEventListener('click', () => {
  ctx.strokeStyle = 'red'
})
document.querySelector('.size.small').addEventListener('click', () => {
  ctx.lineWidth = 1
})
document.querySelector('.size.normal').addEventListener('click', () => {
  ctx.lineWidth = 2
})
document.querySelector('.size.big').addEventListener('click', () => {
  ctx.lineWidth = 3
})
document.querySelector('.reset').addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
})
document.querySelector('.save').addEventListener('click', () => {
  let url = canvas.toDataURL('image/jpg')
  let a = document.createElement('a')
  document.body.appendChild(a)
  a.href = url
  a.download = '图画'
  a.click()
  document.body.removeChild(a)
})
