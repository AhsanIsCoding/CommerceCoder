let prevDev = document.querySelector('#frontEnd').innerHTML
let firstName = document.getElementById('frontEnd')
firstName.addEventListener('mouseout',function(){
    document.querySelector('#frontEnd').innerHTML = prevDev;
    console.log("frontend")
})
firstName.addEventListener('mouseover',function(){
    document.querySelector('#frontEnd').innerHTML = "Soon to be Full Stack."
    console.log('soon to be full stack')
})