//searching in html for canvas elements
var canvas = document.querySelector('canvas')

canvas.height= window.innerHeight
canvas.width = window.innerWidth


var c = canvas.getContext('2d')

c.beginPath()

c.moveTo(500,500)
c.lineTo(100,100)

c.stroke()

// c.fillStyle = 'rgba(0,0,255,0.5)'
// c.fillRect(100,100,100,100)
// c.fillStyle = 'rgba(0,255,0,0.5)'
// c.fillRect(500,100,100,100)
// c.fillStyle = 'rgba(255,0,0,0.5)'
// c.fillRect(500,400,100,100)
// c.fillStyle = 'rgba(255,0,255,0.5)'
// c.fillRect(100,400,100,100)


// console.log(canvas)

// //drawing lines
// c.beginPath()
// c.moveTo(600,100)
// c.lineTo(100,100)
// c.moveTo(100,500)
// c.lineTo(100,100)
// c.moveTo(600,100)
// c.lineTo(600,500)
// c.moveTo(100,500)
// c.lineTo(600,500)
// c.strokeStyle = "black"
// c.stroke()

// //arc

// for(var i = 0; i < 5; i++)
// {5
//     var x = Math.random() * window.innerWidth
//     var y = Math.random() * window.innerHeight

//     c.beginPath()
//     // arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void
//     c.arc(x,y, 30, 0, Math.PI * 2, false)
//     c.strokeStyle = "blue"
//     c.stroke()
// }


// var x = Math.random() *  innerWidth
// var y = Math.random() *  innerHeight

// var dx = 4
// var dy = 4
// var radius = 30

// function animate()
// {
//     requestAnimationFrame(animate)
//     c.clearRect(0,0, innerWidth, innerHeight)
//     c.beginPath()
//     c.arc(x,y, radius, 0, Math.PI * 2, false)
//     c.strokeStyle = "blue"
//     c.stroke()

//     if( x + radius > innerWidth || x - radius < 0)
//     {
//         dx = -dx
//     }
    
//     x += dx

//     if( y + radius > innerHeight || y - radius < 0)
//     {
//         dy = -dy
//     }

//     y += dy
// }
// animate()

