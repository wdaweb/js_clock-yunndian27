const hour = document.getElementById('hour')
const minute = document.getElementById('minute')
const second = document.getElementById('second')
const time = document.getElementById('time')
const btn = document.getElementById('btn')
const aliceClock = document.getElementById('aliceClock')
const rabbit = document.getElementById('rabbit')
const txt = document.getElementById('txt')
const footer = document.getElementById('footer')

const update = () => {
    const now = new Date()
    hour.style.transform = `rotate(${now.getHours() * 30 - 90}deg)`
    minute.style.transform = `rotate(${now.getMinutes() * 6 - 90}deg)`
    second.style.transform = `rotate(${now.getSeconds() * 6 - 90}deg)`
    time.innerText = `${now.getFullYear()}. ${now.getMonth() + 1} .${now.getDate()} \n It's ${now.getHours()}:${now.getMinutes()}`
    time.style.textAlign = 'center'
}

function myFunction() {
    aliceClock.style.animationName = "moveItNew"
    btn.innerText = "It's time!!"
    btn.style.background = 'rgb(0,0,0)'
    btn.style.border = '1px solid #000'
    btn.style.color = '#fff'
    btn.style.cursor = 'not-allowed'
    time.style.opacity = '0'
}
const func = () => {
    const now = new Date()
    rabbit.style.animationName = "runTwo"
    txt.innerText = `It's ${now.getHours()}:${now.getMinutes()}. Let's go!`
    txt.style.color = '#800000'
    txt.style.fontSize = '1.3rem'
    txt.style.left = '5%'
}

footer.innerText = 'copyright © Yunn-Dian Wang'
footer.style.color = '#fff'
footer.style.textAlign = 'center'
footer.style.lineHeight = "100%"

setInterval(update, 1000);
update()