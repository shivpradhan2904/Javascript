const clock=document.querySelector("#time")


//it is a method which we have to just give a time then it runs in that time basically as a loop
setInterval(() => {
    const time = new Date()
    // const finaltime=time.toLocaleTimeString()
    // console.log(finaltime)
    clock.innerHTML=time.toLocaleString()
}, 1000);//1000 means 1sec
const input=document.querySelector("input")
input.addEventListener('input',function(e){
    const value = e.target.value
    console.log(value)
})