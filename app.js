canvas = document.querySelector("canvas")
canvas.width = innerWidth
canvas.height = innerHeight
ctx = canvas.getContext("2d", {alpha: false})

let centerX = canvas.width / 2
let centerY = canvas.height / 2


function animate() {
	requestAnimationFrame(animate)
	// Clear Canvas
	ctx.fillStyle = "#000000"
	ctx.fillRect(0, 0, canvas.width, canvas.height)

	// draw a rect
	ctx.fillStyle = "red"
	ctx.fillRect(centerX - 25, centerY - 25, 50, 50)
}
// Calling the animate function
animate()
// Misc. functions
function randomBetween(min, max){
return (Math.random() * (max - min) + min);
}