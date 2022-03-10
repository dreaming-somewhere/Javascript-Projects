const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', (event) => {
    currentActive++

    if(currentActive > circles.length){
        currentActive = circles.length
    }
    update()
    // console.log(currentActive)
})

prev.addEventListener('click', (event) => {
    currentActive--

    if(currentActive < 1){
        currentActive = 1
    }

    update()
    // console.log(currentActive)
})

function update() {
    circles.forEach((circle, i) => {
        if (i < currentActive) {
            circle.classList.add('active')
        }
        else{
            circle.classList.remove('active')
        }
    })
    const actives = document.querySelectorAll('.active')
    // console.log(actives.length, circles.length)
    //we're extracting the percentage of the width of the progress
    // console.log((actives.length / circles.length) * 100)
    // when we divide it we get 0.25 .50 etc multiplying it by 100 we could turn it into percentage
    progress.style.width = ((actives.length -1) / (circles.length - 1)) * 100 + '%'
    if(currentActive === 1){
        prev.disabled = true
    } else if(currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}