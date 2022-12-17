let div = document.getElementById('obj')

let state = div.classList.value

let refTime

let waitScene 
 
function onClick(color, text, step = '' ) {
        div.className = color
        div.innerText = text
        state = step || color
}

let switchToYellow = () => {
    onClick('yellow','รอให้เป็นสีเขียว แล้วคลิกอีกครั้ง')
    let randomTime = _.random(2000,5000)
    waitScene = setTimeout(switchToGreen,randomTime)
    
}

function switchToRed (isError = false)  {
let text = 'คลิก เพื่อเตรียมตัว'
    if (isError) {
        clearTimeout(waitScene)
        text += '(กรุณารอเป็นสีเขียวก่อน)'
    }
    onClick('red', text)
}

let switchToGreen = () => {
    onClick('green', 'คลิกเลย!')
    refTime = new Date()
}

let switchResult = () => {
    let hitTime = new Date()
    let defTime = +hitTime - +refTime
    let text = ` คุณทำเวลาได้ = ${defTime} มิลลิวินาที`
    onClick('green', text, 'done')
}

div.addEventListener('click', () =>{
    if (state === 'red'){
        switchToYellow()
    } else if (state === 'yellow') {
        switchToRed(true)
    } else if (state === 'green') {
        switchResult()
    } else if (state === 'done') {
        switchToRed()
    }
})
