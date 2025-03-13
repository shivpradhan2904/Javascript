// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget,
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode

// document.querySelector('#river').onclick=function(){
//     alert('river')
// }
const inp = document.querySelector('input')
const sub = document.querySelector('button')
 
// document.querySelector('#images').addEventListener('click',function(e){
//     console.log("images")
// },false)//true means capturing phase and false means bubble phase

// document.querySelector('#river').addEventListener('click',function(e){
//     console.log("river")
//     e.stopPropagation()//in /this case after river clicked message it didn't goto the top approach
// },false)//in capturing phase it flows from top to bottom approach of a dom tree same bottom to top approach in bubble

// document.getElementById('google').addEventListener('click',(e)=>(e.preventDefault()))

// document.getElementById("images").addEventListener("click", function (e) {
//   //   console.log(e.target.parentNode);//suppose i click a image so its parent node was li
//   console.log(e.target.tagName); //if i click the image then it shows me img tag
//   if (e.target.tagName === "IMG") {
//     console.log(e.target.id)
//     let removeit = e.target.parentNode;
//     //   e.target.parentNode.remove()//it remove the li means the parent node
//     removeit.parentNode.removeChild(removeit); //same approach
//   }
// });

sub.addEventListener('click',function(e){
    console.log(e.target.value)
    console.log(inp.value);
})

document.getElementById('owl').addEventListener('click',function(e){
    // console.log(e.type)//click type
    // console.log(e.currentTarget)//returns entire image tag or same for target also
    // console.log(e.timeStamp)//gives a random float value

    //these are used for keydown or keyboard event
    // console.log(e.altKey)
    // console.log(e.ctrlKey)
    // console.log(e.shiftKey)
})